// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnBindXBResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
   * 
   * @example
   * false
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

