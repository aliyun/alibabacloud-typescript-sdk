// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDetectConfigResponseBodyDetectConfigAlarmConfigs extends $dara.Model {
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
   * Alerting method. Currently, only `cms` is supported.
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

export class GetDetectConfigResponseBodyDetectConfig extends $dara.Model {
  /**
   * @remarks
   * List of alerting addresses
   */
  alarmConfigs?: GetDetectConfigResponseBodyDetectConfigAlarmConfigs[];
  /**
   * @remarks
   * Creation Time.
   * 
   * @example
   * 2026-04-10T02:30:04Z
   */
  createTime?: string;
  /**
   * @remarks
   * Cron expression (UTC+8). Required when the trigger type is Cron.
   * 
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * this is a description
   */
  description?: string;
  /**
   * @remarks
   * Drift detection configuration ID
   * 
   * @example
   * dc-xxxx
   */
  detectConfigId?: string;
  /**
   * @remarks
   * Drift detection configuration name
   * 
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @remarks
   * Is scheduled detection enabled
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * Trigger type  
   * 
   * - Manual: Execute manually  
   * - Cron: Trigger on schedule
   * 
   * @example
   * Cron
   */
  triggerType?: string;
  static names(): { [key: string]: string } {
    return {
      alarmConfigs: 'alarmConfigs',
      createTime: 'createTime',
      cronExpression: 'cronExpression',
      description: 'description',
      detectConfigId: 'detectConfigId',
      detectConfigName: 'detectConfigName',
      enabled: 'enabled',
      triggerType: 'triggerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmConfigs: { 'type': 'array', 'itemType': GetDetectConfigResponseBodyDetectConfigAlarmConfigs },
      createTime: 'string',
      cronExpression: 'string',
      description: 'string',
      detectConfigId: 'string',
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

export class GetDetectConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Drift detection configuration information
   */
  detectConfig?: GetDetectConfigResponseBodyDetectConfig;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * BF72A6FB-B071-5F2E-A036-9D62545B962C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detectConfig: 'detectConfig',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detectConfig: GetDetectConfigResponseBodyDetectConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.detectConfig && typeof (this.detectConfig as any).validate === 'function') {
      (this.detectConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

