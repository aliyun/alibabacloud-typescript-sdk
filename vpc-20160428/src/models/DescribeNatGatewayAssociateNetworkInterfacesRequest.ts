// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewayAssociateNetworkInterfacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key.
   * 
   * *   ResourceId
   * 
   * >  Specify the service resource ID in the Value field.
   * 
   * *   NetworkInterfaceId
   * 
   * >  Specify the ENI ID in the Value field.
   * 
   * *   ResourceOwnerId
   * 
   * >  Specify the UID of the account to which the service resource belongs.
   * 
   * @example
   * ResourceId
   */
  key?: string;
  /**
   * @remarks
   * Separate multiple values with commas (,).
   * 
   * @example
   * ep-8psre8c8936596cd****
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

export class DescribeNatGatewayAssociateNetworkInterfacesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key You can specify at most 20 tag keys. It cannot be an empty string,
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag key. You can specify at most 20 tag keys. It cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
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

export class DescribeNatGatewayAssociateNetworkInterfacesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.
   * 
   * >  If you do not set this parameter, the value of **RequestId** is used.**** The **RequestId** may be different for each request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The filter information. You can specify a filter key and a filter value.
   */
  filter?: DescribeNatGatewayAssociateNetworkInterfacesRequestFilter[];
  /**
   * @remarks
   * The number of entries to return per page. Valid values: **1 to 100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. Valid value:
   * 
   * *   If no value is returned for NetToken, you do not need to specify this parameter.
   * *   If a value is returned for NextToken, you must specify the token that is obtained from the previous query as the value of **NextToken**.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Internet NAT gateway.
   * 
   * Call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmxazdjdhd****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The information about resource tags.
   */
  tag?: DescribeNatGatewayAssociateNetworkInterfacesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      filter: 'Filter',
      maxResults: 'MaxResults',
      natGatewayId: 'NatGatewayId',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      filter: { 'type': 'array', 'itemType': DescribeNatGatewayAssociateNetworkInterfacesRequestFilter },
      maxResults: 'number',
      natGatewayId: 'string',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeNatGatewayAssociateNetworkInterfacesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

