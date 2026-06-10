// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoryUsersRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available. You can only set this parameter to `1` or leave it empty.
   * 
   * @example
   * 1
   */
  assignedInfo?: string;
  /**
   * @remarks
   * The AD directory ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The string for a fuzzy search. The operation returns all results that contain this string.
   * 
   * @example
   * alice
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return only users who are assigned cloud desktops.
   * 
   * @example
   * true
   */
  includeAssignedUser?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Maximum value: 100.
   * 
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query. If this value is empty, no more results are available.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the organizational unit (OU) in the AD domain. You can call [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) to obtain the OU path.
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUPath?: string;
  /**
   * @remarks
   * The region ID. To get a list of regions that WUYING Workspace supports, call [DescribeRegions](https://help.aliyun.com/document_detail/196646.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sorting method.
   * 
   * @example
   * asc
   */
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      assignedInfo: 'AssignedInfo',
      directoryId: 'DirectoryId',
      filter: 'Filter',
      includeAssignedUser: 'IncludeAssignedUser',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OUPath: 'OUPath',
      regionId: 'RegionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedInfo: 'string',
      directoryId: 'string',
      filter: 'string',
      includeAssignedUser: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      OUPath: 'string',
      regionId: 'string',
      sortType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

