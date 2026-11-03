// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallPolicyPriorUsedRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access control policy group for the VPC border firewall. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to obtain the ID.
   * 
   * Valid values:
   * 
   * - When a VPC border firewall protects a Cloud Enterprise Network (CEN) instance, the policy group ID is the instance ID of the CEN instance.
   * 
   *   Example: cen-ervw0g12b5jbw*\\*\\*\\*
   * 
   * - When a VPC border firewall protects an Express Connect circuit, the policy group ID is the instance ID of the VPC border firewall.
   * 
   *   Example: vfw-a42bbb7b887148c9*\\*\\*\\*
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-a42bbb7b887148c9****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

