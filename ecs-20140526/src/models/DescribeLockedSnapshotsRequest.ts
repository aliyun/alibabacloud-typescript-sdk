// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLockedSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to only precheck the request. Valid values: 
   * - true: The request is prechecked but not executed. The system checks whether required parameters are specified, the request format is valid, and service limits are met. If the request fails the precheck, an error is returned. If the request passes the precheck, the DryRunOperation error code is returned. 
   * - false: The request is prechecked and executed if it passes the precheck. This is the default value.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The lock status. Valid values: 
   * - compliance-cooloff: The snapshot is locked in compliance mode but is still in the cooling-off period. The snapshot cannot be deleted, but users with the required RAM permissions can unlock the snapshot, extend or shorten the cooling-off period, and extend or shorten the lock duration. 
   * - compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. The snapshot cannot be unlocked or deleted, but users with the required RAM permissions can extend the lock duration. 
   * - expired: The snapshot was locked, but the lock duration has ended and the lock has expired. The snapshot is currently unlocked and can be deleted.
   * 
   * @example
   * compliance-cooloff
   */
  lockStatus?: string;
  /**
   * @remarks
   * The number of entries per page during paging for a paged query. Maximum value: 100. 
   * 
   * Default value: 
   * - If no Settings are specified or the Settings value is less than 10, the default value is 10. 
   * - If the Settings value is greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken parameter value returned by the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @example
   * 158704318252****
   */
  ownerAccount?: string;
  /**
   * @example
   * 158704318252****
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://www.alibabacloud.com/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 158704318252****
   */
  resourceOwnerAccount?: string;
  /**
   * @example
   * 158704318252****
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The snapshot IDs. Array length: 1 to 100.
   */
  snapshotIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      lockStatus: 'LockStatus',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotIds: 'SnapshotIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      lockStatus: 'string',
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.snapshotIds)) {
      $dara.Model.validateArray(this.snapshotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

