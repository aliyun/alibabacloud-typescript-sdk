// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyAssetScopeResponseBodyAssetScopeHosts extends $dara.Model {
  /**
   * @remarks
   * The scope of host accounts to which the control policy applies. Valid values:
   * 
   * *   **All**: The control policy applies to all accounts of the host.
   * *   **AccountId**: The control policy applies to specified accounts of the host.
   * 
   * @example
   * All
   */
  accountScopeType?: string;
  /**
   * @remarks
   * The host accounts to which the control policy applies.
   */
  hostAccountIds?: string[];
  /**
   * @remarks
   * The host ID.
   * 
   * @example
   * 1
   */
  hostId?: string;
  static names(): { [key: string]: string } {
    return {
      accountScopeType: 'AccountScopeType',
      hostAccountIds: 'HostAccountIds',
      hostId: 'HostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountScopeType: 'string',
      hostAccountIds: { 'type': 'array', 'itemType': 'string' },
      hostId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.hostAccountIds)) {
      $dara.Model.validateArray(this.hostAccountIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

