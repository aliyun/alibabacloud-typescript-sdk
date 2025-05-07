// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UnBindXBResponseBodyData } from "./UnBindXbresponseBodyData";


export class UnBindXBResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * 0000
   */
  code?: string;
  data?: UnBindXBResponseBodyData;
  message?: string;
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
      data: UnBindXBResponseBodyData,
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

