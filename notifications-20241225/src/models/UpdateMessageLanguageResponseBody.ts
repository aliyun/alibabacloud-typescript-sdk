// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMessageLanguageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the call failed. For more information, see error codes.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The error message returned if the call failed.
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 73FD6AE8-898F-5D09-9763-69B8A875488A
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values: true: The operation was successful. false: The operation failed.
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

