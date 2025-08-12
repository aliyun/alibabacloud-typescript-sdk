// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutCustomEventRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The value 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The request has failed due to a temporary failure of the server.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD5DCD82-BD1C-405F-BAED-32302DE9F498
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values:
   * 
   * *   true: The call was successful.
   * *   false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
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

