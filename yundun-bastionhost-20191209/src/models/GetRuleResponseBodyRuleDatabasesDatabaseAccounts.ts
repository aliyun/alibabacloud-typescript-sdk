// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuleResponseBodyRuleDatabasesDatabaseAccounts extends $dara.Model {
  /**
   * @remarks
   * The ID of the database account that the policy authorizes users to manage.
   * 
   * @example
   * 5
   */
  databaseAccountId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseAccountId: 'DatabaseAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseAccountId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

