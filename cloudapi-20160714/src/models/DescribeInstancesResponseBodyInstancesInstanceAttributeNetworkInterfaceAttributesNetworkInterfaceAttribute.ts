// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancesResponseBodyInstancesInstanceAttributeNetworkInterfaceAttributesNetworkInterfaceAttribute extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the vSwitch.
   * 
   * @example
   * 192.168.17.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The security group ID. Services in the same security group can access each other.
   * 
   * @example
   * sg-2zeehz13zcyj1kfk3o85
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zeqals6rbj51bhjn8b89
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-shenzhen-d
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      securityGroupId: 'SecurityGroupId',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      securityGroupId: 'string',
      vswitchId: 'string',
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

