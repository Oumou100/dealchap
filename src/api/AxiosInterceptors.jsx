import { logoutSuccess } from '../redux/reuducer/authSlice';
import { store } from '@/redux/store';
import { t } from '@/utils';
import axios from 'axios';
import Swal from 'sweetalert2';

// Validate environment variables
const baseURL = process.env.NEXT_PUBLIC_API_URL && process.env.NEXT_PUBLIC_END_POINT
  ? `${process.env.NEXT_PUBLIC_API_URL}${process.env.NEXT_PUBLIC_END_POINT}`
  : null;

if (!baseURL) {
  throw new Error("API URL or Endpoint is not defined in environment variables.");
}

// Initialize Axios instance
const Api = axios.create({
  baseURL,
  withCredentials: true, // Add this line to include credentials in requests
  headers: {
    'Content-Type': 'application/json', // Default Content-Type
  },
});

// Track toast visibility for unauthorized errors
let isUnauthorizedToastShown = false;
let unauthorizedToastTimer;

// Request interceptor: Injects token and language headers dynamically
Api.interceptors.request.use(function (config) {
  let token = undefined;
  let langCode = undefined;

  if (typeof window !== 'undefined') {
    const state = store.getState();
    token = state?.UserSignup?.data?.token;
    langCode = state?.CurrentLanguage?.language?.code;
  }

  if (token) config.headers.authorization = `Bearer ${token}`;
  if (langCode) config.headers['Content-Language'] = langCode;

  // Dynamically set Content-Type
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  } else {
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
});

// Response interceptor: Handles unauthorized errors (401)
Api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      store.dispatch(logoutSuccess());

      if (!isUnauthorizedToastShown) {
        isUnauthorizedToastShown = true;

        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: t("userDeactivatedByAdmin", "Your account has been deactivated by an admin."),
          allowOutsideClick: false,
          customClass: {
            confirmButton: 'Swal-confirm-buttons',
          },
        });

        clearTimeout(unauthorizedToastTimer);
        unauthorizedToastTimer = setTimeout(() => {
          isUnauthorizedToastShown = false;
        }, 3000); // 3 seconds delay
      }
    }
    return Promise.reject(error);
  }
);

export default Api;
