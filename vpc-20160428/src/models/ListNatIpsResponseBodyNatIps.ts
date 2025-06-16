// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpsResponseBodyNatIps extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the IP address is the default IP address of the NAT gateway. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the Virtual Private Cloud (VPC) NAT gateway to which the IP address is assigned.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 192.168.0.126
   */
  natIp?: string;
  /**
   * @remarks
   * The CIDR block to which the IP address belongs.
   * 
   * @example
   * 192.168.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the IP address.
   * 
   * @example
   * default
   */
  natIpDescription?: string;
  /**
   * @remarks
   * The ID of the IP address.
   * 
   * @example
   * vpcnatip-gw8a863sut1zijxh0****
   */
  natIpId?: string;
  /**
   * @remarks
   * The name of the IP address.
   * 
   * @example
   * default
   */
  natIpName?: string;
  /**
   * @remarks
   * The status of the IP address. Valid values:
   * 
   * *   **Available**: available
   * *   **Deleted**: deleted
   * *   **Deleting**: deleting
   * *   **Creating**: creating
   * *   **Associated**: specified in an SNAT or DNAT entry
   * *   **Associating**: being specified in an SNAT or DNAT entry
   * 
   * @example
   * Available
   */
  natIpStatus?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      natGatewayId: 'NatGatewayId',
      natIp: 'NatIp',
      natIpCidr: 'NatIpCidr',
      natIpDescription: 'NatIpDescription',
      natIpId: 'NatIpId',
      natIpName: 'NatIpName',
      natIpStatus: 'NatIpStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'boolean',
      natGatewayId: 'string',
      natIp: 'string',
      natIpCidr: 'string',
      natIpDescription: 'string',
      natIpId: 'string',
      natIpName: 'string',
      natIpStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

