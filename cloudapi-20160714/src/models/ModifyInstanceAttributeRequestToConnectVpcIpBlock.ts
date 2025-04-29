// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceAttributeRequestToConnectVpcIpBlock extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the VSwitch.
   * 
   * @example
   * 172.16.0.0/16
   */
  cidrBlock?: string;
  /**
   * @remarks
   * Specifies whether the CIDR block is a custom CIDR block.
   * 
   * @example
   * false
   */
  customized?: boolean;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-wz94cqvaoe1ipxxxxxx
   */
  vswitchId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-a
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      cidrBlock: 'CidrBlock',
      customized: 'Customized',
      vswitchId: 'VswitchId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrBlock: 'string',
      customized: 'boolean',
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

