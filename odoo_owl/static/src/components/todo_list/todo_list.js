/** @odoo-module **/

import { registry } from '@web/core/registry';
const { Component, useState } = owl;

export class OwlTodoList extends Component{
    setup(){
        this.state = useState({value:1})
    }

}
OwlTodoList.template = 'odoo_owl.TodoList'
registry.category('actions').add('odoo_owl.action_todo_list_js', OwlTodoList);
