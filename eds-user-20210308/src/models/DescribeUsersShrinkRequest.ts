// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersShrinkRequest extends $dara.Model {
  bizType?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * ENTERPRISE
   */
  businessChannel?: string;
  /**
   * @remarks
   * The list of usernames (EndUserId) that you want to exactly match.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The list of usernames (EndUserId) that you want to exactly exclude.
   */
  excludeEndUserIds?: string[];
  /**
   * @remarks
   * The ID of the user group to exclude. If specified, the query returns users who are not in this user group.
   */
  excludeGroupId?: string;
  /**
   * @remarks
   * The filter for a fuzzy search. The filter matches usernames (EndUserId) and email addresses (Email). This parameter supports the wildcard character (\\*). For example, if you set this parameter to `a*m`, all results whose usernames or email addresses start with `a` and end with `m` are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  filterMapShrink?: string;
  /**
   * @remarks
   * Filters users by whether a cloud resource is assigned.
   */
  filterWithAssignedResourceShrink?: string;
  /**
   * @remarks
   * > This parameter is not available to the public.
   */
  filterWithAssignedResourcesShrink?: string;
  /**
   * @remarks
   * Performs an exact match by user group ID to query the list of accounts that belong to the user group.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  /**
   * @remarks
   * Queries extended information about the user.
   * 
   * @example
   * true
   */
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * - Valid values: 1 to 500.
   * 
   * - Default value: 200.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that is used to start the next query. If the number of entries returned exceeds the value of MaxResults, a token is returned. You can use this token in the next query to continue the query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * Performs an exact match by organization ID to query the list of accounts that belong to the organization.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  /**
   * @remarks
   * > This parameter is not available to the public.
   */
  showExtrasShrink?: string;
  solutionId?: string;
  /**
   * @remarks
   * Specifies whether to query users in suborganizations.
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

