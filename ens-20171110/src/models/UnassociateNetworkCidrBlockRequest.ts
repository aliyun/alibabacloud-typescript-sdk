// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateNetworkCidrBlockRequest extends $dara.Model {
  /**
   * @remarks
   * The secondary IPv6 CIDR block to delete.
   * 
   * @example
   * 2408:XXXX:0:a600::/110
   */
  ipv6CidrBlock?: string;
  /**
   * @remarks
   * The network ID.
   * 
   * This parameter is required.
   * 
   * @example
   * n-257gqcdfvx6n****
   */
  networkId?: string;
  /**
   * @remarks
   * The secondary IPv4 CIDR block to delete.
   * 
   * @example
   * 10.XX.XX.0/24
   */
  secondaryCidrBlock?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6CidrBlock: 'Ipv6CidrBlock',
      networkId: 'NetworkId',
      secondaryCidrBlock: 'SecondaryCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6CidrBlock: 'string',
      networkId: 'string',
      secondaryCidrBlock: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

