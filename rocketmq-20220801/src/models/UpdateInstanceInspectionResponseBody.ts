// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceInspectionResponseBodyConfigItems extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyConfigResourceScope extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyConfigSchedule extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}},{"templateCode":"rmq.traffic-capacity","parameters":{"lookback":"6h"}}]
   */
  items?: UpdateInstanceInspectionResponseBodyConfigItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"mode":"All"}
   */
  resourceScope?: UpdateInstanceInspectionResponseBodyConfigResourceScope;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"enabled":true,"cron":"0 3 * * *"}
   */
  schedule?: UpdateInstanceInspectionResponseBodyConfigSchedule;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      resourceScope: 'resourceScope',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyConfigItems },
      resourceScope: UpdateInstanceInspectionResponseBodyConfigResourceScope,
      schedule: UpdateInstanceInspectionResponseBodyConfigSchedule,
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

export class UpdateInstanceInspectionResponseBodyItems extends $dara.Model {
  /**
   * @example
   * 检查消费延迟和消费健康度
   */
  description?: string;
  /**
   * @example
   * 消费健康巡检
   */
  name?: string;
  /**
   * @example
   * 3
   */
  resourceCount?: number;
  /**
   * @example
   * ["ConsumerGroup"]
   */
  resourceTypes?: string[];
  /**
   * @example
   * rmq.consumer-health
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      resourceCount: 'resourceCount',
      resourceTypes: 'resourceTypes',
      templateCode: 'templateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      resourceCount: 'number',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      templateCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateInstanceInspectionResponseBodyLastRunAiSummary extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotItems extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotResourceScope extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotSchedule extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunConfigSnapshot extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}},{"templateCode":"rmq.traffic-capacity","parameters":{"lookback":"6h"}}]
   */
  items?: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotItems[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"mode":"All"}
   */
  resourceScope?: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotResourceScope;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"enabled":true,"cron":"0 3 * * *"}
   */
  schedule?: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotSchedule;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      resourceScope: 'resourceScope',
      schedule: 'schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotItems },
      resourceScope: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotResourceScope,
      schedule: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshotSchedule,
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

export class UpdateInstanceInspectionResponseBodyLastRunItemsEffectiveConfig extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunItemsMetrics extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunItemsResourceSummary extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunItemsTimeRange extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunItems extends $dara.Model {
  /**
   * @example
   * 检查消费延迟和消费健康度
   */
  description?: string;
  /**
   * @example
   * {"templateCode":"rmq.consumer-health","parameters":{"lookback":"1h"}}
   */
  effectiveConfig?: UpdateInstanceInspectionResponseBodyLastRunItemsEffectiveConfig;
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
  metrics?: UpdateInstanceInspectionResponseBodyLastRunItemsMetrics[];
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
  resourceSummary?: UpdateInstanceInspectionResponseBodyLastRunItemsResourceSummary;
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
  timeRange?: UpdateInstanceInspectionResponseBodyLastRunItemsTimeRange;
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
      effectiveConfig: UpdateInstanceInspectionResponseBodyLastRunItemsEffectiveConfig,
      errorCode: 'string',
      headline: 'string',
      metrics: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyLastRunItemsMetrics },
      name: 'string',
      observedAt: 'string',
      resourceCount: 'number',
      resourceSummary: UpdateInstanceInspectionResponseBodyLastRunItemsResourceSummary,
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
      result: 'string',
      severity: 'string',
      status: 'string',
      templateCode: 'string',
      timeRange: UpdateInstanceInspectionResponseBodyLastRunItemsTimeRange,
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

