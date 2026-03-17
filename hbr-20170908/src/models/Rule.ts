// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Rule extends $dara.Model {
  /**
   * @remarks
   * The backup type.
   * * COMPLETE：Full backup.
   * * INCREMENTAL：Incremental backup.
   * 
   * @example
   * COMPLETE
   */
  backupType?: string;
  /**
   * @remarks
   * The replication region id.
   * 
   * @example
   * cn-shenzhen
   */
  destinationRegionId?: string;
  /**
   * @remarks
   * The retention period of remote backups. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  destinationRetention?: number;
  /**
   * @remarks
   * Whether the plan is disbaled for this data source.
   * - **true**: disabled
   * - **false**: Not disabled
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * Whether do copy.
   * 
   * @example
   * true
   */
  doCopy?: boolean;
  /**
   * @remarks
   * This parameter indicates the retention period of the backup data. Minimum value: 1. Unit: days.
   * 
   * @example
   * 7
   */
  retention?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * rule-com-backup-20241023-163113
   */
  ruleName?: string;
  /**
   * @remarks
   * This parameter is returned only if the value of the **RuleType** parameter is **BACKUP**. This parameter indicates the backup schedule settings. Format: `I|{startTime}|{interval}`. The system runs the first backup job at a point in time that is specified in the {startTime} parameter and the subsequent backup jobs at an interval that is specified in the {interval} parameter. The system does not run a backup job before the specified point in time. Each backup job, except the first one, starts only after the previous backup job is completed. For example, `I|1631685600|P1D` indicates that the system runs the first backup job at 14:00:00 on September 15, 2021 and the subsequent backup jobs once a day.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|1631685600|P1D
   */
  schedule?: string;
  static names(): { [key: string]: string } {
    return {
      backupType: 'BackupType',
      destinationRegionId: 'DestinationRegionId',
      destinationRetention: 'DestinationRetention',
      disabled: 'Disabled',
      doCopy: 'DoCopy',
      retention: 'Retention',
      ruleName: 'RuleName',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupType: 'string',
      destinationRegionId: 'string',
      destinationRetention: 'number',
      disabled: 'boolean',
      doCopy: 'boolean',
      retention: 'number',
      ruleName: 'string',
      schedule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

