// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackupPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The number of days that the backup data remains valid.
   * 
   * @example
   * 7
   */
  expireDays?: number;
  /**
   * @remarks
   * The hour.
   * 
   * @example
   * 2
   */
  hour?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * c-0104730e9de40215
   */
  instanceId?: string;
  /**
   * @remarks
   * The minute.
   * 
   * @example
   * 30
   */
  minute?: number;
  /**
   * @remarks
   * Specifies the execution type of the time rule. Valid values:
   * - DAILY: Repeats daily.
   * - WEEKLY: Repeats weekly.
   * - MONTHLY: Repeats monthly.
   * 
   * @example
   * MONTHLY
   */
  recurrenceType?: string;
  /**
   * @remarks
   * The values for the policy execution cycle.
   */
  recurrenceValues?: number[];
  /**
   * @remarks
   * The timeout period for the backup task, in seconds.
   * 
   * @example
   * 3600
   */
  timeoutSeconds?: number;
  static names(): { [key: string]: string } {
    return {
      expireDays: 'ExpireDays',
      hour: 'Hour',
      instanceId: 'InstanceId',
      minute: 'Minute',
      recurrenceType: 'RecurrenceType',
      recurrenceValues: 'RecurrenceValues',
      timeoutSeconds: 'TimeoutSeconds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDays: 'number',
      hour: 'number',
      instanceId: 'string',
      minute: 'number',
      recurrenceType: 'string',
      recurrenceValues: { 'type': 'array', 'itemType': 'number' },
      timeoutSeconds: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.recurrenceValues)) {
      $dara.Model.validateArray(this.recurrenceValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

