// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPublishedRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block of the route entry, supporting both IPv4 and IPv6 segments.
   * 
   * @example
   * 47.100.XX.XX/16
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The number of entries to display per batch query. Range: **1**~**500**, default value is **50**.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * Indicates whether there is a token for the next query. Values:
   * - If **NextToken** is empty, it means there is no next query.
   * - If **NextToken** has a return value, this value indicates the token for the start of the next query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the route table.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-bp145q7glnuzd****
   */
  routeTableId?: string;
  /**
   * @remarks
   * The ID of the route publishing target instance.
   * 
   * @example
   * ecr-dhw2xsds5****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The type of the route publishing target.
   * 
   * This parameter is required.
   * 
   * @example
   * ECR
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeTableId: 'RouteTableId',
      targetInstanceId: 'TargetInstanceId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeTableId: 'string',
      targetInstanceId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

