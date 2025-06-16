// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVpcPublishedRouteEntriesRequest extends $dara.Model {
  /**
   * @example
   * 47.100.XX.XX/16
   */
  destinationCidrBlock?: string;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vtb-bp145q7glnuzd****
   */
  routeTableId?: string;
  /**
   * @example
   * ecr-dhw2xsds5****
   */
  targetInstanceId?: string;
  /**
   * @remarks
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

