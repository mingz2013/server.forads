/**
 * Created by zhaojm on 15/11/2016.
 */

import article_service from '../services/article_service'
import category_service from '../services/category_service'

import $ from 'jQuery'

class CategoryController {

    constructor() {
        $('#category_add_switch').click(() => {
            $('#category_add_box').toggle();
        });

        $('#category_add').click(() => {
            category_service.add_category();
        });
    }
}

export default CategoryController;