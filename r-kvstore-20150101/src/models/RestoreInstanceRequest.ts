// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html)operation to query the IDs of backup files.
   * 
   * @example
   * 78241****
   */
  backupId?: string;
  /**
   * @remarks
   * The key that you want to restore. You can specify multiple keys. Separate multiple keys with commas (,). Regular expressions are supported.
   * 
   * *   If you do not specify this parameter, the entire instance is restored.
   * *   If you specify this parameter, only the involved keys are restored. Only classic instances support this feature.
   * 
   * >  In a regular expression, an asterisk (`*`) matches zero or more occurrences of a subexpression that occurs before. For example, if you set this parameter to `h.*llo`, strings such as `hllo` and `heeeello` are matched.
   * 
   * @example
   * key:00000007198*
   */
  filterKey?: string;
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
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The point in time to which you want to restore data. Specify the time in the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time must be in UTC.
   * 
   * >  The point in time cannot be earlier than the point in time when the data flashback feature is enabled.
   * 
   * @example
   * 2021-07-06T07:25:57Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration mode. Valid values:
   * 
   * *   **0** (default): The parameter is invalid.
   * *   **1**: restores data to a specified point in time. You can specify this value only if the [data flashback](https://help.aliyun.com/document_detail/148479.html) feature is enabled for the instance. If you specify this value, you also need to set the **RestoreTime** parameter.
   * 
   * @example
   * 1
   */
  restoreType?: string;
  securityToken?: string;
  /**
   * @remarks
   * When you restore a classic instance, regardless of whether you choose to restore all data or specific keys, you can apply an offset to the expiration time of the keys. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. A key expires after the remaining validity period of the key elapses based on the expiration offset time point.
   * 
   * > 
   * 
   * *   This feature applies only to keys and does not work on elements in the self-developed data structures of Tair, such as fields in exHash and skeys in TairTS.
   * 
   * *   This time point must be between the specified flashback time point and the submission time of the data restoration task.
   * 
   * @example
   * 2021-07-06T08:25:57Z
   */
  timeShift?: string;
  static names(): { [key: string]: string } {
    return {
      backupId: 'BackupId',
      filterKey: 'FilterKey',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      restoreTime: 'RestoreTime',
      restoreType: 'RestoreType',
      securityToken: 'SecurityToken',
      timeShift: 'TimeShift',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupId: 'string',
      filterKey: 'string',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      restoreTime: 'string',
      restoreType: 'string',
      securityToken: 'string',
      timeShift: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

