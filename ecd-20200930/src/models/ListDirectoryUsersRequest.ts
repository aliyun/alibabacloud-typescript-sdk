// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDirectoryUsersRequest extends $dara.Model {
  /**
   * @remarks
   * > This field is not available for use. You can only pass in `1` or leave it empty.
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
   * The fuzzy match query string. All results that contain this character string are returned.
   * 
   * @example
   * alice
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return only users who have been assigned cloud computers.
   * 
   * @example
   * true
   */
  includeAssignedUser?: boolean;
  /**
   * @remarks
   * The number of entries per page for a paged query.    
   * 
   * - Maximum value: 100.    
   * - Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. An empty value indicates that no more results exist.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The organizational unit (OU) in the AD domain to which the user belongs. You can call [ListUserAdOrganizationUnits](https://help.aliyun.com/document_detail/311259.html) to obtain this value.
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUPath?: string;
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

