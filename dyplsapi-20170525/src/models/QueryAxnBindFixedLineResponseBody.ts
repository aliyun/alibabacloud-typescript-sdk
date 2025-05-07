// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAxnBindFixedLineResponseBodyData } from "./QueryAxnBindFixedLineResponseBodyData";


export class QueryAxnBindFixedLineResponseBody extends $dara.Model {
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
   * 绑定对象
   */
  data?: QueryAxnBindFixedLineResponseBodyData[];
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
   * E8B9C3ED-D9BD-5E27-9588-6D84D3070160
   */
  requestId?: string;
  /**
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
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryAxnBindFixedLineResponseBodyData },
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

