// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTodoTaskResponseBodyDetailUrl extends $dara.Model {
  /**
   * @example
   * dingtalk://dingtalkclient/action/open_mini_app?miniAppId={0}&ddMode=push&page=pages%2ftask-detail%2ftask-detail%3ftaskId%3d{1}
   */
  appUrl?: string;
  /**
   * @example
   * https://todo.dingtalk.com/ding-portal/detail/task/{0}
   */
  pcUrl?: string;
  static names(): { [key: string]: string } {
    return {
      appUrl: 'AppUrl',
      pcUrl: 'PcUrl',
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

export class GetTodoTaskResponseBody extends $dara.Model {
  /**
   * @example
   * isv_dingtalkTodo
   */
  bizTag?: string;
  /**
   * @example
   * 此参数禁止发布
   */
  cardTypeId?: string;
  /**
   * @example
   * 1617675000000
   */
  createdTime?: number;
  /**
   * @example
   * 012345
   */
  creatorId?: string;
  /**
   * @example
   * 应用可以调用该接口获取钉钉待办任务详情信息及状态。
   */
  description?: string;
  detailUrl?: GetTodoTaskResponseBodyDetailUrl;
  /**
   * @example
   * true
   */
  done?: boolean;
  /**
   * @example
   * 1617675000000
   */
  dueTime?: number;
  executorIds?: string[];
  /**
   * @example
   * 1617675000000
   */
  finishTime?: number;
  /**
   * @example
   * OPJpwtxxxx
   */
  id?: string;
  /**
   * @example
   * true
   */
  isOnlyShowExecutor?: boolean;
  /**
   * @example
   * 1617675000000
   */
  modifiedTime?: number;
  /**
   * @example
   * 012345
   */
  modifierId?: string;
  participantIds?: string[];
  /**
   * @example
   * 20
   */
  priority?: number;
  /**
   * @example
   * PUoiinWIxxx
   */
  requestId?: string;
  /**
   * @example
   * isv_dingtalkTodo
   */
  source?: string;
  /**
   * @example
   * isv_dingxxx
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
  /**
   * @example
   * orgId1
   */
  tenantId?: string;
  /**
   * @example
   * org
   */
  tenantType?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      bizTag: 'bizTag',
      cardTypeId: 'cardTypeId',
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
      participantIds: 'participantIds',
      priority: 'priority',
      requestId: 'requestId',
      source: 'source',
      sourceId: 'sourceId',
      startTime: 'startTime',
      subject: 'subject',
      tenantId: 'tenantId',
      tenantType: 'tenantType',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTag: 'string',
      cardTypeId: 'string',
      createdTime: 'number',
      creatorId: 'string',
      description: 'string',
      detailUrl: GetTodoTaskResponseBodyDetailUrl,
      done: 'boolean',
      dueTime: 'number',
      executorIds: { 'type': 'array', 'itemType': 'string' },
      finishTime: 'number',
      id: 'string',
      isOnlyShowExecutor: 'boolean',
      modifiedTime: 'number',
      modifierId: 'string',
      participantIds: { 'type': 'array', 'itemType': 'string' },
      priority: 'number',
      requestId: 'string',
      source: 'string',
      sourceId: 'string',
      startTime: 'number',
      subject: 'string',
      tenantId: 'string',
      tenantType: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.detailUrl && typeof (this.detailUrl as any).validate === 'function') {
      (this.detailUrl as any).validate();
    }
    if(Array.isArray(this.executorIds)) {
      $dara.Model.validateArray(this.executorIds);
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

