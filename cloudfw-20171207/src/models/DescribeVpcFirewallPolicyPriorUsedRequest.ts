// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallPolicyPriorUsedRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * Valid values:
   * 
   * *   **zh** (default)
   * *   **en**
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the access control policy group. You can call the [DescribeVpcFirewallAclGroupList](https://help.aliyun.com/document_detail/159760.html) operation to query the ID.
   * 
   * *   If the VPC firewall is used to protect a Cloud Enterprise Network (CEN) instance, the value of this parameter is the ID of the CEN instance.
   * 
   *     Example: cen-ervw0g12b5jbw\\*\\*\\*\\*.
   * 
   * *   If the VPC firewall is used to protect an Express Connect circuit, the value of this parameter is the ID of the VPC firewall.
   * 
   *     Example: vfw-a42bbb7b887148c9\\*\\*\\*\\*.
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

