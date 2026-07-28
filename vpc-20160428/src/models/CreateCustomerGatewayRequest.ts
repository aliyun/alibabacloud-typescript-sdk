// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerGatewayRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify this parameter, the value cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * The tag value can be up to 128 characters in length and can be an empty string. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key corresponds to one tag value. You can specify up to 20 tag values at a time.
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
   * The Autonomous System Number (ASN) of the gateway device in the on-premises data center. This parameter is required if you plan to enable Border Gateway Protocol (BGP) dynamic routing for the IPsec-VPN connection. Valid values: 1 to 4294967295. The value 45104 is not supported.
   * 
   * **Asn** is a 4-byte number that can be entered in the two-segment format: the first 16 bits.the last 16 bits. Each segment is entered in decimal notation.
   * 
   * For example, if you enter 123.456, the ASN is 123 × 65536 + 456 = 8061384.
   * 
   * > - Use a private ASN to establish a BGP connection with Alibaba Cloud. For more information about the range of private ASNs, refer to the relevant documentation.
   * > - 45104 is a unique identity allocated to Alibaba Cloud Computing Co., Ltd. by the Internet Assigned Numbers Authority (IANA). It is used to identify Alibaba Cloud in global Internet routing and data transmission.
   * 
   * @example
   * 65530
   */
  asn?: string;
  /**
   * @remarks
   * The authentication key of the BGP routing protocol for the gateway device in the on-premises data center.
   * 
   * The key must be 1 to 64 characters in length and can contain only ASCII characters. Spaces, Chinese characters, and half-width question marks (?) are not supported.
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
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44****
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the customer gateway.  
   * 
   * The description must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The static IP address of the gateway device in the on-premises data center.
   * 
   * - If you want to create an IPsec-VPN connection that uses the public network type, enter a public IP address.
   * 
   * - If you want to create an IPsec-VPN connection that uses the private network type, enter a private IP address.
   * 
   * The following IP addresses are not supported. If you use these IP addresses, the IPsec-VPN connection cannot be established:
   * 
   * - 100.64.0.0 to 100.127.255.255
   * - 127.0.0.0 to 127.255.255.255
   * - 169.254.0.0 to 169.254.255.255
   * - 224.0.0.0 to 239.255.255.255
   * - 255.0.0.0 to 255.255.255.255
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
   * The name must be 1 to 100 characters in length and cannot start with `http://` or `https://`.
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
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
   * - You can call the [ListResourceGroups](https://help.aliyun.com/document_detail/158855.html) operation to query the resource group ID.
   * - If you do not specify a resource group, the customer gateway is added to the default resource group after it is created.
   * 
   * @example
   * rg-aek2qo2h4jy****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags to add to the customer gateway.
   * 
   * You can add up to 20 tags to a customer gateway at a time.
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

