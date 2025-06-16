// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpNetworksResponseBodyBgpNetworksBgpNetwork extends $dara.Model {
  /**
   * @remarks
   * The CIDR block of the advertised BGP network.
   * 
   * @example
   * 10.1.XX.XX/24
   */
  dstCidrBlock?: string;
  /**
   * @remarks
   * The ID of the VBR.
   * 
   * @example
   * vrt-bp1lhl0taikrteen8****
   */
  routerId?: string;
  /**
   * @remarks
   * The status of the advertised BGP network.
   * 
   * @example
   * Enabled
   */
  status?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) in which the master instance resides.
   * 
   * @example
   * vpc-bp1qpo0kug3a2*****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      dstCidrBlock: 'DstCidrBlock',
      routerId: 'RouterId',
      status: 'Status',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dstCidrBlock: 'string',
      routerId: 'string',
      status: 'string',
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

