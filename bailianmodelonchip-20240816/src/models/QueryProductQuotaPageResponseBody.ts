// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryProductQuotaPageResponseBodyData } from "./QueryProductQuotaPageResponseBodyData";


export class QueryProductQuotaPageResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: QueryProductQuotaPageResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 32B81CD6-D583-5056-A6EB-3C1107AB26C3
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryProductQuotaPageResponseBodyData,
      httpStatusCode: 'string',
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

