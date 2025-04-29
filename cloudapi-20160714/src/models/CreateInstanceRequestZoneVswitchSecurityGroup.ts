// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInstanceRequestZoneVSwitchSecurityGroup extends $dara.Model {
  /**
   * @remarks
   * The IPv4 CIDR block for the vSwitch.
   * 
   * @example
   * 192.168.9.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The ID of the security group. Services in the same security group can access each other.
   * 
   * @example
   * sg-2ze2ql9nozv8q7kmlt6e
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-0xi349n11cxogmvm866tb
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-c
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
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

