// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ClinkStatIbResponseBodyDataStatIb extends $dara.Model {
  /**
   * @remarks
   * 接听电话座席数
   * 
   * @example
   * 96
   */
  answeredAgentCount?: number;
  /**
   * @remarks
   * 人均接听量
   * 
   * @example
   * 6
   */
  avgAnsweredAgentCount?: number;
  /**
   * @remarks
   * 日期（统计方式2为同步日期；统计方式3为分时信息，例 0-1时）
   * 
   * @example
   * 20240203
   */
  date?: string;
  /**
   * @remarks
   * 热线号码
   * 
   * @example
   * Hotline
   */
  hotline?: string;
  /**
   * @remarks
   * 热线别名
   * 
   * @example
   * HotlineName
   */
  hotlineName?: string;
  /**
   * @remarks
   * 呼叫座席来电总数
   * 
   * @example
   * 5
   */
  ibAgentCount?: number;
  /**
   * @remarks
   * 人工接听数
   * 
   * @example
   * 56
   */
  ibAnsweredCount?: number;
  /**
   * @remarks
   * 人工接听排队总时长
   * 
   * @example
   * 90
   */
  ibAnsweredQueueDuration?: number;
  /**
   * @remarks
   * 呼入人工接听率
   * 
   * @example
   * 0.28
   */
  ibAnsweredRate?: number;
  /**
   * @remarks
   * 人工接听平均排队时长
   * 
   * @example
   * 93
   */
  ibAvgAnsweredQueueDuration?: number;
  /**
   * @remarks
   * 呼入平均通话时长
   * 
   * @example
   * 19
   */
  ibAvgBridgeDuration?: number;
  /**
   * @remarks
   * 呼入平均时长
   * 
   * @example
   * 98
   */
  ibAvgDuration?: number;
  /**
   * @remarks
   * 进入队列平均排队时长
   * 
   * @example
   * 40
   */
  ibAvgQueueDuration?: number;
  /**
   * @remarks
   * 机器人应答数
   * 
   * @example
   * 36
   */
  ibBotAnsweredCount?: number;
  /**
   * @remarks
   * 机器人未应答数
   * 
   * @example
   * 79
   */
  ibBotUnansweredCount?: number;
  /**
   * @remarks
   * 呼入通话总时长（客户侧）
   * 
   * @example
   * 28
   */
  ibBridgeDuration?: number;
  /**
   * @remarks
   * 直转座席数
   * 
   * @example
   * 61
   */
  ibDirectAgentCount?: number;
  /**
   * @remarks
   * 直转队列数
   * 
   * @example
   * 18
   */
  ibDirectQueueCount?: number;
  /**
   * @remarks
   * 直转电话/IP话机数
   * 
   * @example
   * 81
   */
  ibDirectTelCount?: number;
  /**
   * @remarks
   * 进入IVR人工接听数
   * 
   * @example
   * 17
   */
  ibIvrAnsweredCount?: number;
  /**
   * @remarks
   * 进入IVR数
   * 
   * @example
   * 45
   */
  ibIvrCount?: number;
  /**
   * @remarks
   * 进入IVR未转队列数
   * 
   * @example
   * 73
   */
  ibIvrNoQueueCount?: number;
  /**
   * @remarks
   * 进入IVR转队列数
   * 
   * @example
   * 94
   */
  ibIvrQueueCount?: number;
  /**
   * @remarks
   * 进入IVR客户速挂
   * 
   * @example
   * 18
   */
  ibIvrQuickUnlinkCount?: number;
  /**
   * @remarks
   * 进入IVR系统应答数
   * 
   * @example
   * 12
   */
  ibIvrSystemAnsweredCount?: number;
  /**
   * @remarks
   * 进入IVR人工未接听数
   * 
   * @example
   * 70
   */
  ibIvrUnAnsweredCount?: number;
  /**
   * @remarks
   * 未进入IVR数
   * 
   * @example
   * 12
   */
  ibNoIvrCount?: number;
  /**
   * @remarks
   * 进入队列来电通数
   * 
   * @example
   * 91
   */
  ibQueueCount?: number;
  /**
   * @remarks
   * 进入队列排队总时长
   * 
   * @example
   * 79
   */
  ibQueueDuration?: number;
  /**
   * @remarks
   * 黑名单来电数
   * 
   * @example
   * 90
   */
  ibRestrictCount?: number;
  /**
   * @remarks
   * X秒接听数
   * 
   * @example
   * 1
   */
  ibRingingRangeCount?: number;
  /**
   * @remarks
   * X秒接听率
   * 
   * @example
   * 0.43
   */
  ibRingingRangeRate?: number;
  /**
   * @remarks
   * 系统应答数
   * 
   * @example
   * 25
   */
  ibSystemAnsweredCount?: number;
  /**
   * @remarks
   * 系统未应答数
   * 
   * @example
   * 2
   */
  ibSystemUnAnsweredCount?: number;
  /**
   * @remarks
   * 来电总通数
   * 
   * @example
   * 40
   */
  ibTotalCount?: number;
  /**
   * @remarks
   * 人工未接听数
   * 
   * @example
   * 70
   */
  ibUnansweredCount?: number;
  /**
   * @remarks
   * VIP呼入数
   * 
   * @example
   * 77
   */
  ibVipCount?: number;
  /**
   * @remarks
   * 网上400呼入数
   * 
   * @example
   * 53
   */
  ibWebCount?: number;
  /**
   * @remarks
   * 呼入总时长
   * 
   * @example
   * 69
   */
  ibtotalDuration?: number;
  /**
   * @remarks
   * 进入IVR直转电话/IP话机人工接听数
   * 
   * @example
   * 95
   */
  ivrDirectTelAnsweredCount?: number;
  /**
   * @remarks
   * 进入IVR直转电话/IP话机数
   * 
   * @example
   * 88
   */
  ivrDirectTelCount?: number;
  /**
   * @remarks
   * 进入IVR直转电话/IP话机系统应答数
   * 
   * @example
   * 10
   */
  ivrDirectTelSysAnsweredCount?: number;
  /**
   * @remarks
   * 进入IVR直转电话/IP话机人工未接听数
   * 
   * @example
   * 75
   */
  ivrDirectTelUnansweredCount?: number;
  /**
   * @remarks
   * 客户速挂数
   * 
   * @example
   * 67
   */
  quickUnlinkCount?: number;
  /**
   * @remarks
   * 热线重复来电数
   * 
   * @example
   * 14
   */
  repeatHotlineCount?: number;
  static names(): { [key: string]: string } {
    return {
      answeredAgentCount: 'AnsweredAgentCount',
      avgAnsweredAgentCount: 'AvgAnsweredAgentCount',
      date: 'Date',
      hotline: 'Hotline',
      hotlineName: 'HotlineName',
      ibAgentCount: 'IbAgentCount',
      ibAnsweredCount: 'IbAnsweredCount',
      ibAnsweredQueueDuration: 'IbAnsweredQueueDuration',
      ibAnsweredRate: 'IbAnsweredRate',
      ibAvgAnsweredQueueDuration: 'IbAvgAnsweredQueueDuration',
      ibAvgBridgeDuration: 'IbAvgBridgeDuration',
      ibAvgDuration: 'IbAvgDuration',
      ibAvgQueueDuration: 'IbAvgQueueDuration',
      ibBotAnsweredCount: 'IbBotAnsweredCount',
      ibBotUnansweredCount: 'IbBotUnansweredCount',
      ibBridgeDuration: 'IbBridgeDuration',
      ibDirectAgentCount: 'IbDirectAgentCount',
      ibDirectQueueCount: 'IbDirectQueueCount',
      ibDirectTelCount: 'IbDirectTelCount',
      ibIvrAnsweredCount: 'IbIvrAnsweredCount',
      ibIvrCount: 'IbIvrCount',
      ibIvrNoQueueCount: 'IbIvrNoQueueCount',
      ibIvrQueueCount: 'IbIvrQueueCount',
      ibIvrQuickUnlinkCount: 'IbIvrQuickUnlinkCount',
      ibIvrSystemAnsweredCount: 'IbIvrSystemAnsweredCount',
      ibIvrUnAnsweredCount: 'IbIvrUnAnsweredCount',
      ibNoIvrCount: 'IbNoIvrCount',
      ibQueueCount: 'IbQueueCount',
      ibQueueDuration: 'IbQueueDuration',
      ibRestrictCount: 'IbRestrictCount',
      ibRingingRangeCount: 'IbRingingRangeCount',
      ibRingingRangeRate: 'IbRingingRangeRate',
      ibSystemAnsweredCount: 'IbSystemAnsweredCount',
      ibSystemUnAnsweredCount: 'IbSystemUnAnsweredCount',
      ibTotalCount: 'IbTotalCount',
      ibUnansweredCount: 'IbUnansweredCount',
      ibVipCount: 'IbVipCount',
      ibWebCount: 'IbWebCount',
      ibtotalDuration: 'IbtotalDuration',
      ivrDirectTelAnsweredCount: 'IvrDirectTelAnsweredCount',
      ivrDirectTelCount: 'IvrDirectTelCount',
      ivrDirectTelSysAnsweredCount: 'IvrDirectTelSysAnsweredCount',
      ivrDirectTelUnansweredCount: 'IvrDirectTelUnansweredCount',
      quickUnlinkCount: 'QuickUnlinkCount',
      repeatHotlineCount: 'RepeatHotlineCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answeredAgentCount: 'number',
      avgAnsweredAgentCount: 'number',
      date: 'string',
      hotline: 'string',
      hotlineName: 'string',
      ibAgentCount: 'number',
      ibAnsweredCount: 'number',
      ibAnsweredQueueDuration: 'number',
      ibAnsweredRate: 'number',
      ibAvgAnsweredQueueDuration: 'number',
      ibAvgBridgeDuration: 'number',
      ibAvgDuration: 'number',
      ibAvgQueueDuration: 'number',
      ibBotAnsweredCount: 'number',
      ibBotUnansweredCount: 'number',
      ibBridgeDuration: 'number',
      ibDirectAgentCount: 'number',
      ibDirectQueueCount: 'number',
      ibDirectTelCount: 'number',
      ibIvrAnsweredCount: 'number',
      ibIvrCount: 'number',
      ibIvrNoQueueCount: 'number',
      ibIvrQueueCount: 'number',
      ibIvrQuickUnlinkCount: 'number',
      ibIvrSystemAnsweredCount: 'number',
      ibIvrUnAnsweredCount: 'number',
      ibNoIvrCount: 'number',
      ibQueueCount: 'number',
      ibQueueDuration: 'number',
      ibRestrictCount: 'number',
      ibRingingRangeCount: 'number',
      ibRingingRangeRate: 'number',
      ibSystemAnsweredCount: 'number',
      ibSystemUnAnsweredCount: 'number',
      ibTotalCount: 'number',
      ibUnansweredCount: 'number',
      ibVipCount: 'number',
      ibWebCount: 'number',
      ibtotalDuration: 'number',
      ivrDirectTelAnsweredCount: 'number',
      ivrDirectTelCount: 'number',
      ivrDirectTelSysAnsweredCount: 'number',
      ivrDirectTelUnansweredCount: 'number',
      quickUnlinkCount: 'number',
      repeatHotlineCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkStatIbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 请求 id
   * 
   * @example
   * xxx
   */
  clinkRequestId?: string;
  /**
   * @remarks
   * 报表数据（注：时长字段单位均为秒）
   */
  statIb?: ClinkStatIbResponseBodyDataStatIb[];
  static names(): { [key: string]: string } {
    return {
      clinkRequestId: 'ClinkRequestId',
      statIb: 'StatIb',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clinkRequestId: 'string',
      statIb: { 'type': 'array', 'itemType': ClinkStatIbResponseBodyDataStatIb },
    };
  }

  validate() {
    if(Array.isArray(this.statIb)) {
      $dara.Model.validateArray(this.statIb);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClinkStatIbResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ClinkStatIbResponseBodyData;
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
      data: ClinkStatIbResponseBodyData,
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

