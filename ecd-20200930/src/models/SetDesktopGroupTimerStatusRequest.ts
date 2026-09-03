// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetDesktopGroupTimerStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-fgxsniu6at****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The type of the scheduled task.
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

