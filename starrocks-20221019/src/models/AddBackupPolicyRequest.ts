// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBackupPolicyRequest extends $dara.Model {
  /**
   * @example
   * 7
   */
  expireDays?: number;
  /**
   * @example
   * 2
   */
  hour?: number;
  /**
   * @example
   * c-0104730e9de40215
   */
  instanceId?: string;
  /**
   * @example
   * 30
   */
  minute?: number;
  /**
   * @example
   * MONTHLY
   */
  recurrenceType?: string;
  recurrenceValues?: number[];
  /**
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

