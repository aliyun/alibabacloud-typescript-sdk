// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskGroupDrivesResponseBodyCloudDriveGroups extends $dara.Model {
  /**
   * @remarks
   * The time the drive was created.
   * 
   * @example
   * 2022-04-11T07:44:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-959593****
   */
  directoryId?: string;
  /**
   * @remarks
   * The drive ID.
   * 
   * @example
   * 1234
   */
  driveId?: string;
  /**
   * @remarks
   * The team drive ID.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  groupId?: string;
  /**
   * @remarks
   * The team drive name.
   * 
   * @example
   * Test team 1
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
   * The status of the team drive.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The total capacity of the cloud disk team drive.
   * 
   * @example
   * 5368709120
   */
  totalSize?: number;
  /**
   * @remarks
   * The used space size, in bytes.
   * 
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
  /**
   * @remarks
   * The list of cloud disk team drives.
   */
  cloudDriveGroups?: DescribeCloudDiskGroupDrivesResponseBodyCloudDriveGroups[];
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The token that marks the start of the next query. An empty NextToken means no more results.
   * 
   * @example
   * MTA0MjA=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B9F9CBBE-8A9F-5FE5-8A72-0E81C2401A91
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation succeeded.
   * 
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

