// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamTasksResponseBodyItems extends $dara.Model {
  assignedTo?: string;
  createdAt?: string;
  status?: string;
  taskId?: string;
  taskTitle?: string;
  static names(): { [key: string]: string } {
    return {
      assignedTo: 'AssignedTo',
      createdAt: 'CreatedAt',
      status: 'Status',
      taskId: 'TaskId',
      taskTitle: 'TaskTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedTo: 'string',
      createdAt: 'string',
      status: 'string',
      taskId: 'string',
      taskTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTeamTasksResponseBody extends $dara.Model {
  code?: string;
  httpStatusCode?: number;
  items?: ListTeamTasksResponseBodyItems[];
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
      items: { 'type': 'array', 'itemType': ListTeamTasksResponseBodyItems },
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

