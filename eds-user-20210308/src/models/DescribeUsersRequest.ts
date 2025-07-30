// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUsersRequest extends $dara.Model {
  bizType?: string;
  /**
   * @remarks
   * The usernames that must be exactly matched.
   */
  endUserIds?: string[];
  /**
   * @remarks
   * The usernames that must be exactly excluded.
   */
  excludeEndUserIds?: string[];
  excludeGroupId?: string;
  /**
   * @remarks
   * The string that is used for fuzzy search. You perform fuzzy search by username (EndUserId) and email address (Email). Wildcard characters (\\*) are supported. For example, if you set this parameter to `a*m`, usernames or email addresses that start with `a` and end with `m` are returned.
   * 
   * @example
   * a*m
   */
  filter?: string;
  filterWithAssignedResource?: { [key: string]: string };
  filterWithAssignedResources?: { [key: string]: boolean };
  /**
   * @remarks
   * The ID of the organization in which you want to query convenience users.
   * 
   * @example
   * ug-12341234****
   */
  groupId?: string;
  isQueryAllSubOrgs?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * *   Valid values: 1 to 500.
   * *   Default value: 500.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request.\\
   * If not all results are returned in a query, a value is returned for the NextToken parameter. In this case, you can use the return value of NextToken to perform the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the organization in which you want to query users.
   * 
   * @example
   * org-4mdgc1cocc59z****
   */
  orgId?: string;
  showExtras?: { [key: string]: any };
  solutionId?: string;
  status?: number;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endUserIds: 'EndUserIds',
      excludeEndUserIds: 'ExcludeEndUserIds',
      excludeGroupId: 'ExcludeGroupId',
      filter: 'Filter',
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
      endUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeEndUserIds: { 'type': 'array', 'itemType': 'string' },
      excludeGroupId: 'string',
      filter: 'string',
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

