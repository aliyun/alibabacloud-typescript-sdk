// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLockedSnapshotsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * *   true: The request is checked and is not executed. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the check fails, the corresponding error is returned. If the check passes, the error code DryRunOperation is returned.
   * *   false (default): Sends a normal request, checks it, and executes the request directly if it passes the check.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The lock status. Valid values:
   * 
   * *   compliance-cooloff: The snapshot is locked in compliance mode but is still in a cooling-off period. Snapshots cannot be deleted. However, users with the corresponding RAM permissions can unlock snapshots, extend or shorten the cooling-off period, and extend or shorten the lock duration.
   * *   compliance: The snapshot is locked in compliance mode and the cooling-off period has ended. Snapshots cannot be unlocked or deleted. However, users with the corresponding RAM permissions can extend the locked duration.
   * *   expired: The snapshot was once locked, but the lock duration has ended and the lock has expired. The snapshot is not locked and can be deleted.
   * 
   * @example
   * compliance-cooloff
   */
  lockStatus?: string;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100.
   * 
   * Default value:
   * 
   * *   If you do not specify this parameter or if you set this parameter to a value that is smaller than 10, the default value is 10.
   * *   If you set a value greater than 100, the default value is 100.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The query token. Set the value to the `NextToken` parameter value returned in the last API call.
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
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i2) operation to query the most recent region list.
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
   * The snapshot IDs. You can specify 1 to 100 IDs.
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

