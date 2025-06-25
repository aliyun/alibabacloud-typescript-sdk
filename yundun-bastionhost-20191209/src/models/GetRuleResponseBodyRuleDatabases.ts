// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRuleResponseBodyRuleDatabasesDatabaseAccounts } from "./GetRuleResponseBodyRuleDatabasesDatabaseAccounts";


export class GetRuleResponseBodyRuleDatabases extends $dara.Model {
  /**
   * @remarks
   * The database accounts on which permissions are granted by using the authorization rule.
   */
  databaseAccounts?: GetRuleResponseBodyRuleDatabasesDatabaseAccounts[];
  /**
   * @remarks
   * The ID of the database that the policy authorizes users to manage.
   * 
   * @example
   * 2
   */
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccounts: 'DatabaseAccounts',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccounts: { 'type': 'array', 'itemType': GetRuleResponseBodyRuleDatabasesDatabaseAccounts },
      databaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccounts)) {
      $dara.Model.validateArray(this.databaseAccounts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

