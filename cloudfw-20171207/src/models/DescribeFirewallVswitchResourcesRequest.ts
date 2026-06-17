// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFirewallVswitchResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the Cloud Firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * internet
   */
  firewallType?: string;
  /**
   * @remarks
   * The language of the response message.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionNo?: string;
  /**
   * @remarks
   * The ID of the VPC instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-2ze36yb348axtnf****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      firewallType: 'FirewallType',
      lang: 'Lang',
      regionNo: 'RegionNo',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      firewallType: 'string',
      lang: 'string',
      regionNo: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

