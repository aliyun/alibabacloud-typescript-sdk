// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachPolicyToGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the user group.
   * 
   * @example
   * dev
   */
  groupName?: string;
  /**
   * @remarks
   * The name of the access policy.
   * 
   * @example
   * OSS-Administrator
   */
  policyName?: string;
  /**
   * @remarks
   * The type of the access policy. Valid values: `System` or `Custom`.
   * 
   * @example
   * Custom
   */
  policyType?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-9gLOoK****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      policyName: 'PolicyName',
      policyType: 'PolicyType',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      policyName: 'string',
      policyType: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

