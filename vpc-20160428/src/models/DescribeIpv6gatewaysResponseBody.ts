// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTagsTag extends $dara.Model {
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

export class DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTags extends $dara.Model {
  tag?: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTagsTag },
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

export class DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway extends $dara.Model {
  businessStatus?: string;
  creationTime?: string;
  description?: string;
  expiredTime?: string;
  instanceChargeType?: string;
  ipv6GatewayId?: string;
  name?: string;
  ownerId?: number;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  tags?: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTags;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      instanceChargeType: 'InstanceChargeType',
      ipv6GatewayId: 'Ipv6GatewayId',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      tags: 'Tags',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessStatus: 'string',
      creationTime: 'string',
      description: 'string',
      expiredTime: 'string',
      instanceChargeType: 'string',
      ipv6GatewayId: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6GatewayTags,
      vpcId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysResponseBodyIpv6Gateways extends $dara.Model {
  ipv6Gateway?: DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway[];
  static names(): { [key: string]: string } {
    return {
      ipv6Gateway: 'Ipv6Gateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Gateway: { 'type': 'array', 'itemType': DescribeIpv6GatewaysResponseBodyIpv6GatewaysIpv6Gateway },
    };
  }

  validate() {
    if(Array.isArray(this.ipv6Gateway)) {
      $dara.Model.validateArray(this.ipv6Gateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeIpv6GatewaysResponseBody extends $dara.Model {
  ipv6Gateways?: DescribeIpv6GatewaysResponseBodyIpv6Gateways;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
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
   * E3A06196-3E7C-490D-8F39-CB4B5A0CE8AD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipv6Gateways: 'Ipv6Gateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6Gateways: DescribeIpv6GatewaysResponseBodyIpv6Gateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.ipv6Gateways && typeof (this.ipv6Gateways as any).validate === 'function') {
      (this.ipv6Gateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

