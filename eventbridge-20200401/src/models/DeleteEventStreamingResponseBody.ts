// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventStreamingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * Success: The request was successful.    
   * 
   * Other values: An error occurred. For more information about error codes, see error codes.
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
   * Returns true if the operation was successful.
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

