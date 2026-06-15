// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the LLM configuration.
   * 
   * @example
   * llm_config_1
   */
  name?: string;
  /**
   * @remarks
   * A pagination token returned from a previous call. Pass this token to retrieve the next page of results. If you do not specify this parameter, the query starts from the beginning.
   * 
   * @example
   * None
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort order.
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The field to sort by.
   * 
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      name: 'Name',
      nextToken: 'NextToken',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

