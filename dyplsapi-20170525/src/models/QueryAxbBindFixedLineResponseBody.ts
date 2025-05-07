// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAxbBindFixedLineResponseBodyData } from "./QueryAxbBindFixedLineResponseBodyData";


export class QueryAxbBindFixedLineResponseBody extends $dara.Model {
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
   * 绑定信息
   */
  data?: QueryAxbBindFixedLineResponseBodyData;
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
   * 3179F199-C6C5-5963-85A6-21CBA2F47592
   */
  requestId?: string;
  /**
   * @remarks
   * 处理是否成功 true-成功
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
      data: QueryAxbBindFixedLineResponseBodyData,
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

