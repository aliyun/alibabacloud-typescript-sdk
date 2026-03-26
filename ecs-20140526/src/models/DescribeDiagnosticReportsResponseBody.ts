// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue extends $dara.Model {
  issueId?: string;
  metricCategory?: string;
  metricId?: string;
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      issueId: 'IssueId',
      metricCategory: 'MetricCategory',
      metricId: 'MetricId',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issueId: 'string',
      metricCategory: 'string',
      metricId: 'string',
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

export class DescribeDiagnosticReportsResponseBodyReportsReportIssues extends $dara.Model {
  issue?: DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue[];
  static names(): { [key: string]: string } {
    return {
      issue: 'Issue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      issue: { 'type': 'array', 'itemType': DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue },
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

export class DescribeDiagnosticReportsResponseBodyReportsReport extends $dara.Model {
  creationTime?: string;
  endTime?: string;
  finishedTime?: string;
  issues?: DescribeDiagnosticReportsResponseBodyReportsReportIssues;
  metricSetId?: string;
  reportId?: string;
  resourceId?: string;
  resourceType?: string;
  severity?: string;
  startTime?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      endTime: 'EndTime',
      finishedTime: 'FinishedTime',
      issues: 'Issues',
      metricSetId: 'MetricSetId',
      reportId: 'ReportId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      severity: 'Severity',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      endTime: 'string',
      finishedTime: 'string',
      issues: DescribeDiagnosticReportsResponseBodyReportsReportIssues,
      metricSetId: 'string',
      reportId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      severity: 'string',
      startTime: 'string',
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

export class DescribeDiagnosticReportsResponseBodyReports extends $dara.Model {
  report?: DescribeDiagnosticReportsResponseBodyReportsReport[];
  static names(): { [key: string]: string } {
    return {
      report: 'Report',
    };
  }

  static types(): { [key: string]: any } {
    return {
      report: { 'type': 'array', 'itemType': DescribeDiagnosticReportsResponseBodyReportsReport },
    };
  }

  validate() {
    if(Array.isArray(this.report)) {
      $dara.Model.validateArray(this.report);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnosticReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  reports?: DescribeDiagnosticReportsResponseBodyReports;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE*****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      reports: 'Reports',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      reports: DescribeDiagnosticReportsResponseBodyReports,
      requestId: 'string',
    };
  }

  validate() {
    if(this.reports && typeof (this.reports as any).validate === 'function') {
      (this.reports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

