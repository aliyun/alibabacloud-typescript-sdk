// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the enterprise cloud drive.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  /**
   * @remarks
   * The ID of the office network.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The name of the office network.
   * 
   * @example
   * testDirectoryName
   */
  directoryName?: string;
  /**
   * @remarks
   * The status of the team workspace.
   * 
   * @example
   * enabled
   */
  driveStatus?: string;
  /**
   * @remarks
   * Specifies whether a workspace is added. By default, this parameter is left empty, which indicates that all workspaces are queried.
   * 
   * @example
   * binding
   * 
   * **if can be null:**
   * true
   */
  driveType?: string;
  /**
   * @remarks
   * The IDs of the team workspaces.
   */
  groupId?: string[];
  /**
   * @remarks
   * The name of the team workspace. Fuzzy match is supported.
   * 
   * @example
   * TestTeam1
   */
  groupName?: string;
  /**
   * @remarks
   * The team type. By default, this parameter is left empty, which indicates that all types are queried.
   * 
   * @example
   * org
   */
  groupType?: string;
  /**
   * @remarks
   * The number of entries to return on each page during paging in a paged query.
   * 
   * - Maximum value: 100
   * - Default value: 20
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set the value to the `NextToken` value returned from the last call. You do not need to specify this parameter for the first call.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lY3I2VNHLwy+nIoSXh****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent node of the object to be queried. To query the root node, set this parameter to `root`. By default, this parameter is left empty, which indicates that all objects are queried.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  parentGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the list of regions supported by Elastic Desktop Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      cdsId: 'CdsId',
      directoryId: 'DirectoryId',
      directoryName: 'DirectoryName',
      driveStatus: 'DriveStatus',
      driveType: 'DriveType',
      groupId: 'GroupId',
      groupName: 'GroupName',
      groupType: 'GroupType',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentGroupId: 'ParentGroupId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cdsId: 'string',
      directoryId: 'string',
      directoryName: 'string',
      driveStatus: 'string',
      driveType: 'string',
      groupId: { 'type': 'array', 'itemType': 'string' },
      groupName: 'string',
      groupType: 'string',
      maxResults: 'number',
      nextToken: 'string',
      parentGroupId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupId)) {
      $dara.Model.validateArray(this.groupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

