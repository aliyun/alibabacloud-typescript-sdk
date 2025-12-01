// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * The interval at which you want to perform incremental log backups. Unit: seconds.
   * 
   * > This parameter takes effect only when physical backups are performed.
   * 
   * @example
   * 1000
   */
  backupLogIntervalSeconds?: number;
  /**
   * @remarks
   * The day of each week when the full backup task runs. Valid values:
   * 
   * *   Monday
   * *   Tuesday
   * *   Wednesday
   * *   Thursday
   * *   Friday
   * *   Saturday
   * *   Sunday
   * 
   * This parameter is required.
   * 
   * @example
   * Monday
   */
  backupPeriod?: string;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbstooi01XXXX
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The start time of the full backup task. Specify the time in the HH:mm format.
   * 
   * @example
   * 14:22
   */
  backupStartTime?: string;
  /**
   * @remarks
   * The backup method that you want to use for full backups. Valid values:
   * 
   * *   **simple**: scheduled backup. If you specify this value for the BackupStrategyType parameter, you must also specify the BackupPeriod and BackupStartTime parameters.
   * *   **Manual**: manual backup.
   * 
   * > Default value: **simple**.
   * 
   * @example
   * simple
   */
  backupStrategyType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
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

