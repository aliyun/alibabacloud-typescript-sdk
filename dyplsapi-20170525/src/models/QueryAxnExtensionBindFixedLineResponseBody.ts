// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAxnExtensionBindFixedLineResponseBodyData } from "./QueryAxnExtensionBindFixedLineResponseBodyData";


export class QueryAxnExtensionBindFixedLineResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 响应码
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * 查询绑定对象集合，具体对象字段见绑定请求
   */
  data?: QueryAxnExtensionBindFixedLineResponseBodyData[];
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
   * 74EFA0E8-CFCA-54D9-BFE5-904F9FA88DBD
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
      data: { 'type': 'array', 'itemType': QueryAxnExtensionBindFixedLineResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

