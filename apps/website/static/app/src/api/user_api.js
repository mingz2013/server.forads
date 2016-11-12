/**
 * Created by zhaojm on 12/11/2016.
 */

import $ from 'jQuery'

class UserAPI {
    get_user_list() {
        return new Promise(function (resolve, reject) {
            $.ajax({
                type: "get",
                url: "index.aspx",
                success: function (data) {
                    if (data.Status == "1") {
                        resolve(data.ResultJson); //在异步操作成功时调用
                    } else {
                        reject(data.ErrMsg); //在异步操作失败时调用
                    }
                }
            });
        })
    }

}

export default UserAPI
