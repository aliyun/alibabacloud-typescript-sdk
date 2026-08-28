// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPatrolReportDetailResponseBodyDataOverviewProblemSummary extends $dara.Model {
  /**
   * @remarks
   * The number of jobs with delay and backpressure.
   * 
   * @example
   * 0
   */
  delayAndBackpressure?: number;
  /**
   * @remarks
   * The number of unhealthy jobs.
   * 
   * @example
   * 0
   */
  unhealthy?: number;
  /**
   * @remarks
   * The number of jobs with unhealthy checkpoints.
   * 
   * @example
   * 0
   */
  unhealthyCheckpoints?: number;
  static names(): { [key: string]: string } {
    return {
      delayAndBackpressure: 'delayAndBackpressure',
      unhealthy: 'unhealthy',
      unhealthyCheckpoints: 'unhealthyCheckpoints',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayAndBackpressure: 'number',
      unhealthy: 'number',
      unhealthyCheckpoints: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolReportDetailResponseBodyDataOverviewRiskSummary extends $dara.Model {
  /**
   * @remarks
   * The number of critical-level jobs.
   * 
   * @example
   * 0
   */
  critical?: number;
  /**
   * @remarks
   * The number of info-level jobs.
   * 
   * @example
   * 0
   */
  info?: number;
  /**
   * @remarks
   * The number of warning-level jobs.
   * 
   * @example
   * 1
   */
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      critical: 'critical',
      info: 'info',
      warning: 'warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: 'number',
      info: 'number',
      warning: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolReportDetailResponseBodyDataOverview extends $dara.Model {
  /**
   * @remarks
   * The problem summary.
   */
  problemSummary?: GetPatrolReportDetailResponseBodyDataOverviewProblemSummary;
  /**
   * @remarks
   * The risk summary.
   */
  riskSummary?: GetPatrolReportDetailResponseBodyDataOverviewRiskSummary;
  /**
   * @remarks
   * The total number of jobs.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      problemSummary: 'problemSummary',
      riskSummary: 'riskSummary',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problemSummary: GetPatrolReportDetailResponseBodyDataOverviewProblemSummary,
      riskSummary: GetPatrolReportDetailResponseBodyDataOverviewRiskSummary,
      total: 'number',
    };
  }

  validate() {
    if(this.problemSummary && typeof (this.problemSummary as any).validate === 'function') {
      (this.problemSummary as any).validate();
    }
    if(this.riskSummary && typeof (this.riskSummary as any).validate === 'function') {
      (this.riskSummary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolReportDetailResponseBodyDataScopeConfig extends $dara.Model {
  /**
   * @remarks
   * The list of deployment IDs. This parameter is valid only when scopeType is set to DEPLOYMENTS.
   */
  deploymentIds?: string[];
  /**
   * @remarks
   * The tag mapping. This parameter is valid only when scopeType is set to TAGS. The key is the tag name, and the value is the list of tag values.
   */
  tags?: { [key: string]: string[] };
  static names(): { [key: string]: string } {
    return {
      deploymentIds: 'deploymentIds',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentIds: { 'type': 'array', 'itemType': 'string' },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(Array.isArray(this.deploymentIds)) {
      $dara.Model.validateArray(this.deploymentIds);
    }
    if(this.tags) {
      $dara.Model.validateMap(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolReportDetailResponseBodyDataUnhealthyJobs extends $dara.Model {
  /**
   * @remarks
   * The analysis.
   * 
   * @example
   * The job has experienced continuous backpressure in the last 30 minutes.
   */
  analysis?: string;
  /**
   * @remarks
   * The deployment ID.
   * 
   * @example
   * 18b8ceaa-207d-417b-833e-a5845bb31beb
   */
  deploymentId?: string;
  /**
   * @remarks
   * The deployment name.
   * 
   * @example
   * rlt_cust_no_apitime
   */
  deploymentName?: string;
  /**
   * @remarks
   * The problem description.
   * 
   * @example
   * Job backpressure
   */
  description?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * db201864-e0df-4f8c-81f0-d62103095ff6
   */
  jobId?: string;
  /**
   * @remarks
   * The recommendation.
   * 
   * @example
   * Check the processing capacity of the downstream operator.
   */
  recommendation?: string;
  /**
   * @remarks
   * The risk level.
   * 
   * @example
   * info
   */
  riskLevel?: string;
  /**
   * @remarks
   * The list of tags diagnosed by AI for the job.
   */
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      analysis: 'analysis',
      deploymentId: 'deploymentId',
      deploymentName: 'deploymentName',
      description: 'description',
      jobId: 'jobId',
      recommendation: 'recommendation',
      riskLevel: 'riskLevel',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysis: 'string',
      deploymentId: 'string',
      deploymentName: 'string',
      description: 'string',
      jobId: 'string',
      recommendation: 'string',
      riskLevel: 'string',
      tags: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolReportDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The completion time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1785981634652
   */
  completedAt?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1772936711518
   */
  createdAt?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The inspection overview.
   */
  overview?: GetPatrolReportDetailResponseBodyDataOverview;
  /**
   * @remarks
   * The report ID.
   * 
   * @example
   * inspection-cf8f8843-64e4-4b45-9500-06790107130f
   */
  reportId?: string;
  /**
   * @remarks
   * The inspection scope configuration.
   */
  scopeConfig?: GetPatrolReportDetailResponseBodyDataScopeConfig;
  /**
   * @remarks
   * The inspection scope type.
   * 
   * @example
   * ALL
   */
  scopeType?: string;
  /**
   * @remarks
   * The trigger type.
   * 
   * @example
   * CRON
   */
  triggerType?: string;
  /**
   * @remarks
   * The list of unhealthy jobs.
   */
  unhealthyJobs?: GetPatrolReportDetailResponseBodyDataUnhealthyJobs[];
  /**
   * @remarks
   * The update time.
   * 
   * Use the UTC time format: yyyy-MM-ddTHH:mmZ
   * 
   * @example
   * 1758248445816
   */
  updatedAt?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * a14bd5d90a****
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      completedAt: 'completedAt',
      createdAt: 'createdAt',
      namespace: 'namespace',
      overview: 'overview',
      reportId: 'reportId',
      scopeConfig: 'scopeConfig',
      scopeType: 'scopeType',
      triggerType: 'triggerType',
      unhealthyJobs: 'unhealthyJobs',
      updatedAt: 'updatedAt',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      completedAt: 'string',
      createdAt: 'string',
      namespace: 'string',
      overview: GetPatrolReportDetailResponseBodyDataOverview,
      reportId: 'string',
      scopeConfig: GetPatrolReportDetailResponseBodyDataScopeConfig,
      scopeType: 'string',
      triggerType: 'string',
      unhealthyJobs: { 'type': 'array', 'itemType': GetPatrolReportDetailResponseBodyDataUnhealthyJobs },
      updatedAt: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.overview && typeof (this.overview as any).validate === 'function') {
      (this.overview as any).validate();
    }
    if(this.scopeConfig && typeof (this.scopeConfig as any).validate === 'function') {
      (this.scopeConfig as any).validate();
    }
    if(Array.isArray(this.unhealthyJobs)) {
      $dara.Model.validateArray(this.unhealthyJobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPatrolReportDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The inspection report details.
   */
  data?: GetPatrolReportDetailResponseBodyData;
  /**
   * @remarks
   * The business error code. This value is not empty when success is false. This value is empty when success is true.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error message. This value is not empty when success is false. This value is empty when success is true.
   * 
   * @example
   * ""
   */
  errorMessage?: string;
  /**
   * @remarks
   * The business status code, which is always 200. Use success to determine whether the business request was successful.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBC799F0-AS7S-1D30-8A4F-882ED4DD****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the business request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      httpCode: 'httpCode',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetPatrolReportDetailResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      httpCode: 'number',
      requestId: 'string',
      success: 'boolean',
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

