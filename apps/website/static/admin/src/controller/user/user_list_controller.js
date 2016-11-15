/**
 * Created by zhaojm on 15/11/2016.
 */
import user_service from '../../services/user_service'

import $ from 'jQuery'


class UserListController {
    constructor() {
        $('#user_list').show(() => {
            user_service.get_user_list().then((user_list) => {

                let html_str = '<table><tr><td>index</td><td>username</td><td>permission</td></tr>';
                user_list.forEach(({_id, username, permission}, index) => {

                    html_str += '<tr>' +
                        '<td>' + index + '</td>' +
                        '<td><a href="/admin/user/detail/' + _id + '">' + username + '</a></td>' +
                        '<td>' + permission + '</td>' +
                        '<td><a href="/admin/user/update/' + _id + '">edit</a></td>' +
                        '<td><a href="javascript:void(0);" onclick="window.user_service.remove_user(\'' + _id + '\')">remove</a></td>' +
                        '</tr>';
                });
                html_str += '</table>';
                $('#user_list').html(html_str);

            }).catch((errmsg) => {
                //获取数据失败时的处理逻辑
                console.log(errmsg)
            })
        });
    }
}

export default UserListController;