export class UpdateInstanceInspectionResponseBodyLastRunNotification extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunReportCoverageTimeRange extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunReportCoverage extends $dara.Model {
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
  timeRange?: UpdateInstanceInspectionResponseBodyLastRunReportCoverageTimeRange;
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
      timeRange: UpdateInstanceInspectionResponseBodyLastRunReportCoverageTimeRange,
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

export class UpdateInstanceInspectionResponseBodyLastRunReportFindingsResource extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunReportFindingsTimeRange extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunReportFindings extends $dara.Model {
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
  resource?: UpdateInstanceInspectionResponseBodyLastRunReportFindingsResource;
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
  timeRange?: UpdateInstanceInspectionResponseBodyLastRunReportFindingsTimeRange;
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
      resource: UpdateInstanceInspectionResponseBodyLastRunReportFindingsResource,
      riskType: 'string',
      source: 'string',
      templateCode: 'string',
      timeRange: UpdateInstanceInspectionResponseBodyLastRunReportFindingsTimeRange,
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

export class UpdateInstanceInspectionResponseBodyLastRunReportReportSummary extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunReportTimeRange extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunReport extends $dara.Model {
  /**
   * @example
   * complete
   */
  completion?: string;
  /**
   * @example
   * []
   */
  coverage?: UpdateInstanceInspectionResponseBodyLastRunReportCoverage[];
  /**
   * @example
   * []
   */
  findings?: UpdateInstanceInspectionResponseBodyLastRunReportFindings[];
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
  reportSummary?: UpdateInstanceInspectionResponseBodyLastRunReportReportSummary;
  /**
   * @example
   * inspection-v2.1
   */
  templateVersion?: string;
  /**
   * @example
   * {}
   */
  timeRange?: UpdateInstanceInspectionResponseBodyLastRunReportTimeRange;
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
      coverage: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyLastRunReportCoverage },
      findings: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyLastRunReportFindings },
      finishedAt: 'string',
      html: 'string',
      inspectionRunId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      markdown: 'string',
      overview: 'string',
      regionId: 'string',
      reportId: 'string',
      reportSummary: UpdateInstanceInspectionResponseBodyLastRunReportReportSummary,
      templateVersion: 'string',
      timeRange: UpdateInstanceInspectionResponseBodyLastRunReportTimeRange,
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

export class UpdateInstanceInspectionResponseBodyLastRunSummary extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRunTimeRange extends $dara.Model {
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

export class UpdateInstanceInspectionResponseBodyLastRun extends $dara.Model {
  /**
   * @remarks
   * 每次巡检结果由 LLM 总结；包含生成状态及成功后的原文，未生成时为空。
   * 
   * @example
   * {}
   */
  aiSummary?: UpdateInstanceInspectionResponseBodyLastRunAiSummary;
  /**
   * @example
   * {}
   */
  configSnapshot?: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshot;
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
  items?: UpdateInstanceInspectionResponseBodyLastRunItems[];
  /**
   * @example
   * {}
   */
  notification?: UpdateInstanceInspectionResponseBodyLastRunNotification;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * {}
   */
  report?: UpdateInstanceInspectionResponseBodyLastRunReport;
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
  summary?: UpdateInstanceInspectionResponseBodyLastRunSummary;
  /**
   * @example
   * {}
   */
  timeRange?: UpdateInstanceInspectionResponseBodyLastRunTimeRange;
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
      aiSummary: UpdateInstanceInspectionResponseBodyLastRunAiSummary,
      configSnapshot: UpdateInstanceInspectionResponseBodyLastRunConfigSnapshot,
      finishedAt: 'string',
      instanceId: 'string',
      instanceName: 'string',
      items: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyLastRunItems },
      notification: UpdateInstanceInspectionResponseBodyLastRunNotification,
      regionId: 'string',
      report: UpdateInstanceInspectionResponseBodyLastRunReport,
      requestedAt: 'string',
      runId: 'string',
      status: 'string',
      summary: UpdateInstanceInspectionResponseBodyLastRunSummary,
      timeRange: UpdateInstanceInspectionResponseBodyLastRunTimeRange,
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

export class UpdateInstanceInspectionResponseBody extends $dara.Model {
  /**
   * @example
   * {}
   */
  config?: UpdateInstanceInspectionResponseBodyConfig;
  /**
   * @example
   * true
   */
  configured?: boolean;
  /**
   * @example
   * rmq-cn-example
   */
  instanceId?: string;
  /**
   * @example
   * []
   */
  items?: UpdateInstanceInspectionResponseBodyItems[];
  /**
   * @example
   * {}
   */
  lastRun?: UpdateInstanceInspectionResponseBodyLastRun;
  /**
   * @example
   * 2026-09-09T03:00:00+08:00
   */
  nextRunAt?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1
   */
  revision?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      configured: 'configured',
      instanceId: 'instanceId',
      items: 'items',
      lastRun: 'lastRun',
      nextRunAt: 'nextRunAt',
      regionId: 'regionId',
      revision: 'revision',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: UpdateInstanceInspectionResponseBodyConfig,
      configured: 'boolean',
      instanceId: 'string',
      items: { 'type': 'array', 'itemType': UpdateInstanceInspectionResponseBodyItems },
      lastRun: UpdateInstanceInspectionResponseBodyLastRun,
      nextRunAt: 'string',
      regionId: 'string',
      revision: 'number',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    if(this.lastRun && typeof (this.lastRun as any).validate === 'function') {
      (this.lastRun as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

