// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkerStatsDetailsResponseBodyItems extends $dara.Model {
  llmCallCount?: number;
  model?: string;
  name?: string;
  status?: string;
  taskCount?: number;
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
  code?: string;
  httpStatusCode?: number;
  items?: ListWorkerStatsDetailsResponseBodyItems[];
  maxResults?: number;
  message?: string;
  nextToken?: string;
  requestId?: string;
  success?: boolean;
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

