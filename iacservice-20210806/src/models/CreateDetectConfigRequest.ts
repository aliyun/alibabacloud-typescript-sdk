// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateDetectConfigRequestAlarmConfigs extends $dara.Model {
  /**
   * @example
   * https://metrichub-cms-cn-hangzhou.aliyuncs.com/event/notify?xxxxx
   */
  address?: string;
  /**
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
  alarmConfigs?: CreateDetectConfigRequestAlarmConfigs[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @example
   * 0 0 0 ? * 1
   */
  cronExpression?: string;
  /**
   * @example
   * example
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  detectConfigName?: string;
  enabled?: boolean;
  /**
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

