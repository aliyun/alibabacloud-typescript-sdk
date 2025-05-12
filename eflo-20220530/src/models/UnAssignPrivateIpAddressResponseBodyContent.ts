// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnAssignPrivateIpAddressResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * IP unique identifier
   * 
   * @example
   * sip-xxxxx
   */
  ipName?: string;
  /**
   * @remarks
   * Lingjun network interface controller ID
   * 
   * @example
   * lni-bp164jwjpdq4lnsy83s5
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

