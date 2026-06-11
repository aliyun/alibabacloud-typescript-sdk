// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentsRequest extends $dara.Model {
  /**
   * @remarks
   * The document property filter. The following properties are supported:
   * 
   * - `fileExt`: The document extension.
   * 
   * - `state`: The document status.
   * 
   * @example
   * {"fileExt":"pdf","state":0}
   */
  filters?: string;
  /**
   * @remarks
   * The ID of the knowledge base.
   * 
   * This parameter is required.
   * 
   * @example
   * kb-***
   */
  kbUuid?: string;
  /**
   * @remarks
   * The maximum number of documents to return per page.
   * 
   * Valid values: 1 to 100.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The document name filter. Returns only documents whose names contain this value.
   * 
   * @example
   * test
   */
  namePattern?: string;
  /**
   * @remarks
   * The pagination token to retrieve the next page of results. Omit this parameter to retrieve the first page. A `NextToken` value in the response indicates that more results are available. To fetch the next page, pass this value in a subsequent request. A `null` value indicates that all results have been retrieved.
   * 
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * - `id` (default): The document ID.
   * 
   * - `hits`: The number of hits.
   * 
   * - `modifyTime`: The modification time.
   * 
   * @example
   * hits
   */
  sortFieldName?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **ASC** (default): Sorts in ascending order.
   * 
   * - **DESC**: Sorts in descending order.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      filters: 'Filters',
      kbUuid: 'KbUuid',
      maxResults: 'MaxResults',
      namePattern: 'NamePattern',
      nextToken: 'NextToken',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filters: 'string',
      kbUuid: 'string',
      maxResults: 'number',
      namePattern: 'string',
      nextToken: 'string',
      sortFieldName: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

