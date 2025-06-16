// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNatIpCidrsResponseBodyNatIpCidrs extends $dara.Model {
  /**
   * @remarks
   * The time when the CIDR block was created.
   * 
   * @example
   * 2021-06-28T20:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Indicates whether the CIDR block is the default CIDR block of the NAT gateway. Valid values:
   * 
   * *   **true**: The CIDR block is the default CIDR block of the NAT gateway.
   * *   **false**: The CIDR block is not the default CIDR block of the NAT gateway.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The ID of the VPC NAT gateway.
   * 
   * @example
   * ngw-gw8v16wgvtq26vh59****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The CIDR block of the NAT gateway.
   * 
   * @example
   * 172.16.0.0/24
   */
  natIpCidr?: string;
  /**
   * @remarks
   * The description of the CIDR block of the NAT gateway.
   * 
   * @example
   * test
   */
  natIpCidrDescription?: string;
  /**
   * @remarks
   * The ID of the CIDR block of the NAT gateway.
   * 
   * @example
   * vpcnatcidr-gw8ov42ei6xh1jys2****
   */
  natIpCidrId?: string;
  /**
   * @remarks
   * The name of the CIDR block of the NAT gateway.
   * 
   * @example
   * Name
   */
  natIpCidrName?: string;
  /**
   * @remarks
   * The status of the CIDR block of the NAT gateway. If **Available** is returned, it indicates that the CIDR block is available.
   * 
   * @example
   * Available
   */
  natIpCidrStatus?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      isDefault: 'IsDefault',
      natGatewayId: 'NatGatewayId',
      natIpCidr: 'NatIpCidr',
      natIpCidrDescription: 'NatIpCidrDescription',
      natIpCidrId: 'NatIpCidrId',
      natIpCidrName: 'NatIpCidrName',
      natIpCidrStatus: 'NatIpCidrStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      isDefault: 'boolean',
      natGatewayId: 'string',
      natIpCidr: 'string',
      natIpCidrDescription: 'string',
      natIpCidrId: 'string',
      natIpCidrName: 'string',
      natIpCidrStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

