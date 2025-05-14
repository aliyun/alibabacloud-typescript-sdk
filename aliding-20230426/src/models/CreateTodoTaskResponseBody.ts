// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTodoTaskResponseBodyContentFieldList } from "./CreateTodoTaskResponseBodyContentFieldList";
import { CreateTodoTaskResponseBodyDetailUrl } from "./CreateTodoTaskResponseBodyDetailUrl";
import { CreateTodoTaskResponseBodyNotifyConfigs } from "./CreateTodoTaskResponseBodyNotifyConfigs";


export class CreateTodoTaskResponseBody extends $dara.Model {
  /**
   * @example
   * isv_dingtalkTodo
   */
  bizTag?: string;
  contentFieldList?: CreateTodoTaskResponseBodyContentFieldList[];
  /**
   * @example
   * 1617675200000
   */
  createdTime?: number;
  /**
   * @example
   * PUoiinWIpa2yH2ymhiiGiP6g
   */
  creatorId?: string;
  /**
   * @example
   * 应用可以调用该接口发起一个钉钉待办任务，该待办事项会出现在钉钉客户端“待办”页面，需要注意的是，通过开放接口发起的待办，目前仅支持直接跳转ISV应用详情页（ISV在调该接口时需传入自身应用详情页链接）。
   */
  description?: string;
  detailUrl?: CreateTodoTaskResponseBodyDetailUrl;
  /**
   * @example
   * false
   */
  done?: boolean;
  /**
   * @example
   * 1617675100000
   */
  dueTime?: number;
  executorIds?: string[];
  /**
   * @example
   * 1617675200000
   */
  finishTime?: number;
  /**
   * @example
   * OPJpwtwPVNGIFKURjrzd
   */
  id?: string;
  /**
   * @example
   * true
   */
  isOnlyShowExecutor?: boolean;
  /**
   * @example
   * 1617675200000
   */
  modifiedTime?: number;
  /**
   * @example
   * PUoiinWIpa2yH2ymhiiGiP6g
   */
  modifierId?: string;
  notifyConfigs?: CreateTodoTaskResponseBodyNotifyConfigs;
  participantIds?: string[];
  /**
   * @example
   * 20
   */
  priority?: number;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * isv_dingtalkTodo
   */
  source?: string;
  /**
   * @example
   * isv_dingtalkTodo1
   */
  sourceId?: string;
  /**
   * @example
   * 1617675000000
   */
  startTime?: number;
  /**
   * @example
   * 接入钉钉待办
   */
  subject?: string;
  static names(): { [key: string]: string } {
    return {
      bizTag: 'bizTag',
      contentFieldList: 'contentFieldList',
      createdTime: 'createdTime',
      creatorId: 'creatorId',
      description: 'description',
      detailUrl: 'detailUrl',
      done: 'done',
      dueTime: 'dueTime',
      executorIds: 'executorIds',
      finishTime: 'finishTime',
      id: 'id',
      isOnlyShowExecutor: 'isOnlyShowExecutor',
      modifiedTime: 'modifiedTime',
      modifierId: 'modifierId',
      notifyConfigs: 'notifyConfigs',
      participantIds: 'participantIds',
      priority: 'priority',
      requestId: 'requestId',
      source: 'source',
      sourceId: 'sourceId',
      startTime: 'startTime',
      subject: 'subject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTag: 'string',
      contentFieldList: { 'type': 'array', 'itemType': CreateTodoTaskResponseBodyContentFieldList },
      createdTime: 'number',
      creatorId: 'string',
      description: 'string',
      detailUrl: CreateTodoTaskResponseBodyDetailUrl,
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      finishTime: 'number',
      id: 'string',
      isOnlyShowExecutor: 'boolean',
      modifiedTime: 'number',
      modifierId: 'string',
      notifyConfigs: CreateTodoTaskResponseBodyNotifyConfigs,
      participantIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      requestId: 'string',
      source: 'string',
      sourceId: 'string',
      startTime: 'number',
      subject: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contentFieldList)) {
      $dara.Model.validateArray(this.contentFieldList);
    }
    if(this.detailUrl && typeof (this.detailUrl as any).validate === 'function') {
      (this.detailUrl as any).validate();
    }
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
    }
    if(this.notifyConfigs && typeof (this.notifyConfigs as any).validate === 'function') {
      (this.notifyConfigs as any).validate();
    }
    if(Array.isArray(this.participantIds)) {
      $dara.Model.validateArray(this.participantIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

