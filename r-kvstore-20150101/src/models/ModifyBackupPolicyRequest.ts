// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which data backups are retained. Default value: 7. Valid values: 7 to 730.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable the data flashback feature. Valid values:
   * * **1**: Enabled. Make sure that append-only file (AOF) persistence is enabled in the parameter settings of the instance (`appendonly` is set to `yes`). The data flashback feature is available only after AOF persistence is enabled.
   * * **0**: Disabled. This is the default value.
   * > This parameter is supported only by Tair (Enterprise Edition) memory-optimized and persistent memory-optimized instances. For more information, see [Data flashback](https://help.aliyun.com/document_detail/148479.html).
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
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
  /**
   * @remarks
   * The backup cycle. Valid values:
   * * **Monday**
   * * **Tuesday**
   * * **Wednesday**
   * * **Thursday**
   * * **Friday**
   * * **Saturday**
   * * **Sunday**
   * 
   * > You can specify multiple values. Separate them with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time. Specify the time in the <i>HH:mm</i>Z-<i>HH:mm</i>Z format (UTC).
   * > The time must be on the hour, and the interval must be 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 07:00Z-08:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      enableBackupLog: 'EnableBackupLog',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'number',
      enableBackupLog: 'number',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

