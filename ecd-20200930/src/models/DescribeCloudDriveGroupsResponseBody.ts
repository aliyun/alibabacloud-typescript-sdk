// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveGroupsResponseBodyCloudDriveGroupsAdminUserInfos extends $dara.Model {
  email?: string;
  endUserId?: string;
  jobNumber?: string;
  nickName?: string;
  phone?: string;
  realNickName?: string;
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

export class DescribeCloudDriveGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of team spaces.
   */
  cloudDriveGroups?: DescribeCloudDriveGroupsResponseBodyCloudDriveGroups[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
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
   * Indicates whether the request was successful.
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

