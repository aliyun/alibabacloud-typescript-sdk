// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostNetworkAttributes extends $dara.Model {
  /**
   * @remarks
   * The timeout period of the UDP session that is established between Server Load Balancer (SLB) and the dedicated host. Unit: seconds. Only 60 is returned.
   * 
   * @example
   * 60
   */
  slbUdpTimeout?: number;
  /**
   * @remarks
   * The timeout period of the UDP session that is established between a user and an Alibaba Cloud service on the dedicated host. Unit: seconds. Only 60 is returned.
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

