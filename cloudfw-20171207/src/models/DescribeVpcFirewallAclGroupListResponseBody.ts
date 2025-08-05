// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies Whether strict mode is enabled. Valid values:
   * *   1: yes
   * *   0: no
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
   * ACL engine mode.
   */
  aclConfig?: DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig;
  /**
   * @remarks
   * The ID of the policy group.
   * 
   * Valid values:
   * 
   * *   If the VPC firewall is used to protect a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance.
   * 
   *     Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the instance ID of the VPC firewall.
   * 
   *     Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  aclGroupId?: string;
  /**
   * @remarks
   * The name of the policy group. Valid values:
   * 
   * *   If the VPC firewall is used to protect a CEN instance, the value of this parameter is the name of the CEN instance.
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the instance name of the VPC firewall.
   * 
   * @example
   * group_test
   */
  aclGroupName?: string;
  /**
   * @remarks
   * The number of access control policies in the policy group.
   * 
   * @example
   * 9
   */
  aclRuleCount?: number;
  /**
   * @remarks
   * Whether it is the default firewall. Values:
   * 
   * *   **true**: It is the default firewall.
   * *   **false**: It is not the default firewall.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The UID of the member that is managed by your Alibaba Cloud account.
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
   * The information about the access control policy groups.
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
   * The total number of the policy groups that are returned.
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

