// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSQLRateLimitingRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message.
   * 
   * > If the request is successful, `Successful` is returned. If the request fails, an error message is returned. The error message can include an error code.
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
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
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

