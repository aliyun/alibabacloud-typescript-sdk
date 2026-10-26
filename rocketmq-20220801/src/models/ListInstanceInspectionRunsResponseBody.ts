// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceInspectionRunsResponseBodyDataAiSummary extends $dara.Model {
  /**
   * @remarks
   * Pending 等待、Running 生成中、Succeeded 已生成、Failed 生成失败；不改变巡检结果。
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * 仅生成成功时返回，最多 200 字，不由前端拼接或截取。
   * 
   * @example
   * 本次巡检未发现风险，实例运行正常。
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionRunsResponseBodyDataNotification extends $dara.Model {
  /**
   * @example
   * inspection-event-001
   */
  eventId?: string;
  /**
   * @example
   * Sent
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'eventId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionRunsResponseBodyDataSummary extends $dara.Model {
  /**
   * @example
   * 2
   */
  infoCount?: number;
  /**
   * @example
   * risk
   */
  result?: string;
  /**
   * @example
   * 1
   */
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'infoCount',
      result: 'result',
      riskCount: 'riskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
      result: 'string',
      riskCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionRunsResponseBodyDataTimeRange extends $dara.Model {
  /**
   * @example
   * 2026-09-08T00:00:00Z
   */
  endTime?: string;
  /**
   * @example
   * 2026-09-01T00:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionRunsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 每次巡检结果由 LLM 总结；包含生成状态及成功后的原文，未生成时为空。
   * 
   * @example
   * {}
   */
  aiSummary?: ListInstanceInspectionRunsResponseBodyDataAiSummary;
  /**
   * @example
   * 2026-09-08T00:01:00Z
   */
  finishedAt?: string;
  /**
   * @example
   * rmq-cn-example
   */
  instanceId?: string;
  /**
   * @example
   * 订单实例
   */
  instanceName?: string;
  /**
   * @example
   * {}
   */
  notification?: ListInstanceInspectionRunsResponseBodyDataNotification;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 2026-10-15T10:00:00Z
   */
  reportFinishedAt?: string;
  /**
   * @example
   * irpt-one
   */
  reportId?: string;
  /**
   * @example
   * Succeeded
   */
  reportStatus?: string;
  /**
   * @example
   * 2026-09-08T00:00:00Z
   */
  requestedAt?: string;
  /**
   * @example
   * inspection-run-001
   */
  runId?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * {}
   */
  summary?: ListInstanceInspectionRunsResponseBodyDataSummary;
  /**
   * @example
   * {}
   */
  timeRange?: ListInstanceInspectionRunsResponseBodyDataTimeRange;
  /**
   * @example
   * manual
   */
  triggerSource?: string;
  static names(): { [key: string]: string } {
    return {
      aiSummary: 'aiSummary',
      finishedAt: 'finishedAt',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      notification: 'notification',
      regionId: 'regionId',
      reportFinishedAt: 'reportFinishedAt',
      reportId: 'reportId',
      reportStatus: 'reportStatus',
      requestedAt: 'requestedAt',
      runId: 'runId',
      status: 'status',
      summary: 'summary',
      timeRange: 'timeRange',
      triggerSource: 'triggerSource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiSummary: ListInstanceInspectionRunsResponseBodyDataAiSummary,
      finishedAt: 'string',
      instanceId: 'string',
      instanceName: 'string',
      notification: ListInstanceInspectionRunsResponseBodyDataNotification,
      regionId: 'string',
      reportFinishedAt: 'string',
      reportId: 'string',
      reportStatus: 'string',
      requestedAt: 'string',
      runId: 'string',
      status: 'string',
      summary: ListInstanceInspectionRunsResponseBodyDataSummary,
      timeRange: ListInstanceInspectionRunsResponseBodyDataTimeRange,
      triggerSource: 'string',
    };
  }

  validate() {
    if(this.aiSummary && typeof (this.aiSummary as any).validate === 'function') {
      (this.aiSummary as any).validate();
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceInspectionRunsResponseBody extends $dara.Model {
  /**
   * @example
   * []
   */
  data?: ListInstanceInspectionRunsResponseBodyData[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * eyJvZmZzZXQiOjIwfQ
   */
  nextToken?: string;
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListInstanceInspectionRunsResponseBodyData },
      maxResults: 'number',
      nextToken: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

