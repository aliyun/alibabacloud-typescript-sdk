// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * 删除的配置数量
   * 
   * @example
   * 1
   */
  deleted?: number;
  /**
   * @remarks
   * 操作结果消息
   * 
   * @example
   * Successfully deleted 1 configs
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      deleted: 'deleted',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

