// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether strict mode is enabled. Valid values:
   * - 1: Strict mode is enabled.
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
   * The mode of the access control engine.
   */
  aclConfig?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig;
  /**
   * @remarks
   * The access control policy group ID of the virtual private cloud (VPC) firewalls at the border. Valid values:
   * 
   * - If the virtual private cloud (VPC) firewalls at the border protect a Cloud Enterprise Network (CEN) instance, the policy group ID is the instance ID of the CEN instance.
   * 
   *   Example: cen-ervw0g12b5jbw*\\*\\*\\*
   * 
   * - If the virtual private cloud (VPC) firewalls at the border protect an Express Connect circuit, the policy group ID is the instance ID of the virtual private cloud (VPC) firewalls at the border.
   * 
   *   Example: vfw-a42bbb7b887148c9*\\*\\*\\*
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  aclGroupId?: string;
  /**
   * @remarks
   * The access control policy group name of the virtual private cloud (VPC) firewalls at the border.
   * 
   * - If the virtual private cloud (VPC) firewalls at the border protect a CEN instance, the policy group name is the name of the CEN instance.
   * - If the virtual private cloud (VPC) firewalls at the border protect an Express Connect circuit, the policy group name is the name of the virtual private cloud (VPC) firewalls at the border.
   * 
   * @example
   * group_test
   */
  aclGroupName?: string;
  /**
   * @remarks
   * The number of policies in the access control policy group of the virtual private cloud (VPC) firewalls at the border.
   * 
   * @example
   * 9
   */
  aclRuleCount?: number;
  /**
   * @remarks
   * Specifies whether the firewall is the default firewall. Valid values:
   * - **true**: The firewall is the default firewall.
   * - **false**: The firewall is not the default firewall.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the member accounts of the current Alibaba Cloud account.
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
   * The information about the access control policy groups of the VPC firewall.
   */
  aclGroupList?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of access control policy groups of the VPC firewall.
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

