// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestoreInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the backup file. You can find backup file IDs by calling the [DescribeBackups](https://help.aliyun.com/document_detail/473823.html) operation.
   * 
   * @example
   * 78241****
   */
  backupId?: string;
  /**
   * @remarks
   * The keys to restore, which can be specified as a regular expression. To specify multiple keys, separate them with commas (,).
   * 
   * - If you do not specify this parameter, the entire instance is restored.
   * 
   * - If you specify this parameter, only the specified keys are restored. This feature is available only for instances that use the classic architecture.
   * 
   * > In a regular expression, the asterisk (`*`) matches the preceding element zero or more times. For example, if you set this parameter to `h.*llo`, strings such as `hllo` and `heeeello` are matched.
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
   * The restore point in time. Specify the time in the *yyyy-MM-dd*T*HH:mm:ss*Z format (UTC).
   * 
   * > This point in time cannot be earlier than the time when the Data Flashback feature was enabled.
   * 
   * @example
   * 2021-07-06T07:25:57Z
   */
  restoreTime?: string;
  /**
   * @remarks
   * The restore method. Valid values:
   * 
   * - **0** (default): This value is deprecated.
   * 
   * - **1**: Restores data to a specific point in time. You can set this parameter to 1 only if the [Data Flashback](https://help.aliyun.com/document_detail/148479.html) feature is enabled for the instance. If you set this parameter to 1, you must also specify the **RestoreTime** parameter.
   * 
   * @example
   * 1
   */
  restoreType?: string;
  securityToken?: string;
  /**
   * @remarks
   * For instances that use the classic architecture, you can apply an offset to the expiration time of restored keys. This applies whether you restore the entire instance or only specific keys. The system calculates a key\\"s remaining time-to-live (TTL) at the specified flashback point in time and then adds this TTL to the `TimeShift` value to set the key\\"s new expiration time. Specify the time in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * > - This feature adjusts the expiration time for top-level keys only. It does not apply to the expiration times of elements within Tair-specific data structures, such as fields in an exHash or secondary keys (Skeys) in a Time Series (TS) data structure.
   * >
   * > - The specified time must be later than `RestoreTime` and earlier than the task submission time.
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

