// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersResponseBodyCreateResultFailedUsers extends $dara.Model {
  /**
   * @remarks
   * The email address of the end user.
   * 
   * @example
   * username2@example.com
   */
  email?: string;
  /**
   * @remarks
   * The name of the end user.
   * 
   * @example
   * test2
   */
  endUserId?: string;
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * ExistedEndUserId
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * The username test is used by another user.
   */
  errorMessage?: string;
  /**
   * @remarks
   * The mobile number of the end user.
   * 
   * @example
   * 1390000****
   */
  phone?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      phone: 'Phone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      phone: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

