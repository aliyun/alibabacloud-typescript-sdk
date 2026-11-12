// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSQLRateLimitingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned by the request.
   * > If the request is successful, Successful is returned. If the request fails, an error message such as an error code is returned.
   * 
   * @example
   * Message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 69A85BAF-1089-4CDF-A82F-0A140F******
   */
  requestId?: string;
  /**
   * @remarks
   * The request result. Valid values:
   * 
   * - **true**: The request is successful.
   * 
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

