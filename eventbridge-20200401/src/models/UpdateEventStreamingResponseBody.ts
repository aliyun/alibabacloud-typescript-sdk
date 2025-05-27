// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventStreamingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. The value Success indicates that the request is successful. Other values indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * The name [xxxx] of event streaming in request is already exist!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FDD73AA-7A2D-5BD4-B4C0-88AFEBF5F0F5
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true and false.
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

