// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchEnrollAccountsRequestAccounts extends $dara.Model {
  /**
   * @remarks
   * The account ID. This parameter is required.
   * 
   * @example
   * 12868156179****
   */
  accountUid?: number;
  static names(): { [key: string]: string } {
    return {
      accountUid: 'AccountUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

