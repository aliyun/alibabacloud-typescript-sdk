// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataCronClearConfigResponseBodyDataCronClearConfig extends $dara.Model {
  /**
   * @remarks
   * The number of times that the task is run.
   * 
   * @example
   * 2
   */
  cronCallTimes?: string;
  /**
   * @remarks
   * The crontab expression that you can use to run the task at a specified time. For more information, see [Crontab expression](https://help.aliyun.com/document_detail/206581.html).
   * 
   * @example
   * 0 0 23 ? * 7,1
   */
  cronFormat?: string;
  /**
   * @remarks
   * The time when the task was last run.
   * 
   * @example
   * 2022-11-18 00:00:00
   */
  cronLastCallStartTime?: string;
  /**
   * @remarks
   * The time when the task is run next time. This parameter is displayed only when the status of the scheduled task is SUCCESS.
   * 
   * @example
   * 2022-11-19 00:00:00
   */
  cronNextCallTime?: string;
  /**
   * @remarks
   * The status of the scheduled task. If this parameter is empty, it indicates the task is not run. Valid values:
   * 
   * *   PAUSE: The task is suspended.
   * *   WAITING: The task is waiting to be run.
   * *   SUCCESS: The task is complete.
   * 
   * @example
   * PAUSE
   */
  cronStatus?: string;
  /**
   * @remarks
   * The number of times that the Optimize Table statement is automatically exeuted. This parameter is valid only when the value of the OptimizeTableAfterEveryClearTimes parameter is greater than 0.
   * 
   * @example
   * 0
   */
  currentClearTaskCount?: number;
  /**
   * @remarks
   * The execution duration of the task. Unit: hours. If the value is 0, it indicates the duration is not specified.
   * 
   * @example
   * 1
   */
  duration?: string;
  /**
   * @remarks
   * Specifies whether to enable automatic execution of the OPTIMIZE TABLE statement. Valid values:
   * 
   * *   0: disables automatic execution
   * *   A number greater than 0: enables automatic execution. The number specifies the number of times that cleanup operations must be performed before the OPTIMIZE TABLE statement is automatically executed.
   * 
   * @example
   * 0
   */
  optimizeTableAfterEveryClearTimes?: number;
  static names(): { [key: string]: string } {
    return {
      cronCallTimes: 'CronCallTimes',
      cronFormat: 'CronFormat',
      cronLastCallStartTime: 'CronLastCallStartTime',
      cronNextCallTime: 'CronNextCallTime',
      cronStatus: 'CronStatus',
      currentClearTaskCount: 'CurrentClearTaskCount',
      duration: 'Duration',
      optimizeTableAfterEveryClearTimes: 'OptimizeTableAfterEveryClearTimes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronCallTimes: 'string',
      cronFormat: 'string',
      cronLastCallStartTime: 'string',
      cronNextCallTime: 'string',
      cronStatus: 'string',
      currentClearTaskCount: 'number',
      duration: 'string',
      optimizeTableAfterEveryClearTimes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

