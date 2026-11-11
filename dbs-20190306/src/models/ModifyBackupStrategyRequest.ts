// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The incremental backup interval in seconds.
   * > Only physical backups are supported.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The full backup cycle. Valid values:
   * - Monday: Monday
   * - Tuesday: Tuesday
   * - Wednesday: Wednesday
   * - Thursday: Thursday
   * - Friday: Friday
   * - Saturday: Saturday
   * - Sunday: Sunday
   * 
   * > You must specify at least two days of the week for BackupPeriod and separate the days with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * Monday,Tuesday,Wednesday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01XXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The start time of the full backup. Format: HH:mm.
   * 
   * > This parameter is required.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The full backup epoch. Valid values:
   * - **simple**: periodic backup. This value is used together with BackupPeriod and BackupStartTime.
   * - **manual**: manual backup.
   * 
   * > Default value: **simple**.
   * 
   * @example
   * simple
   */
  backupStrategyType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request and prevent duplicate submissions.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupLogIntervalSeconds: 'BackupLogIntervalSeconds',
      backupPeriod: 'BackupPeriod',
      backupPlanId: 'BackupPlanId',
      backupStartTime: 'BackupStartTime',
      backupStrategyType: 'BackupStrategyType',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupLogIntervalSeconds: 'number',
      backupPeriod: 'string',
      backupPlanId: 'string',
      backupStartTime: 'string',
      backupStrategyType: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

