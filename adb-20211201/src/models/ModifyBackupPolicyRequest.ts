// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days for which full backups are retained. Valid values: 7 to 730.
   * > If you do not specify this parameter, the default value is 7.
   * 
   * @example
   * 7
   */
  backupRetentionPeriod?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1xxxxxxxx47
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable log (real-time) backup. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * > If you do not specify this parameter, log backup is enabled by default.
   * 
   * @example
   * Enable
   */
  enableBackupLog?: string;
  /**
   * @remarks
   * The number of days for which log (real-time) backups are retained. Valid values: 7 to 730.
   * > If you do not specify this parameter, the default value is 7.
   * 
   * @example
   * 7
   */
  logBackupRetentionPeriod?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The full backup cycle. Separate multiple values with commas (,). Valid values:
   * - **Monday**: Monday.
   * - **Tuesday**: Tuesday.
   * - **Wednesday**: Wednesday.
   * - **Thursday**: Thursday.
   * - **Friday**: Friday.
   * - **Saturday**: Saturday.
   * - **Sunday**: Sunday.
   * 
   * > To ensure data security, select at least two days.
   * 
   * @example
   * Monday,Wednesday,Friday,Sunday
   */
  preferredBackupPeriod?: string;
  /**
   * @remarks
   * The start time of the full backup. Specify the time in the HH:mmZ-HH:mmZ format (UTC).
   * 
   * > The time range is limited to 1 hour.
   * 
   * This parameter is required.
   * 
   * @example
   * 18:00Z-19:00Z
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

