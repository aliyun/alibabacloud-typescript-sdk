// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatabaseAccountResponseBodyDatabaseAccount } from "./GetDatabaseAccountResponseBodyDatabaseAccount";


export class GetDatabaseAccountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned information about the database account.
   */
  databaseAccount?: GetDatabaseAccountResponseBodyDatabaseAccount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA06D274-8D0A-59FB-8B7E-584C0EEBBFFF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccount: 'DatabaseAccount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccount: GetDatabaseAccountResponseBodyDatabaseAccount,
      requestId: 'string',
    };
  }

  validate() {
    if(this.databaseAccount && typeof (this.databaseAccount as any).validate === 'function') {
      (this.databaseAccount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

