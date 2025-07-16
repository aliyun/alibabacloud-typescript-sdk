// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl extends $dara.Model {
  /**
   * @example
   * https://www.dingtalk.com
   */
  appUrl?: string;
  /**
   * @example
   * https://www.dingtalk.com
   */
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'appUrl',
      pcUrl: 'pcUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUrl: 'string',
      pcUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksResponseBodyTodoCards extends $dara.Model {
  /**
   * @example
   * isv_dingtalkTodo
   */
  bizTag?: string;
  /**
   * @example
   * 1617675000000
   */
  createdTime?: number;
  /**
   * @example
   * xxxx
   */
  creatorId?: string;
  detailUrl?: QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl;
  /**
   * @example
   * 1617675000000
   */
  dueTime?: number;
  /**
   * @example
   * true
   */
  isDone?: boolean;
  /**
   * @example
   * 1617675000000
   */
  modifiedTime?: number;
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * isv_dingtalkTodo1
   */
  sourceId?: string;
  /**
   * @example
   * 接入钉钉待办
   */
  subject?: string;
  /**
   * @example
   * taskOPJpwtwPVNGIFKURjrzd
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      bizTag: 'bizTag',
      createdTime: 'createdTime',
      creatorId: 'creatorId',
      detailUrl: 'detailUrl',
      dueTime: 'dueTime',
      isDone: 'isDone',
      modifiedTime: 'modifiedTime',
      priority: 'priority',
      sourceId: 'sourceId',
      subject: 'subject',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTag: 'string',
      createdTime: 'number',
      creatorId: 'string',
      detailUrl: QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl,
      dueTime: 'number',
      isDone: 'boolean',
      modifiedTime: 'number',
      priority: 'number',
      sourceId: 'string',
      subject: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(this.detailUrl && typeof (this.detailUrl as any).validate === 'function') {
      (this.detailUrl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryOrgTodoTasksResponseBody extends $dara.Model {
  /**
   * @example
   * 15
   */
  nextToken?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  todoCards?: QueryOrgTodoTasksResponseBodyTodoCards[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      requestId: 'requestId',
      todoCards: 'todoCards',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      todoCards: { 'type': 'array', 'itemType': QueryOrgTodoTasksResponseBodyTodoCards },
    };
  }

  validate() {
    if(Array.isArray(this.todoCards)) {
      $dara.Model.validateArray(this.todoCards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

