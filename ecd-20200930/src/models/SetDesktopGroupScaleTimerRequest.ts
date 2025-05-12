// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SetDesktopGroupScaleTimerRequestScaleTimerInfos } from "./SetDesktopGroupScaleTimerRequestScaleTimerInfos";


export class SetDesktopGroupScaleTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer pool.
   * 
   * This parameter is required.
   * 
   * @example
   * dg-2i8qxpv6t1a03****
   */
  desktopGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The information about the scheduled auto scaling task.
   */
  scaleTimerInfos?: SetDesktopGroupScaleTimerRequestScaleTimerInfos[];
  static names(): { [key: string]: string } {
    return {
      desktopGroupId: 'DesktopGroupId',
      regionId: 'RegionId',
      scaleTimerInfos: 'ScaleTimerInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopGroupId: 'string',
      regionId: 'string',
      scaleTimerInfos: { 'type': 'array', 'itemType': SetDesktopGroupScaleTimerRequestScaleTimerInfos },
    };
  }

  validate() {
    if(Array.isArray(this.scaleTimerInfos)) {
      $dara.Model.validateArray(this.scaleTimerInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

