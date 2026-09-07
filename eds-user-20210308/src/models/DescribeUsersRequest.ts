// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersRequest extends $dara.Model {
  bizType?: string;
  /**
   * @remarks
   * The channel.
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The list of usernames (EndUserId) for exact match.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The list of usernames (EndUserId) to exclude exactly.
   */
  excludeEndUserIds?: string[];
  excludeGroupId?: string;
  /**
   * @remarks
   * The fuzzy search string that supports matching by username (EndUserId) and email (Email). This field supports wildcards (*). For example, if you set this field to `a*m`, all results whose username or email starts with `a` and ends with `m` are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  filterMap?: { [key: string]: string };
  filterWithAssignedResource?: { [key: string]: string };
  /**
   * @remarks
   * Filters users based on whether cloud resources are assigned.
   */
  filterWithAssignedResources?: { [key: string]: boolean };
  /**
   * @remarks
   * Performs an exact match by user group ID and queries the list of accounts that belong to the specified user group.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  /**
   * @remarks
   * Specifies whether to query users in sub-organizations.
   * 
   * @example
   * true
   */
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries per page for a paged query.  
   * 
   * - Valid values: 1 to 500.  
   * - Default value: 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query. You do not need to set this parameter for the first request. If not all results are returned in a single query, a non-empty NextToken is returned. You can pass the returned NextToken in subsequent requests to continue the query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * Performs an exact match by organization ID and queries the list of accounts that belong to the specified organization.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * Queries extended user information.
   */
  showExtras?: { [key: string]: any };
  solutionId?: string;
  /**
   * @remarks
   * The status.
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      businessChannel: 'BusinessChannel',
      endUserIds: 'EndUserIds',
      excludeEndUserIds: 'ExcludeEndUserIds',
      excludeGroupId: 'ExcludeGroupId',
      filter: 'Filter',
      filterMap: 'FilterMap',
      filterWithAssignedResource: 'FilterWithAssignedResource',
      filterWithAssignedResources: 'FilterWithAssignedResources',
      groupId: 'GroupId',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      showExtras: 'ShowExtras',
      solutionId: 'SolutionId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      businessChannel: 'string',
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeGroupId: 'string',
      filter: 'string',
      filterMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      filterWithAssignedResource: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      filterWithAssignedResources: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
      groupId: 'string',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      showExtras: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      solutionId: 'string',
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.endUserIds)) {
      $dara.Model.validateArray(this.endUserIds);
    }
    if(Array.isArray(this.excludeEndUserIds)) {
      $dara.Model.validateArray(this.excludeEndUserIds);
    }
    if(this.filterMap) {
      $dara.Model.validateMap(this.filterMap);
    }
    if(this.filterWithAssignedResource) {
      $dara.Model.validateMap(this.filterWithAssignedResource);
    }
    if(this.filterWithAssignedResources) {
      $dara.Model.validateMap(this.filterWithAssignedResources);
    }
    if(this.showExtras) {
      $dara.Model.validateMap(this.showExtras);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

