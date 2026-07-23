// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventStreamingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. \\`Success\\` is returned if the request is successful. Otherwise, an error code is returned. For more information about error codes, see Error codes.
   * 
   * Success: The request is successful.
   * 
   * Other codes indicate that the request failed. For more information about error codes, see Error codes.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The event streaming [xxxx] not existed!
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 499A9ACF-70CD-5D43-87F3-1B60529EE446
   */
  requestId?: string;
  /**
   * @remarks
   * Returns true if the operation is successful.
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

