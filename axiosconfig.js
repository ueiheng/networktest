axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

// 拦截器

axios.interceptors.request.use(
  function (config) {
    // 在发送请求以前拦截请求
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // 2XX范围的状态码都会触发该函数
    return response;
  },
  function (error) {
    // 超出2xx范围的状态码都会触发该函数
    return Promise.reject(error);
  }
);

//移除拦截器：

const myInterceptor = axios.interceptors.request.use(function (config) {
  //
  return config;
});

axios.interceptors.request.eject(myInterceptor);
