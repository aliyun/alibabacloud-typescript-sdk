// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the permission group that is attached to the mount target.
   * 
   * @example
   * classic-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * The dual-stack (IPv4 and IPv6) domain name of the mount target.
   * 
   * >  Only Extreme NAS file systems that reside in the Chinese mainland support IPv6.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * *   Sample ID of a General-purpose NAS file system: `31a8e4****`.
   * *   The IDs of Extreme NAS file systems must start with `extreme-`, for example, `extreme-0015****`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The IPv4 domain name of the mount target.
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
   * *   Active: The mount target is available.
   * *   Inactive: The mount target is unavailable.
   * 
   * >  Only General-purpose File Storage NAS (NAS) file systems support changing the mount target status.
   * 
   * @example
   * Inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupName: 'AccessGroupName',
      dualStackMountTargetDomain: 'DualStackMountTargetDomain',
      fileSystemId: 'FileSystemId',
      mountTargetDomain: 'MountTargetDomain',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupName: 'string',
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

