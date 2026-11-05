// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMountPointResponseBodyMountPoint extends $dara.Model {
  /**
   * @remarks
   * The ID of the permission group associated with the mount point.
   * 
   * @example
   * acg-e3755fb0-358d-4286-9942-8d461048****
   */
  accessGroupId?: string;
  /**
   * @remarks
   * The time when the mount point was created. The time is in UTC and follows the ISO 8601 standard. Example: 2022-09-19T03:22:32.550267Z.
   * 
   * @example
   * 2022-09-19T03:22:32.550267Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the mount point.
   * 
   * @example
   * Mount the production DFS to a vSwitch in the VPC log cluster
   */
  description?: string;
  /**
   * @remarks
   * The file system ID.
   * 
   * @example
   * 37af8f42-2abc-4e74-889d-664f5163****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The alias of the mount point.
   * 
   * @example
   * hdfs1
   */
  mountPointAlias?: string;
  /**
   * @remarks
   * The domain name of the mount point.
   * 
   * You can use this domain name to access the Apsara File Storage for HDFS file system within the CIDR block of the VPC to which the mount point is attached.
   * 
   * @example
   * f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com
   */
  mountPointDomain?: string;
  /**
   * @remarks
   * The mount point ID.
   * 
   * @example
   * f-37af8f42f****.cn-hangzhou.dfs.aliyuncs.com
   */
  mountPointId?: string;
  /**
   * @remarks
   * The network type of the mount point.
   * 
   * @example
   * VPC
   */
  networkType?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the mount point. Valid values:
   * 
   * - Inactive: The mount point is disabled.
   * - Active: The mount point is enabled.
   * 
   * @example
   * Inactive
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-iq8fymi327krd14mt****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-iq8hhsk3ymzv9m4wn****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      accessGroupId: 'AccessGroupId',
      createTime: 'CreateTime',
      description: 'Description',
      fileSystemId: 'FileSystemId',
      mountPointAlias: 'MountPointAlias',
      mountPointDomain: 'MountPointDomain',
      mountPointId: 'MountPointId',
      networkType: 'NetworkType',
      regionId: 'RegionId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessGroupId: 'string',
      createTime: 'string',
      description: 'string',
      fileSystemId: 'string',
      mountPointAlias: 'string',
      mountPointDomain: 'string',
      mountPointId: 'string',
      networkType: 'string',
      regionId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMountPointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The mount point information.
   */
  mountPoint?: GetMountPointResponseBodyMountPoint;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 55C5FFD6-BF99-41BD-9C66-FFF39189****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mountPoint: 'MountPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mountPoint: GetMountPointResponseBodyMountPoint,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mountPoint && typeof (this.mountPoint as any).validate === 'function') {
      (this.mountPoint as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

