// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentMonitorStatisticsResponseBodyDataAgentStatistics extends $dara.Model {
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
   * status: 代表座席状态，状态每个值对应的含义: stateIdle: 置闲; statePause: 置忙; stateCalling: 呼叫中; stateInuse: 通话中; stateWrapup: 整理, loginTime: 代表座席登录时间, startTime: 代表开始通话的时间
   * 
   * @example
   * {\\"state\\":\\"stateIdle\\",\\"startTime\\":\\"1491462675\\"}
   */
  currentState?: string;
  /**
   * @remarks
   * 外呼组编号
   * 
   * @example
   * WH123
   */
  gno?: string;
  /**
   * @remarks
   * 外呼组名称
   * 
   * @example
   * gpname
   */
  groupName?: string;
  /**
   * @remarks
   * 总空闲次数
   * 
   * @example
   * 5
   */
  idleCount?: string;
  /**
   * @remarks
   * 总空闲时长
   * 
   * @example
   * 54344
   */
  idleTime?: string;
  /**
   * @remarks
   * 最大空闲时长
   * 
   * @example
   * 52375
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * 外呼通话最大时长
   * 
   * @example
   * 41
   */
  maxObBridgeTime?: string;
  /**
   * @remarks
   * 外呼呼叫最大时长
   * 
   * @example
   * 31
   */
  maxObCallingTime?: string;
  /**
   * @remarks
   * 外呼整理最大时长
   * 
   * @example
   * 30
   */
  maxObWrapupTime?: string;
  /**
   * @remarks
   * 最小空闲时长
   * 
   * @example
   * 9
   */
  minIdleTime?: string;
  /**
   * @remarks
   * 外呼通话最小时长
   * 
   * @example
   * 29
   */
  minObBridgeTime?: string;
  /**
   * @remarks
   * 外呼呼叫最小时长
   * 
   * @example
   * 8
   */
  minObCallingTime?: string;
  /**
   * @remarks
   * 外呼整理最小时长
   * 
   * @example
   * 30
   */
  minObWrapupTime?: string;
  /**
   * @remarks
   * 总外呼通话次数
   * 
   * @example
   * 4
   */
  obBridgeCount?: string;
  /**
   * @remarks
   * 外呼通话时长
   * 
   * @example
   * 144
   */
  obBridgeTime?: string;
  /**
   * @remarks
   * 总外呼呼叫次数
   * 
   * @example
   * 5
   */
  obCallingCount?: string;
  /**
   * @remarks
   * 外呼呼叫时长
   * 
   * @example
   * 67
   */
  obCallingTime?: string;
  /**
   * @remarks
   * 总外呼整理次数
   * 
   * @example
   * 4
   */
  obWrapupCount?: string;
  /**
   * @remarks
   * 外呼整理时长
   * 
   * @example
   * 120
   */
  obWrapupTime?: string;
  /**
   * @remarks
   * 预览外呼座席接听数
   * 
   * @example
   * 4
   */
  previewObAgentAnsweredCount?: string;
  /**
   * @example
   * 4
   */
  previewObBothAnsweredCount?: string;
  /**
   * @remarks
   * 双方接听最大通话时长
   * 
   * @example
   * 41
   */
  previewObMaxBridgeTime?: string;
  /**
   * @remarks
   * 双方接听最小通话时长
   * 
   * @example
   * 29
   */
  previewObMinBridgeTime?: string;
  /**
   * @remarks
   * 双方接听总通话时长
   * 
   * @example
   * 144
   */
  previewObTotalBridgeTime?: string;
  /**
   * @remarks
   * 预览外呼数
   * 
   * @example
   * 5
   */
  previewObTotalCount?: string;
  /**
   * @remarks
   * 预览外呼有效通话次数
   * 
   * @example
   * 4
   */
  previewObValidCalls?: string;
  /**
   * @remarks
   * 预览外呼有效通话总时长
   * 
   * @example
   * 144
   */
  previewObValidTotalBridgeTime?: string;
  /**
   * @remarks
   * 队列名
   * 
   * @example
   * 示例值
   */
  queueName?: string;
  static names(): { [key: string]: string } {
    return {
      cno: 'Cno',
      currentState: 'CurrentState',
      gno: 'Gno',
      groupName: 'GroupName',
      idleCount: 'Idle_count',
      idleTime: 'Idle_time',
      maxIdleTime: 'Max_idle_time',
      maxObBridgeTime: 'Max_ob_bridge_time',
      maxObCallingTime: 'Max_ob_calling_time',
      maxObWrapupTime: 'Max_ob_wrapup_time',
      minIdleTime: 'Min_idle_time',
      minObBridgeTime: 'Min_ob_bridge_time',
      minObCallingTime: 'Min_ob_calling_time',
      minObWrapupTime: 'Min_ob_wrapup_time',
      obBridgeCount: 'Ob_bridge_count',
      obBridgeTime: 'Ob_bridge_time',
      obCallingCount: 'Ob_calling_count',
      obCallingTime: 'Ob_calling_time',
      obWrapupCount: 'Ob_wrapup_count',
      obWrapupTime: 'Ob_wrapup_time',
      previewObAgentAnsweredCount: 'Preview_ob_agent_answered_count',
      previewObBothAnsweredCount: 'Preview_ob_both_answered_count',
      previewObMaxBridgeTime: 'Preview_ob_max_bridge_time',
      previewObMinBridgeTime: 'Preview_ob_min_bridge_time',
      previewObTotalBridgeTime: 'Preview_ob_total_bridge_time',
      previewObTotalCount: 'Preview_ob_total_count',
      previewObValidCalls: 'Preview_ob_valid_calls',
      previewObValidTotalBridgeTime: 'Preview_ob_valid_total_bridge_time',
      queueName: 'QueueName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cno: 'string',
      currentState: 'string',
      gno: 'string',
      groupName: 'string',
      idleCount: 'string',
      idleTime: 'string',
      maxIdleTime: 'string',
      maxObBridgeTime: 'string',
      maxObCallingTime: 'string',
      maxObWrapupTime: 'string',
      minIdleTime: 'string',
      minObBridgeTime: 'string',
      minObCallingTime: 'string',
      minObWrapupTime: 'string',
      obBridgeCount: 'string',
      obBridgeTime: 'string',
      obCallingCount: 'string',
      obCallingTime: 'string',
      obWrapupCount: 'string',
      obWrapupTime: 'string',
      previewObAgentAnsweredCount: 'string',
      previewObBothAnsweredCount: 'string',
      previewObMaxBridgeTime: 'string',
      previewObMinBridgeTime: 'string',
      previewObTotalBridgeTime: 'string',
      previewObTotalCount: 'string',
      previewObValidCalls: 'string',
      previewObValidTotalBridgeTime: 'string',
      queueName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudAgentMonitorStatisticsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 座席统计项数组
   */
  agentStatistics?: CloudAgentMonitorStatisticsResponseBodyDataAgentStatistics[];
  /**
   * @remarks
   * 日期，格式为：yyyy-MM-dd
   * 
   * @example
   * 2026-04-06
   */
  date?: string;
  /**
   * @remarks
   * 总计
   * 
   * @example
   * 26
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      agentStatistics: 'AgentStatistics',
      date: 'Date',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentStatistics: { 'type': 'array', 'itemType': CloudAgentMonitorStatisticsResponseBodyDataAgentStatistics },
      date: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentStatistics)) {
      $dara.Model.validateArray(this.agentStatistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudAgentMonitorStatisticsResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudAgentMonitorStatisticsResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 9FF70B74-1B3C-44C1-ACDF-8DF962988F0E
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
      data: CloudAgentMonitorStatisticsResponseBodyData,
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

