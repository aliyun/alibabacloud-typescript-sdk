// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerGatewayRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string.
   * 
   * It can be at most 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.
   * 
   * You can specify at most 20 tag keys in each call.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string and cannot exceed 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify at most 20 tag values in each call.
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

export class CreateCustomerGatewayRequest extends $dara.Model {
  /**
   * @remarks
   * The autonomous system number (ASN) of the gateway device in your data center. This parameter is required If you want to use Border Gateway Protocol (BGP) for the IPsec-VPN connection. Valid values: 1 to 4294967295. 45104 is not supported.
   * 
   * **Asn** is a 4-byte number. You can enter it in two segments and separate the first 16 bits from the following 16 bits with a period (.). Enter the number in each segment in decimal format.
   * 
   * For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by using the following formula: 123 × 65536 + 456 = 8061384.
   * 
   * > - We recommend that you use a private ASN to establish BGP connections to Alibaba Cloud. For information about the range of private ASNs, see the relevant documentation.
   * > - 45104 is a unique identifier assigned by IANA to Alibaba Cloud. It is used to identify Alibaba Cloud during route selection and data transmission over the Internet.
   * 
   * @example
   * 65530
   */
  asn?: string;
  /**
   * @remarks
   * The authentication key of the BGP routing protocol for the gateway device in the data center.
   * 
   * The key must be 1 to 64 characters in length. It can contain only ASCII characters and cannot contain spaces or question marks (?).
   * 
   * @example
   * AuthKey****
   */
  authKey?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.
   * 
   * > If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the customer gateway.
   * 
   * The description must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The static IP address of the gateway device in the data center.
   * 
   * *   If you want to create a public IPsec-VPN connection, enter a public IP address.
   * *   If you want to create a private IPsec-VPN connection, enter a private IP address.
   * 
   * You cannot use the following IP addresses. Otherwise, a IPsec-VPN connection cannot be established:
   * 
   * *   100.64.0.0~100.127.255.255
   * *   127.0.0.0~127.255.255.255
   * *   169.254.0.0~169.254.255.255
   * *   224.0.0.0~239.255.255.255
   * *   255.0.0.0~255.255.255.255
   * 
   * This parameter is required.
   * 
   * @example
   * 101.12.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the customer gateway.
   * 
   * The name must be 1 to 100 characters in length, and cannot start with `http://` or `https://`.
   * 
   * @example
   * nametest
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the customer gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the customer gateway belongs.
   * 
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the resource group list.
   * 
   * - If you do not specify a resource group, the customer gateway will belong to the default resource group after being created.
   * 
   * @example
   * rg-aek2qo2h4jy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be an empty string and cannot exceed 128 characters in length. It cannot start with `aliyun` or `acs:`, and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values in each call.
   */
  tags?: CreateCustomerGatewayRequestTags[];
  static names(): { [key: string]: string } {
    return {
      asn: 'Asn',
      authKey: 'AuthKey',
      clientToken: 'ClientToken',
      description: 'Description',
      ipAddress: 'IpAddress',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asn: 'string',
      authKey: 'string',
      clientToken: 'string',
      description: 'string',
      ipAddress: 'string',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: { 'type': 'array', 'itemType': CreateCustomerGatewayRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

