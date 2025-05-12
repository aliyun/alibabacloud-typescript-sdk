// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfficeSiteUsersRequest extends $dara.Model {
  assignedInfo?: string;
  /**
   * @remarks
   * The query string for fuzzy query.
   * 
   * @example
   * *jin*
   */
  filter?: string;
  includeAssignedUser?: boolean;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * *   Valid values: 1 to 100.
   * *   Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request or if no next query exists. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The organizational unit (OU) of the specified AD domain.
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUPath?: string;
  /**
   * @remarks
   * The office network ID. The office network must be of the enterprise AD account type.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](~~DescribeRegions~~) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.
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

