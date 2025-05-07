// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindAxnExtensionFixedLineResponseBodyData } from "./BindAxnExtensionFixedLineResponseBodyData";


export class BindAxnExtensionFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * None
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
  /**
   * @remarks
   * 响应信息
   */
  data?: BindAxnExtensionFixedLineResponseBodyData;
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
   * AE2D6997-643A-59CB-9B3C-918572E5CEAA
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
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
      data: BindAxnExtensionFixedLineResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

