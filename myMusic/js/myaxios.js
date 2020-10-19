(
    function() {
        //自定义配置一个axios实例
        let Axios = axios.create({
            baseURL: 'https://apimusic.linweiqin.com/',
            timeout: 10000
        });

        //添加一个拦截请求
        Axios.interceptors.request.use(
            //发送请求前的操作
            function(config) {
                return config;
            },
            //请求错误
            function(error) {
                return Promise.reject(error);
            }
        );
        //添加一个响应拦截器
        Axios.interceptors.response.use(
            //在2xx范围内的任何状态代码都会触发此函数
            //处理响应数据
            function(response) {
                return response.data;
            },
            //任何超出2xx范围的状态码都会触发此函数
            //处理响应错误进入翻译页面
            function(error) {
                return Promise.reject(error);
            }
        )

        //向外暴露实例
        window.Axios = Axios;
    }()
)