// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6GatewayAttributeResponseBodyTagsTag extends $dara.Model {
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

export class DescribeIpv6GatewayAttributeResponseBodyTags extends $dara.Model {
  tag?: DescribeIpv6GatewayAttributeResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeIpv6GatewayAttributeResponseBodyTagsTag },
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

export class DescribeIpv6GatewayAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business status of the IPv6 gateway. Valid values:
   * 
   * - **Normal**: Normal.
   * 
   * - **FinancialLocked**: financial lock.
   * 
   * - **SecurityLocked**: security lock.
   * 
   * @example
   * Normal
   */
  businessStatus?: string;
  /**
   * @remarks
   * The time when the IPv6 gateway was created.
   * 
   * @example
   * 2018-12-05T09:21:35Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the IPv6 gateway.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The expiration time of the IPv6 gateway.
   * 
   * @example
   * 2019-1-05T09:21:35Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the gateway route table associated with the IPv6 gateway.
   * 
   * 
   * > This parameter is displayed only for IPv6 gateways that are associated with a gateway route table.
   * 
   * @example
   * vtb-5ts0ohchwkp3dydt2****
   */
  gatewayRouteTableId?: string;
  /**
   * @remarks
   * The billing method of the IPv6 gateway.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The instance ID of the IPv6 gateway.
   * 
   * @example
   * ipv6gw-hp3y0l3ln89j8cdvf****
   */
  ipv6GatewayId?: string;
  /**
   * @remarks
   * The name of the IPv6 gateway.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the IPv6 gateway owner.
   * 
   * >Notice: This value is of the Long type. Precision loss may occur in certain programming languages. Use this value with caution.
   * 
   * @example
   * 2546073170691****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the IPv6 gateway.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the IPv6 gateway. Valid values:
   * 
   * - **Pending**: being configured.
   * 
   * - **Available**: active.
   * 
   * @example
   * Available
   */
  status?: string;
  tags?: DescribeIpv6GatewayAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the VPC to which the IPv6 gateway belongs.
   * 
   * @example
   * vpc-123sedrfswd23****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      businessStatus: 'BusinessStatus',
      creationTime: 'CreationTime',
      description: 'Description',
      expiredTime: 'ExpiredTime',
      gatewayRouteTableId: 'GatewayRouteTableId',
      instanceChargeType: 'InstanceChargeType',
      ipv6GatewayId: 'Ipv6GatewayId',
      name: 'Name',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      requestId: 'RequestId',
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
      gatewayRouteTableId: 'string',
      instanceChargeType: 'string',
      ipv6GatewayId: 'string',
      name: 'string',
      ownerId: 'number',
      regionId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: DescribeIpv6GatewayAttributeResponseBodyTags,
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

