// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDataCorrectExecSQLRequest extends $dara.Model {
  /**
   * @remarks
   * The new SQL script.
   * 
   * This parameter is required.
   * 
   * @example
   * update tb set id = 1 where id = 1;
   */
  execSQL?: string;
  /**
   * @remarks
   * The ID of the data change ticket.
   * 
   * This parameter is required.
   * 
   * @example
   * 4328****
   */
  orderId?: number;
  realLoginUserUid?: string;
  /**
   * @remarks
   * The ID of the tenant. You can call the [GetUserActiveTenant](https://help.aliyun.com/document_detail/198073.html) operation to query the tenant ID.
   * 
   * @example
   * 4****
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      execSQL: 'ExecSQL',
      orderId: 'OrderId',
      realLoginUserUid: 'RealLoginUserUid',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      execSQL: 'string',
      orderId: 'number',
      realLoginUserUid: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

