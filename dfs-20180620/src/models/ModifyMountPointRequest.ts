// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMountPointRequest extends $dara.Model {
  /**
   * @remarks
   * The permission group ID.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The description of the mount point.
   * 
   * @example
   * Mount the production DFS to the vSwitch of the VPC log cluster
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 37af8f42-2abc-4e74-889d-664f5163****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @remarks
   * The status of the mount point. Valid values:
   * - Inactive: Disables the mount point.
   * - Active: Enables the mount point.
   * 
   * @example
   * Inactive
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      mountPointId: 'MountPointId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      mountPointId: 'string',
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

