// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRAMDirectoryRequest extends $dara.Model {
  /**
   * @remarks
   * The method in which the cloud computer is connected.
   * 
   * Valid values:
   * 
   * *   VPC
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Internet (default)
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Any
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * Internet
   */
  desktopAccessType?: string;
  /**
   * @remarks
   * The directory name. The name must be 2 to 255 characters in length. It must start with a letter but cannot start with `http://` or `https://`. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * testDirectoryName
   */
  directoryName?: string;
  /**
   * @remarks
   * Specifies whether to grant the local administrator permissions to users that are authorized to use cloud computers in the office network.
   * 
   * Valid values:
   * 
   * *   <!-- -->
   * 
   *     true
   * 
   *     <!-- -->
   * 
   *     (default)
   * 
   *     <!-- -->
   * 
   * *   <!-- -->
   * 
   *     false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * true
   */
  enableAdminAccess?: boolean;
  /**
   * @remarks
   * Specifies whether to enable Internet access.
   * 
   * Valid values:
   * 
   * *   true
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   false
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * false
   */
  enableInternetAccess?: boolean;
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
   * The vSwitch IDs. You can configure only one vSwitch.
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

