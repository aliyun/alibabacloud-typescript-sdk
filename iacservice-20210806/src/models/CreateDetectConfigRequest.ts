// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDetectConfigRequestAlarmConfigs extends $dara.Model {
  /**
   * @remarks
   * Alerting address.
   * 
   * @example
   * https://metrichub-cms-cn-hangzhou.aliyuncs.com/event/notify?xxxxx
   */
  address?: string;
  /**
   * @remarks
   * Alerting method. Currently only `cms` is supported.
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

export class CreateDetectConfigRequest extends $dara.Model {
  /**
   * @remarks
   * List of alerting addresses
   */
  alarmConfigs?: CreateDetectConfigRequestAlarmConfigs[];
  /**
   * @remarks
   * Idempotence token, format: `[0-9a-zA-Z-]{1,64}`. It is recommended to use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * Cron expression (UTC+8). Required when trigger type is `Cron`.
   * 
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @remarks
   * Description, up to 256 characters in length.
   * 
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * Detection configuration Name
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @remarks
   * Whether the Detection feature is Enabled. The default value is `true`.
   */
  enabled?: boolean;
  /**
   * @remarks
   * Trigger type  
   * - Manual: Execute manually  
   * - Cron: Trigger on a schedule
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
      alarmConfigs: { 'type': 'array', 'itemType': CreateDetectConfigRequestAlarmConfigs },
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

