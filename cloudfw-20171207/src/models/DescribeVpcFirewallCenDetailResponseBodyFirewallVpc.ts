// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallCenDetailResponseBodyFirewallVpc extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you can specify a CIDR block when you create a VPC firewall for a Basic Edition transit router of a CEN instance. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 0
   */
  allowConfiguration?: number;
  /**
   * @remarks
   * Firewall backup availability zone ID.
   * 
   * @example
   * cn-hangzhou-k
   */
  standbyZoneId?: string;
  /**
   * @remarks
   * The CIDR block of the VPC.
   * 
   * @example
   * 10.0.0.0/8
   */
  vpcCidr?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-bp1245k5oagy2bp74****
   */
  vpcId?: string;
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 10.0.0.1/24
   */
  vswitchCidr?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1sqg9wms9wxcs1****
   */
  vswitchId?: string;
  /**
   * @remarks
   * The availability zone ID of the virtual switch.
   * 
   * @example
   * cn-hangzhou-i
   */
  vswitchZoneId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-i
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      allowConfiguration: 'AllowConfiguration',
      standbyZoneId: 'StandbyZoneId',
      vpcCidr: 'VpcCidr',
      vpcId: 'VpcId',
      vswitchCidr: 'VswitchCidr',
      vswitchId: 'VswitchId',
      vswitchZoneId: 'VswitchZoneId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowConfiguration: 'number',
      standbyZoneId: 'string',
      vpcCidr: 'string',
      vpcId: 'string',
      vswitchCidr: 'string',
      vswitchId: 'string',
      vswitchZoneId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

