// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDedicatedHostAttributeRequestNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The timeout period for a UDP session between a Server Load Balancer (SLB) instance and the dedicated host. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  slbUdpTimeout?: number;
  /**
   * @remarks
   * The timeout period for a UDP session between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Valid values: 15 to 310.
   * 
   * @example
   * 60
   */
  udpTimeout?: number;
  static names(): { [key: string]: string } {
    return {
      slbUdpTimeout: 'SlbUdpTimeout',
      udpTimeout: 'UdpTimeout',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slbUdpTimeout: 'number',
      udpTimeout: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

