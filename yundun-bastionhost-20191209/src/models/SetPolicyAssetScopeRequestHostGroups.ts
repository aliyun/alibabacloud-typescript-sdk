// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyAssetScopeRequestHostGroups extends $dara.Model {
  /**
   * @remarks
   * The asset accounts to which the control policy applies.
   * 
   * > This parameter is required if AccountScopeType is set to AccountName.
   */
  accountNames?: string[];
  /**
   * @remarks
   * The scope of asset accounts to which the control policy applies. Valid values:
   * 
   * * **All**: The control policy applies to all accounts in the asset group.
   * * **AccountName**: The control policy applies to specified accounts in the asset group.
   * 
   * @example
   * All
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The asset group ID.
   * 
   * @example
   * 86
   */
  hostGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      accountNames: 'AccountNames',
      accountScopeType: 'AccountScopeType',
      hostGroupId: 'HostGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountNames: { 'type': 'array', 'itemType': 'string' },
      accountScopeType: 'string',
      hostGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accountNames)) {
      $dara.Model.validateArray(this.accountNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

