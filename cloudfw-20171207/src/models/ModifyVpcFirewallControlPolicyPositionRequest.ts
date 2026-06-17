// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallControlPolicyPositionRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the access control policy.
   * 
   * To modify an access control policy, provide the unique ID of the policy. Call the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to obtain the ID.
   * 
   * @example
   * 2746d9ff-5d7c-449d-a2a9-ccaa15fe****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * - **zh** (Default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new priority of the access control policy.
   * 
   * > For more information about the valid range of priorities, see [DescribePolicyPriorities](https://help.aliyun.com/document_detail/474145.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  newOrder?: string;
  /**
   * @remarks
   * The original priority of the access control policy.
   * 
   * > This parameter is deprecated. Use the AclUuid parameter to specify the policy to modify.
   * 
   * @example
   * 5
   */
  oldOrder?: string;
  /**
   * @remarks
   * The ID of the policy group for the VPC firewall. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain the ID.
   * 
   * Valid values:
   * 
   * - If the VPC firewall protects a Cloud Enterprise Network (CEN) instance, the ID of the policy group is the ID of the CEN instance.
   * 
   *   Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * - If the VPC firewall protects an Express Connect circuit, the ID of the policy group is the ID of the VPC firewall instance.
   * 
   *   Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      newOrder: 'NewOrder',
      oldOrder: 'OldOrder',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      newOrder: 'string',
      oldOrder: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

