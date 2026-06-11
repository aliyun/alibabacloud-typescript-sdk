// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaKnowledgeBaseChunk } from "./OneMetaKnowledgeBaseChunk";


export class ListDocumentChunksResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of chunks.
   */
  data?: OneMetaKnowledgeBaseChunk[];
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @remarks
   * The number of entries returned on this page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page of results.
   * 
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique request ID. If you encounter an error, provide this ID for troubleshooting.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates if the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of chunks that meet the filter criteria. (This feature is not yet supported, and the value is always 0.)
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': OneMetaKnowledgeBaseChunk },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

