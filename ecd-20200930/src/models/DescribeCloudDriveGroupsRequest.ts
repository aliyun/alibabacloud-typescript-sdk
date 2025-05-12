// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudDriveGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud disk in Cloud Drive Service.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai+cds-135515****
   */
  cdsId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * @example
   * testDirectoryName
   */
  directoryName?: string;
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
  driveStatus?: string;
  /**
   * @remarks
   * Specifies whether the space is increased.
   * 
   * *   binding: increased
   * *   unbound: not increased
   * 
   * Default value: null. The default value indicates that all spaces are queried.
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
   * The team ID.
   */
  groupId?: string[];
  /**
   * @remarks
   * The team name for fuzzy search.
   * 
   * @example
   * Test Team 1
   */
  groupName?: string;
  /**
   * @remarks
   * The team type.
   * 
   * *   org: organizational structure
   * *   directory: workspace
   * 
   * Default value: null. The default value indicates that all types of teams are queried.
   * 
   * @example
   * org
   */
  groupType?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * *   Valid values: 1 to 100
   * *   Default value: 20
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6lY3I2VNHLwy+nIoSXh****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent node. If a parent node ID is specified, the subnodes are queried. If you set the value of this parameter to root, the root node is queried.
   * 
   * Default value: null. The default value indicates that all nodes are queried.
   * 
   * @example
   * cg-e70ga4ixp30ur****
   */
  parentGroupId?: string;
  /**
   * @remarks
   * The region ID.
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

