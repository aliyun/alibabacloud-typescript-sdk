// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTodoTaskRequestDetailUrl extends $dara.Model {
  /**
   * @example
   * https://www.dingtalk.com
   */
  appUrl?: string;
  /**
   * @example
   * https://www.dingtalk.com
   */
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      pcUrl: 'pcUrl',
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

