// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindAxbFixedLineResponseBodyData } from "./BindAxbFixedLineResponseBodyData";


export class BindAxbFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 响应码 0-成功
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * 响应内容
   */
  data?: BindAxbFixedLineResponseBodyData;
  /**
   * @remarks
   * 响应消息
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 649E9EB5-9436-53CF-B41A-C4F0433212E7
   */
  requestId?: string;
  /**
   * @remarks
   * 是否处理成功  true-成功
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
      data: BindAxbFixedLineResponseBodyData,
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

