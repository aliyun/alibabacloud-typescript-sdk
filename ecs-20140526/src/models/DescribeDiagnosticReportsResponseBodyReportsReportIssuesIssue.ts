// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportsResponseBodyReportsReportIssuesIssue extends $dara.Model {
  /**
   * @remarks
   * The ID of the diagnosed issue, which is the unique identifier of the issue.
   * 
   * @example
   * GuestOS.CPU.HighUtiliz*****
   */
  issueId?: string;
  /**
   * @remarks
   * The category of the diagnostic metric.
   * 
   * @example
   * ECSService.GuestOS
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
   * *   Info: Diagnostic information was recorded and may be related to exceptions.
   * *   Warn: Diagnostic information was recorded and may indicate exceptions.
   * *   Critical: Critical exceptions were detected.
   * 
   * @example
   * Info
   */
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

