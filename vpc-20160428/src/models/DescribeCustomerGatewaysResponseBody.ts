// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGatewayTagsTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * TagValue
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

export class DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGatewayTags extends $dara.Model {
  tag?: DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGatewayTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGatewayTagsTag },
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

export class DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) of the gateway device in the data center.
   * 
   * @example
   * 65530
   */
  asn?: number;
  /**
   * @remarks
   * The authentication key that is used to connect to the gateway device in the data center by using Border Gateway Protocol (BGP).
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The time when the customer gateway was created. Unit: millisecond.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The customer gateway ID.
   * 
   * @example
   * cgw-bp1pvpl9r9adju6l5****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * The description of the customer gateway.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The IP address of the gateway device in the data center.
   * 
   * @example
   * 139.32.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the customer gateway.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group to which the customer gateway belongs.
   * 
   * You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query resource groups.
   * 
   * @example
   * rg-acfmzs372yg****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are added to the customer gateway.
   */
  tags?: DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGatewayTags;
  static names(): { [key: string]: string } {
    return {
      asn: 'Asn',
      authKey: 'AuthKey',
      createTime: 'CreateTime',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
      ipAddress: 'IpAddress',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asn: 'number',
      authKey: 'string',
      createTime: 'number',
      customerGatewayId: 'string',
      description: 'string',
      ipAddress: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tags: DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGatewayTags,
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

export class DescribeCustomerGatewaysResponseBodyCustomerGateways extends $dara.Model {
  customerGateway?: DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway[];
  static names(): { [key: string]: string } {
    return {
      customerGateway: 'CustomerGateway',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGateway: { 'type': 'array', 'itemType': DescribeCustomerGatewaysResponseBodyCustomerGatewaysCustomerGateway },
    };
  }

  validate() {
    if(Array.isArray(this.customerGateway)) {
      $dara.Model.validateArray(this.customerGateway);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomerGatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about customer gateways.
   */
  customerGateways?: DescribeCustomerGatewaysResponseBodyCustomerGateways;
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
   * The number of entries returned per page.
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
   * E82612A9-CB90-4D7E-B394-1DB7F6509B29
   */
  requestId?: string;
  /**
   * @remarks
   * The number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customerGateways: 'CustomerGateways',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customerGateways: DescribeCustomerGatewaysResponseBodyCustomerGateways,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.customerGateways && typeof (this.customerGateways as any).validate === 'function') {
      (this.customerGateways as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

