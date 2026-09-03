// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopNameRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud computer ID.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The list of cloud computer IDs.
   */
  desktopIds?: string[];
  /**
   * @remarks
   * The new name of the cloud computer. The name must meet the following requirements:
   * 
   * - The name cannot exceed 64 characters in length.
   * - The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`.
   * - The name can contain Chinese characters, letters, digits, colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * @example
   * DemoComputer01
   */
  newDesktopName?: string;
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
   * The user assignment mode.
   * 
   * @example
   * ALL
   */
  userAssignMode?: string;
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      desktopIds: 'DesktopIds',
      newDesktopName: 'NewDesktopName',
      regionId: 'RegionId',
      userAssignMode: 'UserAssignMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      newDesktopName: 'string',
      regionId: 'string',
      userAssignMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

