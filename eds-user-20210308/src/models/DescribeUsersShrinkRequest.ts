// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersShrinkRequest extends $dara.Model {
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
   * The list of usernames (EndUserId) to be exactly excluded.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * Excludes convenience users that belong to the specified user group.
   * 
   * @example
   * ug-12341234****
   */
  excludeGroupId?: string;
  /**
   * @remarks
   * The fuzzy search string. This parameter supports matching usernames (EndUserId) and email addresses (Email). This field supports wildcards (*). For example, if you set this field to `a*m`, all results where the username or email address starts with `a` and ends with `m` are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  /**
   * @remarks
   * The mapping of fuzzy match conditions for user information. This parameter supports usernames, nicknames, mobile phone numbers, email addresses, remarks, and employee IDs.
   */
  filterMapShrink?: string;
  /**
   * @remarks
   * Filters users based on the allocation relationship of specified resources. The mapping key is the resource type.
   */
  filterWithAssignedResourceShrink?: string;
  /**
   * @remarks
   * Filters users based on whether cloud resources are allocated.
   */
  filterWithAssignedResourcesShrink?: string;
  /**
   * @remarks
   * The user group ID for exact match. Queries the list of accounts that belong to the specified user group.
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
   * The number of entries to return on each page in a paging query.
   * - Valid values: 1 to 500.
   * - Default value: 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query. You do not need to specify this parameter for the first call.      
   * If the results returned in a single call do not include all entries, a non-empty NextToken is returned. You can use the returned NextToken in subsequent calls to continue the query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The organization ID for exact match. Queries the list of accounts that belong to the specified organization.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * The extended information of users to query.
   */
  showExtrasShrink?: string;
  solutionId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * 0
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
      filterMapShrink: 'FilterMap',
      filterWithAssignedResourceShrink: 'FilterWithAssignedResource',
      filterWithAssignedResourcesShrink: 'FilterWithAssignedResources',
      groupId: 'GroupId',
      isQueryAllSubOrgs: 'IsQueryAllSubOrgs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      orgId: 'OrgId',
      showExtrasShrink: 'ShowExtras',
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
      filterMapShrink: 'string',
      filterWithAssignedResourceShrink: 'string',
      filterWithAssignedResourcesShrink: 'string',
      groupId: 'string',
      isQueryAllSubOrgs: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      orgId: 'string',
      showExtrasShrink: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

