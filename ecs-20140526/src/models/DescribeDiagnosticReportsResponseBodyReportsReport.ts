// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportsResponseBodyReportsReportIssues } from "./DescribeDiagnosticReportsResponseBodyReportsReportIssues";


export class DescribeDiagnosticReportsResponseBodyReportsReport extends $dara.Model {
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
   * The end of the time range during which data was queried. The value is the EndTime value that was passed in when you called the [CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html) operation to create the diagnostic report.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the diagnostic was complete.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The diagnosed issues.
   */
  issues?: DescribeDiagnosticReportsResponseBodyReportsReportIssues;
  /**
   * @remarks
   * The ID of the diagnostic metric set.
   * 
   * @example
   * dms-bp17p0qwtr72zmu*****
   */
  metricSetId?: string;
  /**
   * @remarks
   * The ID of the diagnostic report.
   * 
   * @example
   * dr-uf6i0tv2refv8wz*****
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the resource.
   * 
   * @example
   * i-uf6i0tv2refv8wz*****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The severity level of the diagnostic report. Valid values:
   * 
   * *   Unknown: The diagnostic did not start, failed to run, or unexpectedly exited without a diagnosis.
   * *   Normal: No exceptions were detected.
   * *   Info: Diagnostic information was recorded and may be related to exceptions.
   * *   Warn: Diagnostic information was recorded and may indicate exceptions.
   * *   Critical: Critical exceptions were detected.
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried. The value is the StartTime value that was passed in when you called the [CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html) operation to create the diagnostic report.
   * 
   * @example
   * 2022-07-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the diagnostic report.
   * 
   * @example
   * Finished
   */
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

