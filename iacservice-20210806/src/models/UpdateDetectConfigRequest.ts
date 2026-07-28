// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDetectConfigRequestAlarmConfigs extends $dara.Model {
  /**
   * @remarks
   * Alert address.
   * 
   * @example
   * example@example.com
   */
  address?: string;
  /**
   * @remarks
   * Alerting method.  
   * Currently, only `cms` is supported.
   * 
   * @example
   * cms
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'address',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDetectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * **Alert address list**
   */
  alarmConfigs?: UpdateDetectConfigRequestAlarmConfigs[];
  /**
   * @remarks
   * Idempotent token, format: [0-9a-zA-Z-]{1,64}. We recommend using a UUID.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * **Cron expression (UTC+8)**. Required when the trigger type is Cron.
   * 
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @remarks
   * **Description**
   * 
   * @example
   * this is description
   */
  description?: string;
  /**
   * @remarks
   * Drift detection name
   * 
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @remarks
   * **Whether the detection feature is enabled. The default value is true.**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * **Trigger type**  
   * 
   * * Manual: Execute manually  
   * * Cron: Trigger periodically
   * 
   * @example
   * Manual
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigs: 'alarmConfigs',
      clientToken: 'clientToken',
      cronExpression: 'cronExpression',
      description: 'description',
      detectConfigName: 'detectConfigName',
      enabled: 'enabled',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigs: { 'type': 'array', 'itemType': UpdateDetectConfigRequestAlarmConfigs },
      clientToken: 'string',
      cronExpression: 'string',
      description: 'string',
      detectConfigName: 'string',
      enabled: 'boolean',
      triggerType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alarmConfigs)) {
      $dara.Model.validateArray(this.alarmConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

