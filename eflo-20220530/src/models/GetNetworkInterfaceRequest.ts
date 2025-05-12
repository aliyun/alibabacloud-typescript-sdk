// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNetworkInterfaceRequest extends $dara.Model {
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * This parameter is required.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Subnet of Lingjun
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      networkInterfaceId: 'NetworkInterfaceId',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkInterfaceId: 'string',
      regionId: 'string',
      subnetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

