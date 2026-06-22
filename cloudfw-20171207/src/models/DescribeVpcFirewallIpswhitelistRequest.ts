// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallIPSWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response.
   * 
   * Valid values:
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member accounts.
   * 
   * @example
   * 176618****104675
   */
  memberUid?: number;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * - If the VPC firewall protects network instances in a Cloud Enterprise Network (CEN) instance, the instance ID is the CEN instance ID. For CEN Basic Edition, call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation to query the CEN instance ID. For CEN Enterprise Edition, call the [DescribeTrFirewallsV2List](https://help.aliyun.com/document_detail/2384695.html) operation to query the CEN instance ID.
   * - If the VPC firewall protects traffic between two VPCs connected through Express Connect, the instance ID is the VPC firewall instance ID. Call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation to query the VPC firewall instance ID.
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

