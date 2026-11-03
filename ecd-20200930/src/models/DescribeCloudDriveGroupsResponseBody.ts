// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos extends $dara.Model {
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@aliyun.com
   */
  email?: string;
  /**
   * @remarks
   * The username of the administrator. The username may be unreadable if it is imported from a third-party system.
   * 
   * @example
   * user01
   */
  endUserId?: string;
  /**
   * @remarks
   * The employee ID in DingTalk.
   * 
   * @example
   * 12345
   */
  jobNumber?: string;
  /**
   * @remarks
   * The nickname of the administrator.
   * 
   * @example
   * John Doe
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 12345678
   */
  phone?: string;
  /**
   * @remarks
   * The nickname of the administrator.
   * 
   * @example
   * John Doe
   */
  realNickName?: string;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * John Doe
   */
  remark?: string;
  static names(): { [key: string]: string } {
    return {
      email: 'Email',
      endUserId: 'EndUserId',
      jobNumber: 'JobNumber',
      nickName: 'NickName',
      phone: 'Phone',
      realNickName: 'RealNickName',
      remark: 'Remark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: 'string',
      endUserId: 'string',
      jobNumber: 'string',
      nickName: 'string',
      phone: 'string',
      realNickName: 'string',
      remark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroups extends $dara.Model {
  /**
   * @remarks
   * The list of team administrators.
   * 
   * @example
   * ["user01"]
   */
  adminUserIds?: string;
  /**
   * @remarks
   * The information about the administrators of the team storage management.
   */
  adminUserInfos?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos[];
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-11T07:44:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-959593****
   */
  directoryId?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * sh1234
   */
  driveId?: string;
  /**
   * @remarks
   * The ID of the team workspace.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the team workspace.
   * 
   * @example
   * TestTeam1
   */
  groupName?: string;
  /**
   * @remarks
   * The organization ID of the team.
   * 
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @remarks
   * The size of the recycle bin in the team workspace. Unit: bytes.
   * 
   * @example
   * 1024000
   */
  recycleBinSize?: string;
  /**
   * @remarks
   * The status of the team workspace.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The total capacity of the team workspace.
   * 
   * @example
   * 5368709120
   */
  totalSize?: number;
  /**
   * @remarks
   * The size of the used space. Unit: bytes.
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

export class DescribeCloudDriveGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of team workspaces in the cloud drive.
   */
  cloudDriveGroups?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroups[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The token for the next query. If `NextToken` is empty, no more results are available.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EF015AE5-B30A-5189-B519-735CEE40****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      cloudDriveGroups: 'CloudDriveGroups',
      count: 'Count',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudDriveGroups: { 'type': 'array', 'itemType': DescribeCloudDriveGroupsResponseBodyCloudDriveGroups },
      count: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cloudDriveGroups)) {
      $dara.Model.validateArray(this.cloudDriveGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

