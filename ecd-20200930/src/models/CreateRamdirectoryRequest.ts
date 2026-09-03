// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRAMDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The method allowed for connecting to cloud computers.
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The directory name. The name must be 2 to 255 characters in length and can contain letters and Chinese characters. The name must start with a letter or a Chinese character and cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testDirectoryName
   */
  directoryName?: string;
  /**
   * @remarks
   * Specifies whether to grant local administrator permissions to users who use cloud computers.
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable public network access.
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vSwitch ID. Only one vSwitch can be specified.
   * 
   * This parameter is required.
   */
  vSwitchId?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAccessType: 'DesktopAccessType',
      directoryName: 'DirectoryName',
      enableAdminAccess: 'EnableAdminAccess',
      enableInternetAccess: 'EnableInternetAccess',
      regionId: 'RegionId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAccessType: 'string',
      directoryName: 'string',
      enableAdminAccess: 'boolean',
      enableInternetAccess: 'boolean',
      regionId: 'string',
      vSwitchId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vSwitchId)) {
      $dara.Model.validateArray(this.vSwitchId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

