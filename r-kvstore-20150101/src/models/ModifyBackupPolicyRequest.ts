// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which you want to retain data backup files. Valid values: 7 to 730. Default value: 7.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable the data flashback feature for the instance. Valid values:
   * 
   * *   **1**: enables the data flashback feature. You must also enable append-only file (AOF) persistence by setting `appendonly` to `yes` in the parameter settings of the instance. Then, you can use the data flashback feature.
   * *   **0** (default): disables the data flashback feature.
   * 
   * >  This parameter is available only for Tair (Enterprise Edition) DRAM-based and persistent memory-optimized instances. For more information, see [Data flashback](https://help.aliyun.com/document_detail/148479.html).
   * 
   * @example
   * 1
   */
  enableBackupLog?: number;
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
  /**
   * @remarks
   * The days of the week to back up data. Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * > Separate multiple options with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The time range to back up data. Specify the time in the *HH:mm*Z-*HH:mm*Z format. The time is displayed in UTC.
   * 
   * > The beginning and end of the time range must be on the hour. The duration must be an hour.
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

