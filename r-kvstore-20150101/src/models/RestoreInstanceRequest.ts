// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file for the instance. You can call the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation to query the ID.
   * 
   * @example
   * 78241****
   */
  backupId?: string;
  /**
   * @remarks
   * The keys to restore. Regular expressions are supported. Separate multiple values with commas (,).
   * - If you do not specify this parameter, the entire instance is restored.
   * - If you specify this parameter, only the specified keys are restored. This feature is supported only by classic architecture instances.
   * > For example, in a regular expression, an asterisk (`*`) matches the preceding subexpression zero or more times. If you set this parameter to `h.*llo`, the system matches strings such as `hllo` and `heeeello`.
   * 
   * @example
   * key:00000007198*
   */
  filterKey?: string;
  /**
   * @remarks
   * The instance ID.
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
   * The point in time to which you want to restore data. Specify the time in the <i>yyyy-MM-dd</i>T<i>HH:mm</i>Z format. The time must be in UTC.
   * > The point in time cannot be earlier than the time when the data flashback feature is enabled.
   * 
   * @example
   * 2021-07-06T07:25:57Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restoration type. Valid values:
   * * **0** (default): This value is deprecated.
   * * **1**: Restores data to a specified point in time. You can specify this value only when the [data flashback](https://help.aliyun.com/document_detail/148479.html) feature is enabled for the instance. If you specify this value, you must also specify the **RestoreTime** parameter.
   * 
   * @example
   * 1
   */
  restoreType?: string;
  securityToken?: string;
  /**
   * @remarks
   * When you restore a classic architecture instance, you can apply an offset to the expiration time of keys regardless of whether you choose to restore full data or specified keys. Specify the time in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC. The instance calculates the remaining expiration duration of the keys at the specified flashback point in time, starting from the specified expiration offset point in time.
   * > * This feature supports offsetting the expiration time only at the key level. It does not support offsetting the internal expiration time of keys in Tair-developed data structures, such as the fields in exHash and the skeys in TS.
   * > * The point in time cannot be earlier than the specified flashback point in time or later than the time when the restoration task is submitted.
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

