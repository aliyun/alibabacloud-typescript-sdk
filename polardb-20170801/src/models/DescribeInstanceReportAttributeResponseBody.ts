// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceReportAttributeResponseBodyReportSubItems extends $dara.Model {
  /**
   * @remarks
   * The risk level of the inspection item.
   * 
   * @example
   * low
   */
  riskLevel?: string;
  /**
   * @remarks
   * The score of the inspection item.
   * 
   * @example
   * 90
   */
  score?: number;
  /**
   * @remarks
   * The name of the inspection skill that generated the inspection result.
   * 
   * @example
   * performance
   */
  skillName?: string;
  /**
   * @remarks
   * The result summary of the inspection item.
   * 
   * @example
   * No anomalies found
   */
  summary?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevel: 'RiskLevel',
      score: 'Score',
      skillName: 'SkillName',
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevel: 'string',
      score: 'number',
      skillName: 'string',
      summary: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceReportAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the report is the latest report.
   * 
   * @example
   * false
   */
  latest?: boolean;
  /**
   * @remarks
   * The detailed description of the inspection report.
   * 
   * @example
   * No critical risks were found in this inspection
   */
  reportDescription?: string;
  /**
   * @remarks
   * The ID of the instance inspection report.
   * 
   * @example
   * report-001
   */
  reportId?: string;
  /**
   * @remarks
   * The overall score of the inspection report.
   * 
   * @example
   * 90
   */
  reportScore?: number;
  /**
   * @remarks
   * The generation status of the inspection report.
   * 
   * @example
   * Completed
   */
  reportStatus?: string;
  /**
   * @remarks
   * The inspection results for each item in the report.
   * 
   * @example
   * []
   */
  reportSubItems?: DescribeInstanceReportAttributeResponseBodyReportSubItems[];
  /**
   * @remarks
   * The overall summary of the inspection report.
   * 
   * @example
   * The instance is running normally
   */
  reportSummary?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the inspection task that generated the report.
   * 
   * @example
   * task-001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      latest: 'Latest',
      reportDescription: 'ReportDescription',
      reportId: 'ReportId',
      reportScore: 'ReportScore',
      reportStatus: 'ReportStatus',
      reportSubItems: 'ReportSubItems',
      reportSummary: 'ReportSummary',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      latest: 'boolean',
      reportDescription: 'string',
      reportId: 'string',
      reportScore: 'number',
      reportStatus: 'string',
      reportSubItems: { 'type': 'array', 'itemType': DescribeInstanceReportAttributeResponseBodyReportSubItems },
      reportSummary: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportSubItems)) {
      $dara.Model.validateArray(this.reportSubItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

