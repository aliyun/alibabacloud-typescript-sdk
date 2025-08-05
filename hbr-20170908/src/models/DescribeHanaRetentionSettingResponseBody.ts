// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHanaRetentionSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the SAP HANA instance.
   * 
   * @example
   * cl-0003jyv******fsku5m
   */
  clusterId?: string;
  /**
   * @remarks
   * The response code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * Q01
   */
  databaseName?: string;
  /**
   * @remarks
   * Indicates whether the backup is permanently retained. Valid values:
   * 
   * *   true: The backup is permanently retained.
   * *   false: The backup is retained for the specified number of days.
   * 
   * @example
   * false
   */
  disabled?: boolean;
  /**
   * @remarks
   * The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 280DD872-EE25-52E8-9CB4-491067173DD0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of days for which the backup is retained. If the value of the Disabled parameter is false, the backup is retained for the number of days specified by this parameter.
   * 
   * @example
   * 3650
   */
  retentionDays?: number;
  /**
   * @remarks
   * The policy to update the retention period. Format: `I|{startTime}|{interval}`, which indicates that the retention period is updated at an interval of {interval} starting from {startTime}.
   * 
   * *   startTime: the time at which the system starts to run a backup job. The time follows the UNIX time format. Unit: seconds.
   * *   interval: the interval at which the system runs a backup job. The interval follows the ISO 8601 standard. For example, PT1H indicates an interval of 1 hour. P1D indicates an interval of one day.
   * 
   * @example
   * I|0|P1D
   */
  schedule?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The ID of the backup vault.
   * 
   * @example
   * v-0006wkn7******zkn
   */
  vaultId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      code: 'Code',
      databaseName: 'DatabaseName',
      disabled: 'Disabled',
      message: 'Message',
      requestId: 'RequestId',
      retentionDays: 'RetentionDays',
      schedule: 'Schedule',
      success: 'Success',
      vaultId: 'VaultId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      code: 'string',
      databaseName: 'string',
      disabled: 'boolean',
      message: 'string',
      requestId: 'string',
      retentionDays: 'number',
      schedule: 'string',
      success: 'boolean',
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

