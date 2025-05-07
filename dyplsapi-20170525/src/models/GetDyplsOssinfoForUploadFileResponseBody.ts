// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDyplsOSSInfoForUploadFileResponseBodyData } from "./GetDyplsOssinfoForUploadFileResponseBodyData";


export class GetDyplsOSSInfoForUploadFileResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: GetDyplsOSSInfoForUploadFileResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * E2FD3B2F-5028-16E3-9F83-2F76F99B3873
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
      data: GetDyplsOSSInfoForUploadFileResponseBodyData,
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

