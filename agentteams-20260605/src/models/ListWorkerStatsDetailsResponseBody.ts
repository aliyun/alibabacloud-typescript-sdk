// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerStatsDetailsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The LLM call count.
   * 
   * @example
   * 350
   */
  llmCallCount?: number;
  /**
   * @remarks
   * The model name.
   * 
   * @example
   * qwen-max
   */
  model?: string;
  /**
   * @remarks
   * The Worker name.
   * 
   * @example
   * worker-demo
   */
  name?: string;
  /**
   * @remarks
   * The Worker status.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The task count.
   * 
   * @example
   * 120
   */
  taskCount?: number;
  /**
   * @remarks
   * The token usage.
   * 
   * @example
   * 500000
   */
  tokenUsage?: number;
  static names(): { [key: string]: string } {
    return {
      llmCallCount: 'LlmCallCount',
      model: 'Model',
      name: 'Name',
      status: 'Status',
      taskCount: 'TaskCount',
      tokenUsage: 'TokenUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      llmCallCount: 'number',
      model: 'string',
      name: 'string',
      status: 'string',
      taskCount: 'number',
      tokenUsage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWorkerStatsDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The list of Worker statistics details.
   * 
   * @example
   * [...]
   */
  items?: ListWorkerStatsDetailsResponseBodyItems[];
  /**
   * @remarks
   * The maximum number of entries to return per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * 10
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-XX-XX-XX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 25
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      items: 'Items',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      items: { 'type': 'array', 'itemType': ListWorkerStatsDetailsResponseBodyItems },
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

