// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue extends $dara.Model {
  additional?: string;
  issueId?: string;
  occurrenceTime?: string;
  repairStatus?: string;
  repairable?: boolean;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      additional: 'Additional',
      issueId: 'IssueId',
      occurrenceTime: 'OccurrenceTime',
      repairStatus: 'RepairStatus',
      repairable: 'Repairable',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additional: 'string',
      issueId: 'string',
      occurrenceTime: 'string',
      repairStatus: 'string',
      repairable: 'boolean',
      severity: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues extends $dara.Model {
  issue?: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue[];
  static names(): { [key: string]: string } {
    return {
      issue: 'Issue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issue: { 'type': 'array', 'itemType': DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue },
    };
  }

  validate() {
    if(Array.isArray(this.issue)) {
      $dara.Model.validateArray(this.issue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult extends $dara.Model {
  issues?: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues;
  metricCategory?: string;
  metricId?: string;
  severity?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      issues: 'Issues',
      metricCategory: 'MetricCategory',
      metricId: 'MetricId',
      severity: 'Severity',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issues: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues,
      metricCategory: 'string',
      metricId: 'string',
      severity: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.issues && typeof (this.issues as any).validate === 'function') {
      (this.issues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportAttributesResponseBodyMetricResults extends $dara.Model {
  metricResult?: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult[];
  static names(): { [key: string]: string } {
    return {
      metricResult: 'MetricResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricResult: { 'type': 'array', 'itemType': DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult },
    };
  }

  validate() {
    if(Array.isArray(this.metricResult)) {
      $dara.Model.validateArray(this.metricResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The extended attributes of the diagnostic report.
   * 
   * @example
   * {"OfflineDiagReportStatus":"CONFIRMED"}
   */
  attributes?: string;
  /**
   * @remarks
   * The time when the diagnostic report was created.
   * 
   * @example
   * 2022-07-11T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The end of the diagnostic time range. This value corresponds to the `EndTime` parameter you provided when calling the [CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html) operation.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the diagnosis was complete.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The diagnostic results for the metrics.
   */
  metricResults?: DescribeDiagnosticReportAttributesResponseBodyMetricResults;
  /**
   * @remarks
   * The metric set ID.
   * 
   * @example
   * dms-bp17p0qwtr72zmu*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The unique ID of the diagnostic report.
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
   */
  reportId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * i-uf6i0tv2refv8wz*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Only `instance` is supported.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The overall severity level of the diagnostic report. This is the highest severity level among all metrics in the report. Valid values are listed below, from lowest to highest severity:
   * 
   * - Unknown: The initial state. The diagnosis has not started or exited unexpectedly, so the result is inconclusive.
   * 
   * - Normal: The resource is healthy, and no issues were found.
   * 
   * - Info: Informational messages were found that may be relevant to an issue.
   * 
   * - Warn: Warnings were found that may lead to an issue.
   * 
   * - Critical: Critical issues were found.
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The start of the diagnostic time range. This value corresponds to the `StartTime` parameter you provided when calling the [CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html) operation.
   * 
   * @example
   * 2022-07-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the diagnostic report. Possible values:
   * 
   * - InProgress: The diagnosis is in progress.
   * 
   * - Finished: The diagnosis is complete.
   * 
   * - Failed: The diagnosis failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'Attributes',
      creationTime: 'CreationTime',
      endTime: 'EndTime',
      finishedTime: 'FinishedTime',
      metricResults: 'MetricResults',
      metricSetId: 'MetricSetId',
      reportId: 'ReportId',
      requestId: 'RequestId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      severity: 'Severity',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: 'string',
      creationTime: 'string',
      endTime: 'string',
      finishedTime: 'string',
      metricResults: DescribeDiagnosticReportAttributesResponseBodyMetricResults,
      metricSetId: 'string',
      reportId: 'string',
      requestId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      severity: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.metricResults && typeof (this.metricResults as any).validate === 'function') {
      (this.metricResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

