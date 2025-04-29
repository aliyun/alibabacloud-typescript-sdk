// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportAttributesResponseBodyMetricResults } from "./DescribeDiagnosticReportAttributesResponseBodyMetricResults";


export class DescribeDiagnosticReportAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The extended attributes of the diagnostic report.
   * 
   * @example
   * {
   *     "OfflineDiagReportStatus":"CONFIRMED"
   * }
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
   * The end of the reporting period of the diagnostic report. The value is the EndTime value that was passed in when you called the [CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html) operation to create the diagnostic report.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The time when the diagnostic report was complete.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  finishedTime?: string;
  /**
   * @remarks
   * The results of all diagnostic metrics in the diagnostic metric set.
   */
  metricResults?: DescribeDiagnosticReportAttributesResponseBodyMetricResults;
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
   * The ID of the diagnostic report, which is the unique identifier of the report.
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
   * The type of the resource. ResourceType can only be set to instance, which indicates that only instances are supported.
   * 
   * @example
   * instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The severity level of the diagnostic report. The value of this parameter is determined by the highest severity level of all diagnostic metrics. Valid values:
   * 
   * *   Unknown: The diagnostic has not started, failed to run, or exited unexpectedly without a diagnosis.
   * *   Normal: No exceptions were detected.
   * *   Info: Diagnostic information was recorded and may be related to exceptions.
   * *   Warn: Diagnostic information was recorded and may indicate potential exceptions.
   * *   Critical: Critical exceptions were detected.
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The beginning of the reporting period of the diagnostic report. The value is the StartTime value that was passed in when you called the [CreateDiagnosticReport](https://help.aliyun.com/document_detail/442490.html) operation to create the diagnostic report.
   * 
   * @example
   * 2022-07-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the diagnostic report. Valid values:
   * 
   * *   InProgress: The diagnostic is in progress.
   * *   Finished: The diagnostic is complete.
   * *   Failed: The diagnostic failed.
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

