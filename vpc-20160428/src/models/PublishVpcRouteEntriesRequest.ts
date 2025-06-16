// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublishVpcRouteEntriesRequestRouteEntries } from "./PublishVpcRouteEntriesRequestRouteEntries";


export class PublishVpcRouteEntriesRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  routeEntries?: PublishVpcRouteEntriesRequestRouteEntries[];
  /**
   * @remarks
   * This parameter is required.
   * 
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

