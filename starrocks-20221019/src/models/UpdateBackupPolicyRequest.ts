// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBackupPolicyRequest extends $dara.Model {
  /**
   * @example
   * 7
   */
  expireDays?: number;
  /**
   * @example
   * 10
   */
  hour?: number;
  /**
   * @example
   * c-0104730e9de40215
   */
  instanceId?: string;
  /**
   * @example
   * 15
   */
  minute?: number;
  /**
   * @example
   * bk-9812023
   */
  policyId?: string;
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
      policyId: 'PolicyId',
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
      policyId: 'string',
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

