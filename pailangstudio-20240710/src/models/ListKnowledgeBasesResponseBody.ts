// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBase } from "./KnowledgeBase";


export class ListKnowledgeBasesResponseBody extends $dara.Model {
  knowledgeBases?: KnowledgeBase[];
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 11
   */
  nextToken?: string;
  /**
   * @example
   * 35686626-8D83-5ADE-B400-08A6613A6057
   */
  requestId?: string;
  /**
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBases: 'KnowledgeBases',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBases: { 'type': 'array', 'itemType': KnowledgeBase },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBases)) {
      $dara.Model.validateArray(this.knowledgeBases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

