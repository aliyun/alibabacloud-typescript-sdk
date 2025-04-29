// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosticReportAttributesResponseBodyMetricResultsMetricResultIssuesIssue extends $dara.Model {
  /**
   * @remarks
   * The additional data about the diagnosed issue. The value is a JSON string.
   * 
   * @example
   * {
   *   "TotalPercent": 95,
   *   "TopUtilizationProcesses": [
   *     {
   *       "Pid": "1223",
   *       "CommandName": "/usr/bin/mem.py",
   *       "PhysicalMemoryPercent": 50
   *     }
   *   ]
   * }
   */
  additional?: string;
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
   * The time when the diagnosed issue occurred.
   * 
   * @example
   * 2022-07-11T14:00:00Z
   */
  occurrenceTime?: string;
  /**
   * @remarks
   * The severity level of the diagnosed issue. Valid values:
   * 
   * *   Info: Diagnostic information was recorded and may be related to exceptions.
   * *   Warn: Diagnostic information was recorded and may indicate potential exceptions.
   * *   Critical: Critical exceptions were detected.
   * 
   * @example
   * Info
   */
  severity?: string;
  static names(): { [key: string]: string } {
    return {
      additional: 'Additional',
      issueId: 'IssueId',
      occurrenceTime: 'OccurrenceTime',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      additional: 'string',
      issueId: 'string',
      occurrenceTime: 'string',
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

