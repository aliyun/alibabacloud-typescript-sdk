// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues } from "./DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues";


export class DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResult extends $dara.Model {
  /**
   * @remarks
   * The diagnosed issues.
   */
  issues?: DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssues;
  /**
   * @remarks
   * The category of the diagnostic metric.
   * 
   * @example
   * CPU
   */
  metricCategory?: string;
  /**
   * @remarks
   * The ID of the diagnostic metric.
   * 
   * @example
   * GuestOS.WinFirewall
   */
  metricId?: string;
  /**
   * @remarks
   * The severity level of the diagnostic metric. Valid values:
   * 
   * *   Unknown: The diagnostic has not started, failed to run, or exited unexpectedly without a diagnosis.
   * *   Normal: No exceptions were detected.
   * *   Info: Diagnostic information was recorded and may be related to exceptions.
   * *   NotSupport: The version of the guest operating system does support diagnosing the metric.
   * *   Warn: Diagnostic information was recorded and may indicate potential exceptions.
   * *   Critical: Critical exceptions were detected.
   * 
   * @example
   * Normal
   */
  severity?: string;
  /**
   * @remarks
   * The state of the diagnostic metric. Valid values:
   * 
   * *   InProgress.
   * *   Finished.
   * *   Failed.
   * 
   * @example
   * Finished
   */
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

