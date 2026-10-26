// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceInspectionReportResponseBodyCoverageTimeRange extends $dara.Model {
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

export class GetInstanceInspectionReportResponseBodyCoverage extends $dara.Model {
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
  timeRange?: GetInstanceInspectionReportResponseBodyCoverageTimeRange;
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
      timeRange: GetInstanceInspectionReportResponseBodyCoverageTimeRange,
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

export class GetInstanceInspectionReportResponseBodyFindingsResource extends $dara.Model {
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

export class GetInstanceInspectionReportResponseBodyFindingsTimeRange extends $dara.Model {
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

export class GetInstanceInspectionReportResponseBodyFindings extends $dara.Model {
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
  resource?: GetInstanceInspectionReportResponseBodyFindingsResource;
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
  timeRange?: GetInstanceInspectionReportResponseBodyFindingsTimeRange;
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
      resource: GetInstanceInspectionReportResponseBodyFindingsResource,
      riskType: 'string',
      source: 'string',
      templateCode: 'string',
      timeRange: GetInstanceInspectionReportResponseBodyFindingsTimeRange,
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

export class GetInstanceInspectionReportResponseBodyReportSummary extends $dara.Model {
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

export class GetInstanceInspectionReportResponseBodyTimeRange extends $dara.Model {
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

export class GetInstanceInspectionReportResponseBody extends $dara.Model {
  /**
   * @example
   * complete
   */
  completion?: string;
  /**
   * @example
   * []
   */
  coverage?: GetInstanceInspectionReportResponseBodyCoverage[];
  /**
   * @example
   * []
   */
  findings?: GetInstanceInspectionReportResponseBodyFindings[];
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
  reportSummary?: GetInstanceInspectionReportResponseBodyReportSummary;
  /**
   * @example
   * inspection-v2.1
   */
  templateVersion?: string;
  /**
   * @example
   * {}
   */
  timeRange?: GetInstanceInspectionReportResponseBodyTimeRange;
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
      coverage: { 'type': 'array', 'itemType': GetInstanceInspectionReportResponseBodyCoverage },
      findings: { 'type': 'array', 'itemType': GetInstanceInspectionReportResponseBodyFindings },
      finishedAt: 'string',
      html: 'string',
      inspectionRunId: 'string',
      instanceId: 'string',
      instanceName: 'string',
      markdown: 'string',
      overview: 'string',
      regionId: 'string',
      reportId: 'string',
      reportSummary: GetInstanceInspectionReportResponseBodyReportSummary,
      templateVersion: 'string',
      timeRange: GetInstanceInspectionReportResponseBodyTimeRange,
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

