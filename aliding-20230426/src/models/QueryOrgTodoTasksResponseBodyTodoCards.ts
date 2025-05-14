// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl } from "./QueryOrgTodoTasksResponseBodyTodoCardsDetailUrl";


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

