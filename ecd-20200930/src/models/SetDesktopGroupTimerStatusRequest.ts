// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopGroupTimerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer share.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-fgxsniu6at****
   */
  desktopGroupId?: string;
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
   * The status of the scheduled task.
   * 
   * Valid values:
   * 
   * *   1: enabled
   * *   2: disabled
   * *   3: deleted
   * *   100: unknown
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
   * This parameter is required.
   * 
   * @example
   * 1
   */
  timerType?: number;
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      status: 'Status',
      timerType: 'TimerType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
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

