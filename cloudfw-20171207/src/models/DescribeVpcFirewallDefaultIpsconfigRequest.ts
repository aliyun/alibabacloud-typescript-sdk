// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallDefaultIPSConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The UID of the member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The instance ID of the VPC firewall. Valid values:
   * 
   * - If the VPC firewall protects a network instance in a Cloud Enterprise Network (CEN) instance, set this parameter to the ID of the CEN instance. To query the ID of a CEN instance of Basic Edition, call the [DescribeVpcFirewallCenList](https://help.aliyun.com/document_detail/345777.html) operation. To query the ID of a CEN instance of Enterprise Edition, call the [DescribeTrFirewallsV2List](https://help.aliyun.com/document_detail/2384695.html) operation.
   * 
   * - If the VPC firewall protects traffic between two VPCs connected by an Express Connect circuit, set this parameter to the ID of the VPC firewall instance. To query the ID of the VPC firewall instance, call the [DescribeVpcFirewallList](https://help.aliyun.com/document_detail/342932.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
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

