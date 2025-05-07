// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindAxnFixedLineResponseBodyData } from "./BindAxnFixedLineResponseBodyData";


export class BindAxnFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 响应码 0：成功，其它失败，具体见文档
   * 
   * @example
   * 0
   */
  code?: string;
  data?: BindAxnFixedLineResponseBodyData;
  /**
   * @remarks
   * 描述信息
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 4D690962-08CE-5D38-A65A-AB247D7DF7A2
   */
  requestId?: string;
  /**
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
      data: BindAxnFixedLineResponseBodyData,
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

