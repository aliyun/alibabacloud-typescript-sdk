// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccountsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag_key
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * tag_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccountsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to return information about tags. Valid values:
   * 
   * *   false (default value)
   * *   true
   * 
   * @example
   * true
   */
  includeTags?: boolean;
  /**
   * @remarks
   * The number of entries per page. After you configure this parameter, token-based paging is preferentially used.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. If you leave this parameter empty, the query starts from the beginning.
   * 
   * @example
   * TGlzdFJlc291cm****
   */
  nextToken?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: 1 to 100. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The keyword used for the query, such as the display name of a member.
   * 
   * Fuzzy match is supported.
   * 
   * @example
   * Advance
   */
  queryKeyword?: string;
  /**
   * @remarks
   * The tags. This parameter specifies a filter condition.
   */
  tag?: ListAccountsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      includeTags: 'IncludeTags',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      queryKeyword: 'QueryKeyword',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      includeTags: 'boolean',
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      queryKeyword: 'string',
      tag: { 'type': 'array', 'itemType': ListAccountsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

