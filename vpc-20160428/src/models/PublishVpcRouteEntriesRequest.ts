// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishVpcRouteEntriesRequestRouteEntries extends $dara.Model {
  /**
   * @remarks
   * The destination CIDR block for the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * 121.41.165.123/32
   */
  destinationCidrBlock?: string;
  /**
   * @remarks
   * The ID of the route table for the route entry.
   * 
   * This parameter is required.
   * 
   * @example
   * vtb-2ze3jgygk9bmsj23s****
   */
  routeTableId?: string;
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
      routeTableId: 'RouteTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: 'string',
      routeTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishVpcRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to perform a dry run of this request. Values:
   * 
   * - **true**: Sends a check request without publishing the route. The checks include whether the AccessKey is valid, the authorization status of the RAM user, and if all required parameters are filled out. If the check fails, the corresponding error is returned. If the check passes, the `DryRunOperation` error code is returned.
   * 
   * - **false** (default): Sends a normal request. After passing the check, it returns a 2xx HTTP status code and directly queries the resource status.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the instance is located. You can obtain the region ID by calling the DescribeRegions interface.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * List of route entries to be published, supporting up to 50 routes at most.
   */
  routeEntries?: PublishVpcRouteEntriesRequestRouteEntries[];
  /**
   * @remarks
   * The ID of the target instance for route publication.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-dhw2xsds5****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The type of the target for route publication.
   * 
   * This parameter is required.
   * 
   * @example
   * ECR
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routeEntries: 'RouteEntries',
      targetInstanceId: 'TargetInstanceId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routeEntries: { 'type': 'array', 'itemType': PublishVpcRouteEntriesRequestRouteEntries },
      targetInstanceId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.routeEntries)) {
      $dara.Model.validateArray(this.routeEntries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

