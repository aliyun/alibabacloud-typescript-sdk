// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identity ID of the access control policy for virtual private cloud (VPC) firewalls at the border.
   * 
   * When you delete an access control policy, you must provide the unique identity ID of the policy. You can invoke the [DescribeVpcFirewallControlPolicy](https://help.aliyun.com/document_detail/159758.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df2214****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access control policy group for virtual private cloud (VPC) firewalls at the border. You can invoke the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * Valid values:
   * 
   * - If the virtual private cloud (VPC) firewalls at the border protect a CEN instance, the policy group ID is the instance ID of the CEN instance.
   * 
   *    Example: cen-ervw0g12b5jbw*\*\*\*
   * 
   * - If the virtual private cloud (VPC) firewalls at the border protect an Express Connect circuit, the policy group ID is the instance ID of the virtual private cloud (VPC) firewalls at the border.
   *   
   *   Example: vfw-a42bbb7b887148c9*\*\*\*
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c91****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
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

