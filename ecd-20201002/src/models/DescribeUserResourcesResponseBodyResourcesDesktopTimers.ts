// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserResourcesResponseBodyResourcesDesktopTimers extends $dara.Model {
  /**
   * @example
   * false
   */
  allowClientSetting?: string;
  /**
   * @example
   * 0 30 13 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @example
   * false
   */
  enforce?: boolean;
  /**
   * @example
   * 2025-01-21T11:37Z
   */
  executionTime?: string;
  /**
   * @example
   * 15
   */
  interval?: number;
  /**
   * @example
   * Hibernate
   */
  operationType?: string;
  /**
   * @example
   * RESET_TYPE_SYSTEM
   */
  resetType?: string;
  /**
   * @example
   * TimerBoot
   */
  timerType?: string;
  static names(): { [key: string]: string } {
    return {
      allowClientSetting: 'AllowClientSetting',
      cronExpression: 'CronExpression',
      enforce: 'Enforce',
      executionTime: 'ExecutionTime',
      interval: 'Interval',
      operationType: 'OperationType',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowClientSetting: 'string',
      cronExpression: 'string',
      enforce: 'boolean',
      executionTime: 'string',
      interval: 'number',
      operationType: 'string',
      resetType: 'string',
      timerType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

