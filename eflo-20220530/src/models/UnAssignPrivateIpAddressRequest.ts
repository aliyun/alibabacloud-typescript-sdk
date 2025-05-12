// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssignPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * 141cccd6-dfbd-11ec-b8e8-0242ac110003
   */
  clientToken?: string;
  /**
   * @remarks
   * IP unique identifier
   * 
   * This parameter is required.
   * 
   * @example
   * sip-xxxx
   */
  ipName?: string;
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
   * The private IP address of the instance.
   * 
   * @example
   * 10.209.75.242
   */
  privateIpAddress?: string;
  /**
   * @remarks
   * Region
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Subnet
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      ipName: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
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

