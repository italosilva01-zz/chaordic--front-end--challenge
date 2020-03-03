module.exports = {

    entry:'./js/main.js',
    output:{
        path:__dirname+"/js" ,
        filename:'bundle.js',
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:{
                    loader:'babel-loader',
                }
            }
        ]
    },
    devServer:{
        contentBase:__dirname,

    }
}