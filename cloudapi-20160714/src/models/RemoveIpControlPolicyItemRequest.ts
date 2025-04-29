// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveIpControlPolicyItemRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL. The ID is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The ID of a policy. Separate multiple IDs with semicolons (;). A maximum of 100 IDs can be entered.
   * 
   * This parameter is required.
   * 
   * @example
   * P151533572852362;P151533557750260
   */
  policyItemIds?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      policyItemIds: 'PolicyItemIds',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
      policyItemIds: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

