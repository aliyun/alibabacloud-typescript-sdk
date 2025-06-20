// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMultiAccountResourcesRequestFilter } from "./SearchMultiAccountResourcesRequestFilter";
import { SearchMultiAccountResourcesRequestSortCriterion } from "./SearchMultiAccountResourcesRequestSortCriterion";


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
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * If the total number of entries returned for the current request exceeds the value of the `MaxResults` parameter, the entries are truncated. In this case, you can use the token to initiate another request and obtain the remaining entries.``
   * 
   * @example
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The search scope. You can set the value to one of the following items:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched. You can call the [GetResourceDirectory](https://help.aliyun.com/document_detail/159995.html) operation to obtain the ID.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a folder: Resources within all members in the folder are searched. You can call the [ListFoldersForParent](https://help.aliyun.com/document_detail/159997.html) operation to obtain the ID.
   * *   ID of a member: Resources within the member are searched. You can call the [ListAccounts](https://help.aliyun.com/document_detail/160016.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  /**
   * @remarks
   * The method that is used to sort the entries returned.
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

