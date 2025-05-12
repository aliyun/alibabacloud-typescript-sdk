// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to assign a mac address.
   * 
   * @example
   * true
   */
  assignMac?: boolean;
  /**
   * @remarks
   * By default, popApi is not ignored and idempotent
   * 
   * @example
   * 3fd79d62-ab1d-11ec-9a53-0242ac110004
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the variable.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the network interface controller.
   * 
   * This parameter is required.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  /**
   * @remarks
   * The secondary private IP address.
   * 
   * @example
   * 10.0.6.194
   */
  privateIpAddress?: string;
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
   * The default value is false. If you set the value to true, the secondary private IP address application process can be accelerated.
   * 
   * >  For more information, submit a ticket.
   * 
   * @example
   * false
   */
  skipConfig?: boolean;
  /**
   * @remarks
   * It belongs to the Lingjun subnet.
   * 
   * This parameter is required.
   * 
   * @example
   * subnet-f3zfzmnc
   */
  subnetId?: string;
  static names(): { [key: string]: string } {
    return {
      assignMac: 'AssignMac',
      clientToken: 'ClientToken',
      description: 'Description',
      networkInterfaceId: 'NetworkInterfaceId',
      privateIpAddress: 'PrivateIpAddress',
      regionId: 'RegionId',
      skipConfig: 'SkipConfig',
      subnetId: 'SubnetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignMac: 'boolean',
      clientToken: 'string',
      description: 'string',
      networkInterfaceId: 'string',
      privateIpAddress: 'string',
      regionId: 'string',
      skipConfig: 'boolean',
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

