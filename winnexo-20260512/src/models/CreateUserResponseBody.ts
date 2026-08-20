// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of your Alibaba Cloud account.
   * 
   * @example
   * exampleAccountId
   */
  accountId?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the user is newly created. A value of false indicates that an existing user is added to the tenant.
   * 
   * @example
   * true
   */
  isNewUser?: boolean;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
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

