// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSQLRateLimitingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message returned for the request.
   * > If the request is successful, `Successful` is returned. If the request fails, an error message such as an error code is returned.
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
   * 5E71541A-6007-4DCC-A38A-F872C31FEB45
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
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

