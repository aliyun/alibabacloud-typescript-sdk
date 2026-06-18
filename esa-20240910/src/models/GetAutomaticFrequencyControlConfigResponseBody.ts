// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAutomaticFrequencyControlConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The action to perform. Valid values:
   * 
   * - **observe**: Monitors requests.
   * 
   * - **deny**: Denies requests.
   * 
   * - **js**: Issues a JavaScript challenge.
   * 
   * @example
   * js
   */
  actionType?: string;
  /**
   * @remarks
   * Indicates whether automatic frequency control is enabled. Valid values:
   * 
   * - **on**: Enabled.
   * 
   * - **off**: Disabled.
   * 
   * @example
   * on
   */
  enable?: string;
  /**
   * @remarks
   * The statistics collection interval.
   * 
   * @example
   * 10
   */
  interval?: number;
  /**
   * @remarks
   * The protection level. Valid values:
   * 
   * - **loose**: Loose.
   * 
   * - **normal**: Normal.
   * 
   * - **strict**: Strict.
   * 
   * @example
   * normal
   */
  level?: string;
  /**
   * @remarks
   * The duration of the penalty, in seconds.
   * 
   * @example
   * 20000000
   */
  punishTime?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 11957665
   */
  ruleId?: number;
  /**
   * @remarks
   * The threshold that triggers the action.
   * 
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

