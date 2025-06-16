// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WithdrawVpcPublishedRouteEntriesRequestRouteEntries } from "./WithdrawVpcPublishedRouteEntriesRequestRouteEntries";


export class WithdrawVpcPublishedRouteEntriesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   **false** (default): performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region. Call the DescribeRegions operation to access it.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The route entries to be withdrawn. Maximum value: 50.
   */
  routeEntries?: WithdrawVpcPublishedRouteEntriesRequestRouteEntries[];
  /**
   * @remarks
   * Target instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ecr-dhw2xsds5****
   */
  targetInstanceId?: string;
  /**
   * @remarks
   * The type of target instance.
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
      routeEntries: { 'type': 'array', 'itemType': WithdrawVpcPublishedRouteEntriesRequestRouteEntries },
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

