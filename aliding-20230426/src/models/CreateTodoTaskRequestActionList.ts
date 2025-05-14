// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTodoTaskRequestActionListParam } from "./CreateTodoTaskRequestActionListParam";


export class CreateTodoTaskRequestActionList extends $dara.Model {
  actionKey?: string;
  actionType?: number;
  buttonStyleType?: number;
  param?: CreateTodoTaskRequestActionListParam;
  pcUrl?: string;
  title?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionKey: 'actionKey',
      actionType: 'actionType',
      buttonStyleType: 'buttonStyleType',
      param: 'param',
      pcUrl: 'pcUrl',
      title: 'title',
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionKey: 'string',
      actionType: 'number',
      buttonStyleType: 'number',
      param: CreateTodoTaskRequestActionListParam,
      pcUrl: 'string',
      title: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.param && typeof (this.param as any).validate === 'function') {
      (this.param as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

