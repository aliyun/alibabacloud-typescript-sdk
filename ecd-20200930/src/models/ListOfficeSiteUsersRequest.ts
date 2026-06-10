// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfficeSiteUsersRequest extends $dara.Model {
  assignedInfo?: string;
  /**
   * @remarks
   * The query string for fuzzy matching.
   * 
   * @example
   * *jin*
   */
  filter?: string;
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
   * The token for the next page of results. Leave this empty for the first query. For subsequent queries, use the NextToken value from the previous response.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The path of the organizational unit (OU) in the AD domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUPath?: string;
  /**
   * @remarks
   * The office network ID. Only office networks that use enterprise AD accounts are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to get a list of regions where WUYING Workspace is available.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  sortType?: string;
  static names(): { [key: string]: string } {
    return {
      assignedInfo: 'AssignedInfo',
      filter: 'Filter',
      includeAssignedUser: 'IncludeAssignedUser',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      OUPath: 'OUPath',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      sortType: 'SortType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedInfo: 'string',
      filter: 'string',
      includeAssignedUser: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      OUPath: 'string',
      officeSiteId: 'string',
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

