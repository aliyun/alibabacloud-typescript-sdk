// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { OneMetaKnowledgeBaseChunk } from "./OneMetaKnowledgeBaseChunk";


export class ListDocumentChunksResponseBody extends $dara.Model {
  data?: OneMetaKnowledgeBaseChunk[];
  /**
   * @example
   * KnowledgeBaseNotFound
   */
  errorCode?: string;
  /**
   * @example
   * Resource not found kb-***
   */
  errorMessage?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * zCXSmY0CJbybp6FZV7vo0Wjw64X-*****
   */
  nextToken?: string;
  /**
   * @example
   * 67E910F2-4B62-5B0C-ACA3-7547695C****
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
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

