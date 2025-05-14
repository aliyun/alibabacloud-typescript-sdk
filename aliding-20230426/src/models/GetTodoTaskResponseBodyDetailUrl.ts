// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoTaskResponseBodyDetailUrl extends $dara.Model {
  /**
   * @example
   * dingtalk://dingtalkclient/action/open_mini_app?miniAppId={0}&ddMode=push&page=pages%2ftask-detail%2ftask-detail%3ftaskId%3d{1}
   */
  appUrl?: string;
  /**
   * @example
   * https://todo.dingtalk.com/ding-portal/detail/task/{0}
   */
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'AppUrl',
      pcUrl: 'PcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      pcUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

