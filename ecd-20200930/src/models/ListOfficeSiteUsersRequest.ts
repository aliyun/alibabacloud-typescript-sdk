// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOfficeSiteUsersRequest extends $dara.Model {
  /**
   * @remarks
   * > This parameter is not publicly available. You can only pass in `1` or leave it empty.
   * 
   * @example
   * 1
   */
  assignedInfo?: string;
  /**
   * @remarks
   * The fuzzy query character string.
   * 
   * @example
   * *jin*
   */
  filter?: string;
  /**
   * @remarks
   * Specifies whether to return only users who are assigned cloud computers.
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
   * The pagination token. Leave this parameter empty for the first request or if no more results exist. If more results exist, set this parameter to the NextToken value returned by the previous API call.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The specified AD domain organizational unit (OU).
   * 
   * @example
   * example.com/Domain Controllers
   */
  OUPath?: string;
  /**
   * @remarks
   * The office network ID. Only office networks based on enterprise AD accounts are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID. Call [DescribeRegions](~~DescribeRegions~~) to query the regions supported by Elastic Desktop Service.
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

