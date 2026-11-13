// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgePointsResponseBodyDataKnowledgePoints extends $dara.Model {
  /**
   * @remarks
   * The read identifier of the current knowledge point. For GRAPH, it is the ID of the local graph entry node. For WIKI, it is the page ID. For KNOWLEDGE_CONTENT, it is the content ID. Use this value as is in the GetKnowledgePoint operation without parsing or concatenation.
   * 
   * @example
   * node-sales
   */
  id?: string;
  /**
   * @remarks
   * The ID of the knowledge base to which the knowledge point belongs. This ID is used together with Type and Id to locate the knowledge point.
   * 
   * @example
   * 12345678-1234-4234-8234-123456789abc
   */
  knowledgeBaseId?: string;
  /**
   * @remarks
   * The readable summary of the knowledge point. The summary is not guaranteed to contain the complete content. To obtain the details, call the GetKnowledgePoint operation.
   * 
   * @example
   * Sales metrics and their associated order tables
   */
  summary?: string;
  /**
   * @remarks
   * The readable title of the knowledge point. For GRAPH, the name of the entry node is used.
   * 
   * @example
   * Sales
   */
  title?: string;
  /**
   * @remarks
   * The read category of the knowledge point. Valid values:
   * - GRAPH: local graph.
   * - WIKI: topic page.
   * - KNOWLEDGE_CONTENT: knowledge content.
   * 
   * @example
   * GRAPH
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      knowledgeBaseId: 'KnowledgeBaseId',
      summary: 'Summary',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      knowledgeBaseId: 'string',
      summary: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgePointsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The summaries of the knowledge points that the current caller has permission to read on the current page. The KnowledgeBaseId, Type, and Id of each item can be directly used in the GetKnowledgePoint operation.
   */
  knowledgePoints?: ListKnowledgePointsResponseBodyDataKnowledgePoints[];
  /**
   * @remarks
   * The pagination cursor. Do not specify this parameter for the first page. For subsequent pages, pass the NextToken value returned in the previous response as is, and keep the knowledge base, type, and page size unchanged. An empty cursor indicates that no more data is available. If the current page is empty but the cursor is not empty, continue querying.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      knowledgePoints: 'KnowledgePoints',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      knowledgePoints: { 'type': 'array', 'itemType': ListKnowledgePointsResponseBodyDataKnowledgePoints },
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.knowledgePoints)) {
      $dara.Model.validateArray(this.knowledgePoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgePointsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business error code. This parameter is omitted when the request is successful. If the request fails, the common error response protocol is followed.
   * 
   * @example
   * InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The summaries of the knowledge points on the current page and the cursor for the next page.
   */
  data?: ListKnowledgePointsResponseBodyData;
  /**
   * @remarks
   * The maximum number of knowledge bases to return per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The readable description of the business error. This parameter is omitted when the request is successful. When troubleshooting a failure, provide the RequestId at the same time.
   * 
   * @example
   * The request parameters are invalid.
   */
  message?: string;
  /**
   * @remarks
   * The unique identifier of the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 00000000-0000-4000-8000-000000000001
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      maxResults: 'MaxResults',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListKnowledgePointsResponseBodyData,
      maxResults: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

