// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig } from "./DescribeVpcFirewallAclGroupListResponseBodyAclGroupListAclConfig";


export class DescribeVpcFirewallAclGroupListResponseBodyAclGroupList extends $dara.Model {
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
   * 是否是默认防火墙。取值：
   * - **true**：是默认防火墙。
   * - **false**：不是默认防火墙。
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

