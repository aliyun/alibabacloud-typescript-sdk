// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether strict mode is enabled. Valid values:
   * 
   * - 1: Strict mode is enabled.
   * 
   * - 0: Strict mode is disabled.
   * 
   * @example
   * 1
   */
  strictMode?: number;
  static names(): { [key: string]: string } {
    return {
      strictMode: 'StrictMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      strictMode: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupList extends $dara.Model {
  /**
   * @remarks
   * The ACL engine mode.
   */
  aclConfig?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig;
  /**
   * @remarks
   * The ID of the access control policy group for the VPC boundary firewall.
   * 
   * Valid values:
   * 
   * - If the VPC boundary firewall protects a Cloud Enterprise Network (CEN) instance, the policy group ID is the ID of the CEN instance.
   * 
   *   Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * - If the VPC boundary firewall protects an Express Connect circuit, the policy group ID is the ID of the VPC boundary firewall instance.
   * 
   *   Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  aclGroupId?: string;
  /**
   * @remarks
   * The name of the access control policy group for the VPC boundary firewall.
   * 
   * - If the VPC boundary firewall protects a Cloud Enterprise Network instance, the group name is the name of the CEN instance.
   * 
   * - If the VPC boundary firewall protects an Express Connect circuit, the group name is the name of the VPC boundary firewall instance.
   * 
   * @example
   * group_test
   */
  aclGroupName?: string;
  /**
   * @remarks
   * The number of policies in the access control policy group.
   * 
   * @example
   * 9
   */
  aclRuleCount?: number;
  /**
   * @remarks
   * Indicates whether the policy group is a default group. Valid values:
   * 
   * - **true**: The policy group is a default group.
   * 
   * - **false**: The policy group is not a default group.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  static names(): { [key: string]: string } {
    return {
      aclConfig: 'AclConfig',
      aclGroupId: 'AclGroupId',
      aclGroupName: 'AclGroupName',
      aclRuleCount: 'AclRuleCount',
      isDefault: 'IsDefault',
      memberUid: 'MemberUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclConfig: DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig,
      aclGroupId: 'string',
      aclGroupName: 'string',
      aclRuleCount: 'number',
      isDefault: 'boolean',
      memberUid: 'string',
    };
  }

  validate() {
    if(this.aclConfig && typeof (this.aclConfig as any).validate === 'function') {
      (this.aclConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcFirewallAclGroupListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The access control policy groups.
   */
  aclGroupList?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policy groups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      aclGroupList: 'AclGroupList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclGroupList: { 'type': 'array', 'itemType': DescribeVpcFirewallAclGroupListResponseBodyAclGroupList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.aclGroupList)) {
      $dara.Model.validateArray(this.aclGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

