// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceInspectionRunResponseBodyAiSummary extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyConfigSnapshotItems extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"lookback":"1h","consumerDelayThresholdSeconds":600}
   */
  parameters?: any;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: 'any',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyConfigSnapshotResourceScope extends $dara.Model {
  /**
   * @example
   * ["orders-g1"]
   */
  consumerGroups?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * All
   */
  mode?: string;
  /**
   * @example
   * ["orders"]
   */
  topics?: string[];
  static names(): { [key: string]: string } {
    return {
      consumerGroups: 'consumerGroups',
      mode: 'mode',
      topics: 'topics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerGroups: { 'type': 'array', 'itemType': 'string' },
      mode: 'string',
      topics: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.consumerGroups)) {
      $dara.Model.validateArray(this.consumerGroups);
    }
    if(Array.isArray(this.topics)) {
      $dara.Model.validateArray(this.topics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyConfigSnapshotSchedule extends $dara.Model {
  /**
   * @example
   * 0 3 * * *
   */
  cron?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cron: 'cron',
      enabled: 'enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cron: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyConfigSnapshot extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}},{"templateCode":"rmq.traffic-capacity","parameters":{"lookback":"6h"}}]
   */
  items?: GetInstanceInspectionRunResponseBodyConfigSnapshotItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"mode":"All"}
   */
  resourceScope?: GetInstanceInspectionRunResponseBodyConfigSnapshotResourceScope;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"enabled":true,"cron":"0 3 * * *"}
   */
  schedule?: GetInstanceInspectionRunResponseBodyConfigSnapshotSchedule;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      resourceScope: 'resourceScope',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': GetInstanceInspectionRunResponseBodyConfigSnapshotItems },
      resourceScope: GetInstanceInspectionRunResponseBodyConfigSnapshotResourceScope,
      schedule: GetInstanceInspectionRunResponseBodyConfigSnapshotSchedule,
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.resourceScope && typeof (this.resourceScope as any).validate === 'function') {
      (this.resourceScope as any).validate();
    }
    if(this.schedule && typeof (this.schedule as any).validate === 'function') {
      (this.schedule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyItemsEffectiveConfig extends $dara.Model {
  /**
   * @example
   * {"lookback":"1h","consumerDelayThresholdSeconds":600}
   */
  parameters?: any;
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'parameters',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: 'any',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyItemsMetrics extends $dara.Model {
  /**
   * @example
   * true
   */
  bad?: boolean;
  /**
   * @example
   * false
   */
  good?: boolean;
  /**
   * @example
   * 消费延迟
   */
  k?: string;
  /**
   * @example
   * 320 秒
   */
  v?: string;
  static names(): { [key: string]: string } {
    return {
      bad: 'bad',
      good: 'good',
      k: 'k',
      v: 'v',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bad: 'boolean',
      good: 'boolean',
      k: 'string',
      v: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyItemsResourceSummary extends $dara.Model {
  /**
   * @example
   * 2
   */
  infoCount?: number;
  /**
   * @example
   * 1
   */
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'infoCount',
      riskCount: 'riskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
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

export class GetInstanceInspectionRunResponseBodyItemsTimeRange extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 检查消费延迟和消费健康度
   */
  description?: string;
  /**
   * @example
   * {"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}}
   */
  effectiveConfig?: GetInstanceInspectionRunResponseBodyItemsEffectiveConfig;
  /**
   * @example
   * INSPECTION_EXECUTION_INTERRUPTED
   */
  errorCode?: string;
  /**
   * @example
   * 消费延迟超过阈值
   */
  headline?: string;
  /**
   * @example
   * []
   */
  metrics?: GetInstanceInspectionRunResponseBodyItemsMetrics[];
  /**
   * @example
   * 消费健康巡检
   */
  name?: string;
  /**
   * @example
   * 2026-09-01T01:00:00Z
   */
  observedAt?: string;
  /**
   * @example
   * 3
   */
  resourceCount?: number;
  /**
   * @example
   * {"infoCount":2,"riskCount":1}
   */
  resourceSummary?: GetInstanceInspectionRunResponseBodyItemsResourceSummary;
  /**
   * @example
   * ["ConsumerGroup"]
   */
  resourceTypes?: string[];
  /**
   * @example
   * Risk
   */
  result?: string;
  /**
   * @example
   * warning
   */
  severity?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  /**
   * @example
   * {"startTime":"2026-09-01T00:00:00Z","endTime":"2026-09-01T01:00:00Z"}
   */
  timeRange?: GetInstanceInspectionRunResponseBodyItemsTimeRange;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      effectiveConfig: 'effectiveConfig',
      errorCode: 'errorCode',
      headline: 'headline',
      metrics: 'metrics',
      name: 'name',
      observedAt: 'observedAt',
      resourceCount: 'resourceCount',
      resourceSummary: 'resourceSummary',
      resourceTypes: 'resourceTypes',
      result: 'result',
      severity: 'severity',
      status: 'status',
      templateCode: 'templateCode',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      effectiveConfig: GetInstanceInspectionRunResponseBodyItemsEffectiveConfig,
      errorCode: 'string',
      headline: 'string',
      metrics: { 'type': 'array', 'itemType': GetInstanceInspectionRunResponseBodyItemsMetrics },
      name: 'string',
      observedAt: 'string',
      resourceCount: 'number',
      resourceSummary: GetInstanceInspectionRunResponseBodyItemsResourceSummary,
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      result: 'string',
      severity: 'string',
      status: 'string',
      templateCode: 'string',
      timeRange: GetInstanceInspectionRunResponseBodyItemsTimeRange,
    };
  }

  validate() {
    if(this.effectiveConfig && typeof (this.effectiveConfig as any).validate === 'function') {
      (this.effectiveConfig as any).validate();
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    if(this.resourceSummary && typeof (this.resourceSummary as any).validate === 'function') {
      (this.resourceSummary as any).validate();
    }
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
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

export class GetInstanceInspectionRunResponseBodyNotification extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyReportCoverageTimeRange extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyReportCoverage extends $dara.Model {
  /**
   * @example
   * Succeeded
   */
  diagnosisStatus?: string;
  /**
   * @example
   * 消费健康
   */
  name?: string;
  /**
   * @example
   * 2026-09-01T01:00:00Z
   */
  observedAt?: string;
  /**
   * @example
   * risk
   */
  result?: string;
  /**
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  /**
   * @example
   * {"startTime":"2026-09-01T00:00:00Z","endTime":"2026-09-01T01:00:00Z"}
   */
  timeRange?: GetInstanceInspectionRunResponseBodyReportCoverageTimeRange;
  static names(): { [key: string]: string } {
    return {
      diagnosisStatus: 'diagnosisStatus',
      name: 'name',
      observedAt: 'observedAt',
      result: 'result',
      status: 'status',
      templateCode: 'templateCode',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisStatus: 'string',
      name: 'string',
      observedAt: 'string',
      result: 'string',
      status: 'string',
      templateCode: 'string',
      timeRange: GetInstanceInspectionRunResponseBodyReportCoverageTimeRange,
    };
  }

  validate() {
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyReportFindingsResource extends $dara.Model {
  /**
   * @example
   * GID-orders
   */
  id?: string;
  /**
   * @example
   * 订单消费组
   */
  name?: string;
  /**
   * @example
   * group
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      name: 'name',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyReportFindingsTimeRange extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyReportFindings extends $dara.Model {
  /**
   * @example
   * []
   */
  alternatives?: string[];
  /**
   * @example
   * 消费环节
   */
  boundary?: string;
  /**
   * @example
   * 消费者处理速度可能不足
   */
  cause?: string;
  /**
   * @example
   * likely
   */
  confidence?: string;
  /**
   * @example
   * ["消费延迟 60 秒"]
   */
  evidence?: string[];
  /**
   * @example
   * 消息处理延迟升高
   */
  impact?: string;
  /**
   * @example
   * 消费组监控
   */
  location?: string;
  /**
   * @example
   * []
   */
  missingEvidence?: string[];
  /**
   * @example
   * []
   */
  observations?: string[];
  /**
   * @example
   * 2026-09-01T01:00:00Z
   */
  observedAt?: string;
  /**
   * @example
   * ["检查消费者处理耗时"]
   */
  recommendations?: string[];
  /**
   * @example
   * {}
   */
  resource?: GetInstanceInspectionRunResponseBodyReportFindingsResource;
  /**
   * @example
   * 消费延迟
   */
  riskType?: string;
  /**
   * @example
   * script
   */
  source?: string;
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  /**
   * @example
   * {}
   */
  timeRange?: GetInstanceInspectionRunResponseBodyReportFindingsTimeRange;
  /**
   * @example
   * []
   */
  verification?: string[];
  static names(): { [key: string]: string } {
    return {
      alternatives: 'alternatives',
      boundary: 'boundary',
      cause: 'cause',
      confidence: 'confidence',
      evidence: 'evidence',
      impact: 'impact',
      location: 'location',
      missingEvidence: 'missingEvidence',
      observations: 'observations',
      observedAt: 'observedAt',
      recommendations: 'recommendations',
      resource: 'resource',
      riskType: 'riskType',
      source: 'source',
      templateCode: 'templateCode',
      timeRange: 'timeRange',
      verification: 'verification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alternatives: { 'type': 'array', 'itemType': 'string' },
      boundary: 'string',
      cause: 'string',
      confidence: 'string',
      evidence: { 'type': 'array', 'itemType': 'string' },
      impact: 'string',
      location: 'string',
      missingEvidence: { 'type': 'array', 'itemType': 'string' },
      observations: { 'type': 'array', 'itemType': 'string' },
      observedAt: 'string',
      recommendations: { 'type': 'array', 'itemType': 'string' },
      resource: GetInstanceInspectionRunResponseBodyReportFindingsResource,
      riskType: 'string',
      source: 'string',
      templateCode: 'string',
      timeRange: GetInstanceInspectionRunResponseBodyReportFindingsTimeRange,
      verification: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.alternatives)) {
      $dara.Model.validateArray(this.alternatives);
    }
    if(Array.isArray(this.evidence)) {
      $dara.Model.validateArray(this.evidence);
    }
    if(Array.isArray(this.missingEvidence)) {
      $dara.Model.validateArray(this.missingEvidence);
    }
    if(Array.isArray(this.observations)) {
      $dara.Model.validateArray(this.observations);
    }
    if(Array.isArray(this.recommendations)) {
      $dara.Model.validateArray(this.recommendations);
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    if(this.timeRange && typeof (this.timeRange as any).validate === 'function') {
      (this.timeRange as any).validate();
    }
    if(Array.isArray(this.verification)) {
      $dara.Model.validateArray(this.verification);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceInspectionRunResponseBodyReportReportSummary extends $dara.Model {
  /**
   * @example
   * 4
   */
  infoCount?: number;
  /**
   * @example
   * 1
   */
  riskCount?: number;
  static names(): { [key: string]: string } {
    return {
      infoCount: 'infoCount',
      riskCount: 'riskCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoCount: 'number',
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

export class GetInstanceInspectionRunResponseBodyReportTimeRange extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyReport extends $dara.Model {
  /**
   * @example
   * complete
   */
  completion?: string;
  /**
   * @example
   * []
   */
  coverage?: GetInstanceInspectionRunResponseBodyReportCoverage[];
  /**
   * @example
   * []
   */
  findings?: GetInstanceInspectionRunResponseBodyReportFindings[];
  /**
   * @example
   * 2026-09-18T08:02:00Z
   */
  finishedAt?: string;
  /**
   * @example
   * <h1>实例巡检诊断报告</h1>
   */
  html?: string;
  /**
   * @example
   * irun-example
   */
  inspectionRunId?: string;
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
   * # 实例巡检诊断报告
   */
  markdown?: string;
  /**
   * @example
   * 消费延迟与容量限制可能相关
   */
  overview?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * irpt-example
   */
  reportId?: string;
  /**
   * @example
   * {}
   */
  reportSummary?: GetInstanceInspectionRunResponseBodyReportReportSummary;
  /**
   * @example
   * inspection-v2.1
   */
  templateVersion?: string;
  /**
   * @example
   * {}
   */
  timeRange?: GetInstanceInspectionRunResponseBodyReportTimeRange;
  static names(): { [key: string]: string } {
    return {
      completion: 'completion',
      coverage: 'coverage',
      findings: 'findings',
      finishedAt: 'finishedAt',
      html: 'html',
      inspectionRunId: 'inspectionRunId',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      markdown: 'markdown',
      overview: 'overview',
      regionId: 'regionId',
      reportId: 'reportId',
      reportSummary: 'reportSummary',
      templateVersion: 'templateVersion',
      timeRange: 'timeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completion: 'string',
      coverage: { 'type': 'array', 'itemType': GetInstanceInspectionRunResponseBodyReportCoverage },
      findings: { 'type': 'array', 'itemType': GetInstanceInspectionRunResponseBodyReportFindings },
      finishedAt: 'string',
      html: 'string',
      inspectionRunId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      markdown: 'string',
      overview: 'string',
      regionId: 'string',
      reportId: 'string',
      reportSummary: GetInstanceInspectionRunResponseBodyReportReportSummary,
      templateVersion: 'string',
      timeRange: GetInstanceInspectionRunResponseBodyReportTimeRange,
    };
  }

  validate() {
    if(Array.isArray(this.coverage)) {
      $dara.Model.validateArray(this.coverage);
    }
    if(Array.isArray(this.findings)) {
      $dara.Model.validateArray(this.findings);
    }
    if(this.reportSummary && typeof (this.reportSummary as any).validate === 'function') {
      (this.reportSummary as any).validate();
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

export class GetInstanceInspectionRunResponseBodySummary extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBodyTimeRange extends $dara.Model {
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

export class GetInstanceInspectionRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * 每次巡检结果由 LLM 总结；包含生成状态及成功后的原文，未生成时为空。
   * 
   * @example
   * {}
   */
  aiSummary?: GetInstanceInspectionRunResponseBodyAiSummary;
  /**
   * @example
   * {}
   */
  configSnapshot?: GetInstanceInspectionRunResponseBodyConfigSnapshot;
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
   * []
   */
  items?: GetInstanceInspectionRunResponseBodyItems[];
  /**
   * @example
   * {}
   */
  notification?: GetInstanceInspectionRunResponseBodyNotification;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * {}
   */
  report?: GetInstanceInspectionRunResponseBodyReport;
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
  summary?: GetInstanceInspectionRunResponseBodySummary;
  /**
   * @example
   * {}
   */
  timeRange?: GetInstanceInspectionRunResponseBodyTimeRange;
  /**
   * @example
   * manual
   */
  triggerSource?: string;
  static names(): { [key: string]: string } {
    return {
      aiSummary: 'aiSummary',
      configSnapshot: 'configSnapshot',
      finishedAt: 'finishedAt',
      instanceId: 'instanceId',
      instanceName: 'instanceName',
      items: 'items',
      notification: 'notification',
      regionId: 'regionId',
      report: 'report',
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
      aiSummary: GetInstanceInspectionRunResponseBodyAiSummary,
      configSnapshot: GetInstanceInspectionRunResponseBodyConfigSnapshot,
      finishedAt: 'string',
      instanceId: 'string',
      instanceName: 'string',
      items: { 'type': 'array', 'itemType': GetInstanceInspectionRunResponseBodyItems },
      notification: GetInstanceInspectionRunResponseBodyNotification,
      regionId: 'string',
      report: GetInstanceInspectionRunResponseBodyReport,
      requestedAt: 'string',
      runId: 'string',
      status: 'string',
      summary: GetInstanceInspectionRunResponseBodySummary,
      timeRange: GetInstanceInspectionRunResponseBodyTimeRange,
      triggerSource: 'string',
    };
  }

  validate() {
    if(this.aiSummary && typeof (this.aiSummary as any).validate === 'function') {
      (this.aiSummary as any).validate();
    }
    if(this.configSnapshot && typeof (this.configSnapshot as any).validate === 'function') {
      (this.configSnapshot as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.notification && typeof (this.notification as any).validate === 'function') {
      (this.notification as any).validate();
    }
    if(this.report && typeof (this.report as any).validate === 'function') {
      (this.report as any).validate();
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

