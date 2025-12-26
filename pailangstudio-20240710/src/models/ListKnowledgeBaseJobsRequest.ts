// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBaseJobsRequest extends $dara.Model {
  /**
   * @example
   * SyncIndex
   */
  jobAction?: string;
  /**
   * @example
   * kbjob-9m******54
   */
  knowledgeBaseJobId?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  nextToken?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  status?: string;
  /**
   * @example
   * 478**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      jobAction: 'JobAction',
      knowledgeBaseJobId: 'KnowledgeBaseJobId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      status: 'Status',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobAction: 'string',
      knowledgeBaseJobId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      status: 'string',
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

