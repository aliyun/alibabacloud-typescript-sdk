// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaKnowledgeBaseDocument } from "./OneMetaKnowledgeBaseDocument";


export class ListDocumentsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of documents.
   */
  data?: OneMetaKnowledgeBaseDocument[];
  /**
   * @remarks
   * The error code, returned only when the request fails.
   * 
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message, returned only when the request fails.
   * 
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique request ID. Use this ID to troubleshoot issues.
   * 
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
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
   * The total number of documents that meet the specified criteria. This parameter is not currently supported and always returns 0.
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
      data: { 'type': 'array', 'itemType': OneMetaKnowledgeBaseDocument },
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

