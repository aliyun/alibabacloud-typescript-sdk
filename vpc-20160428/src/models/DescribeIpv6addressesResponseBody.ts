// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth extends $dara.Model {
  bandwidth?: number;
  businessStatus?: string;
  hasReservationData?: boolean;
  instanceChargeType?: string;
  internetChargeType?: string;
  ipv6InternetBandwidthId?: string;
  reservationActiveTime?: string;
  reservationBandwidth?: number;
  reservationInternetChargeType?: string;
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
  key?: string;
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
  addressType?: string;
  allocationTime?: string;
  associatedInstanceId?: string;
  associatedInstanceType?: string;
  ipv6Address?: string;
  ipv6AddressDescription?: string;
  ipv6AddressId?: string;
  ipv6AddressName?: string;
  ipv6GatewayId?: string;
  ipv6InternetBandwidth?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressIpv6InternetBandwidth;
  ipv6Isp?: string;
  networkType?: string;
  realBandwidth?: number;
  resourceGroupId?: string;
  serviceManaged?: number;
  status?: string;
  tags?: DescribeIpv6AddressesResponseBodyIpv6AddressesIpv6AddressTags;
  vSwitchId?: string;
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

