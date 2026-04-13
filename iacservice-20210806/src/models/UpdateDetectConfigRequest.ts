// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDetectConfigRequestAlarmConfigs extends $dara.Model {
  /**
   * @example
   * example@example.com
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

export class UpdateDetectConfigRequest extends $dara.Model {
  alarmConfigs?: UpdateDetectConfigRequestAlarmConfigs[];
  /**
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
   * this is description
   */
  description?: string;
  /**
   * @example
   * test
   */
  detectConfigName?: string;
  /**
   * @example
   * true
   */
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

