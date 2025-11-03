// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskGroupDrivesResponseBodyCloudDriveGroups extends $dara.Model {
  /**
   * @example
   * 2022-04-11T07:44:21Z
   */
  createTime?: string;
  /**
   * @example
   * cn-hangzhou+dir-959593****
   */
  directoryId?: string;
  /**
   * @example
   * 1234
   */
  driveId?: string;
  /**
   * @example
   * cg-e70ga4ixp30ur****
   */
  groupId?: string;
  groupName?: string;
  /**
   * @example
   * org-aliyun-wy-org-id
   */
  orgId?: string;
  /**
   * @example
   * 1
   */
  status?: string;
  /**
   * @example
   * 5368709120
   */
  totalSize?: number;
  /**
   * @example
   * 1024000000
   */
  usedSize?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      directoryId: 'DirectoryId',
      driveId: 'DriveId',
      groupId: 'GroupId',
      groupName: 'GroupName',
      orgId: 'OrgId',
      status: 'Status',
      totalSize: 'TotalSize',
      usedSize: 'UsedSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      directoryId: 'string',
      driveId: 'string',
      groupId: 'string',
      groupName: 'string',
      orgId: 'string',
      status: 'string',
      totalSize: 'number',
      usedSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudDiskGroupDrivesResponseBody extends $dara.Model {
  cloudDriveGroups?: DescribeCloudDiskGroupDrivesResponseBodyCloudDriveGroups[];
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * MTA0MjA=
   */
  nextToken?: string;
  /**
   * @example
   * B9F9CBBE-8A9F-5FE5-8A72-0E81C2401A91
   */
  requestId?: string;
  /**
   * @example
   * True
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
      cloudDriveGroups: { 'type': 'array', 'itemType': DescribeCloudDiskGroupDrivesResponseBodyCloudDriveGroups },
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

