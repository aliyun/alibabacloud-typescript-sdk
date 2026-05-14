// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ClinkAgentStatusResponseBodyDataAgentStatus extends $dara.Model {
  /**
   * @remarks
   * 座席状态
   * 
   * @example
   * 示例值
   */
  agentStatus?: string;
  /**
   * @remarks
   * 座席状态详情
   * 
   * @example
   * 示例值
   */
  agentStatusDetail?: string;
  /**
   * @remarks
   * 绑定号码
   * 
   * @example
   * 1327770
   */
  bindTel?: string;
  /**
   * @remarks
   * 电话类型，1:电话；2:IP话机；3:软电话
   * 
   * @example
   * 19
   */
  bindType?: number;
  /**
   * @remarks
   * 座席来电接听次数
   * 
   * @example
   * 59
   */
  bridgeCallCount?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name1
   */
  clientName?: string;
  /**
   * @remarks
   * 座席号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 座席code
   * 
   * @example
   * 示例值示例值
   */
  code?: string;
  /**
   * @remarks
   * 客户号码
   * 
   * @example
   * 177xxxx7750
   */
  customerNumber?: string;
  /**
   * @remarks
   * 客户来电号码加密串
   * 
   * @example
   * ******
   */
  customerNumberEncrypt?: string;
  /**
   * @remarks
   * 客户状态，空闲，呼叫中，响铃，通话
   * 
   * @example
   * 示例值示例值
   */
  customerStatus?: string;
  /**
   * @remarks
   * 呼入接听总响铃时长
   * 
   * @example
   * 15
   */
  ibAnsweredRingingDuration?: number;
  /**
   * @remarks
   * 客户呼入接听数
   * 
   * @example
   * 66
   */
  ibClientAnsweredCount?: number;
  /**
   * @remarks
   * 客户呼入接听率
   * 
   * @example
   * 0.0
   */
  ibClientAnsweredRate?: number;
  /**
   * @remarks
   * 客户呼入数
   * 
   * @example
   * 15
   */
  ibClientTotalCount?: number;
  /**
   * @remarks
   * 客户呼入未接听数
   * 
   * @example
   * 71
   */
  ibClientUnansweredCount?: number;
  /**
   * @remarks
   * 空闲超时时间（单位分钟）
   * 
   * @example
   * 83
   */
  idleTimeOut?: number;
  /**
   * @remarks
   * 座席来电次数
   * 
   * @example
   * 29
   */
  incomingCallCount?: number;
  /**
   * @remarks
   * 登录时长
   * 
   * @example
   * 97
   */
  loginDuration?: number;
  /**
   * @remarks
   * 外呼平均通话时长
   * 
   * @example
   * 25
   */
  obAvgBridgeDuration?: number;
  /**
   * @remarks
   * 外呼通话时长
   * 
   * @example
   * 59
   */
  obBridgeDuration?: number;
  /**
   * @remarks
   * 外呼接听率
   * 
   * @example
   * 0.0
   */
  obBridgeRate?: number;
  /**
   * @remarks
   * 座席外呼数
   * 
   * @example
   * 96
   */
  obCallCount?: number;
  /**
   * @remarks
   * 外呼座席未接听数
   * 
   * @example
   * 75
   */
  obClientUnbridgeCount?: number;
  /**
   * @remarks
   * 外呼客户接听数
   * 
   * @example
   * 55
   */
  obCustomerBridgeCount?: number;
  /**
   * @remarks
   * 外呼客户未接听数
   * 
   * @example
   * 15
   */
  obCustomerUnbridgeCount?: number;
  /**
   * @remarks
   * 置忙状态描述
   * 
   * @example
   * 示例值示例值示例值
   */
  pauseDescription?: string;
  /**
   * @remarks
   * 置忙类型
   * 
   * @example
   * 87
   */
  pauseType?: number;
  /**
   * @remarks
   * 座席是否处于预测外呼状态 1：是 0：否
   * 
   * @example
   * 0
   */
  predictToCall?: number;
  /**
   * @remarks
   * 队列来电接听数
   * 
   * @example
   * 20
   */
  queueIncomingCallCount?: number;
  /**
   * @remarks
   * 队列信息
   * 
   * @example
   * null
   */
  queueInfo?: string;
  /**
   * @remarks
   * 队列编号
   * 
   * @example
   * 0035
   */
  queues?: string;
  /**
   * @remarks
   * 客户速挂数
   * 
   * @example
   * 63
   */
  quickUnlinkCount?: number;
  /**
   * @remarks
   * 状态时长
   * 
   * @example
   * 89
   */
  stateDuration?: number;
  /**
   * @remarks
   * 座席标签
   */
  tagNames?: string[];
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      agentStatusDetail: 'AgentStatusDetail',
      bindTel: 'BindTel',
      bindType: 'BindType',
      bridgeCallCount: 'BridgeCallCount',
      clientName: 'ClientName',
      cno: 'Cno',
      code: 'Code',
      customerNumber: 'CustomerNumber',
      customerNumberEncrypt: 'CustomerNumberEncrypt',
      customerStatus: 'CustomerStatus',
      ibAnsweredRingingDuration: 'IbAnsweredRingingDuration',
      ibClientAnsweredCount: 'IbClientAnsweredCount',
      ibClientAnsweredRate: 'IbClientAnsweredRate',
      ibClientTotalCount: 'IbClientTotalCount',
      ibClientUnansweredCount: 'IbClientUnansweredCount',
      idleTimeOut: 'IdleTimeOut',
      incomingCallCount: 'IncomingCallCount',
      loginDuration: 'LoginDuration',
      obAvgBridgeDuration: 'ObAvgBridgeDuration',
      obBridgeDuration: 'ObBridgeDuration',
      obBridgeRate: 'ObBridgeRate',
      obCallCount: 'ObCallCount',
      obClientUnbridgeCount: 'ObClientUnbridgeCount',
      obCustomerBridgeCount: 'ObCustomerBridgeCount',
      obCustomerUnbridgeCount: 'ObCustomerUnbridgeCount',
      pauseDescription: 'PauseDescription',
      pauseType: 'PauseType',
      predictToCall: 'PredictToCall',
      queueIncomingCallCount: 'QueueIncomingCallCount',
      queueInfo: 'QueueInfo',
      queues: 'Queues',
      quickUnlinkCount: 'QuickUnlinkCount',
      stateDuration: 'StateDuration',
      tagNames: 'TagNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: 'string',
      agentStatusDetail: 'string',
      bindTel: 'string',
      bindType: 'number',
      bridgeCallCount: 'number',
      clientName: 'string',
      cno: 'string',
      code: 'string',
      customerNumber: 'string',
      customerNumberEncrypt: 'string',
      customerStatus: 'string',
      ibAnsweredRingingDuration: 'number',
      ibClientAnsweredCount: 'number',
      ibClientAnsweredRate: 'number',
      ibClientTotalCount: 'number',
      ibClientUnansweredCount: 'number',
      idleTimeOut: 'number',
      incomingCallCount: 'number',
      loginDuration: 'number',
      obAvgBridgeDuration: 'number',
      obBridgeDuration: 'number',
      obBridgeRate: 'number',
      obCallCount: 'number',
      obClientUnbridgeCount: 'number',
      obCustomerBridgeCount: 'number',
      obCustomerUnbridgeCount: 'number',
      pauseDescription: 'string',
      pauseType: 'number',
      predictToCall: 'number',
      queueIncomingCallCount: 'number',
      queueInfo: 'string',
      queues: 'string',
      quickUnlinkCount: 'number',
      stateDuration: 'number',
      tagNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tagNames)) {
      $dara.Model.validateArray(this.tagNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkAgentStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * [座席状态详情] #座席状态详情
   */
  agentStatus?: ClinkAgentStatusResponseBodyDataAgentStatus[];
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * null
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 当前页码
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 一页展示条数
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * 总条数
   * 
   * @example
   * 63
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentStatus: 'AgentStatus',
      clinkRequestId: 'ClinkRequestId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatus: { 'type': 'array', 'itemType': ClinkAgentStatusResponseBodyDataAgentStatus },
      clinkRequestId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.agentStatus)) {
      $dara.Model.validateArray(this.agentStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkAgentStatusResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkAgentStatusResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * A90E4451-FED7-49D2-87C8-00700A8C4D0D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: ClinkAgentStatusResponseBodyData,
      message: 'string',
      requestId: 'string',
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

