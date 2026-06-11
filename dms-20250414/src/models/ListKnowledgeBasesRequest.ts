// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBasesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter conditions for the knowledge bases, specified as a JSON string. The only supported key is `state`. Valid values are `0` and `1`.
   * 
   * @example
   * {"state":1}
   */
  filters?: string;
  /**
   * @remarks
   * The maximum number of entries to return on each page. Use this parameter with the `NextToken` parameter to implement pagination.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A keyword to search for in the names of knowledge bases.
   * 
   * @example
   * order
   */
  namePattern?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of results. Valid values:
   * 
   * - Omit this parameter for the first request.
   * 
   * - If the previous response returned a **NextToken** value, use it to retrieve the next page of results.
   * 
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * - `id`: Sorts by knowledge base ID. This is the default.
   * 
   * - `name`: Sorts by knowledge base name.
   * 
   * @example
   * name
   */
  sortFieldName?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **ASC**: Ascending order. This is the default.
   * 
   * - **DESC**: Descending order.
   * 
   * @example
   * Desc
   */
  sortOrder?: string;
  /**
   * @remarks
   * The tag of the knowledge base. In DataAgent, this is the space ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1dq7qod8hxtt1***
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      maxResults: 'MaxResults',
      namePattern: 'NamePattern',
      nextToken: 'NextToken',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: 'string',
      maxResults: 'number',
      namePattern: 'string',
      nextToken: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
      tag: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

