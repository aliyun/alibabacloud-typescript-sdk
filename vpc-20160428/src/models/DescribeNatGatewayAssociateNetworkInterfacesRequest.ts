// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNatGatewayAssociateNetworkInterfacesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter. Valid values:
   * 
   * - ResourceId
   * >Set Value to the ID of the EPS resource that you want to query.
   * - NetworkInterfaceId
   * >Set Value to the ID of the elastic network interface (ENI) that you want to query.
   * - ResourceOwnerId
   * >Set Value to the UID of the user to whom the EPS resource belongs for resource ownership query.
   * 
   * @example
   * ResourceId
   */
  key?: string;
  /**
   * @remarks
   * The filter value. You can specify multiple values separated by commas (,).
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
   * The tag key of the instance. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * FinanceDept
   */
  key?: string;
  /**
   * @remarks
   * The tag key of the instance. You can specify up to 20 tag keys. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
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
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.
   * 
   * > If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.
   * 
   * @example
   * 5A2CFF0E-5718-45B5-9D4D-70B3FF****
   */
  clientToken?: string;
  /**
   * @remarks
   * The filter information. You can specify key-value pairs to filter the query results.
   */
  filter?: DescribeNatGatewayAssociateNetworkInterfacesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The ID of the NAT gateway to query.
   * 
   * This parameter is required.
   * 
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The pagination token. Valid values:
   * 
   * - If this is the first query or no subsequent query is required, you do not need to specify this parameter.
   * 
   * - If a subsequent query is required, set the value to the **NextToken** value returned in the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the NAT gateway.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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
   * The list of resource tags.
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

