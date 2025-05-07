// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySecretAPhoneNoToCustResponseBodyData } from "./QuerySecretAphoneNoToCustResponseBodyData";


export class QuerySecretAPhoneNoToCustResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 请求状态码
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * A号码报备状态查询结构体
   */
  data?: QuerySecretAPhoneNoToCustResponseBodyData;
  /**
   * @remarks
   * 失败错误提示
   * 
   * @example
   * 号码组不存在
   */
  message?: string;
  /**
   * @remarks
   * 返回id
   * 
   * @example
   * 1D73E648-0978-18A5-B089-3BB2
   */
  requestId?: string;
  /**
   * @remarks
   * 请求是否成功
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySecretAPhoneNoToCustResponseBodyData,
      message: 'string',
      requestId: 'string',
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

