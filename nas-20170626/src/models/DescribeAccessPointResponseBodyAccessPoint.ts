// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccessPointResponseBodyAccessPointPosixUser } from "./DescribeAccessPointResponseBodyAccessPointPosixUser";
import { DescribeAccessPointResponseBodyAccessPointRootPathPermission } from "./DescribeAccessPointResponseBodyAccessPointRootPathPermission";


export class DescribeAccessPointResponseBodyAccessPoint extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the access point.
   * 
   * @example
   * acs:nas:cn-hangzhou:178321033379****:accesspoint/ap-ie15yd****
   */
  ARN?: string;
  /**
   * @remarks
   * The name of the permission group.
   * 
   * @example
   * test
   */
  accessGroup?: string;
  /**
   * @remarks
   * The ID of the access point.
   * 
   * @example
   * ap-ie15yd****
   */
  accessPointId?: string;
  /**
   * @remarks
   * The name of the access point.
   * 
   * @example
   * test
   */
  accessPointName?: string;
  /**
   * @remarks
   * The time when the access point was created.
   * 
   * @example
   * 1709619668276167
   */
  createTime?: string;
  /**
   * @remarks
   * The domain name of the access point.
   * 
   * @example
   * ap-ie15ydanoz.001014****-w****.cn-hangzhou.nas.aliyuncs.com
   */
  domainName?: string;
  /**
   * @remarks
   * Indicates whether the RAM policy is enabled.
   * 
   * @example
   * false
   */
  enabledRam?: boolean;
  /**
   * @remarks
   * The ID of the file system.
   * 
   * @example
   * 31a8e4****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * The time when the access point was modified.
   * 
   * @example
   * 1709619668276167
   */
  modifyTime?: string;
  /**
   * @remarks
   * The POSIX user.
   */
  posixUser?: DescribeAccessPointResponseBodyAccessPointPosixUser;
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
   * The root directory.
   * 
   * @example
   * /
   */
  rootPath?: string;
  /**
   * @remarks
   * The permissions to create the root directory.
   */
  rootPathPermission?: DescribeAccessPointResponseBodyAccessPointRootPathPermission;
  /**
   * @remarks
   * The status of the root directory.
   * 
   * Valid values:
   * 
   * *   0: The rootpath status is unknown.
   * *   1: The rootpath does not exist and may be deleted.
   * *   2: The rootpath is normal.
   * 
   * @example
   * 2
   */
  rootPathStatus?: string;
  /**
   * @remarks
   * The status of the access point.
   * 
   * Valid values:
   * 
   * *   Active: The access point is available.
   * *   Inactive: The access point is unavailable.
   * *   Pending: The access point is being created.
   * *   Deleting: The access point is being deleted.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2zevmwkwyztjuoffg****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * You must select the VPC of the Elastic Compute Service (ECS) instance on which you want to mount the file system.
   * 
   * @example
   * vpc-2zesj9afh3y518k9o****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      ARN: 'ARN',
      accessGroup: 'AccessGroup',
      accessPointId: 'AccessPointId',
      accessPointName: 'AccessPointName',
      createTime: 'CreateTime',
      domainName: 'DomainName',
      enabledRam: 'EnabledRam',
      fileSystemId: 'FileSystemId',
      modifyTime: 'ModifyTime',
      posixUser: 'PosixUser',
      regionId: 'RegionId',
      rootPath: 'RootPath',
      rootPathPermission: 'RootPathPermission',
      rootPathStatus: 'RootPathStatus',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ARN: 'string',
      accessGroup: 'string',
      accessPointId: 'string',
      accessPointName: 'string',
      createTime: 'string',
      domainName: 'string',
      enabledRam: 'boolean',
      fileSystemId: 'string',
      modifyTime: 'string',
      posixUser: DescribeAccessPointResponseBodyAccessPointPosixUser,
      regionId: 'string',
      rootPath: 'string',
      rootPathPermission: DescribeAccessPointResponseBodyAccessPointRootPathPermission,
      rootPathStatus: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(this.posixUser && typeof (this.posixUser as any).validate === 'function') {
      (this.posixUser as any).validate();
    }
    if(this.rootPathPermission && typeof (this.rootPathPermission as any).validate === 'function') {
      (this.rootPathPermission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

