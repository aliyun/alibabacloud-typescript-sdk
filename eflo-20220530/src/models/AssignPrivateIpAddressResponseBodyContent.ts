// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssignPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * The unique IP identifier.
   * 
   * @example
   * sip-8exxqa2r
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID.
   * 
   * @example
   * lni-bp18exxqa2rvfn45e5pz
   */
  networkInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ipName: 'IpName',
      networkInterfaceId: 'NetworkInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipName: 'string',
      networkInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

