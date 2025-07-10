// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLoadBalancersResponseBodyLoadBalancersZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic network interface (ENI) used by the GWLB instance.
   * 
   * @example
   * eni-bp17qv9zbzyqy629****
   */
  eniId?: string;
  /**
   * @remarks
   * The private IPv4 address.
   * 
   * @example
   * 192.168.XX.XX
   */
  privateIpv4Address?: string;
  static names(): { [key: string]: string } {
    return {
      eniId: 'EniId',
      privateIpv4Address: 'PrivateIpv4Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eniId: 'string',
      privateIpv4Address: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

