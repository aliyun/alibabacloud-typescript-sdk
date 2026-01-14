// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { KnowledgeBaseJob } from "./KnowledgeBaseJob";


export class ListKnowledgeBaseJobsResponseBody extends $dara.Model {
  knowledgeBaseJobs?: KnowledgeBaseJob[];
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
   * 963BD7F9-0C02-5594-9550-BCC6DD43E3C0
   */
  requestId?: string;
  /**
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      knowledgeBaseJobs: 'KnowledgeBaseJobs',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgeBaseJobs: { 'type': 'array', 'itemType': KnowledgeBaseJob },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgeBaseJobs)) {
      $dara.Model.validateArray(this.knowledgeBaseJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

