// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos } from "./DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos";


export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroups extends $dara.Model {
  adminUserIds?: string;
  adminUserInfos?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos[];
  /**
   * @remarks
   * The time when the team space was created.
   * 
   * @example
   * 2022-04-11T07:44:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-959593****
   */
  directoryId?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * sh1234
   */
  driveId?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the team space.
   * 
   * @example
   * Test Team 1
   */
  groupName?: string;
  orgId?: string;
  recycleBinSize?: string;
  /**
   * @remarks
   * The team space status. Valid values:
   * 
   * *   enabled
   * *   disabled
   * 
   * Default value: enabled.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total capacity of the team space.
   * 
   * @example
   * 5368709120
   */
  totalSize?: number;
  /**
   * @remarks
   * The capacity of the used space. Unit: bytes.
   * 
   * @example
   * 1024000000
   */
  usedSize?: string;
  static names(): { [key: string]: string } {
    return {
      adminUserIds: 'AdminUserIds',
      adminUserInfos: 'AdminUserInfos',
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      driveId: 'DriveId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      orgId: 'OrgId',
      recycleBinSize: 'RecycleBinSize',
      status: 'Status',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminUserIds: 'string',
      adminUserInfos: { 'type': 'array', 'itemType': DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos },
      createTime: 'string',
      directoryId: 'string',
      driveId: 'string',
      groupId: 'string',
      groupName: 'string',
      orgId: 'string',
      recycleBinSize: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminUserInfos)) {
      $dara.Model.validateArray(this.adminUserInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

