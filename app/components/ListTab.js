import React from 'react';
import Svg, {G, Path, Rect, Defs, ClipPath} from 'react-native-svg';

const listTab = [
  {
    status: 'Ficha personal',
    inactive: () => {
      return (
        <Svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <G clip-path="url(#clip0)">
            <Path
              d="M16.9585 17.4291H2.19469C0.984023 17.4291 0 16.4529 0 15.2519V5.35606C0 4.15508 0.984023 3.17908 2.19469 3.17908H6.983C7.31339 3.17908 7.58153 3.44508 7.58153 3.77283C7.58153 4.10058 7.31339 4.36658 6.983 4.36658H2.19469C1.64481 4.36658 1.19708 4.81058 1.19708 5.35606V15.2519C1.19708 15.7974 1.64481 16.2416 2.19469 16.2416H16.9585C17.5084 16.2416 17.9561 15.7974 17.9561 15.2519V5.35606C17.9561 4.81058 17.5084 4.36658 16.9585 4.36658H12.1702C11.8398 4.36658 11.5717 4.10058 11.5717 3.77283C11.5717 3.44508 11.8398 3.17908 12.1702 3.17908H16.9585C18.1692 3.17908 19.1532 4.15508 19.1532 5.35606V15.2519C19.1532 16.4529 18.1692 17.4291 16.9585 17.4291Z"
              fill="#5B74FB"
            />
            <Path
              d="M11.3722 5.94982H7.781C7.01091 5.94982 6.38446 5.32838 6.38446 4.56445V2.98107C6.38446 2.21714 7.01091 1.5957 7.781 1.5957H11.3722C12.1423 1.5957 12.7688 2.21714 12.7688 2.98107V4.56445C12.7688 5.32838 12.1423 5.94982 11.3722 5.94982ZM7.781 2.7832C7.67082 2.7832 7.58154 2.87192 7.58154 2.98107V4.56445C7.58154 4.67375 7.67082 4.76232 7.781 4.76232H11.3722C11.4824 4.76232 11.5717 4.67375 11.5717 4.56445V2.98107C11.5717 2.87192 11.4824 2.7832 11.3722 2.7832H7.781Z"
              fill="#5B74FB"
            />
            <Path
              d="M5.98541 11.0957C4.88565 11.0957 3.99033 10.2074 3.99033 9.11659C3.99033 8.02563 4.88565 7.13733 5.98541 7.13733C7.08516 7.13733 7.98048 8.02563 7.98048 9.11659C7.98048 10.2074 7.08516 11.0957 5.98541 11.0957ZM5.98541 8.32483C5.54571 8.32483 5.1874 8.68027 5.1874 9.11659C5.1874 9.55277 5.54571 9.90821 5.98541 9.90821C6.4251 9.90821 6.78341 9.55277 6.78341 9.11659C6.78341 8.68027 6.4251 8.32483 5.98541 8.32483Z"
              fill="#5B74FB"
            />
            <Path
              d="M8.97809 15.0541C8.64769 15.0541 8.37955 14.7881 8.37955 14.4603V14.0645C8.37955 13.519 7.93181 13.0748 7.38194 13.0748H4.58885C4.03898 13.0748 3.59124 13.519 3.59124 14.0645V14.4603C3.59124 14.7881 3.3231 15.0541 2.9927 15.0541C2.66231 15.0541 2.39417 14.7881 2.39417 14.4603V14.0645C2.39417 12.8635 3.37819 11.8873 4.58885 11.8873H7.38194C8.5926 11.8873 9.57662 12.8635 9.57662 14.0645V14.4603C9.57662 14.7881 9.30848 15.0541 8.97809 15.0541Z"
              fill="#5B74FB"
            />
            <Path
              d="M16.1606 8.7207H11.7713C11.4409 8.7207 11.1728 8.4547 11.1728 8.12695C11.1728 7.7992 11.4409 7.5332 11.7713 7.5332H16.1606C16.4909 7.5332 16.7591 7.7992 16.7591 8.12695C16.7591 8.4547 16.4909 8.7207 16.1606 8.7207Z"
              fill="#5B74FB"
            />
            <Path
              d="M16.1606 11.8873H11.7713C11.4409 11.8873 11.1728 11.6213 11.1728 11.2936C11.1728 10.9658 11.4409 10.6998 11.7713 10.6998H16.1606C16.4909 10.6998 16.7591 10.9658 16.7591 11.2936C16.7591 11.6213 16.4909 11.8873 16.1606 11.8873Z"
              fill="#5B74FB"
            />
            <Path
              d="M16.1606 15.0541H11.7713C11.4409 15.0541 11.1728 14.7881 11.1728 14.4603C11.1728 14.1326 11.4409 13.8666 11.7713 13.8666H16.1606C16.4909 13.8666 16.7591 14.1326 16.7591 14.4603C16.7591 14.7881 16.4909 15.0541 16.1606 15.0541Z"
              fill="#5B74FB"
            />
          </G>
          <Defs>
            <ClipPath id="clip0">
              <Rect width="19.1532" height="19" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    },
    active: () => {
      return (
        <Svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <G clip-path="url(#clip0)">
            <Path
              d="M16.9585 17.4291H2.19469C0.984023 17.4291 0 16.4529 0 15.2519V5.35606C0 4.15508 0.984023 3.17908 2.19469 3.17908H6.983C7.31339 3.17908 7.58153 3.44508 7.58153 3.77283C7.58153 4.10058 7.31339 4.36658 6.983 4.36658H2.19469C1.64481 4.36658 1.19708 4.81058 1.19708 5.35606V15.2519C1.19708 15.7974 1.64481 16.2416 2.19469 16.2416H16.9585C17.5084 16.2416 17.9561 15.7974 17.9561 15.2519V5.35606C17.9561 4.81058 17.5084 4.36658 16.9585 4.36658H12.1702C11.8398 4.36658 11.5717 4.10058 11.5717 3.77283C11.5717 3.44508 11.8398 3.17908 12.1702 3.17908H16.9585C18.1692 3.17908 19.1532 4.15508 19.1532 5.35606V15.2519C19.1532 16.4529 18.1692 17.4291 16.9585 17.4291Z"
              fill="white"
            />
            <Path
              d="M11.3722 5.94982H7.781C7.01091 5.94982 6.38446 5.32838 6.38446 4.56445V2.98107C6.38446 2.21714 7.01091 1.5957 7.781 1.5957H11.3722C12.1423 1.5957 12.7688 2.21714 12.7688 2.98107V4.56445C12.7688 5.32838 12.1423 5.94982 11.3722 5.94982ZM7.781 2.7832C7.67082 2.7832 7.58154 2.87192 7.58154 2.98107V4.56445C7.58154 4.67375 7.67082 4.76232 7.781 4.76232H11.3722C11.4824 4.76232 11.5717 4.67375 11.5717 4.56445V2.98107C11.5717 2.87192 11.4824 2.7832 11.3722 2.7832H7.781Z"
              fill="white"
            />
            <Path
              d="M5.98537 11.0957C4.88562 11.0957 3.9903 10.2074 3.9903 9.11659C3.9903 8.02563 4.88562 7.13733 5.98537 7.13733C7.08513 7.13733 7.98045 8.02563 7.98045 9.11659C7.98045 10.2074 7.08513 11.0957 5.98537 11.0957ZM5.98537 8.32483C5.54568 8.32483 5.18737 8.68027 5.18737 9.11659C5.18737 9.55277 5.54568 9.90821 5.98537 9.90821C6.42507 9.90821 6.78338 9.55277 6.78338 9.11659C6.78338 8.68027 6.42507 8.32483 5.98537 8.32483Z"
              fill="white"
            />
            <Path
              d="M8.97809 15.0541C8.64769 15.0541 8.37955 14.7881 8.37955 14.4603V14.0645C8.37955 13.519 7.93181 13.0748 7.38194 13.0748H4.58885C4.03898 13.0748 3.59124 13.519 3.59124 14.0645V14.4603C3.59124 14.7881 3.3231 15.0541 2.9927 15.0541C2.66231 15.0541 2.39417 14.7881 2.39417 14.4603V14.0645C2.39417 12.8635 3.37819 11.8873 4.58885 11.8873H7.38194C8.5926 11.8873 9.57662 12.8635 9.57662 14.0645V14.4603C9.57662 14.7881 9.30848 15.0541 8.97809 15.0541Z"
              fill="white"
            />
            <Path
              d="M16.1606 8.7207H11.7713C11.4409 8.7207 11.1728 8.4547 11.1728 8.12695C11.1728 7.7992 11.4409 7.5332 11.7713 7.5332H16.1606C16.4909 7.5332 16.7591 7.7992 16.7591 8.12695C16.7591 8.4547 16.4909 8.7207 16.1606 8.7207Z"
              fill="white"
            />
            <Path
              d="M16.1606 11.8873H11.7713C11.4409 11.8873 11.1728 11.6213 11.1728 11.2936C11.1728 10.9658 11.4409 10.6998 11.7713 10.6998H16.1606C16.4909 10.6998 16.7591 10.9658 16.7591 11.2936C16.7591 11.6213 16.4909 11.8873 16.1606 11.8873Z"
              fill="white"
            />
            <Path
              d="M16.1606 15.0541H11.7713C11.4409 15.0541 11.1728 14.7881 11.1728 14.4603C11.1728 14.1326 11.4409 13.8666 11.7713 13.8666H16.1606C16.4909 13.8666 16.7591 14.1326 16.7591 14.4603C16.7591 14.7881 16.4909 15.0541 16.1606 15.0541Z"
              fill="white"
            />
          </G>
          <Defs>
            <ClipPath id="clip0">
              <Rect width="19.1532" height="19" fill="white" />
            </ClipPath>
          </Defs>
        </Svg>
      );
    },
  },
  {
    status: 'Recomendaciones',
    inactive: () => {
      return (
        <Svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M15.6797 0.5625H2.32031C1.04087 0.5625 0 1.60337 0 2.88281V15.1172C0 16.3966 1.04087 17.4375 2.32031 17.4375H14.0625C14.7568 17.4375 15.4096 17.1671 15.9006 16.6761L17.2386 15.3381C17.7296 14.8472 18 14.1943 18 13.5V2.88281C18 1.60337 16.9591 0.5625 15.6797 0.5625ZM2.32031 1.6875H15.6797C16.3388 1.6875 16.875 2.2237 16.875 2.88281V4.5H1.125V2.88281C1.125 2.2237 1.6612 1.6875 2.32031 1.6875ZM1.125 15.1172V5.625H16.875V12.9375H15.1172C14.2255 12.9375 13.5 13.663 13.5 14.5547V16.3125H2.32031C1.6612 16.3125 1.125 15.7763 1.125 15.1172ZM16.4431 14.5426L15.1051 15.8806C14.9653 16.0204 14.8024 16.1287 14.625 16.2019V14.5547C14.625 14.2833 14.8458 14.0625 15.1172 14.0625H16.7644C16.6912 14.2399 16.5829 14.4028 16.4431 14.5426Z"
            fill="#5B74FB"
          />
          <Path
            d="M14.0625 7.875C14.0625 7.56436 13.8107 7.3125 13.5 7.3125H4.5C4.18932 7.3125 3.9375 7.56436 3.9375 7.875C3.9375 8.18564 4.18932 8.4375 4.5 8.4375H13.5C13.8107 8.4375 14.0625 8.18564 14.0625 7.875Z"
            fill="#5B74FB"
          />
          <Path
            d="M12.375 10.125H5.625C5.31432 10.125 5.0625 10.3769 5.0625 10.6875C5.0625 10.9981 5.31432 11.25 5.625 11.25H12.375C12.6857 11.25 12.9375 10.9981 12.9375 10.6875C12.9375 10.3769 12.6857 10.125 12.375 10.125Z"
            fill="#5B74FB"
          />
        </Svg>
      );
    },
    active: () => {
      return (
        <Svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M15.6797 0.5625H2.32031C1.04087 0.5625 0 1.60337 0 2.88281V15.1172C0 16.3966 1.04087 17.4375 2.32031 17.4375H14.0625C14.7568 17.4375 15.4096 17.1671 15.9006 16.6761L17.2386 15.3381C17.7296 14.8472 18 14.1943 18 13.5V2.88281C18 1.60337 16.9591 0.5625 15.6797 0.5625ZM2.32031 1.6875H15.6797C16.3388 1.6875 16.875 2.2237 16.875 2.88281V4.5H1.125V2.88281C1.125 2.2237 1.6612 1.6875 2.32031 1.6875ZM1.125 15.1172V5.625H16.875V12.9375H15.1172C14.2255 12.9375 13.5 13.663 13.5 14.5547V16.3125H2.32031C1.6612 16.3125 1.125 15.7763 1.125 15.1172ZM16.4431 14.5426L15.1051 15.8806C14.9653 16.0204 14.8024 16.1287 14.625 16.2019V14.5547C14.625 14.2833 14.8458 14.0625 15.1172 14.0625H16.7644C16.6912 14.2399 16.5829 14.4028 16.4431 14.5426Z"
            fill="white"
          />
          <Path
            d="M14.0625 7.875C14.0625 7.56436 13.8107 7.3125 13.5 7.3125H4.5C4.18932 7.3125 3.9375 7.56436 3.9375 7.875C3.9375 8.18564 4.18932 8.4375 4.5 8.4375H13.5C13.8107 8.4375 14.0625 8.18564 14.0625 7.875Z"
            fill="white"
          />
          <Path
            d="M12.375 10.125H5.625C5.31432 10.125 5.0625 10.3769 5.0625 10.6875C5.0625 10.9981 5.31432 11.25 5.625 11.25H12.375C12.6857 11.25 12.9375 10.9981 12.9375 10.6875C12.9375 10.3769 12.6857 10.125 12.375 10.125Z"
            fill="white"
          />
        </Svg>
      );
    },
  },
  {
    status: 'Documentos',
    inactive: () => {
      return (
        <Svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <G clip-path="url(#clip0)">
            <Path
              d="M19.6639 3.72394H12.7858C12.7764 3.72394 12.768 3.71891 12.764 3.71082L12.0546 2.27191C11.8544 1.86466 11.4318 1.60159 10.9777 1.60159H6.81962C6.15769 1.60159 5.61921 2.14023 5.61921 2.80231V3.97922H4.44184C3.78007 3.97922 3.24158 4.51771 3.24158 5.17963V6.35655H2.06467C1.40274 6.35655 0.864258 6.89503 0.864258 7.55696V17.2707C0.864258 17.9326 1.40274 18.4711 2.06467 18.4711H14.9091C15.571 18.4711 16.1095 17.9326 16.1095 17.2707V16.0937H17.2866C17.9485 16.0937 18.487 15.5552 18.487 14.8934V13.7165H19.6639C20.3258 13.7165 20.8643 13.178 20.8643 12.5161V4.92466C20.8643 4.26258 20.3258 3.72394 19.6639 3.72394ZM14.9091 17.2947H2.06467C2.05155 17.2947 2.04071 17.284 2.04071 17.2707V7.55696C2.04071 7.54368 2.05155 7.533 2.06467 7.533H6.223C6.22697 7.533 6.23078 7.53437 6.23414 7.53621C6.2346 7.53651 6.23521 7.53636 6.23567 7.53666C6.23704 7.53758 6.2378 7.53926 6.23902 7.54033C6.24101 7.54231 6.2433 7.54399 6.24452 7.54643L6.95421 8.98579C7.15791 9.3987 7.57051 9.65535 8.03087 9.65535H14.9091C14.9123 9.65535 14.9155 9.65596 14.9184 9.65718C14.9269 9.66084 14.9329 9.66939 14.9329 9.67931C14.9329 13.8279 14.933 17.2329 14.933 17.2707C14.933 17.284 14.9224 17.2947 14.9091 17.2947ZM17.3105 14.8934C17.3105 14.9065 17.2998 14.9172 17.2867 14.9172H16.1095V9.67931C16.1095 9.01723 15.5709 8.47874 14.9089 8.47874H8.03087C8.02202 8.47874 8.01347 8.4734 8.00951 8.46531L7.29966 7.02595C7.09611 6.6135 6.68367 6.35655 6.22316 6.35655H4.41804V5.17963C4.41804 5.16636 4.42872 5.15568 4.44184 5.15568H8.60033C8.60948 5.15568 8.61772 5.16071 8.62184 5.16926L9.33168 6.60862C9.53554 7.02153 9.94799 7.27803 10.4082 7.27803H17.2867C17.2998 7.27803 17.3105 7.28871 17.3105 7.30198V14.8934ZM19.6878 12.5161C19.6878 12.5293 19.6772 12.54 19.6639 12.54H18.487V7.30198C18.487 6.64005 17.9486 6.10157 17.2867 6.10157H10.4082C10.3992 6.10157 10.3908 6.09623 10.3867 6.08799L9.67699 4.64908C9.47359 4.23588 9.06099 3.97922 8.60033 3.97922H6.79567V2.80231C6.79567 2.78888 6.80635 2.77805 6.81947 2.77805H10.9775C10.9865 2.77805 10.9949 2.78308 10.999 2.79148L11.7089 4.2313C11.9126 4.6439 12.3252 4.9004 12.7858 4.9004H19.6639C19.677 4.9004 19.6877 4.91123 19.6877 4.92481V12.5161H19.6878Z"
              fill="#5B74FB"
            />
            <Path
              d="M11.3174 14.7369C10.9926 14.7369 10.7292 14.985 10.7292 15.291V15.6114C10.7292 15.9174 10.9926 16.1655 11.3174 16.1655C11.6423 16.1655 11.9056 15.9174 11.9056 15.6114V15.291C11.9056 14.985 11.6423 14.7369 11.3174 14.7369Z"
              fill="#5B74FB"
            />
            <Path
              d="M13.0317 14.7369C12.7068 14.7369 12.4434 14.985 12.4434 15.291V15.6114C12.4434 15.9174 12.7068 16.1655 13.0317 16.1655C13.3565 16.1655 13.6199 15.9174 13.6199 15.6114V15.291C13.6199 14.985 13.3565 14.7369 13.0317 14.7369Z"
              fill="#5B74FB"
            />
          </G>
          <Defs>
            <ClipPath id="clip0">
              <Rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.90332)"
              />
            </ClipPath>
          </Defs>
        </Svg>
      );
    },
    active: () => {
      return (
        <Svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <G clip-path="url(#clip0)">
            <Path
              d="M19.6639 3.72394H12.7858C12.7764 3.72394 12.768 3.71891 12.764 3.71082L12.0546 2.27191C11.8544 1.86466 11.4317 1.60159 10.9776 1.60159H6.81961C6.15769 1.60159 5.6192 2.14023 5.6192 2.80231V3.97922H4.44183C3.78006 3.97922 3.24157 4.51771 3.24157 5.17963V6.35655H2.06466C1.40273 6.35655 0.86425 6.89503 0.86425 7.55696V17.2707C0.86425 17.9326 1.40273 18.4711 2.06466 18.4711H14.9091C15.571 18.4711 16.1095 17.9326 16.1095 17.2707V16.0937H17.2866C17.9485 16.0937 18.487 15.5552 18.487 14.8934V13.7165H19.6639C20.3258 13.7165 20.8643 13.178 20.8643 12.5161V4.92466C20.8643 4.26258 20.3258 3.72394 19.6639 3.72394ZM14.9091 17.2947H2.06466C2.05154 17.2947 2.04071 17.284 2.04071 17.2707V7.55696C2.04071 7.54368 2.05154 7.533 2.06466 7.533H6.223C6.22696 7.533 6.23078 7.53437 6.23413 7.53621C6.23459 7.53651 6.2352 7.53636 6.23566 7.53666C6.23703 7.53758 6.2378 7.53926 6.23902 7.54033C6.241 7.54231 6.24329 7.54399 6.24451 7.54643L6.9542 8.98579C7.1579 9.3987 7.5705 9.65535 8.03086 9.65535H14.9091C14.9123 9.65535 14.9155 9.65596 14.9184 9.65718C14.9269 9.66084 14.9329 9.66939 14.9329 9.67931C14.9329 13.8279 14.933 17.2329 14.933 17.2707C14.933 17.284 14.9224 17.2947 14.9091 17.2947ZM17.3105 14.8934C17.3105 14.9065 17.2998 14.9172 17.2867 14.9172H16.1095V9.67931C16.1095 9.01723 15.5709 8.47874 14.9089 8.47874H8.03086C8.02201 8.47874 8.01346 8.4734 8.0095 8.46531L7.29966 7.02595C7.0961 6.6135 6.68366 6.35655 6.22315 6.35655H4.41803V5.17963C4.41803 5.16636 4.42871 5.15568 4.44183 5.15568H8.60032C8.60947 5.15568 8.61771 5.16071 8.62183 5.16926L9.33167 6.60862C9.53553 7.02153 9.94798 7.27803 10.4082 7.27803H17.2867C17.2998 7.27803 17.3105 7.28871 17.3105 7.30198V14.8934ZM19.6878 12.5161C19.6878 12.5293 19.6772 12.54 19.6639 12.54H18.487V7.30198C18.487 6.64005 17.9486 6.10157 17.2867 6.10157H10.4082C10.3992 6.10157 10.3908 6.09623 10.3867 6.08799L9.67698 4.64908C9.47358 4.23588 9.06098 3.97922 8.60032 3.97922H6.79566V2.80231C6.79566 2.78888 6.80634 2.77805 6.81946 2.77805H10.9775C10.9865 2.77805 10.9949 2.78308 10.999 2.79148L11.7088 4.2313C11.9126 4.6439 12.3251 4.9004 12.7858 4.9004H19.6639C19.677 4.9004 19.6877 4.91123 19.6877 4.92481V12.5161H19.6878Z"
              fill="white"
            />
            <Path
              d="M11.3174 14.7369C10.9926 14.7369 10.7292 14.985 10.7292 15.291V15.6114C10.7292 15.9174 10.9926 16.1655 11.3174 16.1655C11.6423 16.1655 11.9056 15.9174 11.9056 15.6114V15.291C11.9056 14.985 11.6423 14.7369 11.3174 14.7369Z"
              fill="white"
            />
            <Path
              d="M13.0316 14.7369C12.7068 14.7369 12.4434 14.985 12.4434 15.291V15.6114C12.4434 15.9174 12.7068 16.1655 13.0316 16.1655C13.3565 16.1655 13.6199 15.9174 13.6199 15.6114V15.291C13.6199 14.985 13.3565 14.7369 13.0316 14.7369Z"
              fill="white"
            />
          </G>
          <Defs>
            <ClipPath id="clip0">
              <Rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.90332)"
              />
            </ClipPath>
          </Defs>
        </Svg>
      );
    },
  },
  {
    status: 'Historial',
    inactive: () => {
      return (
        <Svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M13.4444 2.60001H2.55556C1.69645 2.60001 1 3.31635 1 4.20001V15.4C1 16.2837 1.69645 17 2.55556 17H13.4444C14.3036 17 15 16.2837 15 15.4V4.20001C15 3.31635 14.3036 2.60001 13.4444 2.60001Z"
            stroke="#5B74FB"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M11.1111 1V4.2"
            stroke="#5B74FB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M4.88889 1V4.2"
            stroke="#5B74FB"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M1 7.39999H15"
            stroke="#5B74FB"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    },
    active: () => {
      return (
        <Svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <Path
            d="M13.4444 2.60001H2.55556C1.69645 2.60001 1 3.31635 1 4.20001V15.4C1 16.2837 1.69645 17 2.55556 17H13.4444C14.3036 17 15 16.2837 15 15.4V4.20001C15 3.31635 14.3036 2.60001 13.4444 2.60001Z"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M11.1111 1V4.2"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M4.88889 1V4.2"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <Path
            d="M1 7.39999H15"
            stroke="white"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </Svg>
      );
    },
  },
];

export default listTab;
