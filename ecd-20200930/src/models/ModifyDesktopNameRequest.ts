// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDesktopNameRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud computer.
   * 
   * This parameter is required.
   * 
   * @example
   * ecd-gx2x1dhsmucyy****
   */
  desktopId?: string;
  /**
   * @remarks
   * The new name of the cloud computer. The name of the cloud computer must meet the following requirements:
   * 
   * *   The name must be 1 to 64 characters in length.
   * *   The name must start with a letter but cannot start with `http://` or `https://`.
   * *   The name can only contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  newDesktopName?: string;
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
  static names(): { [key: string]: string } {
    return {
      desktopId: 'DesktopId',
      newDesktopName: 'NewDesktopName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopId: 'string',
      newDesktopName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

