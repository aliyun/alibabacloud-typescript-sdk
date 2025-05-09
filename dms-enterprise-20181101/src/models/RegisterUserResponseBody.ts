// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RegisterUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The specified user already exists.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34E01EDD-6A16-4CF0-9541-C644D1BE01AA
   */
  requestId?: string;
  /**
   * @remarks
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
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

