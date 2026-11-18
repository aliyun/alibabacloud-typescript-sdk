// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The retention period of data backups in days. Valid values: 7 to 730. Default value: 7.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: number;
  /**
   * @remarks
   * Specifies whether to enable the data flashback feature. Valid values:
   * * **1**: enables the feature. You must also enable AOF persistence by setting the `appendonly` parameter to `yes` in the parameter settings of the instance before you can use the data flashback feature.
   * * **0**: disables the feature. This is the default value.
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
   * * **Monday**: Monday.
   * * **Tuesday**: Tuesday.
   * * **Wednesday**: Wednesday.
   * * **Thursday**: Thursday.
   * * **Friday**: Friday.
   * * **Saturday**: Saturday.
   * * **Sunday**: Sunday.
   * 
   * > You can specify multiple values. Separate multiple values with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * Tuesday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The backup time in the <i>HH:mm</i>Z-<i>HH:mm</i>Z format (UTC). The time must be on the hour, and the interval must be 1 hour.
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

