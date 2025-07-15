// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpv6GatewayAttributeResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of tag N. You can specify at most 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 128 characters in length. It must start with a letter and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The value of tag N. You can specify at most 20 tag values. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length. It must start with a letter and can contain digits, periods (.), underscores (_), and hyphens (-). It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceJoshua
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
   * The status of the IPv6 gateway. Valid values:
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
   * The time when the IPv6 gateway expires.
   * 
   * @example
   * 2019-1-05T09:21:35Z
   */
  expiredTime?: string;
  /**
   * @remarks
   * The ID of the gateway route table associated with the IPv6 gateway.
   * 
   * >  This parameter is available only when the IPv6 gateway is associated with a gateway route table.
   * 
   * @example
   * vtb-5ts0ohchwkp3dydt2****
   */
  gatewayRouteTableId?: string;
  /**
   * @remarks
   * The metering method of the IPv6 gateway.
   * 
   * @example
   * PostPaid
   */
  instanceChargeType?: string;
  /**
   * @remarks
   * The ID of the IPv6 gateway.
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
   * The ID of the Alibaba Cloud account to which the IPv6 gateway belongs.
   * 
   * >  This value is of the Long type. In some languages, the precision may be lost. Use this value with caution.
   * 
   * @example
   * 2546073170691****
   */
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the IPv6 gateway is deployed.
   * 
   * @example
   * cn-huhehaote
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the IPv6 gateway. Valid values:
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
   * The information about the tags.
   */
  tags?: DescribeIpv6GatewayAttributeResponseBodyTags;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC) to which the IPv6 gateway belongs.
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

