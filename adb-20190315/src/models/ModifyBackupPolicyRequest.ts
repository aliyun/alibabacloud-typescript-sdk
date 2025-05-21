// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which to retain full backup files. Valid values: 7 to 730.
   * 
   * >  If you do not specify this parameter, the default value 7 is used.
   * 
   * @example
   * 30
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable real-time log backup. Valid values:
   * 
   * *   **Enable**
   * 
   * *   **Disable**
   * 
   * > If you leave this parameter empty, the default value Enable is used.
   * 
   * @example
   * Enable
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which to retain log backup files. Valid values: 7 to 730.
   * 
   * >  If you do not specify this parameter, the default value 7 is used.
   * 
   * @example
   * 30
   */
  logBackupRetentionPeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The days of the week on which to perform full backup. Separate multiple values with commas (,). Valid values:
   * 
   * *   **Monday**
   * *   **Tuesday**
   * *   **Wednesday**
   * *   **Thursday**
   * *   **Friday**
   * *   **Saturday**
   * *   **Sunday**
   * 
   * >  To ensure data security, we recommend that you specify at least two values.
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the full backup within a time range. Specify the time range in the HH:mmZ-HH:mmZ format. The time must be in UTC.
   * 
   * >  The time range is 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 00:00Z-01:00Z
   */
  preferredBackupTime?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      backupRetentionPeriod: 'BackupRetentionPeriod',
      DBClusterId: 'DBClusterId',
      enableBackupLog: 'EnableBackupLog',
      logBackupRetentionPeriod: 'LogBackupRetentionPeriod',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      preferredBackupPeriod: 'PreferredBackupPeriod',
      preferredBackupTime: 'PreferredBackupTime',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupRetentionPeriod: 'string',
      DBClusterId: 'string',
      enableBackupLog: 'string',
      logBackupRetentionPeriod: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      preferredBackupPeriod: 'string',
      preferredBackupTime: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

