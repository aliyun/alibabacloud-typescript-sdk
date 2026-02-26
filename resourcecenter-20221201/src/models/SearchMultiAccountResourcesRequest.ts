// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMultiAccountResourcesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The key of the filter condition. For more information, see the "`Supported filter parameters`" section below.
   * 
   * @example
   * ResourceGroupId
   */
  key?: string;
  /**
   * @remarks
   * The matching method.
   * 
   * Set this parameter to `Equals`, which means an exact match.
   * 
   * @example
   * Equals
   */
  matchType?: string;
  /**
   * @remarks
   * The values of the filter condition.
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

export class SearchMultiAccountResourcesRequestSortCriterion extends $dara.Model {
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

export class SearchMultiAccountResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions.
   */
  filter?: SearchMultiAccountResourcesRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries to return on each page.
   * 
   * Valid values: 1 to 100.
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
   * The scope of the accounts in which you want to search for resources. Valid values:
   * 
   * - The ID of a resource directory: Searches for resources in the management account and all its member accounts. For more information, see [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html).
   * 
   * - The ID of the Root folder: Searches for resources in all member accounts under the Root folder and its subfolders. For more information, see [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html).
   * 
   * - The ID of a folder: Searches for resources in all member accounts under the folder. For more information, see [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html).
   * 
   * - The ID of a member account: Searches for resources in the member account. For more information, see [ListAccounts](https://help.aliyun.com/document_detail/160016.html).
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  /**
   * @remarks
   * The sorting parameters.
   */
  sortCriterion?: SearchMultiAccountResourcesRequestSortCriterion;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      scope: 'Scope',
      sortCriterion: 'SortCriterion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': SearchMultiAccountResourcesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      scope: 'string',
      sortCriterion: SearchMultiAccountResourcesRequestSortCriterion,
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

