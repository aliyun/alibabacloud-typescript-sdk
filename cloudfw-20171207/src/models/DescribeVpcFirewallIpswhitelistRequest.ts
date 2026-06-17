// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallIPSWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response messages.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 176618****104675
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * - If the VPC firewall protects a network instance in a Cloud Enterprise Network (CEN) instance, set the value to the ID of the CEN instance. For a CEN instance of Basic Edition, you can call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the instance ID. For a CEN instance of Enterprise Edition, you can call the [DescribeTrFirewallsV2List](https://help.aliyun.com/document_detail/2384695.html) operation to query the instance ID.
   * 
   * - If the VPC firewall protects traffic between two VPCs that are connected by an Express Connect circuit, set the value to the instance ID of the VPC firewall. You can call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-***
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      memberUid: 'number',
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

