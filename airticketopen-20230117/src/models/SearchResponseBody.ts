// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchResponseBodyData } from "./SearchResponseBodyData";


export class SearchResponseBody extends $dara.Model {
  /**
   * @remarks
   * request ID
   * 
   * @example
   * 2236993B-7BE7-5F92-B179-21FF08570165
   */
  requestId?: string;
  /**
   * @remarks
   * data
   */
  data?: SearchResponseBodyData;
  /**
   * @remarks
   * error code
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * error data
   * 
   * @example
   * {}
   */
  errorData?: any;
  /**
   * @remarks
   * error message
   * 
   * @example
   * ""
   */
  errorMsg?: string;
  /**
   * @remarks
   * http reqeust has been processed successfully，status code is 200
   * 
   * @example
   * 200
   */
  status?: number;
  /**
   * @remarks
   * true represents success, false represents failure
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      data: 'data',
      errorCode: 'error_code',
      errorData: 'error_data',
      errorMsg: 'error_msg',
      status: 'status',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      data: SearchResponseBodyData,
      errorCode: 'string',
      errorData: 'any',
      errorMsg: 'string',
      status: 'number',
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

