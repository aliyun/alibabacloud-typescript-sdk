// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSmsSignResponseBodyData } from "./CreateSmsSignResponseBodyData";


export class CreateSmsSignResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  data?: CreateSmsSignResponseBodyData;
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
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CreateSmsSignResponseBodyData,
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

