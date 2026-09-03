// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopGroupTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The cron expression for the scheduled task. This parameter is required when `TimerType` is set to 2, 3, or 4.
   * 
   * @example
   * 0 0 2 ? * 1-7
   */
  cronExpression?: string;
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-dbdkfmh883****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * Specifies whether to forcefully execute the scheduled task.
   * 
   * @example
   * true
   */
  force?: boolean;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the disk that you want to reset.
   * 
   * Valid values:
   * 
   * - does not reset disks.
   * - resets only the system disk.
   * - resets only the user disk.
   * - resets the system disk and the user disk.
   * 
   * @example
   * 1
   */
  resetType?: number;
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      desktopGroupId: 'DesktopGroupId',
      force: 'Force',
      regionId: 'RegionId',
      resetType: 'ResetType',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      desktopGroupId: 'string',
      force: 'boolean',
      regionId: 'string',
      resetType: 'number',
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

