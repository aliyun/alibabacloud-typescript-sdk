// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallAssetRegionListRequest extends $dara.Model {
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
   * The instance ID of the VPC border firewall.
   * 
   * **Note**: This parameter is required. If it is not provided, the API returns ErrorFirewallId (-360133). You can call DescribeVpcFirewallList to obtain a valid instance ID.
   * 
   * @example
   * vfw-m5e7dbc4y****
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

