// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud desktop.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  desktopIds?: string[];
  /**
   * @remarks
   * The new name of the cloud desktop. The name must meet the following requirements:
   * 
   * - The name must be 1 to 64 characters in length.
   * 
   * - The name must start with a letter or a Chinese character. It cannot start with `http://` or `https://`.
   * 
   * - The name can contain digits, letters, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * @example
   * DemoComputer01
   */
  newDesktopName?: string;
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to obtain a list of regions that are supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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

