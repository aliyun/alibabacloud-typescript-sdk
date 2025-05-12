// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDesktopTimerRequestDesktopTimers } from "./ModifyDesktopTimerRequestDesktopTimers";


export class ModifyDesktopTimerRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud computers.
   * 
   * This parameter is required.
   */
  desktopId?: string[];
  /**
   * @remarks
   * The details of the scheduled task on cloud computers.
   */
  desktopTimers?: ModifyDesktopTimerRequestDesktopTimers[];
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
   * Specifies whether to use the `DesktopTimers`** parameter. Set the value to `true`**.
   * 
   * @example
   * true
   */
  useDesktopTimers?: boolean;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopTimers: 'DesktopTimers',
      regionId: 'RegionId',
      useDesktopTimers: 'UseDesktopTimers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: { 'type': 'array', 'itemType': 'string' },
      desktopTimers: { 'type': 'array', 'itemType': ModifyDesktopTimerRequestDesktopTimers },
      regionId: 'string',
      useDesktopTimers: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.desktopId)) {
      $dara.Model.validateArray(this.desktopId);
    }
    if(Array.isArray(this.desktopTimers)) {
      $dara.Model.validateArray(this.desktopTimers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

