// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserWithGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The WINNEXO logon account.
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
  /**
   * @remarks
   * The business status code. A value of 200 indicates success. A failure returns a backend error code (ERR.* or InvalidParameter.*).
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the user is newly created. A value of false indicates that an existing user joined the tenant.
   * 
   * @example
   * true
   */
  isNewUser?: boolean;
  /**
   * @remarks
   * The error description. This parameter is empty when the request succeeds.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request trace ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The WINNEXO platform user ID.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      code: 'code',
      displayName: 'displayName',
      isNewUser: 'isNewUser',
      message: 'message',
      requestId: 'requestId',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      code: 'string',
      displayName: 'string',
      isNewUser: 'boolean',
      message: 'string',
      requestId: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

