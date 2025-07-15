// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth extends $dara.Model {
  /**
   * @remarks
   * The dedicated Internet bandwidth of the IPv6 address. Unit: Mbit/s.
   * 
   * @example
   * 5
   */
  bandwidth?: number;
  /**
   * @remarks
   * The status of the Internet bandwidth of the IPv6 address. Valid values:
   * 
   * *   **Normal**
   * *   **FinancialLocked**
   * *   **SecurityLocked**
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * Indicates whether renewal data is included. Valid values:
   * 
   * *   **false**
   * *   **true** **true** is returned only when **IncludeReservationData** is set to **true** and some orders have not taken effect.
   * 
   * @example
   * false
   */
  hasReservationData?: boolean;
  /**
   * @remarks
   * The billing method of the Internet bandwidth of the IPv6 address. Valid values:
   * 
   * Only **PostPaid** may be returned, which indicates the pay-as-you-go billing method.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The billing method of the Internet bandwidth of the IPv6 address. Valid values:
   * 
   * *   **PayByTraffic**
   * *   **PayByBandwidth**
   * 
   * @example
   * PayByTraffic
   */
  internetChargeType?: string;
  /**
   * @remarks
   * The Internet bandwidth ID of the IPv6 address.
   * 
   * @example
   * ipv6bw-hp3b35oq1fj50kbv****
   */
  ipv6InternetBandwidthId?: string;
  /**
   * @remarks
   * The time when the renewal takes effect. The time is displayed in the `YYYY-MM-DDThh:mm:ssZ` format.
   * 
   * @example
   * 2021-05-23T16:00:00Z
   */
  reservationActiveTime?: string;
  /**
   * @remarks
   * The maximum bandwidth after the renewal takes effect. Unit: Mbit/s.
   * 
   * @example
   * 12
   */
  reservationBandwidth?: number;
  /**
   * @remarks
   * The metering method that is used after the renewal takes effect.
   * 
   * *   **PayByTraffic**
   * *   **PayByBandwidth**
   * 
   * @example
   * PayByTraffic
   */
  reservationInternetChargeType?: string;
  /**
   * @remarks
   * The type of the renewal order. Only **RENEW** may be returned, which indicates that the order is placed for service renewal.
   * 
   * @example
   * RENEW
   */
  reservationOrderType?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      businessStatus: 'BusinessStatus',
      hasReservationData: 'HasReservationData',
      instanceChargeType: 'InstanceChargeType',
      internetChargeType: 'InternetChargeType',
      ipv6InternetBandwidthId: 'Ipv6InternetBandwidthId',
      reservationActiveTime: 'ReservationActiveTime',
      reservationBandwidth: 'ReservationBandwidth',
      reservationInternetChargeType: 'ReservationInternetChargeType',
      reservationOrderType: 'ReservationOrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      businessStatus: 'string',
      hasReservationData: 'boolean',
      instanceChargeType: 'string',
      internetChargeType: 'string',
      ipv6InternetBandwidthId: 'string',
      reservationActiveTime: 'string',
      reservationBandwidth: 'number',
      reservationInternetChargeType: 'string',
      reservationOrderType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. The tag key cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length. It can be an empty string. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify at most 20 tag values at a time.
   * 
   * @example
   * yunke
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTags extends $dara.Model {
  tag?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeIpv6AddressesResponseBodyIpv6Addresses extends $dara.Model {
  ipv6Address?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address[];
  static names(): { [key: string]: string } {
    return {
      ipv6Address: 'Ipv6Address',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Address: { 'type': 'array', 'itemType': DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6Address },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Address)) {
      $dara.Model.validateArray(this.ipv6Address);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6AddressesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the IPv6 address.
   */
  ipv6Addresses?: DescribeIpv6AddressesResponseBodyIpv6Addresses;
  /**
   * @remarks
   * The page number of the returned page. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AA4486A8-B6AE-469E-AB09-820EF8ECFA2B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6Addresses: 'Ipv6Addresses',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Addresses: DescribeIpv6AddressesResponseBodyIpv6Addresses,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6Addresses && typeof (this.ipv6Addresses as any).validate === 'function') {
      (this.ipv6Addresses as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

