// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAccountAliasResponseBody extends $dara.Model {
  /**
   * @remarks
   * The alias of the Alibaba Cloud account.
   * 
   * @example
   * myalias
   */
  accountAlias?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accountAlias: 'AccountAlias',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAlias: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

