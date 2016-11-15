/**
 * Created by zhaojm on 13/11/2016.
 */

import '../css/style.css'

import ArticleAddController from './controller/article/article_add_controller'
import ArticleDetailController from './controller/article/article_detail_controller'
import ArticleEditController from './controller/article/article_edit_controller'
import ArticleListController from './controller/article/article_list_controller'

import UserAddController from './controller/user/user_add_controller'
import UserDetailController from './controller/user/user_detail_controller'
import UserEditController from './controller/user/user_edit_controller'
import UserListController from './controller/user/user_list_controller'

import $ from 'jQuery'

import user_service from './services/user_service'
import article_service from './services/article_service'
import category_service from './services/category_service'

window.user_service = user_service;
window.article_service = article_service;
window.category_service = category_service;

$(document).ready(() => {

    $('#user_list').show(()=> {
        new UserListController();
    });
    $('#user_detail').show(()=> {
        new UserDetailController();
    });
    $('#user_update').show(()=> {
        new UserEditController();
    });
    $('#user_add').show(()=> {
        new UserAddController();
    });

    //new ArticleAddController();
    //new ArticleDetailController();
    //new ArticleEditController();
    //new ArticleListController();






});










