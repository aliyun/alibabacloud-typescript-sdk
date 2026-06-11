// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDocumentChunksRequest extends $dara.Model {
  /**
   * @remarks
   * A filter pattern. The operation returns only the chunks whose titles contain this pattern.
   * 
   * @example
   * test
   */
  chunkTitlePattern?: string;
  /**
   * @remarks
   * The name of the document.
   * 
   * @example
   * test.md
   */
  documentName?: string;
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
   * The maximum number of entries to return on each page.
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
   * The token used to retrieve the next page of results. Omit this parameter to get the first page. If the response returns a `NextToken`, it indicates that more results are available. To get the next page, pass this `NextToken` value in the `NextToken` parameter of your next request. A null value for NextToken indicates that all results have been retrieved.
   * 
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The sort field. Valid values:
   * 
   * - **id** (default): The chunk ID.
   * 
   * - **hits**: The number of hits.
   * 
   * - **modifyTime**: The modification time.
   * 
   * @example
   * hits
   */
  sortFieldName?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **ASC** (default): ascending order.
   * 
   * - **DESC**: descending order.
   * 
   * @example
   * DESC
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      chunkTitlePattern: 'ChunkTitlePattern',
      documentName: 'DocumentName',
      kbUuid: 'KbUuid',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sortFieldName: 'SortFieldName',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chunkTitlePattern: 'string',
      documentName: 'string',
      kbUuid: 'string',
      maxResults: 'number',
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

