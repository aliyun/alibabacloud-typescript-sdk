// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitorAccountRequest extends $dara.Model {
  /**
   * @remarks
   * The account IDs of members in the resource directory.
   * 
   * >  You can call the [ListAccountsInResourceDirectory](~~ListAccountsInResourceDirectory~~) operation to obtain the account IDs. Separate multiple account IDs with commas (,). If you specify a value for this parameter, the existing list of members is replaced by the new list that you specify. Otherwise, the existing list is cleared.
   * 
   * @example
   * 1026780160******,1457515594******
   */
  accountIds?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

