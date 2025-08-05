// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * DIFF_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * The backup type. Valid values:
   * 
   * *   COMPLETE: full backup
   * *   INCREMENTAL: incremental backup
   * *   DIFFERENTIAL: differential backup
   * 
   * This parameter is required.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00024vyjj9******v
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * plan-20220110-113108
   */
  planName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmvnf22m7itha
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` specifies that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time must follow the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval must follow the ISO 8601 standard. For example, PT1H specifies an interval of one hour. P1D specifies an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|1602673264|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-0002pcwhdn******wmi
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      backupType: 'BackupType',
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      planName: 'PlanName',
      resourceGroupId: 'ResourceGroupId',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      backupType: 'string',
      clusterId: 'string',
      databaseName: 'string',
      planName: 'string',
      resourceGroupId: 'string',
      schedule: 'string',
      vaultId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

