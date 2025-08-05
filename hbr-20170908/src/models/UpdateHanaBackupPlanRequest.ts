// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHanaBackupPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The backup prefix.
   * 
   * @example
   * COMPLETE_DATA_BACKUP
   */
  backupPrefix?: string;
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-0005dhe******f38
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the backup plan.
   * 
   * This parameter is required.
   * 
   * @example
   * pl-000br3cm4dqvmtph7cul
   */
  planId?: string;
  /**
   * @remarks
   * The name of the backup plan.
   * 
   * @example
   * plan-20211109-162411
   */
  planName?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmze36euddwjq
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The backup policy. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
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
   * v-0000rcw******5c6
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      backupPrefix: 'BackupPrefix',
      clusterId: 'ClusterId',
      planId: 'PlanId',
      planName: 'PlanName',
      resourceGroupId: 'ResourceGroupId',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupPrefix: 'string',
      clusterId: 'string',
      planId: 'string',
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

