// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamDetailsResponseBodyItems extends $dara.Model {
  avatarUrl?: string;
  status?: string;
  successRate?: number;
  taskCount?: number;
  teamName?: string;
  tokenUsage?: number;
  workerCount?: number;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      status: 'Status',
      successRate: 'SuccessRate',
      taskCount: 'TaskCount',
      teamName: 'TeamName',
      tokenUsage: 'TokenUsage',
      workerCount: 'WorkerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      status: 'string',
      successRate: 'number',
      taskCount: 'number',
      teamName: 'string',
      tokenUsage: 'number',
      workerCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamDetailsResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  items?: ListTeamDetailsResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': ListTeamDetailsResponseBodyItems },
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

