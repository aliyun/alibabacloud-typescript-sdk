// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDesktopGroupDetailResponseBodyDesktopsTimerInfos extends $dara.Model {
  /**
   * @remarks
   * The cron expression.
   * 
   * @example
   * 0 58 11 ? * 2
   */
  cronExpression?: string;
  /**
   * @remarks
   * Indicates whether the scheduled task is forcibly executed.
   * 
   * @example
   * false
   */
  forced?: boolean;
  /**
   * @remarks
   * The status of the cloud computer pool.
   * 
   * Valid values:
   * 
   * *   1: enabled
   * *   2: disabled
   * *   3: deleted
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the scheduled task.
   * 
   * Valid values:
   * 
   * *   1: scheduled reset
   * *   2: scheduled startup
   * *   3: scheduled stop
   * *   4: scheduled restart
   * 
   * @example
   * 1
   */
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      forced: 'Forced',
      status: 'Status',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      forced: 'boolean',
      status: 'number',
      timerType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

