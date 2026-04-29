// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudAgentWorkloadReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席来电接听率
   * 
   * @example
   * 80%
   */
  agentAnswerRate?: string;
  /**
   * @remarks
   * 座席创建时间
   * 
   * @example
   * 2019-04-20
   */
  agentCreateTime?: string;
  /**
   * @remarks
   * 座席名称
   * 
   * @example
   * test-3
   */
  agentName?: string;
  /**
   * @remarks
   * 座席呼叫接听率
   * 
   * @example
   * 0%
   */
  agentRate?: string;
  /**
   * @remarks
   * 座席停用时间
   * 
   * @example
   * 00:00:01
   */
  agentStopTime?: string;
  /**
   * @remarks
   * 平均空闲时长
   * 
   * @example
   * 00:00:01
   */
  avgIdleTime?: string;
  /**
   * @remarks
   * 平均置忙时长
   * 
   * @example
   * 00:00:00
   */
  avgPauseTime?: string;
  /**
   * @remarks
   * 平均等待时长
   * 
   * @example
   * 00:00:00
   */
  avgPreviewObWaitTime?: string;
  /**
   * @remarks
   * 平均休息时长
   * 
   * @example
   * 00:00:03
   */
  avgRestTime?: string;
  /**
   * @remarks
   * 通话利用率
   * 
   * @example
   * 66%
   */
  callUtilization?: string;
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
   * 创建时间
   * 
   * @example
   * 2026-04-20 10:00:00
   */
  createTime?: string;
  /**
   * @remarks
   * 时间范围
   * 
   * @example
   * 示例值
   */
  dateTimeRange?: string;
  /**
   * @remarks
   * 统计日期
   * 
   * @example
   * 2026-04-20
   */
  day?: string;
  /**
   * @remarks
   * 主叫外呼客户接听数
   * 
   * @example
   * 4
   */
  directObAnsweredCount?: string;
  /**
   * @remarks
   * 主叫外呼接听量分布
   * 
   * @example
   * 0
   */
  directObAnsweredDurationArray?: string;
  /**
   * @remarks
   * 主叫外呼接听量分布描述
   */
  directObAnsweredDurationDscArray?: string[];
  /**
   * @remarks
   * 主叫外呼总时长
   * 
   * @example
   * 00:00:00
   */
  directObBridgeDuration?: string;
  /**
   * @remarks
   * 主叫外呼双方接听分钟数
   * 
   * @example
   * 00:00:00
   */
  directObBridgeTime?: string;
  /**
   * @remarks
   * 主叫外呼咨询总次数
   * 
   * @example
   * 0
   */
  directObConsultCount?: string;
  /**
   * @remarks
   * 主叫外呼强插总次数
   * 
   * @example
   * 0
   */
  directObMonitorBargeCount?: string;
  /**
   * @remarks
   * 主叫外呼总监控强拆次数
   * 
   * @example
   * 0
   */
  directObMonitorDisconnectCount?: string;
  /**
   * @remarks
   * 主叫外呼监听总次数
   * 
   * @example
   * 0
   */
  directObMonitorSpyCount?: string;
  /**
   * @remarks
   * 主叫外呼监控三方总次数
   * 
   * @example
   * 0
   */
  directObMonitorThreewayCount?: string;
  /**
   * @remarks
   * 主叫外呼耳语总次数
   * 
   * @example
   * 0
   */
  directObMonitorWhisperCount?: string;
  /**
   * @remarks
   * 主叫外呼总次数
   * 
   * @example
   * 0
   */
  directObTotalCount?: string;
  /**
   * @remarks
   * 主叫外呼总分钟数
   * 
   * @example
   * 00:00:22
   */
  directObTotalTime?: string;
  /**
   * @remarks
   * 主叫外呼转移总次数
   * 
   * @example
   * 0
   */
  directObTransferCount?: string;
  /**
   * @remarks
   * 主叫外呼有效接听数
   * 
   * @example
   * 0
   */
  directObValidCalls?: string;
  /**
   * @remarks
   * 主叫外呼有效接听时长
   * 
   * @example
   * 00:00:00
   */
  directObValidTotalBridgeTime?: string;
  /**
   * @remarks
   * 企业id
   * 
   * @example
   * 7000002
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 工时利用率
   * 
   * @example
   * 80%
   */
  hoursUtilization?: string;
  /**
   * @remarks
   * 座席挂机数
   * 
   * @example
   * 0
   */
  ibAgentHangupCount?: string;
  /**
   * @remarks
   * 来电座席拒接数
   * 
   * @example
   * 0
   */
  ibAgentRefuseCount?: string;
  /**
   * @remarks
   * 呼入座席接听数
   * 
   * @example
   * 0
   */
  ibAnsweredCount?: string;
  /**
   * @remarks
   * 接听量分布
   * 
   * @example
   * ""
   */
  ibAnsweredDurationArray?: string[];
  /**
   * @remarks
   * 呼入接听量分布描述
   */
  ibAnsweredDurationDscArray?: string[];
  /**
   * @remarks
   * 呼入接听平均延迟时间
   * 
   * @example
   * 00:00:00
   */
  ibAvgAnswerDelayTime?: string;
  /**
   * @remarks
   * 呼入平均通话时长
   * 
   * @example
   * 00:00:00
   */
  ibAvgBridgeTime?: string;
  /**
   * @remarks
   * 呼入平均呼叫时长
   * 
   * @example
   * 00:00:00
   */
  ibAvgCallingTime?: string;
  /**
   * @remarks
   * 呼入平均保持时长
   * 
   * @example
   * 00:00:00
   */
  ibAvgHoldTime?: string;
  /**
   * @remarks
   * 呼入平均整理时长
   * 
   * @example
   * 00:00:10
   */
  ibAvgWrapupTime?: string;
  /**
   * @remarks
   * 呼入通话次数
   * 
   * @example
   * 2
   */
  ibBridgeCount?: string;
  /**
   * @remarks
   * 呼入通话分钟数
   * 
   * @example
   * 00:00:00
   */
  ibBridgeMinute?: string;
  /**
   * @remarks
   * 呼入双方接听时长
   * 
   * @example
   * 00:00:00
   */
  ibBridgeTime?: string;
  /**
   * @remarks
   * 呼入呼叫次数
   * 
   * @example
   * 0
   */
  ibCallingCount?: string;
  /**
   * @remarks
   * 呼入总呼叫时长
   * 
   * @example
   * 00:00:00
   */
  ibCallingTime?: string;
  /**
   * @remarks
   * 呼入咨询数
   * 
   * @example
   * 0
   */
  ibConsultCount?: string;
  /**
   * @remarks
   * 客户挂机数
   * 
   * @example
   * 3
   */
  ibCustomerHangupCount?: string;
  /**
   * @remarks
   * 呼叫保持次数
   * 
   * @example
   * 0
   */
  ibHoldCount?: string;
  /**
   * @remarks
   * 呼入总保持时长
   * 
   * @example
   * 00:00:00
   */
  ibHoldTime?: string;
  /**
   * @remarks
   * 呼入接听最大延迟时间
   * 
   * @example
   * 00:00:00
   */
  ibMaxAnswerDelayTime?: string;
  /**
   * @remarks
   * 呼入最大通话时长
   * 
   * @example
   * 00:00:00
   */
  ibMaxBridgeTime?: string;
  /**
   * @remarks
   * 呼入最大呼叫时长
   * 
   * @example
   * 00:00:10
   */
  ibMaxCallingTime?: string;
  /**
   * @remarks
   * 呼入最大保持时长
   * 
   * @example
   * 00:00:00
   */
  ibMaxHoldTime?: string;
  /**
   * @remarks
   * 呼入最大整理时长
   * 
   * @example
   * 00:00:00
   */
  ibMaxWrapupTime?: string;
  /**
   * @remarks
   * 呼入接听最小延迟时间
   * 
   * @example
   * 00:00:00
   */
  ibMinAnswerDelayTime?: string;
  /**
   * @remarks
   * 呼入最小通话时长
   * 
   * @example
   * 00:00:10
   */
  ibMinBridgeTime?: string;
  /**
   * @remarks
   * 呼入最小呼叫时长
   * 
   * @example
   * 00:00:00
   */
  ibMinCallingTime?: string;
  /**
   * @remarks
   * 呼入最小保持时长
   * 
   * @example
   * 00:00:00
   */
  ibMinHoldTime?: string;
  /**
   * @remarks
   * 呼入最小整理时长
   * 
   * @example
   * 00:00:00
   */
  ibMinWrapupTime?: string;
  /**
   * @remarks
   * 呼入监控强插数
   * 
   * @example
   * 0
   */
  ibMonitorBargeCount?: string;
  /**
   * @remarks
   * 呼入强插时长
   * 
   * @example
   * 00:00:00
   */
  ibMonitorBargeDuration?: string;
  /**
   * @remarks
   * 呼入监控强拆数
   * 
   * @example
   * 0
   */
  ibMonitorDisconnectCount?: string;
  /**
   * @remarks
   * 呼入监控抢线数
   * 
   * @example
   * 0
   */
  ibMonitorPickupCount?: string;
  /**
   * @remarks
   * 呼入抢线时长
   * 
   * @example
   * 0
   */
  ibMonitorPickupDuration?: string;
  /**
   * @remarks
   * 呼入监控监听数
   * 
   * @example
   * 3
   */
  ibMonitorSpyCount?: string;
  /**
   * @remarks
   * 呼入监听时长
   * 
   * @example
   * 00:00:00
   */
  ibMonitorSpyDuration?: string;
  /**
   * @remarks
   * 呼入监控三方数
   * 
   * @example
   * 0
   */
  ibMonitorThreewayCount?: string;
  /**
   * @remarks
   * 呼入监控耳语数
   * 
   * @example
   * 0
   */
  ibMonitorWhisperCount?: string;
  /**
   * @remarks
   * 呼入耳语时长
   * 
   * @example
   * 00:00:00
   */
  ibMonitorWhisperDuration?: string;
  /**
   * @remarks
   * 呼入接听总延迟时间
   * 
   * @example
   * 00:00:00
   */
  ibTotalAnswerDelayTime?: string;
  /**
   * @remarks
   * 总呼入座席数
   * 
   * @example
   * 6
   */
  ibTotalCount?: string;
  /**
   * @remarks
   * 呼入总分钟数
   * 
   * @example
   * 0
   */
  ibTotalMinute?: string;
  /**
   * @remarks
   * 呼入总通话时长
   * 
   * @example
   * 3
   */
  ibTotalTime?: string;
  /**
   * @remarks
   * 呼入转移数
   * 
   * @example
   * 2
   */
  ibTransferCount?: string;
  /**
   * @remarks
   * 呼入座席未接听数
   * 
   * @example
   * 2
   */
  ibUnansweredCount?: string;
  /**
   * @remarks
   * 座席来电接听数
   * 
   * @example
   * 3
   */
  ibUniqueAnsweredCount?: string;
  /**
   * @remarks
   * 座席来电数
   * 
   * @example
   * 0
   */
  ibUniqueTotalCount?: string;
  /**
   * @remarks
   * 座席来电未接听数
   * 
   * @example
   * 0
   */
  ibUniqueUnansweredCount?: string;
  /**
   * @remarks
   * 呼入有效通话次数
   * 
   * @example
   * 0
   */
  ibValidCalls?: string;
  /**
   * @remarks
   * 呼入有效通话时长
   * 
   * @example
   * 00:00:10
   */
  ibValidTotalBridgeTime?: string;
  /**
   * @remarks
   * 呼入整理次数
   * 
   * @example
   * 0
   */
  ibWrapupCount?: string;
  /**
   * @remarks
   * 呼入总整理时长
   * 
   * @example
   * 00:00:00
   */
  ibWrapupTime?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 123124
   */
  id?: string;
  /**
   * @remarks
   * 空闲次数
   * 
   * @example
   * 0
   */
  idleCount?: string;
  /**
   * @remarks
   * 总空闲时长
   * 
   * @example
   * 00:00:00
   */
  idleTime?: string;
  /**
   * @remarks
   * 预览外呼IVR转移座席接听数
   * 
   * @example
   * 0
   */
  ivrTransferBridgeCount?: string;
  /**
   * @remarks
   * 预览外呼IVR转移双方接听时长
   * 
   * @example
   * 00:00:01
   */
  ivrTransferBridgeDuration?: string;
  /**
   * @remarks
   * 预览外呼IVR转移座席数
   * 
   * @example
   * 0
   */
  ivrTransferCount?: string;
  /**
   * @remarks
   * 总登录时长
   * 
   * @example
   * 00:00:01
   */
  loginTime?: string;
  /**
   * @remarks
   * 最大空闲时长
   * 
   * @example
   * 00:00:00
   */
  maxIdleTime?: string;
  /**
   * @remarks
   * 最大置忙时长
   * 
   * @example
   * 00:00:00
   */
  maxPauseTime?: string;
  /**
   * @remarks
   * 最大休息时长
   * 
   * @example
   * 00:00:00
   */
  maxRestTime?: string;
  /**
   * @remarks
   * 最小空闲时长
   * 
   * @example
   * 00:00:01
   */
  minIdleTime?: string;
  /**
   * @remarks
   * 最小置忙时长
   * 
   * @example
   * 00:00:00
   */
  minPauseTime?: string;
  /**
   * @remarks
   * 最小休息时长
   * 
   * @example
   * 00:00:00
   */
  minRestTime?: string;
  /**
   * @remarks
   * 外呼平均通话时长
   * 
   * @example
   * 00:00:00
   */
  obAvgBridgeTime?: string;
  /**
   * @remarks
   * 外呼平均呼叫时长
   * 
   * @example
   * 00:00:11
   */
  obAvgCallingTime?: string;
  /**
   * @remarks
   * 外呼平均保持时长
   * 
   * @example
   * 00:00:50
   */
  obAvgHoldTime?: string;
  /**
   * @remarks
   * 外呼平均整理时长
   * 
   * @example
   * 00:00:05
   */
  obAvgWrapupTime?: string;
  /**
   * @remarks
   * 外呼通话次数
   * 
   * @example
   * 3
   */
  obBridgeCount?: string;
  /**
   * @remarks
   * 外呼总通话时长
   * 
   * @example
   * ObBridgeTime
   */
  obBridgeTime?: string;
  /**
   * @remarks
   * 外呼呼叫次数
   * 
   * @example
   * 1
   */
  obCallingCount?: string;
  /**
   * @remarks
   * 外呼总呼叫时长
   * 
   * @example
   * 00:00:00
   */
  obCallingTime?: string;
  /**
   * @remarks
   * 外呼保持次数
   * 
   * @example
   * 1
   */
  obHoldCount?: string;
  /**
   * @remarks
   * 外呼总保持时长
   * 
   * @example
   * 00:00:10
   */
  obHoldTime?: string;
  /**
   * @remarks
   * 外呼最大通话时长
   * 
   * @example
   * 00:00:00
   */
  obMaxBridgeTime?: string;
  /**
   * @remarks
   * 外呼最大呼叫时长
   * 
   * @example
   * 00:00:03
   */
  obMaxCallingTime?: string;
  /**
   * @remarks
   * 外呼最大保持时长
   * 
   * @example
   * 00:00:01
   */
  obMaxHoldTime?: string;
  /**
   * @remarks
   * 外呼最大整理时长
   * 
   * @example
   * 00:00:22
   */
  obMaxWrapupTime?: string;
  /**
   * @remarks
   * 外呼最小通话时长
   * 
   * @example
   * 00:00:02
   */
  obMinBridgeTime?: string;
  /**
   * @remarks
   * 外呼最小呼叫时长
   * 
   * @example
   * 0
   */
  obMinCallingTime?: string;
  /**
   * @remarks
   * 外呼最小保持时长
   * 
   * @example
   * 00:00:00
   */
  obMinHoldTime?: string;
  /**
   * @remarks
   * 外呼最小整理时长
   * 
   * @example
   * 00:00:00
   */
  obMinWrapupTime?: string;
  /**
   * @remarks
   * 外呼双方接听时长
   * 
   * @example
   * 00:00:10
   */
  obRealBridgeTime?: string;
  /**
   * @remarks
   * 外呼整理次数
   * 
   * @example
   * 3
   */
  obWrapupCount?: string;
  /**
   * @remarks
   * 外呼总整理时长
   * 
   * @example
   * 00:00:00
   */
  obWrapupTime?: string;
  /**
   * @remarks
   * 置忙次数
   * 
   * @example
   * 1
   */
  pauseCount?: string;
  /**
   * @remarks
   * 总置忙时长
   * 
   * @example
   * 00:00:10
   */
  pauseTime?: string;
  /**
   * @remarks
   * 预测外呼座席接听通话总小时
   * 
   * @example
   * 1
   */
  predictObAgentAnsweredHour?: string;
  /**
   * @remarks
   * 预测外呼座席接听通话总时长
   * 
   * @example
   * 72
   */
  predictObAgentAnsweredTime?: number;
  /**
   * @remarks
   * 预测外呼座席接听数
   * 
   * @example
   * 27
   */
  predictObAnsweredCount?: number;
  /**
   * @remarks
   * 预测外呼接听量分布
   * 
   * @example
   * ""
   */
  predictObAnsweredDurationArray?: string;
  /**
   * @remarks
   * 预测外呼咨询数
   * 
   * @example
   * 0
   */
  predictObConsultCount?: string;
  /**
   * @remarks
   * 预测外呼监控强插数
   * 
   * @example
   * 0
   */
  predictObMonitorBargeCount?: string;
  /**
   * @remarks
   * 预测外呼强插时长
   * 
   * @example
   * 00:00:00
   */
  predictObMonitorBargeDuration?: string;
  /**
   * @remarks
   * 预测外呼监控强拆数
   * 
   * @example
   * 0
   */
  predictObMonitorDisconnectCount?: string;
  /**
   * @remarks
   * 预测外呼监控监听数
   * 
   * @example
   * 0
   */
  predictObMonitorSpyCount?: string;
  /**
   * @remarks
   * 预测外呼监听时长
   * 
   * @example
   * 00:00:00
   */
  predictObMonitorSpyDuration?: string;
  /**
   * @remarks
   * 预测外呼监控三方数
   * 
   * @example
   * 1
   */
  predictObMonitorThreewayCount?: string;
  /**
   * @remarks
   * 预测外呼监控耳语数
   * 
   * @example
   * 0
   */
  predictObMonitorWhisperCount?: string;
  /**
   * @remarks
   * 预测外呼耳语时长
   * 
   * @example
   * 00:00:00
   */
  predictObMonitorWhisperDuration?: string;
  /**
   * @remarks
   * 预测外呼总数
   * 
   * @example
   * 39
   */
  predictObTotalCount?: number;
  /**
   * @remarks
   * 预测外呼转移数
   * 
   * @example
   * 0
   */
  predictObTransferCount?: string;
  /**
   * @remarks
   * 预测外呼有效通话数
   * 
   * @example
   * 0
   */
  predictObValidCalls?: number;
  /**
   * @remarks
   * 预测外呼有效通话总小时
   * 
   * @example
   * 0
   */
  predictObValidTotalBridgeHour?: string;
  /**
   * @remarks
   * 预测外呼有效通话时长
   * 
   * @example
   * 33
   */
  predictObValidTotalBridgeTime?: number;
  /**
   * @remarks
   * 预览外呼座席接听率
   * 
   * @example
   * 33%
   */
  previewAgentAnswerdRate?: string;
  /**
   * @remarks
   * 预览外呼客户接听率
   * 
   * @example
   * 0%
   */
  previewCustomerAnswerdRate?: string;
  /**
   * @remarks
   * 预览外呼座席接听数
   * 
   * @example
   * 0
   */
  previewObAgentAnsweredCount?: string;
  /**
   * @remarks
   * 预览外呼座席接听时长
   * 
   * @example
   * 00:00:01
   */
  previewObAgentAnsweredTime?: string;
  /**
   * @remarks
   * 预览外呼双方接听数
   * 
   * @example
   * 0
   */
  previewObAnsweredCount?: string;
  /**
   * @remarks
   * 预览外呼接听量分布
   */
  previewObAnsweredDurationArray?: string[];
  /**
   * @remarks
   * 预览外呼接听量分布描述
   */
  previewObAnsweredDurationDscArray?: string[];
  /**
   * @remarks
   * 预览外呼咨询数
   * 
   * @example
   * 0
   */
  previewObConsultCount?: string;
  /**
   * @remarks
   * 预览外呼客户接听时长
   * 
   * @example
   * 00:00:00
   */
  previewObCustomerAnsweredTime?: string;
  /**
   * @remarks
   * 响铃数
   * 
   * @example
   * 1
   */
  previewObCustomerRingingCount?: string;
  /**
   * @remarks
   * 响铃率
   * 
   * @example
   * 100%
   */
  previewObCustomerRingingRate?: string;
  /**
   * @remarks
   * 预览外呼监控强插数
   * 
   * @example
   * 0
   */
  previewObMonitorBargeCount?: string;
  /**
   * @remarks
   * 预览外呼强插时长
   * 
   * @example
   * 00:00:00
   */
  previewObMonitorBargeDuration?: string;
  /**
   * @remarks
   * 预览外呼监控强拆数
   * 
   * @example
   * 0
   */
  previewObMonitorDisconnectCount?: string;
  /**
   * @remarks
   * 预览外呼监控监听数
   * 
   * @example
   * 0
   */
  previewObMonitorSpyCount?: string;
  /**
   * @remarks
   * 预览外呼监听时长
   * 
   * @example
   * 0
   */
  previewObMonitorSpyDuration?: string;
  /**
   * @remarks
   * 预览外呼监控三方数
   * 
   * @example
   * 0
   */
  previewObMonitorThreewayCount?: string;
  /**
   * @remarks
   * 预览外呼监控耳语数
   * 
   * @example
   * 0
   */
  previewObMonitorWhisperCount?: string;
  /**
   * @remarks
   * 预览外呼耳语时长
   * 
   * @example
   * 00:00:00
   */
  previewObMonitorWhisperDuration?: string;
  /**
   * @remarks
   * 预览外呼双方接听通话小时
   * 
   * @example
   * 0
   */
  previewObTotalBridgeHour?: string;
  /**
   * @remarks
   * 预览外呼双方接听通话时长
   * 
   * @example
   * 00:00:00
   */
  previewObTotalBridgeTime?: string;
  /**
   * @remarks
   * 总预览外呼数
   * 
   * @example
   * 0
   */
  previewObTotalCount?: string;
  /**
   * @remarks
   * 预览外呼被转接听数
   * 
   * @example
   * 1
   */
  previewObTransferBridgeCount?: string;
  /**
   * @remarks
   * 预览外呼被转接听时长
   * 
   * @example
   * 00:00:00
   */
  previewObTransferBridgeDuration?: string;
  /**
   * @remarks
   * 预览外呼被转数
   * 
   * @example
   * 1
   */
  previewObTransferCount?: string;
  /**
   * @remarks
   * 预览外呼有效通话次数
   * 
   * @example
   * 0
   */
  previewObValidCalls?: string;
  /**
   * @remarks
   * 预览外呼有效通话总小时
   * 
   * @example
   * 1
   */
  previewObValidTotalBridgeHour?: string;
  /**
   * @remarks
   * 预览外呼有效总通话时长
   * 
   * @example
   * 00:00:22
   */
  previewObValidTotalBridgeTime?: string;
  /**
   * @remarks
   * 队列名
   * 
   * @example
   * name3
   */
  queueName?: string;
  /**
   * @remarks
   * 休息次数
   * 
   * @example
   * 0
   */
  restCount?: string;
  /**
   * @remarks
   * 总休息时长
   * 
   * @example
   * 00:00:00
   */
  restTime?: string;
  /**
   * @remarks
   * 行名称
   * 
   * @example
   * 示例值
   */
  rowName?: string;
  /**
   * @remarks
   * 总双方接听时长
   * 
   * @example
   * 00:00:00
   */
  totalBridgeTime?: string;
  /**
   * @remarks
   * webcall座席接听分钟数
   * 
   * @example
   * 00:00:00
   */
  webcallObAgentAnsweredTime?: string;
  /**
   * @remarks
   * webcall双方接听数
   * 
   * @example
   * 0
   */
  webcallObAnsweredCount?: string;
  /**
   * @remarks
   * webcall接听量分布
   * 
   * @example
   * ""
   */
  webcallObAnsweredDurationArray?: string;
  /**
   * @remarks
   * webcall咨询数
   * 
   * @example
   * 0
   */
  webcallObConsultCount?: string;
  /**
   * @remarks
   * webcall监控强插数
   * 
   * @example
   * 0
   */
  webcallObMonitorBargeCount?: string;
  /**
   * @remarks
   * webcall强插时长
   * 
   * @example
   * 00:00:00
   */
  webcallObMonitorBargeDuration?: string;
  /**
   * @remarks
   * webcall监控强拆数
   * 
   * @example
   * 0
   */
  webcallObMonitorDisconnectCount?: string;
  /**
   * @remarks
   * webcall监控监听数
   * 
   * @example
   * 0
   */
  webcallObMonitorSpyCount?: string;
  /**
   * @remarks
   * webcall监听时长
   * 
   * @example
   * 00:00:00
   */
  webcallObMonitorSpyDuration?: string;
  /**
   * @remarks
   * webcall监控三方数
   * 
   * @example
   * 0
   */
  webcallObMonitorThreewayCount?: string;
  /**
   * @remarks
   * webcall监控耳语数
   * 
   * @example
   * 0
   */
  webcallObMonitorWhisperCount?: string;
  /**
   * @remarks
   * webcall耳语时长
   * 
   * @example
   * 00:00:00
   */
  webcallObMonitorWhisperDuration?: string;
  /**
   * @remarks
   * 总webcall数
   * 
   * @example
   * 0
   */
  webcallObTotalCount?: string;
  /**
   * @remarks
   * webcall转移数
   * 
   * @example
   * 0
   */
  webcallObTransferCount?: string;
  static names(): { [key: string]: string } {
    return {
      agentAnswerRate: 'AgentAnswerRate',
      agentCreateTime: 'AgentCreateTime',
      agentName: 'AgentName',
      agentRate: 'AgentRate',
      agentStopTime: 'AgentStopTime',
      avgIdleTime: 'AvgIdleTime',
      avgPauseTime: 'AvgPauseTime',
      avgPreviewObWaitTime: 'AvgPreviewObWaitTime',
      avgRestTime: 'AvgRestTime',
      callUtilization: 'CallUtilization',
      cno: 'Cno',
      createTime: 'CreateTime',
      dateTimeRange: 'DateTimeRange',
      day: 'Day',
      directObAnsweredCount: 'DirectObAnsweredCount',
      directObAnsweredDurationArray: 'DirectObAnsweredDurationArray',
      directObAnsweredDurationDscArray: 'DirectObAnsweredDurationDscArray',
      directObBridgeDuration: 'DirectObBridgeDuration',
      directObBridgeTime: 'DirectObBridgeTime',
      directObConsultCount: 'DirectObConsultCount',
      directObMonitorBargeCount: 'DirectObMonitorBargeCount',
      directObMonitorDisconnectCount: 'DirectObMonitorDisconnectCount',
      directObMonitorSpyCount: 'DirectObMonitorSpyCount',
      directObMonitorThreewayCount: 'DirectObMonitorThreewayCount',
      directObMonitorWhisperCount: 'DirectObMonitorWhisperCount',
      directObTotalCount: 'DirectObTotalCount',
      directObTotalTime: 'DirectObTotalTime',
      directObTransferCount: 'DirectObTransferCount',
      directObValidCalls: 'DirectObValidCalls',
      directObValidTotalBridgeTime: 'DirectObValidTotalBridgeTime',
      enterpriseId: 'EnterpriseId',
      hoursUtilization: 'HoursUtilization',
      ibAgentHangupCount: 'IbAgentHangupCount',
      ibAgentRefuseCount: 'IbAgentRefuseCount',
      ibAnsweredCount: 'IbAnsweredCount',
      ibAnsweredDurationArray: 'IbAnsweredDurationArray',
      ibAnsweredDurationDscArray: 'IbAnsweredDurationDscArray',
      ibAvgAnswerDelayTime: 'IbAvgAnswerDelayTime',
      ibAvgBridgeTime: 'IbAvgBridgeTime',
      ibAvgCallingTime: 'IbAvgCallingTime',
      ibAvgHoldTime: 'IbAvgHoldTime',
      ibAvgWrapupTime: 'IbAvgWrapupTime',
      ibBridgeCount: 'IbBridgeCount',
      ibBridgeMinute: 'IbBridgeMinute',
      ibBridgeTime: 'IbBridgeTime',
      ibCallingCount: 'IbCallingCount',
      ibCallingTime: 'IbCallingTime',
      ibConsultCount: 'IbConsultCount',
      ibCustomerHangupCount: 'IbCustomerHangupCount',
      ibHoldCount: 'IbHoldCount',
      ibHoldTime: 'IbHoldTime',
      ibMaxAnswerDelayTime: 'IbMaxAnswerDelayTime',
      ibMaxBridgeTime: 'IbMaxBridgeTime',
      ibMaxCallingTime: 'IbMaxCallingTime',
      ibMaxHoldTime: 'IbMaxHoldTime',
      ibMaxWrapupTime: 'IbMaxWrapupTime',
      ibMinAnswerDelayTime: 'IbMinAnswerDelayTime',
      ibMinBridgeTime: 'IbMinBridgeTime',
      ibMinCallingTime: 'IbMinCallingTime',
      ibMinHoldTime: 'IbMinHoldTime',
      ibMinWrapupTime: 'IbMinWrapupTime',
      ibMonitorBargeCount: 'IbMonitorBargeCount',
      ibMonitorBargeDuration: 'IbMonitorBargeDuration',
      ibMonitorDisconnectCount: 'IbMonitorDisconnectCount',
      ibMonitorPickupCount: 'IbMonitorPickupCount',
      ibMonitorPickupDuration: 'IbMonitorPickupDuration',
      ibMonitorSpyCount: 'IbMonitorSpyCount',
      ibMonitorSpyDuration: 'IbMonitorSpyDuration',
      ibMonitorThreewayCount: 'IbMonitorThreewayCount',
      ibMonitorWhisperCount: 'IbMonitorWhisperCount',
      ibMonitorWhisperDuration: 'IbMonitorWhisperDuration',
      ibTotalAnswerDelayTime: 'IbTotalAnswerDelayTime',
      ibTotalCount: 'IbTotalCount',
      ibTotalMinute: 'IbTotalMinute',
      ibTotalTime: 'IbTotalTime',
      ibTransferCount: 'IbTransferCount',
      ibUnansweredCount: 'IbUnansweredCount',
      ibUniqueAnsweredCount: 'IbUniqueAnsweredCount',
      ibUniqueTotalCount: 'IbUniqueTotalCount',
      ibUniqueUnansweredCount: 'IbUniqueUnansweredCount',
      ibValidCalls: 'IbValidCalls',
      ibValidTotalBridgeTime: 'IbValidTotalBridgeTime',
      ibWrapupCount: 'IbWrapupCount',
      ibWrapupTime: 'IbWrapupTime',
      id: 'Id',
      idleCount: 'IdleCount',
      idleTime: 'IdleTime',
      ivrTransferBridgeCount: 'IvrTransferBridgeCount',
      ivrTransferBridgeDuration: 'IvrTransferBridgeDuration',
      ivrTransferCount: 'IvrTransferCount',
      loginTime: 'LoginTime',
      maxIdleTime: 'MaxIdleTime',
      maxPauseTime: 'MaxPauseTime',
      maxRestTime: 'MaxRestTime',
      minIdleTime: 'MinIdleTime',
      minPauseTime: 'MinPauseTime',
      minRestTime: 'MinRestTime',
      obAvgBridgeTime: 'ObAvgBridgeTime',
      obAvgCallingTime: 'ObAvgCallingTime',
      obAvgHoldTime: 'ObAvgHoldTime',
      obAvgWrapupTime: 'ObAvgWrapupTime',
      obBridgeCount: 'ObBridgeCount',
      obBridgeTime: 'ObBridgeTime',
      obCallingCount: 'ObCallingCount',
      obCallingTime: 'ObCallingTime',
      obHoldCount: 'ObHoldCount',
      obHoldTime: 'ObHoldTime',
      obMaxBridgeTime: 'ObMaxBridgeTime',
      obMaxCallingTime: 'ObMaxCallingTime',
      obMaxHoldTime: 'ObMaxHoldTime',
      obMaxWrapupTime: 'ObMaxWrapupTime',
      obMinBridgeTime: 'ObMinBridgeTime',
      obMinCallingTime: 'ObMinCallingTime',
      obMinHoldTime: 'ObMinHoldTime',
      obMinWrapupTime: 'ObMinWrapupTime',
      obRealBridgeTime: 'ObRealBridgeTime',
      obWrapupCount: 'ObWrapupCount',
      obWrapupTime: 'ObWrapupTime',
      pauseCount: 'PauseCount',
      pauseTime: 'PauseTime',
      predictObAgentAnsweredHour: 'PredictObAgentAnsweredHour',
      predictObAgentAnsweredTime: 'PredictObAgentAnsweredTime',
      predictObAnsweredCount: 'PredictObAnsweredCount',
      predictObAnsweredDurationArray: 'PredictObAnsweredDurationArray',
      predictObConsultCount: 'PredictObConsultCount',
      predictObMonitorBargeCount: 'PredictObMonitorBargeCount',
      predictObMonitorBargeDuration: 'PredictObMonitorBargeDuration',
      predictObMonitorDisconnectCount: 'PredictObMonitorDisconnectCount',
      predictObMonitorSpyCount: 'PredictObMonitorSpyCount',
      predictObMonitorSpyDuration: 'PredictObMonitorSpyDuration',
      predictObMonitorThreewayCount: 'PredictObMonitorThreewayCount',
      predictObMonitorWhisperCount: 'PredictObMonitorWhisperCount',
      predictObMonitorWhisperDuration: 'PredictObMonitorWhisperDuration',
      predictObTotalCount: 'PredictObTotalCount',
      predictObTransferCount: 'PredictObTransferCount',
      predictObValidCalls: 'PredictObValidCalls',
      predictObValidTotalBridgeHour: 'PredictObValidTotalBridgeHour',
      predictObValidTotalBridgeTime: 'PredictObValidTotalBridgeTime',
      previewAgentAnswerdRate: 'PreviewAgentAnswerdRate',
      previewCustomerAnswerdRate: 'PreviewCustomerAnswerdRate',
      previewObAgentAnsweredCount: 'PreviewObAgentAnsweredCount',
      previewObAgentAnsweredTime: 'PreviewObAgentAnsweredTime',
      previewObAnsweredCount: 'PreviewObAnsweredCount',
      previewObAnsweredDurationArray: 'PreviewObAnsweredDurationArray',
      previewObAnsweredDurationDscArray: 'PreviewObAnsweredDurationDscArray',
      previewObConsultCount: 'PreviewObConsultCount',
      previewObCustomerAnsweredTime: 'PreviewObCustomerAnsweredTime',
      previewObCustomerRingingCount: 'PreviewObCustomerRingingCount',
      previewObCustomerRingingRate: 'PreviewObCustomerRingingRate',
      previewObMonitorBargeCount: 'PreviewObMonitorBargeCount',
      previewObMonitorBargeDuration: 'PreviewObMonitorBargeDuration',
      previewObMonitorDisconnectCount: 'PreviewObMonitorDisconnectCount',
      previewObMonitorSpyCount: 'PreviewObMonitorSpyCount',
      previewObMonitorSpyDuration: 'PreviewObMonitorSpyDuration',
      previewObMonitorThreewayCount: 'PreviewObMonitorThreewayCount',
      previewObMonitorWhisperCount: 'PreviewObMonitorWhisperCount',
      previewObMonitorWhisperDuration: 'PreviewObMonitorWhisperDuration',
      previewObTotalBridgeHour: 'PreviewObTotalBridgeHour',
      previewObTotalBridgeTime: 'PreviewObTotalBridgeTime',
      previewObTotalCount: 'PreviewObTotalCount',
      previewObTransferBridgeCount: 'PreviewObTransferBridgeCount',
      previewObTransferBridgeDuration: 'PreviewObTransferBridgeDuration',
      previewObTransferCount: 'PreviewObTransferCount',
      previewObValidCalls: 'PreviewObValidCalls',
      previewObValidTotalBridgeHour: 'PreviewObValidTotalBridgeHour',
      previewObValidTotalBridgeTime: 'PreviewObValidTotalBridgeTime',
      queueName: 'QueueName',
      restCount: 'RestCount',
      restTime: 'RestTime',
      rowName: 'RowName',
      totalBridgeTime: 'TotalBridgeTime',
      webcallObAgentAnsweredTime: 'WebcallObAgentAnsweredTime',
      webcallObAnsweredCount: 'WebcallObAnsweredCount',
      webcallObAnsweredDurationArray: 'WebcallObAnsweredDurationArray',
      webcallObConsultCount: 'WebcallObConsultCount',
      webcallObMonitorBargeCount: 'WebcallObMonitorBargeCount',
      webcallObMonitorBargeDuration: 'WebcallObMonitorBargeDuration',
      webcallObMonitorDisconnectCount: 'WebcallObMonitorDisconnectCount',
      webcallObMonitorSpyCount: 'WebcallObMonitorSpyCount',
      webcallObMonitorSpyDuration: 'WebcallObMonitorSpyDuration',
      webcallObMonitorThreewayCount: 'WebcallObMonitorThreewayCount',
      webcallObMonitorWhisperCount: 'WebcallObMonitorWhisperCount',
      webcallObMonitorWhisperDuration: 'WebcallObMonitorWhisperDuration',
      webcallObTotalCount: 'WebcallObTotalCount',
      webcallObTransferCount: 'WebcallObTransferCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnswerRate: 'string',
      agentCreateTime: 'string',
      agentName: 'string',
      agentRate: 'string',
      agentStopTime: 'string',
      avgIdleTime: 'string',
      avgPauseTime: 'string',
      avgPreviewObWaitTime: 'string',
      avgRestTime: 'string',
      callUtilization: 'string',
      cno: 'string',
      createTime: 'string',
      dateTimeRange: 'string',
      day: 'string',
      directObAnsweredCount: 'string',
      directObAnsweredDurationArray: 'string',
      directObAnsweredDurationDscArray: { 'type': 'array', 'itemType': 'string' },
      directObBridgeDuration: 'string',
      directObBridgeTime: 'string',
      directObConsultCount: 'string',
      directObMonitorBargeCount: 'string',
      directObMonitorDisconnectCount: 'string',
      directObMonitorSpyCount: 'string',
      directObMonitorThreewayCount: 'string',
      directObMonitorWhisperCount: 'string',
      directObTotalCount: 'string',
      directObTotalTime: 'string',
      directObTransferCount: 'string',
      directObValidCalls: 'string',
      directObValidTotalBridgeTime: 'string',
      enterpriseId: 'string',
      hoursUtilization: 'string',
      ibAgentHangupCount: 'string',
      ibAgentRefuseCount: 'string',
      ibAnsweredCount: 'string',
      ibAnsweredDurationArray: { 'type': 'array', 'itemType': 'string' },
      ibAnsweredDurationDscArray: { 'type': 'array', 'itemType': 'string' },
      ibAvgAnswerDelayTime: 'string',
      ibAvgBridgeTime: 'string',
      ibAvgCallingTime: 'string',
      ibAvgHoldTime: 'string',
      ibAvgWrapupTime: 'string',
      ibBridgeCount: 'string',
      ibBridgeMinute: 'string',
      ibBridgeTime: 'string',
      ibCallingCount: 'string',
      ibCallingTime: 'string',
      ibConsultCount: 'string',
      ibCustomerHangupCount: 'string',
      ibHoldCount: 'string',
      ibHoldTime: 'string',
      ibMaxAnswerDelayTime: 'string',
      ibMaxBridgeTime: 'string',
      ibMaxCallingTime: 'string',
      ibMaxHoldTime: 'string',
      ibMaxWrapupTime: 'string',
      ibMinAnswerDelayTime: 'string',
      ibMinBridgeTime: 'string',
      ibMinCallingTime: 'string',
      ibMinHoldTime: 'string',
      ibMinWrapupTime: 'string',
      ibMonitorBargeCount: 'string',
      ibMonitorBargeDuration: 'string',
      ibMonitorDisconnectCount: 'string',
      ibMonitorPickupCount: 'string',
      ibMonitorPickupDuration: 'string',
      ibMonitorSpyCount: 'string',
      ibMonitorSpyDuration: 'string',
      ibMonitorThreewayCount: 'string',
      ibMonitorWhisperCount: 'string',
      ibMonitorWhisperDuration: 'string',
      ibTotalAnswerDelayTime: 'string',
      ibTotalCount: 'string',
      ibTotalMinute: 'string',
      ibTotalTime: 'string',
      ibTransferCount: 'string',
      ibUnansweredCount: 'string',
      ibUniqueAnsweredCount: 'string',
      ibUniqueTotalCount: 'string',
      ibUniqueUnansweredCount: 'string',
      ibValidCalls: 'string',
      ibValidTotalBridgeTime: 'string',
      ibWrapupCount: 'string',
      ibWrapupTime: 'string',
      id: 'string',
      idleCount: 'string',
      idleTime: 'string',
      ivrTransferBridgeCount: 'string',
      ivrTransferBridgeDuration: 'string',
      ivrTransferCount: 'string',
      loginTime: 'string',
      maxIdleTime: 'string',
      maxPauseTime: 'string',
      maxRestTime: 'string',
      minIdleTime: 'string',
      minPauseTime: 'string',
      minRestTime: 'string',
      obAvgBridgeTime: 'string',
      obAvgCallingTime: 'string',
      obAvgHoldTime: 'string',
      obAvgWrapupTime: 'string',
      obBridgeCount: 'string',
      obBridgeTime: 'string',
      obCallingCount: 'string',
      obCallingTime: 'string',
      obHoldCount: 'string',
      obHoldTime: 'string',
      obMaxBridgeTime: 'string',
      obMaxCallingTime: 'string',
      obMaxHoldTime: 'string',
      obMaxWrapupTime: 'string',
      obMinBridgeTime: 'string',
      obMinCallingTime: 'string',
      obMinHoldTime: 'string',
      obMinWrapupTime: 'string',
      obRealBridgeTime: 'string',
      obWrapupCount: 'string',
      obWrapupTime: 'string',
      pauseCount: 'string',
      pauseTime: 'string',
      predictObAgentAnsweredHour: 'string',
      predictObAgentAnsweredTime: 'number',
      predictObAnsweredCount: 'number',
      predictObAnsweredDurationArray: 'string',
      predictObConsultCount: 'string',
      predictObMonitorBargeCount: 'string',
      predictObMonitorBargeDuration: 'string',
      predictObMonitorDisconnectCount: 'string',
      predictObMonitorSpyCount: 'string',
      predictObMonitorSpyDuration: 'string',
      predictObMonitorThreewayCount: 'string',
      predictObMonitorWhisperCount: 'string',
      predictObMonitorWhisperDuration: 'string',
      predictObTotalCount: 'number',
      predictObTransferCount: 'string',
      predictObValidCalls: 'number',
      predictObValidTotalBridgeHour: 'string',
      predictObValidTotalBridgeTime: 'number',
      previewAgentAnswerdRate: 'string',
      previewCustomerAnswerdRate: 'string',
      previewObAgentAnsweredCount: 'string',
      previewObAgentAnsweredTime: 'string',
      previewObAnsweredCount: 'string',
      previewObAnsweredDurationArray: { 'type': 'array', 'itemType': 'string' },
      previewObAnsweredDurationDscArray: { 'type': 'array', 'itemType': 'string' },
      previewObConsultCount: 'string',
      previewObCustomerAnsweredTime: 'string',
      previewObCustomerRingingCount: 'string',
      previewObCustomerRingingRate: 'string',
      previewObMonitorBargeCount: 'string',
      previewObMonitorBargeDuration: 'string',
      previewObMonitorDisconnectCount: 'string',
      previewObMonitorSpyCount: 'string',
      previewObMonitorSpyDuration: 'string',
      previewObMonitorThreewayCount: 'string',
      previewObMonitorWhisperCount: 'string',
      previewObMonitorWhisperDuration: 'string',
      previewObTotalBridgeHour: 'string',
      previewObTotalBridgeTime: 'string',
      previewObTotalCount: 'string',
      previewObTransferBridgeCount: 'string',
      previewObTransferBridgeDuration: 'string',
      previewObTransferCount: 'string',
      previewObValidCalls: 'string',
      previewObValidTotalBridgeHour: 'string',
      previewObValidTotalBridgeTime: 'string',
      queueName: 'string',
      restCount: 'string',
      restTime: 'string',
      rowName: 'string',
      totalBridgeTime: 'string',
      webcallObAgentAnsweredTime: 'string',
      webcallObAnsweredCount: 'string',
      webcallObAnsweredDurationArray: 'string',
      webcallObConsultCount: 'string',
      webcallObMonitorBargeCount: 'string',
      webcallObMonitorBargeDuration: 'string',
      webcallObMonitorDisconnectCount: 'string',
      webcallObMonitorSpyCount: 'string',
      webcallObMonitorSpyDuration: 'string',
      webcallObMonitorThreewayCount: 'string',
      webcallObMonitorWhisperCount: 'string',
      webcallObMonitorWhisperDuration: 'string',
      webcallObTotalCount: 'string',
      webcallObTransferCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.directObAnsweredDurationDscArray)) {
      $dara.Model.validateArray(this.directObAnsweredDurationDscArray);
    }
    if(Array.isArray(this.ibAnsweredDurationArray)) {
      $dara.Model.validateArray(this.ibAnsweredDurationArray);
    }
    if(Array.isArray(this.ibAnsweredDurationDscArray)) {
      $dara.Model.validateArray(this.ibAnsweredDurationDscArray);
    }
    if(Array.isArray(this.previewObAnsweredDurationArray)) {
      $dara.Model.validateArray(this.previewObAnsweredDurationArray);
    }
    if(Array.isArray(this.previewObAnsweredDurationDscArray)) {
      $dara.Model.validateArray(this.previewObAnsweredDurationDscArray);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudAgentWorkloadReportResponseBodyData extends $dara.Model {
  list?: CloudAgentWorkloadReportResponseBodyDataList[];
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1
   */
  totalCount?: string;
  /**
   * @example
   * 1
   */
  totalPageCount?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': CloudAgentWorkloadReportResponseBodyDataList },
      pageSize: 'string',
      totalCount: 'string',
      totalPageCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudAgentWorkloadReportResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudAgentWorkloadReportResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 756BCB70-492E-5877-ABEB-03BB5CA28540
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
      data: CloudAgentWorkloadReportResponseBodyData,
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

