// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMountTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The permission group attached to the mount target.
   * 
   * @example
   * classic-test
   */
  accessGroupName?: string;
  /**
   * @remarks
   * Specifies whether the VPC mount target supports access only through access points. This parameter applies only to CPFS for Lingjun file systems.
   * 
   * @example
   * false
   */
  accessPointAccessOnly?: boolean;
  /**
   * @remarks
   * The IPv4/IPv6 dual-stack mount target.
   * 
   * > Currently, only Extreme NAS in regions in the Chinese mainland supports IPv6.
   * 
   * @example
   * 174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com
   */
  dualStackMountTargetDomain?: string;
  /**
   * @remarks
   * The file system ID.
   * - General-purpose NAS: `31a8e4****`.
   * - Extreme NAS: Must start with `extreme-`, such as `extreme-0015****`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1ca404****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The IPv4 mount target.
   * 
   * @example
   * 1ca404a666-w****.cn-hangzhou.nas.aliyuncs.com
   */
  mountTargetDomain?: string;
  /**
   * @remarks
   * The mount target status.
   * 
   * Valid values:
   * 
   * - Active: active
   * - Inactive: inactive
   * 
   * > Only General-purpose NAS supports changing the mount target status.
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

