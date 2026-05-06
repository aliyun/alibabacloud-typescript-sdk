// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutomaticFrequencyControlConfigResponseBody extends $dara.Model {
  /**
   * @example
   * js
   */
  actionType?: string;
  /**
   * @example
   * on
   */
  enable?: string;
  /**
   * @example
   * 10
   */
  interval?: number;
  /**
   * @example
   * normal
   */
  level?: string;
  /**
   * @example
   * 20000000
   */
  punishTime?: number;
  /**
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @example
   * 11957665
   */
  ruleId?: number;
  /**
   * @example
   * 100
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      enable: 'Enable',
      interval: 'Interval',
      level: 'Level',
      punishTime: 'PunishTime',
      requestId: 'RequestId',
      ruleId: 'RuleId',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      enable: 'string',
      interval: 'number',
      level: 'string',
      punishTime: 'number',
      requestId: 'string',
      ruleId: 'number',
      threshold: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

