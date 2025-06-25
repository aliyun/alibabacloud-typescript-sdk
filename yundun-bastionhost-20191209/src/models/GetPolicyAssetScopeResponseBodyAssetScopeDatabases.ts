// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyAssetScopeResponseBodyAssetScopeDatabases extends $dara.Model {
  /**
   * @remarks
   * The scope of database accounts to which the control policy applies. Valid values:
   * 
   * *   **All**: The control policy applies to all database accounts of the database.
   * *   **AccountId**: The control policy applies to specified database accounts of the database.
   * 
   * @example
   * AccountId
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The IDs of database accounts to which the control policy applies.
   */
  databaseAccountIds?: string[];
  /**
   * @remarks
   * The database ID.
   * 
   * @example
   * 17
   */
  databaseId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      databaseAccountIds: 'DatabaseAccountIds',
      databaseId: 'DatabaseId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      databaseAccountIds: { 'type': 'array', 'itemType': 'string' },
      databaseId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseAccountIds)) {
      $dara.Model.validateArray(this.databaseAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

