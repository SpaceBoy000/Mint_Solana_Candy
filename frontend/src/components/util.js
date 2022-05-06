import { keyframes } from "@emotion/react";

export const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export function isMobile() {
    if (window) {
        console.log("ismobile: true");
        return window.matchMedia(`(max-width: 1024px)`).matches;
    }
    console.log("ismobile: false");
    return false;
}
  
