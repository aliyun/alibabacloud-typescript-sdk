// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file.
   * 
   * @example
   * 11611111
   */
  backupId?: number;
  /**
   * @remarks
   * The ID of the backup job returned by the `CreateBackup` operation. If `CreateBackup` returns multiple backup job IDs, call this operation for each ID.
   * 
   * @example
   * 10001
   */
  backupJobId?: number;
  /**
   * @remarks
   * The end time for the query. The end time must be later than the start time. Specify the time in UTC using the *yyyy-MM-dd*T*HH:mm*Z format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-14T18:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * r-bp1zxszhcgatnx****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether to enable AOF persistence. Valid values:
   * 
   * - **0**: Disabled.
   * 
   * - **1**: Enabled.
   * 
   * > The default value is **0**.
   * 
   * @example
   * 1
   */
  needAof?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number to return. The value must be greater than **0**. The default value is **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: `30`, `50`, `100`, `200`, and `300`.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  /**
   * @remarks
   * The start time for the query. Specify the time in UTC using the *yyyy-MM-dd*T*HH:mm*Z format.
   * 
   * This parameter is required.
   * 
   * @example
   * 2019-03-11T10:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      backupJobId: 'BackupJobId',
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      needAof: 'NeedAof',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'number',
      backupJobId: 'number',
      endTime: 'string',
      instanceId: 'string',
      needAof: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

