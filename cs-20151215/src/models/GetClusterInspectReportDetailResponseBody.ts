// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterInspectReportDetailResponseBodyCheckItemResults extends $dara.Model {
  /**
   * @remarks
   * The category of the inspection item. Valid values:
   * - security: security and compliance
   * - performance: performance and efficiency 
   * - stability: business stability
   * - limitation: service limits 
   * - cost: cost optimization
   * 
   * @example
   * stability
   */
  category?: string;
  /**
   * @remarks
   * The unique identifier of the inspection item.
   * 
   * @example
   * APIServerClbInstanceStatus
   */
  checkItemUid?: string;
  /**
   * @remarks
   * The description of the inspection item.
   * 
   * @example
   * API server load balancer instance failures in the cluster affect cluster availability. Check whether the load balancer instance status is normal.
   */
  description?: string;
  /**
   * @remarks
   * The remediation suggestion.
   * 
   * @example
   * Submit a ticket
   */
  fix?: string;
  /**
   * @remarks
   * The level of the inspection item. Valid values:
   * - advice: advice
   * - warning: low risk
   * - error: medium risk
   * - critical: high risk
   * 
   * @example
   * critical
   */
  level?: string;
  /**
   * @remarks
   * The name of the inspection item.
   * 
   * @example
   * Abnormal API server CLB instance status
   */
  name?: string;
  /**
   * @remarks
   * The inspection result. Valid values:
   * - true: the inspection item is abnormal
   * - false: the inspection item is normal
   * - disable: the inspection item is disabled
   * 
   * @example
   * false
   */
  result?: string;
  /**
   * @remarks
   * The resource type of the inspection target.
   * 
   * @example
   * CLB
   */
  targetType?: string;
  /**
   * @remarks
   * The list of inspection targets.
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      checkItemUid: 'checkItemUid',
      description: 'description',
      fix: 'fix',
      level: 'level',
      name: 'name',
      result: 'result',
      targetType: 'targetType',
      targets: 'targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      checkItemUid: 'string',
      description: 'string',
      fix: 'string',
      level: 'string',
      name: 'string',
      result: 'string',
      targetType: 'string',
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterInspectReportDetailResponseBodySummary extends $dara.Model {
  /**
   * @remarks
   * The number of inspection items whose result is advice.
   * 
   * @example
   * 0
   */
  adviceCount?: number;
  /**
   * @remarks
   * The status code of the inspection task result.
   * 
   * @example
   * warning
   */
  code?: string;
  /**
   * @remarks
   * The number of inspection items whose result is error.
   * 
   * @example
   * 0
   */
  errorCount?: number;
  /**
   * @remarks
   * The number of inspection items whose result is normal.
   * 
   * @example
   * 10
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of inspection items whose result is warning.
   * 
   * @example
   * 1
   */
  warnCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceCount: 'adviceCount',
      code: 'code',
      errorCount: 'errorCount',
      normalCount: 'normalCount',
      warnCount: 'warnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceCount: 'number',
      code: 'string',
      errorCount: 'number',
      normalCount: 'number',
      warnCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetClusterInspectReportDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of results.
   */
  checkItemResults?: GetClusterInspectReportDetailResponseBodyCheckItemResults[];
  /**
   * @remarks
   * The end time of the inspection report in ISO 8601 format, including the time zone.
   * 
   * @example
   * 2024-12-18T19:41:12.778433+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * AK8uQQrxgFK8sbARvnCj6w9R3kPme4I3
   */
  nextToken?: string;
  /**
   * @remarks
   * The inspection report ID.
   * 
   * @example
   * 782df89346054a0000562063a****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49511F2D-D56A-5C24-B9AE-C8491E09B***
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the inspection report in ISO 8601 format, including the time zone.
   * 
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The generation status of the inspection report. Valid values:
   * - completed: Completed.
   * - running: In progress.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The summary of the inspection report.
   */
  summary?: GetClusterInspectReportDetailResponseBodySummary;
  static names(): { [key: string]: string } {
    return {
      checkItemResults: 'checkItemResults',
      endTime: 'endTime',
      nextToken: 'nextToken',
      reportId: 'reportId',
      requestId: 'requestId',
      startTime: 'startTime',
      status: 'status',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkItemResults: { 'type': 'array', 'itemType': GetClusterInspectReportDetailResponseBodyCheckItemResults },
      endTime: 'string',
      nextToken: 'string',
      reportId: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      summary: GetClusterInspectReportDetailResponseBodySummary,
    };
  }

  validate() {
    if(Array.isArray(this.checkItemResults)) {
      $dara.Model.validateArray(this.checkItemResults);
    }
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

