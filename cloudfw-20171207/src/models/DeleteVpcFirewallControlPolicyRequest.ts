// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the access control policy. 
   * 
   * To delete an access control policy, you must provide the ID of the policy. You can call the **DescribeVpcFirewallControlPolicy** operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 00281255-d220-4db1-8f4f-c4df2214****
   */
  aclUuid?: string;
  /**
   * @remarks
   * The natural language of the request and response. Valid values: 
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
   * The ID of the group to which the access control policy belongs. You can call the **DescribeVpcFirewallAclGroupList** operation to query the ID.  
   * 
   * Valid values:
   * 
   * - If the VPC firewall is used to protect a CEN instance, the value of this parameter is the ID of the CEN instance.  
   * 
   * Example: cen-ervw0g12b5jbw****
   * - If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the ID of the VPC firewall.  
   * 
   * Example: vfw-a42bbb7b887148c9****
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

