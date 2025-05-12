// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLniPrivateIpAddressRequest extends $dara.Model {
  /**
   * @remarks
   * IP unique identifier
   * 
   * This parameter is required.
   * 
   * @example
   * sip-xxxxx
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
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: 'string',
      networkInterfaceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

