// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEventSourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned response code. Valid values:
   * 
   * *   Success: The request is successful.
   * *   Other codes: The request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The result of the operation.
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The returned error message.
   * 
   * @example
   * Remote error. requestId: [xxxx-9D10-65DFDFA3A75D], error code: [EventSourceNotExist], message: [The event source in request is not exist! ]
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * c057d379-ea65-41ec-a8a8-90627a968204
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. The value true indicates that the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: 'boolean',
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

