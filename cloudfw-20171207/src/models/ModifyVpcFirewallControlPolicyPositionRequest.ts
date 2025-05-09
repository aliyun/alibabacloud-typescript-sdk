// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallControlPolicyPositionRequest extends $dara.Model {
  /**
   * @remarks
   * The UUID of the access control policy.
   * 
   * If you want to modify the configurations of an access control policy, you must provide the UUID of the policy. You can call the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to query the UUID.
   * 
   * @example
   * 2746d9ff-5d7c-449d-a2a9-ccaa15fe****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the content within the request and the response.
   * 
   * Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The new priority of the access control policy.
   * 
   * >  For more information about the valid values of the new priority, see [DescribeVpcFirewallPolicyPriorUsed](https://help.aliyun.com/document_detail/474145.html).
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
   * > This parameter is not recommended. We recommend that you use the AclUuid parameter to specify the policy that you want to modify.
   * 
   * @example
   * 5
   */
  oldOrder?: string;
  /**
   * @remarks
   * The ID of the group to which the access control policy belongs. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * Valid values:
   * 
   * *   If the VPC firewall is used to protect a CEN instance, the value of this parameter must be the ID of the CEN instance.
   * 
   *     Example: cen-ervw0g12b5jbw\\*\\*\\*\\*
   * 
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter must be the instance ID of the VPC firewall.
   * 
   *     Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*
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

