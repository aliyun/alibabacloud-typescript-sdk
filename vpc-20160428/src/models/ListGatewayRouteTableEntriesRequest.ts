// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewayRouteTableEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry in the gateway route table that you want to query.
   * 
   * @example
   * 192.168.0.5
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the gateway route table to query.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-5ts0ohchwkp3dydt2****
   */
  gatewayRouteTableId?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query. Valid values: **1** to **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Valid values:
   * - If this is the first query or no subsequent query exists, leave this parameter empty.
   * - If a subsequent query exists, set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the gateway route table that you want to query.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * ap-southeast-6
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      gatewayRouteTableId: 'GatewayRouteTableId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      gatewayRouteTableId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

