// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudOutboundPreviewObReportResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 座席接听数
   * 
   * @example
   * 3
   */
  agentAnsweredCount?: string;
  /**
   * @remarks
   * 座席姓名
   * 
   * @example
   * name3
   */
  agentName?: string;
  /**
   * @remarks
   * 座席接听率
   * 
   * @example
   * 100%
   */
  agentRate?: string;
  /**
   * @remarks
   * 平均通话时长
   * 
   * @example
   * 00:00:12
   */
  avgBridgeTime?: string;
  /**
   * @remarks
   * AXB双方接听数
   * 
   * @example
   * 0
   */
  axbBothAnsweredCount?: string;
  /**
   * @remarks
   * AXB双方接听率 = AXB双方接听数 / AXB外呼总数
   * 
   * @example
   * 0%
   */
  axbBothAnsweredRate?: string;
  /**
   * @remarks
   * AXB外呼双方接听分钟数
   * 
   * @example
   * 0
   */
  axbBothAnsweredTime?: string;
  /**
   * @remarks
   * AXB外呼总数
   * 
   * @example
   * 0
   */
  axbObTotalCount?: string;
  /**
   * @remarks
   * 双方接听数
   * 
   * @example
   * 3
   */
  bothAnsweredCount?: string;
  /**
   * @remarks
   * 双方接听时长
   * 
   * @example
   * 2
   */
  bothAnsweredTime?: string;
  /**
   * @remarks
   * 呼叫接通率
   * 
   * @example
   * 100%
   */
  callBridgedRate?: string;
  /**
   * @remarks
   * 发起呼叫次数
   * 
   * @example
   * 3
   */
  callTotalCount?: string;
  /**
   * @remarks
   * 座席工号
   * 
   * @example
   * 3008
   */
  cno?: string;
  /**
   * @remarks
   * 客户接听数
   * 
   * @example
   * 3
   */
  customerAnsweredCount?: string;
  /**
   * @remarks
   * 客户接听率
   * 
   * @example
   * 100%
   */
  customerRate?: string;
  /**
   * @remarks
   * 统计周期
   * 
   * @example
   * 示例值
   */
  dateTimeRange?: string;
  /**
   * @remarks
   * 企业Id
   * 
   * @example
   * 6000001
   */
  enterpriseId?: string;
  /**
   * @remarks
   * 拦截次数
   * 
   * @example
   * 0
   */
  interceptionCount?: string;
  /**
   * @remarks
   * 拦截率
   * 
   * @example
   * 0%
   */
  interceptionRate?: string;
  /**
   * @remarks
   * 固话双方接听数
   * 
   * @example
   * 3
   */
  landlineBothAnsweredCount?: string;
  /**
   * @remarks
   * 固话双方接听率 = 固话双方接听数 / 固话外呼总数
   * 
   * @example
   * 100%
   */
  landlineBothAnsweredRate?: string;
  /**
   * @remarks
   * 固话双方接听分钟数
   * 
   * @example
   * 0
   */
  landlineBothAnsweredTime?: string;
  /**
   * @remarks
   * 固话外呼总数
   * 
   * @example
   * 0
   */
  landlineObTotalCount?: string;
  /**
   * @remarks
   * 最长通话时长
   * 
   * @example
   * 00:00:14
   */
  maxBridgeTime?: string;
  /**
   * @remarks
   * 最短通话时长
   * 
   * @example
   * 00:00:11
   */
  minBridgeTime?: string;
  /**
   * @remarks
   * 总通话时长
   * 
   * @example
   * 00:00:38
   */
  totalBridgeTime?: string;
  /**
   * @remarks
   * 外呼总数
   * 
   * @example
   * 3
   */
  totalCount?: string;
  /**
   * @remarks
   * 通话占比
   * 
   * @example
   * 0%
   */
  vadRate?: string;
  /**
   * @remarks
   * 有效通话平均通话时长
   * 
   * @example
   * 00:00:12
   */
  validAvgBridgeTime?: string;
  /**
   * @remarks
   * 有效通话次数
   * 
   * @example
   * 3
   */
  validCalls?: string;
  /**
   * @remarks
   * 有效通话总通话时长
   * 
   * @example
   * 00:00:38
   */
  validTotalBridgeTime?: string;
  static names(): { [key: string]: string } {
    return {
      agentAnsweredCount: 'AgentAnsweredCount',
      agentName: 'AgentName',
      agentRate: 'AgentRate',
      avgBridgeTime: 'AvgBridgeTime',
      axbBothAnsweredCount: 'AxbBothAnsweredCount',
      axbBothAnsweredRate: 'AxbBothAnsweredRate',
      axbBothAnsweredTime: 'AxbBothAnsweredTime',
      axbObTotalCount: 'AxbObTotalCount',
      bothAnsweredCount: 'BothAnsweredCount',
      bothAnsweredTime: 'BothAnsweredTime',
      callBridgedRate: 'CallBridgedRate',
      callTotalCount: 'CallTotalCount',
      cno: 'Cno',
      customerAnsweredCount: 'CustomerAnsweredCount',
      customerRate: 'CustomerRate',
      dateTimeRange: 'DateTimeRange',
      enterpriseId: 'EnterpriseId',
      interceptionCount: 'InterceptionCount',
      interceptionRate: 'InterceptionRate',
      landlineBothAnsweredCount: 'LandlineBothAnsweredCount',
      landlineBothAnsweredRate: 'LandlineBothAnsweredRate',
      landlineBothAnsweredTime: 'LandlineBothAnsweredTime',
      landlineObTotalCount: 'LandlineObTotalCount',
      maxBridgeTime: 'MaxBridgeTime',
      minBridgeTime: 'MinBridgeTime',
      totalBridgeTime: 'TotalBridgeTime',
      totalCount: 'TotalCount',
      vadRate: 'VadRate',
      validAvgBridgeTime: 'ValidAvgBridgeTime',
      validCalls: 'ValidCalls',
      validTotalBridgeTime: 'ValidTotalBridgeTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentAnsweredCount: 'string',
      agentName: 'string',
      agentRate: 'string',
      avgBridgeTime: 'string',
      axbBothAnsweredCount: 'string',
      axbBothAnsweredRate: 'string',
      axbBothAnsweredTime: 'string',
      axbObTotalCount: 'string',
      bothAnsweredCount: 'string',
      bothAnsweredTime: 'string',
      callBridgedRate: 'string',
      callTotalCount: 'string',
      cno: 'string',
      customerAnsweredCount: 'string',
      customerRate: 'string',
      dateTimeRange: 'string',
      enterpriseId: 'string',
      interceptionCount: 'string',
      interceptionRate: 'string',
      landlineBothAnsweredCount: 'string',
      landlineBothAnsweredRate: 'string',
      landlineBothAnsweredTime: 'string',
      landlineObTotalCount: 'string',
      maxBridgeTime: 'string',
      minBridgeTime: 'string',
      totalBridgeTime: 'string',
      totalCount: 'string',
      vadRate: 'string',
      validAvgBridgeTime: 'string',
      validCalls: 'string',
      validTotalBridgeTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudOutboundPreviewObReportResponseBodyData extends $dara.Model {
  list?: CloudOutboundPreviewObReportResponseBodyDataList[];
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
      list: { 'type': 'array', 'itemType': CloudOutboundPreviewObReportResponseBodyDataList },
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

export class CloudOutboundPreviewObReportResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudOutboundPreviewObReportResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * D9CB3933-9FE3-4870-BA8E-2BEE91B69D23
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
      data: CloudOutboundPreviewObReportResponseBodyData,
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

