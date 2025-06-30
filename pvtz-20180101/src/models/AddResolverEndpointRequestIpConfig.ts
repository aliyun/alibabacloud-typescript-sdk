// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddResolverEndpointRequestIpConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou-a
   */
  azId?: string;
  /**
   * @remarks
   * The IPv4 CIDR block of the vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * 172.16.0.0/24
   */
  cidrBlock?: string;
  /**
   * @remarks
   * The source IP address of outbound traffic. The IP address must be within the specified CIDR block. If you leave this parameter empty, the system automatically allocates an IP address.
   * 
   * @example
   * 172.16.xx.xx
   */
  ip?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sjqkql
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      azId: 'AzId',
      cidrBlock: 'CidrBlock',
      ip: 'Ip',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      azId: 'string',
      cidrBlock: 'string',
      ip: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

