// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomerGatewayResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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

export class DescribeCustomerGatewayResponseBodyTags extends $dara.Model {
  tag?: DescribeCustomerGatewayResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeCustomerGatewayResponseBodyTagsTag },
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

export class DescribeCustomerGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) of the gateway device in the data center.
   * 
   * @example
   * 65535
   */
  asn?: number;
  /**
   * @remarks
   * The authentication key of the Border Gateway Protocol (BGP) routing protocol for the gateway device in the data center.
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The timestamp generated when the customer gateway was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1492747187000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the customer gateway.
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
   * The request ID.
   * 
   * @example
   * A0457BC9-6C0F-4437-AB9D-FB2EABC1D6A2
   */
  requestId?: string;
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
   * The list of tags added to the customer gateway.
   */
  tags?: DescribeCustomerGatewayResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      asn: 'Asn',
      authKey: 'AuthKey',
      createTime: 'CreateTime',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
      ipAddress: 'IpAddress',
      name: 'Name',
      requestId: 'RequestId',
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
      requestId: 'string',
      resourceGroupId: 'string',
      tags: DescribeCustomerGatewayResponseBodyTags,
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

