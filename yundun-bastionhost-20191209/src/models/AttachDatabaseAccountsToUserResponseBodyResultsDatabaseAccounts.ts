// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachDatabaseAccountsToUserResponseBodyResultsDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned. If OK is returned, the authorization was successful. If another error code is returned, the authorization failed.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The database account ID.
   * 
   * @example
   * 6
   */
  databaseAccountId?: string;
  /**
   * @remarks
   * The error message that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      databaseAccountId: 'DatabaseAccountId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      databaseAccountId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

