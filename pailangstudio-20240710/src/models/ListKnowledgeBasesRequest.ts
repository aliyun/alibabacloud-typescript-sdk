// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeBasesRequest extends $dara.Model {
  creator?: string;
  knowledgeBaseId?: string;
  knowledgeBaseType?: string;
  maxResults?: number;
  name?: string;
  nextToken?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @example
   * GmtCreateTime
   */
  sortBy?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      knowledgeBaseId: 'KnowledgeBaseId',
      knowledgeBaseType: 'KnowledgeBaseType',
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
      creator: 'string',
      knowledgeBaseId: 'string',
      knowledgeBaseType: 'string',
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

