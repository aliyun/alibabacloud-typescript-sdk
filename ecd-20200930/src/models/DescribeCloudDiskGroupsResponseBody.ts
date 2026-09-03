// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDiskGroupsResponseBodyCloudDriveGroups extends $dara.Model {
  /**
   * @remarks
   * The creation time. The time is in the ISO 8601 standard in the UTC format: yyyy-MM-ddTHH:mm:ssZ.
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
   * The space ID.
   * 
   * @example
   * 1234
   */
  driveId?: string;
  /**
   * @remarks
   * The team space ID.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  groupId?: string;
  /**
   * @remarks
   * The team space name.
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
   * The status of the team space.
   * 
   * @example
   * 1
   */
  status?: string;
  /**
   * @remarks
   * The total capacity of the cloud disk team.
   * 
   * @example
   * 5368709120
   */
  totalSize?: number;
  /**
   * @remarks
   * The used space size. Unit: bytes.
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

export class DescribeCloudDiskGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of cloud disk team spaces.
   */
  cloudDriveGroups?: DescribeCloudDiskGroupsResponseBodyCloudDriveGroups[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The token for the next query. If NextToken is empty, no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D648DBF7-9476-53D6-98AB-674836021DFB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful. Valid values: true: The operation is successful. false: The operation failed.
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
      cloudDriveGroups: { 'type': 'array', 'itemType': DescribeCloudDiskGroupsResponseBodyCloudDriveGroups },
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

