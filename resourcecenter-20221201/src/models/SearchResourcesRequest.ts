// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchResourcesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information about the valid values, see the "`Supported filter parameters`" section below.
   * 
   * @example
   * RegionId
   */
  key?: string;
  /**
   * @remarks
   * The matching method. Valid values:
   * 
   * - Equals: Exact match.
   * 
   * - Prefix: Prefix match.
   * 
   * - Contains: Contains a value.
   * 
   * - NotContains: Does not contain a value.
   * 
   * - Exists: The key exists.
   * 
   * - NotExists: The key does not exist.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The value of the filter condition.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      matchType: 'MatchType',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      matchType: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequestSortCriterion extends $dara.Model {
  /**
   * @remarks
   * The sort key.
   * 
   * Set this parameter to `CreateTime`, which means the results are sorted by resource creation time.
   * 
   * @example
   * CreateTime
   */
  key?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - ASC: Ascending order.
   * 
   * - DESC: Descending order.
   * 
   * Default value: ASC.
   * 
   * @example
   * ASC
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      order: 'Order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: SearchResourcesRequestFilter[];
  /**
   * @remarks
   * Specifies whether to include deleted resources. Valid values:
   * 
   * - true
   * 
   * - false
   * 
   * @example
   * true
   */
  includeDeletedResources?: boolean;
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * Valid values: 1 to 500.
   * 
   * Default value: 20.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmzawhxxc****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The search keyword. Resource Center filters and sorts the search results based on relevance.
   * If you do not specify a sorting parameter, resources that better match the keyword are displayed with higher priority.
   * 
   * @example
   * keywords
   */
  searchExpression?: string;
  /**
   * @remarks
   * The sorting parameters.
   */
  sortCriterion?: SearchResourcesRequestSortCriterion;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      includeDeletedResources: 'IncludeDeletedResources',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      resourceGroupId: 'ResourceGroupId',
      searchExpression: 'SearchExpression',
      sortCriterion: 'SortCriterion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': SearchResourcesRequestFilter },
      includeDeletedResources: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      resourceGroupId: 'string',
      searchExpression: 'string',
      sortCriterion: SearchResourcesRequestSortCriterion,
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(this.sortCriterion && typeof (this.sortCriterion as any).validate === 'function') {
      (this.sortCriterion as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

