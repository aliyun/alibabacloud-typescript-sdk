// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateHanaRetentionSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cl-00024vyjj******srrq
   */
  clusterId?: string;
  /**
   * @remarks
   * The database name.
   * 
   * This parameter is required.
   * 
   * @example
   * SYSTEMDB
   */
  databaseName?: string;
  /**
   * @remarks
   * Specifies whether to permanently retain the backup. Valid values:
   * 
   * *   true: The backup is permanently retained.
   * *   false: The backup is retained for the specified number of days.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The retention period of the backup data. Unit: days. If you set the Disabled parameter to false, the backup is retained for the number of days specified by this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 90
   */
  retentionDays?: number;
  /**
   * @remarks
   * The policy to update the retention period. Format: `I|{startTime}|{interval}`. The retention period is updated at an interval of {interval} starting from {startTime}.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour, and P1D indicates an interval of one day.
   * 
   * This parameter is required.
   * 
   * @example
   * I|0|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * This parameter is required.
   * 
   * @example
   * v-000fb0v2ly******k6
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      retentionDays: 'RetentionDays',
      schedule: 'Schedule',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      retentionDays: 'number',
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

