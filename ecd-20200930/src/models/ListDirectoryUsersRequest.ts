// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoryUsersRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available. The value can be 1 or left empty.
   * 
   * @example
   * 1
   */
  assignedInfo?: string;
  /**
   * @remarks
   * The ID of the AD directory.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-jedbpr4sl9l37****
   */
  directoryId?: string;
  /**
   * @remarks
   * The query string for fuzzy match. If you specify this parameter, the system returns all results that contain the string.
   * 
   * @example
   * alice
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return the users with assigned cloud computers only.
   * 
   * @example
   * true
   */
  includeAssignedUser?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to start the next query. If the value of this parameter is empty, all results are returned.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The organizational unit (OU) in the specified AD domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUPath?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/196646.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sort type.
   * 
   * Valide values:
   * 
   * - asc: cloud computers assigned to users on bottom
   * - desc: cloud computers assigned to users on top
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

