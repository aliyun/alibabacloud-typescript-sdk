// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The enterprise cloud drive ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  /**
   * @remarks
   * The office network ID.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The office network name.
   * 
   * @example
   * testDirectoryName
   */
  directoryName?: string;
  /**
   * @remarks
   * The team space status.
   * 
   * @example
   * enabled
   */
  driveStatus?: string;
  /**
   * @remarks
   * Specifies whether a space is added. Default value: empty, which indicates that all types are queried.
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
   * The list of team space IDs.
   */
  groupId?: string[];
  /**
   * @remarks
   * The team space name. Fuzzy match is supported.
   * 
   * @example
   * TestTeam1
   */
  groupName?: string;
  /**
   * @remarks
   * The team type. Default value: empty, which indicates that all types are queried.
   * 
   * @example
   * org
   */
  groupType?: string;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * - Maximum value: 100.
   * - Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the value of `NextToken` that was returned in the previous call. You do not need to set this parameter for the first request.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lY3I2VNHLwy+nIoSXh****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent node of the object to query. To query the root node, set this parameter to `root`.
   * 
   * Default value: empty, which indicates that all team spaces are queried.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  parentGroupId?: string;
  /**
   * @remarks
   * The region ID. You can call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) to query the regions supported by Elastic Desktop Service.
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

