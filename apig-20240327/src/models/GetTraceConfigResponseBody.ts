// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetTraceConfigResponseBodyData } from "./GetTraceConfigResponseBodyData";


export class GetTraceConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response Code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response Data
   */
  data?: GetTraceConfigResponseBodyData;
  /**
   * @remarks
   * Error Message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 2F46B9E7-67EF-5C8A-BA52-D38D5B32AF2C
   */
  requestId?: string;
  /**
   * @remarks
   * Boolean	Request Result, with the following values:
   * true: Request succeeded.
   * false: Request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetTraceConfigResponseBodyData,
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

