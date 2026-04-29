// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudMonitorTaskResponseBodyDataAgentInfo extends $dara.Model {
  /**
   * @remarks
   * 可用座席数
   * 
   * @example
   * 2
   */
  availableCount?: number;
  /**
   * @remarks
   * 通话中的座席数
   * 
   * @example
   * 6
   */
  bridgeCount?: number;
  /**
   * @remarks
   * 当前在线座席数
   * 
   * @example
   * 2
   */
  onlineCount?: number;
  /**
   * @remarks
   * 响铃中的座席数
   * 
   * @example
   * 4
   */
  ringingCount?: number;
  /**
   * @remarks
   * 座席总数
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * 整理中的座席数
   * 
   * @example
   * 4
   */
  wrapupCount?: number;
  static names(): { [key: string]: string } {
    return {
      availableCount: 'AvailableCount',
      bridgeCount: 'BridgeCount',
      onlineCount: 'OnlineCount',
      ringingCount: 'RingingCount',
      totalCount: 'TotalCount',
      wrapupCount: 'WrapupCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableCount: 'number',
      bridgeCount: 'number',
      onlineCount: 'number',
      ringingCount: 'number',
      totalCount: 'number',
      wrapupCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataAgentStatisticList extends $dara.Model {
  /**
   * @remarks
   * 座席平均进线时长,空闲时长/呼叫数
   * 
   * @example
   * 0
   */
  agentAvgIdleTime?: number;
  /**
   * @remarks
   * 座席当前状态:  stateIdle(空闲)  statePause(置忙)  stateInuse(通话） stateCalling(呼叫中)  stateWrapup(整理)   为空代表该当前时间座席在该任务中没有相关状态，如：座席未被使用等
   * 
   * @example
   * stateIdle
   */
  agentStatus?: string;
  /**
   * @remarks
   * 座席平均通话时长，单位秒数
   * 
   * @example
   * 116
   */
  avgBridgeTime?: string;
  /**
   * @remarks
   * 接听数
   * 
   * @example
   * 0
   */
  bridgeCount?: number;
  /**
   * @remarks
   * 座席自动应答率=(座席接通时间-开始呼叫座席时间)<=2s的通话数/座席接通数
   * 
   * @example
   * 0.0
   */
  bridgeIn2sRate?: number;
  /**
   * @remarks
   * 任务级别，座席单日接听上限，-1代表未配置接听上限
   * 
   * @example
   * -1
   */
  callLimit?: number;
  /**
   * @remarks
   * 呼叫数
   * 
   * @example
   * 0
   */
  calledCount?: number;
  /**
   * @remarks
   * 座席工号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 企业级别 座席单日接听上限，-1代表未配置接听上限
   * 
   * @example
   * -1
   */
  enterpriseCallLimit?: number;
  /**
   * @remarks
   * 企业级别 座席今日已接听数
   * 
   * @example
   * 3
   */
  enterpriseTodayAnsweredCount?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name2
   */
  name?: string;
  /**
   * @remarks
   * 座席未接听数
   * 
   * @example
   * 0
   */
  noBridgeCount?: number;
  /**
   * @remarks
   * 任务级别 座席今日已接听数
   * 
   * @example
   * 3
   */
  todayAnsweredCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentAvgIdleTime: 'AgentAvgIdleTime',
      agentStatus: 'AgentStatus',
      avgBridgeTime: 'AvgBridgeTime',
      bridgeCount: 'BridgeCount',
      bridgeIn2sRate: 'BridgeIn2sRate',
      callLimit: 'CallLimit',
      calledCount: 'CalledCount',
      cno: 'Cno',
      enterpriseCallLimit: 'EnterpriseCallLimit',
      enterpriseTodayAnsweredCount: 'EnterpriseTodayAnsweredCount',
      name: 'Name',
      noBridgeCount: 'NoBridgeCount',
      todayAnsweredCount: 'TodayAnsweredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAvgIdleTime: 'number',
      agentStatus: 'string',
      avgBridgeTime: 'string',
      bridgeCount: 'number',
      bridgeIn2sRate: 'number',
      callLimit: 'number',
      calledCount: 'number',
      cno: 'string',
      enterpriseCallLimit: 'number',
      enterpriseTodayAnsweredCount: 'number',
      name: 'string',
      noBridgeCount: 'number',
      todayAnsweredCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataChannelInfo extends $dara.Model {
  /**
   * @remarks
   * 客户接通个数
   * 
   * @example
   * 0
   */
  answerCount?: number;
  /**
   * @remarks
   * 桥接个数
   * 
   * @example
   * 0
   */
  bridgedCount?: number;
  /**
   * @remarks
   * 任务当前通道数
   * 
   * @example
   * 0
   */
  channelCount?: number;
  /**
   * @remarks
   * 企业预测外呼通道数
   * 
   * @example
   * 2
   */
  enterpriseChannelCount?: number;
  /**
   * @remarks
   * 溢出到ivr数
   * 
   * @example
   * 0
   */
  ivrCount?: number;
  /**
   * @remarks
   * 等待转座席的个数
   * 
   * @example
   * 0
   */
  waitAgentCount?: number;
  /**
   * @remarks
   * 等待客户接听的个数
   * 
   * @example
   * 0
   */
  waitAnswerCount?: number;
  static names(): { [key: string]: string } {
    return {
      answerCount: 'AnswerCount',
      bridgedCount: 'BridgedCount',
      channelCount: 'ChannelCount',
      enterpriseChannelCount: 'EnterpriseChannelCount',
      ivrCount: 'IvrCount',
      waitAgentCount: 'WaitAgentCount',
      waitAnswerCount: 'WaitAnswerCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answerCount: 'number',
      bridgedCount: 'number',
      channelCount: 'number',
      enterpriseChannelCount: 'number',
      ivrCount: 'number',
      waitAgentCount: 'number',
      waitAnswerCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataRemovedAgentStatisticList extends $dara.Model {
  /**
   * @remarks
   * 座席平均进线时长,空闲时长/呼叫数
   * 
   * @example
   * 13
   */
  agentAvgIdleTime?: number;
  /**
   * @remarks
   * 座席当前状态:  stateIdle(空闲)  statePause(置忙)  stateInuse(通话） stateCalling(呼叫中)  stateWrapup(整理)   为空代表该当前时间座席在该任务中没有相关状态，如：座席未被使用等
   * 
   * @example
   * stateIdle
   */
  agentStatus?: string;
  /**
   * @remarks
   * 座席平均通话时长，单位秒数
   * 
   * @example
   * 39
   */
  avgBridgeTime?: string;
  /**
   * @remarks
   * 接听数
   * 
   * @example
   * 3
   */
  bridgeCount?: number;
  /**
   * @remarks
   * 座席自动应答率=(座席接通时间-开始呼叫座席时间)<=2s的通话数/座席接通数
   * 
   * @example
   * 3.55
   */
  bridgeIn2sRate?: number;
  /**
   * @remarks
   * 任务级别，座席单日接听上限，-1代表未配置接听上限
   * 
   * @example
   * -1
   */
  callLimit?: number;
  /**
   * @remarks
   * 呼叫数
   * 
   * @example
   * 5
   */
  calledCount?: number;
  /**
   * @remarks
   * 座席工号
   * 
   * @example
   * 1111
   */
  cno?: string;
  /**
   * @remarks
   * 企业级别 座席单日接听上限，-1代表未配置接听上限
   * 
   * @example
   * -1
   */
  enterpriseCallLimit?: number;
  /**
   * @remarks
   * 企业级别 座席今日已接听数
   * 
   * @example
   * 3
   */
  enterpriseTodayAnsweredCount?: number;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * 座席未接听数
   * 
   * @example
   * 3
   */
  noBridgeCount?: number;
  /**
   * @remarks
   * 任务级别 座席今日已接听数
   * 
   * @example
   * 3
   */
  todayAnsweredCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentAvgIdleTime: 'AgentAvgIdleTime',
      agentStatus: 'AgentStatus',
      avgBridgeTime: 'AvgBridgeTime',
      bridgeCount: 'BridgeCount',
      bridgeIn2sRate: 'BridgeIn2sRate',
      callLimit: 'CallLimit',
      calledCount: 'CalledCount',
      cno: 'Cno',
      enterpriseCallLimit: 'EnterpriseCallLimit',
      enterpriseTodayAnsweredCount: 'EnterpriseTodayAnsweredCount',
      name: 'Name',
      noBridgeCount: 'NoBridgeCount',
      todayAnsweredCount: 'TodayAnsweredCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAvgIdleTime: 'number',
      agentStatus: 'string',
      avgBridgeTime: 'string',
      bridgeCount: 'number',
      bridgeIn2sRate: 'number',
      callLimit: 'number',
      calledCount: 'number',
      cno: 'string',
      enterpriseCallLimit: 'number',
      enterpriseTodayAnsweredCount: 'number',
      name: 'string',
      noBridgeCount: 'number',
      todayAnsweredCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataStatisticCtiLinkTaskProperty extends $dara.Model {
  /**
   * @remarks
   * 外呼任务Id
   * 
   * @example
   * 12314
   */
  id?: number;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * testTask
   */
  name?: string;
  /**
   * @remarks
   * 任务结束时间
   * 
   * @example
   * 2026-04-20 11:00:00
   */
  overTime?: string;
  /**
   * @remarks
   * 任务开始时间
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 任务状态，0.初始 1.运行中 2.暂停 3.结束
   * 
   * @example
   * 2
   */
  status?: number;
  /**
   * @remarks
   * 任务状态描述
   * 
   * @example
   * 示例值
   */
  statusDescription?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      overTime: 'OverTime',
      startTime: 'StartTime',
      status: 'Status',
      statusDescription: 'StatusDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      overTime: 'string',
      startTime: 'string',
      status: 'number',
      statusDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataStatistic extends $dara.Model {
  /**
   * @remarks
   * 座席数量
   * 
   * @example
   * 2
   */
  agentCount?: number;
  /**
   * @remarks
   * 应答数量
   * 
   * @example
   * 3
   */
  answerCount?: number;
  /**
   * @remarks
   * 呼叫坐席数
   * 
   * @example
   * 3
   */
  callAgentCount?: number;
  /**
   * @remarks
   * 已呼叫数量
   * 
   * @example
   * 4
   */
  calledCount?: number;
  /**
   * @remarks
   * 任务属性
   */
  ctiLinkTaskProperty?: CloudMonitorTaskResponseBodyDataStatisticCtiLinkTaskProperty;
  /**
   * @remarks
   * 未呼叫数量
   * 
   * @example
   * 1
   */
  uncalledCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      answerCount: 'AnswerCount',
      callAgentCount: 'CallAgentCount',
      calledCount: 'CalledCount',
      ctiLinkTaskProperty: 'CtiLinkTaskProperty',
      uncalledCount: 'UncalledCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      answerCount: 'number',
      callAgentCount: 'number',
      calledCount: 'number',
      ctiLinkTaskProperty: CloudMonitorTaskResponseBodyDataStatisticCtiLinkTaskProperty,
      uncalledCount: 'number',
    };
  }

  validate() {
    if(this.ctiLinkTaskProperty && typeof (this.ctiLinkTaskProperty as any).validate === 'function') {
      (this.ctiLinkTaskProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataTodayStatisticCtiLinkTaskProperty extends $dara.Model {
  /**
   * @remarks
   * 外呼任务Id
   * 
   * @example
   * 12314
   */
  id?: number;
  /**
   * @remarks
   * 任务名称
   * 
   * @example
   * testTask
   */
  name?: string;
  /**
   * @remarks
   * 任务结束时间
   * 
   * @example
   * 2026-04-20 11:00:00
   */
  overTime?: string;
  /**
   * @remarks
   * 任务开始时间
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * 任务状态，0.初始 1.运行中 2.暂停 3.结束
   * 
   * @example
   * 2
   */
  status?: string;
  /**
   * @remarks
   * 任务状态描述
   * 
   * @example
   * 示例值示例值
   */
  statusDescription?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      overTime: 'OverTime',
      startTime: 'StartTime',
      status: 'Status',
      statusDescription: 'StatusDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      overTime: 'string',
      startTime: 'string',
      status: 'string',
      statusDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyDataTodayStatistic extends $dara.Model {
  /**
   * @remarks
   * 座席数量
   * 
   * @example
   * 3
   */
  agentCount?: number;
  /**
   * @remarks
   * 应答数量
   * 
   * @example
   * 3
   */
  answerCount?: number;
  /**
   * @remarks
   * 呼叫坐席数
   * 
   * @example
   * 3
   */
  callAgentCount?: number;
  /**
   * @remarks
   * 已呼叫数量
   * 
   * @example
   * 3
   */
  calledCount?: number;
  ctiLinkTaskProperty?: CloudMonitorTaskResponseBodyDataTodayStatisticCtiLinkTaskProperty;
  /**
   * @remarks
   * 未呼叫数量
   * 
   * @example
   * 0
   */
  uncalledCount?: number;
  static names(): { [key: string]: string } {
    return {
      agentCount: 'AgentCount',
      answerCount: 'AnswerCount',
      callAgentCount: 'CallAgentCount',
      calledCount: 'CalledCount',
      ctiLinkTaskProperty: 'CtiLinkTaskProperty',
      uncalledCount: 'UncalledCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentCount: 'number',
      answerCount: 'number',
      callAgentCount: 'number',
      calledCount: 'number',
      ctiLinkTaskProperty: CloudMonitorTaskResponseBodyDataTodayStatisticCtiLinkTaskProperty,
      uncalledCount: 'number',
    };
  }

  validate() {
    if(this.ctiLinkTaskProperty && typeof (this.ctiLinkTaskProperty as any).validate === 'function') {
      (this.ctiLinkTaskProperty as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席状态统计
   */
  agentInfo?: CloudMonitorTaskResponseBodyDataAgentInfo;
  /**
   * @remarks
   * 座席统计详情
   */
  agentStatisticList?: CloudMonitorTaskResponseBodyDataAgentStatisticList[];
  /**
   * @remarks
   * 通道监控信息
   */
  channelInfo?: CloudMonitorTaskResponseBodyDataChannelInfo;
  /**
   * @remarks
   * 已移除座席统计详情，仅当 `includeRemovedAgents=1` 时返回
   */
  removedAgentStatisticList?: CloudMonitorTaskResponseBodyDataRemovedAgentStatisticList[];
  /**
   * @remarks
   * 任务监控信息
   */
  statistic?: CloudMonitorTaskResponseBodyDataStatistic;
  /**
   * @remarks
   * 当日任务监控信息
   */
  todayStatistic?: CloudMonitorTaskResponseBodyDataTodayStatistic;
  static names(): { [key: string]: string } {
    return {
      agentInfo: 'AgentInfo',
      agentStatisticList: 'AgentStatisticList',
      channelInfo: 'ChannelInfo',
      removedAgentStatisticList: 'RemovedAgentStatisticList',
      statistic: 'Statistic',
      todayStatistic: 'TodayStatistic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInfo: CloudMonitorTaskResponseBodyDataAgentInfo,
      agentStatisticList: { 'type': 'array', 'itemType': CloudMonitorTaskResponseBodyDataAgentStatisticList },
      channelInfo: CloudMonitorTaskResponseBodyDataChannelInfo,
      removedAgentStatisticList: { 'type': 'array', 'itemType': CloudMonitorTaskResponseBodyDataRemovedAgentStatisticList },
      statistic: CloudMonitorTaskResponseBodyDataStatistic,
      todayStatistic: CloudMonitorTaskResponseBodyDataTodayStatistic,
    };
  }

  validate() {
    if(this.agentInfo && typeof (this.agentInfo as any).validate === 'function') {
      (this.agentInfo as any).validate();
    }
    if(Array.isArray(this.agentStatisticList)) {
      $dara.Model.validateArray(this.agentStatisticList);
    }
    if(this.channelInfo && typeof (this.channelInfo as any).validate === 'function') {
      (this.channelInfo as any).validate();
    }
    if(Array.isArray(this.removedAgentStatisticList)) {
      $dara.Model.validateArray(this.removedAgentStatisticList);
    }
    if(this.statistic && typeof (this.statistic as any).validate === 'function') {
      (this.statistic as any).validate();
    }
    if(this.todayStatistic && typeof (this.todayStatistic as any).validate === 'function') {
      (this.todayStatistic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudMonitorTaskResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudMonitorTaskResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
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
      data: CloudMonitorTaskResponseBodyData,
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

