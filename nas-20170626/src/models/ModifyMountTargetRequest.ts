// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the access group that is associated with the mount target.
   * 
   * @example
   * classic-test
   */
  accessGroupName?: string;
  accessPointAccessOnly?: boolean;
  /**
   * @remarks
   * The domain name of the dual-stack mount target.
   * 
   * > The IPv6 feature is available only for Extreme NAS file systems in the Chinese mainland.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * - For a General-purpose NAS file system, the ID is similar to `31a8e4****`.
   * 
   * - For an Extreme NAS file system, the ID must start with `extreme-`, for example, `extreme-0015****`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The domain name of the IPv4 mount target.
   * 
   * @example
   * 1ca404a666-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The status of the mount target.
   * 
   * Valid values:
   * 
   * - Active: The mount target is available.
   * 
   * - Inactive: The mount target is unavailable.
   * 
   * > You can change the status of a mount target only if the mount target is attached to a General-purpose NAS file system.
   * 
   * @example
   * Inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      accessPointAccessOnly: 'AccessPointAccessOnly',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
      accessPointAccessOnly: 'boolean',
      dualStackMountTargetDomain: 'string',
      fileSystemId: 'string',
      mountTargetDomain: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

