// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyZoneMappingsLoadBalancerAddresses extends $dara.Model {
  /**
   * @remarks
   * An IPv4 address.
   * 
   * This parameter takes effect when **AddressIPVersion** is set to **IPv4** or **DualStack**. The network type is determined by the value of **AddressType**.
   * 
   * @example
   * 192.168.10.1
   */
  address?: string;
  /**
   * @remarks
   * The elastic IP address (EIP).
   * 
   * @example
   * eip-uf6wm****1zj9
   */
  allocationId?: string;
  /**
   * @remarks
   * The type of EIP. Valid values:
   * 
   * *   **Common**: an EIP.
   * *   **Anycast**: an Anycast EIP.
   * 
   * >  For more information about the regions in which ALB supports Anycast EIPs, see [Limits](https://help.aliyun.com/document_detail/460727.html).
   * 
   * @example
   * Common
   */
  eipType?: string;
  /**
   * @remarks
   * The private IPv4 address.
   * 
   * @example
   * 10.0.1.181
   */
  intranetAddress?: string;
  /**
   * @remarks
   * The health status of the private IPv4 address of the ALB instance. 
   * This parameter is returned only when the Status of the zone is Active.Valid values:
   * 
   * - **Healthy**
   * 
   * - **Unhealthy**
   * 
   * @example
   * Healthy
   */
  intranetAddressHcStatus?: string;
  /**
   * @remarks
   * The IPv4 link-local addresses. The IP addresses that the ALB instance uses to communicate with the backend servers.
   */
  ipv4LocalAddresses?: string[];
  /**
   * @remarks
   * An IPv6 address.
   * 
   * This parameter takes effect only when **AddressIPVersion** is set to **DualStack**. The network type is determined by the value of **Ipv6AddressType**.
   * 
   * @example
   * 2408:XXXX:39d:eb00::/56
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The health status of the private IPv6 address of the ALB instance. 
   * This parameter is returned only when the Status of the zone is Active.Valid values:
   * 
   * - **Healthy**
   * 
   * - **Unhealthy**
   * 
   * @example
   * Healthy
   */
  ipv6AddressHcStatus?: string;
  /**
   * @remarks
   * The IPv6 link-local addresses. The IP addresses that the ALB instance uses to communicate with the backend servers.
   */
  ipv6LocalAddresses?: string[];
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      allocationId: 'AllocationId',
      eipType: 'EipType',
      intranetAddress: 'IntranetAddress',
      intranetAddressHcStatus: 'IntranetAddressHcStatus',
      ipv4LocalAddresses: 'Ipv4LocalAddresses',
      ipv6Address: 'Ipv6Address',
      ipv6AddressHcStatus: 'Ipv6AddressHcStatus',
      ipv6LocalAddresses: 'Ipv6LocalAddresses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      allocationId: 'string',
      eipType: 'string',
      intranetAddress: 'string',
      intranetAddressHcStatus: 'string',
      ipv4LocalAddresses: { 'type': 'array', 'itemType': 'string' },
      ipv6Address: 'string',
      ipv6AddressHcStatus: 'string',
      ipv6LocalAddresses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4LocalAddresses)) {
      $dara.Model.validateArray(this.ipv4LocalAddresses);
    }
    if(Array.isArray(this.ipv6LocalAddresses)) {
      $dara.Model.validateArray(this.ipv6LocalAddresses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

