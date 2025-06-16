// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth } from "./DescribeIpv6addressesResponseBodyIpv6addressesIpv6addressIpv6internetBandwidth";
import { DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTags } from "./DescribeIpv6addressesResponseBodyIpv6addressesIpv6addressTags";


export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address extends $dara.Model {
  /**
   * @remarks
   * The type of IPv6 address. Valid values:
   * 
   * *   IPv6Address (default): indicates a single IPv6 IP.
   * *   IPv6Prefix: indicates IPv6 CIDR.
   * 
   * @example
   * IPv6Address
   */
  addressType?: string;
  /**
   * @remarks
   * The time when the IPv6 address was created.
   * 
   * @example
   * 2020-12-20T14:56:09Z
   */
  allocationTime?: string;
  /**
   * @remarks
   * The ID of the instance associated with the IPv6 address.
   * 
   * @example
   * i-2ze72wuqj4y3jl4f****
   */
  associatedInstanceId?: string;
  /**
   * @remarks
   * The type of instance associated with the IPv6 address.
   * 
   * @example
   * EcsInstance
   */
  associatedInstanceType?: string;
  /**
   * @remarks
   * The IPv6 address.
   * 
   * @example
   * 2408:XXXX:153:3921:851c:c435:7b12:1c5f
   */
  ipv6Address?: string;
  /**
   * @remarks
   * The description of the IPv6 address.
   * 
   * @example
   * test
   */
  ipv6AddressDescription?: string;
  /**
   * @remarks
   * The ID of the IPv6 address.
   * 
   * @example
   * ipv6-2zen5j4axcp5l5qyy****
   */
  ipv6AddressId?: string;
  /**
   * @remarks
   * The name of the IPv6 address.
   * 
   * @example
   * test
   */
  ipv6AddressName?: string;
  /**
   * @remarks
   * The ID of the IPv6 gateway to which the IPv6 address belongs.
   * 
   * @example
   * ipv6gw-2zewg0l66s73b4k2q****
   */
  ipv6GatewayId?: string;
  /**
   * @remarks
   * The Internet bandwidth of the IPv6 address.
   */
  ipv6InternetBandwidth?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth;
  /**
   * @remarks
   * The ISP of the IPv6 address. Valid values:
   * 
   * *   **BGP** (default)
   * *   **ChinaMobile**
   * *   **ChinaUnicom**
   * *   **ChinaTelecom**
   * 
   * @example
   * BGP
   */
  ipv6Isp?: string;
  /**
   * @remarks
   * The type of connection supported by the IPv6 address. Valid values:
   * 
   * *   **Private**
   * *   **Public**
   * 
   * @example
   * Private
   */
  networkType?: string;
  /**
   * @remarks
   * The peak bandwidth of the IPv6 address.
   * 
   * @example
   * 5
   */
  realBandwidth?: number;
  /**
   * @remarks
   * The ID of the resource group to which the IPv6 gateway belongs.
   * 
   * @example
   * rg-bp67acfmxazb4ph****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Indicates whether the instance is managed. Valid values:
   * 
   * *   **1**: yes
   * *   **0**: no
   * 
   * @example
   * 1
   */
  serviceManaged?: number;
  /**
   * @remarks
   * The status of the IPv6 address.
   * 
   * *   **Pending**
   * *   **Available**
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tag list.
   */
  tags?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTags;
  /**
   * @remarks
   * The ID of the vSwitch to which the IPv6 address belongs.
   * 
   * @example
   * vsw-25navfgbue4g****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC to which the IPv6 address belongs.
   * 
   * @example
   * vpc-bp15zckdt37pq72zv****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      addressType: 'AddressType',
      allocationTime: 'AllocationTime',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      ipv6Address: 'Ipv6Address',
      ipv6AddressDescription: 'Ipv6AddressDescription',
      ipv6AddressId: 'Ipv6AddressId',
      ipv6AddressName: 'Ipv6AddressName',
      ipv6GatewayId: 'Ipv6GatewayId',
      ipv6InternetBandwidth: 'Ipv6InternetBandwidth',
      ipv6Isp: 'Ipv6Isp',
      networkType: 'NetworkType',
      realBandwidth: 'RealBandwidth',
      resourceGroupId: 'ResourceGroupId',
      serviceManaged: 'ServiceManaged',
      status: 'Status',
      tags: 'Tags',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressType: 'string',
      allocationTime: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      ipv6Address: 'string',
      ipv6AddressDescription: 'string',
      ipv6AddressId: 'string',
      ipv6AddressName: 'string',
      ipv6GatewayId: 'string',
      ipv6InternetBandwidth: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth,
      ipv6Isp: 'string',
      networkType: 'string',
      realBandwidth: 'number',
      resourceGroupId: 'string',
      serviceManaged: 'number',
      status: 'string',
      tags: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTags,
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.ipv6InternetBandwidth && typeof (this.ipv6InternetBandwidth as any).validate === 'function') {
      (this.ipv6InternetBandwidth as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

