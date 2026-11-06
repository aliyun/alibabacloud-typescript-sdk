// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInspectionReportListResponseBodyReportItemsSubItems extends $dara.Model {
  /**
   * @remarks
   * The number of check items at the critical level.
   * 
   * @example
   * 0
   */
  critical?: number;
  /**
   * @remarks
   * The number of check items at the info level.
   * 
   * @example
   * 1
   */
  info?: number;
  /**
   * @remarks
   * The number of normal check items.
   * 
   * @example
   * 10
   */
  normal?: number;
  /**
   * @remarks
   * The number of check items at the warning level.
   * 
   * @example
   * 0
   */
  warning?: number;
  static names(): { [key: string]: string } {
    return {
      critical: 'Critical',
      info: 'Info',
      normal: 'Normal',
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      critical: 'number',
      info: 'number',
      normal: 'number',
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

export class DescribeInspectionReportListResponseBodyReportItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the inspected PolarDB cluster.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Indicates whether the inspection report is the latest report. The value is returned as a string.
   * 
   * @example
   * true
   */
  latest?: string;
  /**
   * @remarks
   * The region ID of the inspected cluster.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
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
   * The ID of the inspection report.
   * 
   * @example
   * report-001
   */
  reportId?: string;
  /**
   * @remarks
   * The score of the inspection report.
   * 
   * @example
   * 90
   */
  reportScore?: number;
  /**
   * @remarks
   * The status of the inspection report.
   * 
   * @example
   * Completed
   */
  reportStatus?: string;
  /**
   * @remarks
   * The summary of the inspection report.
   * 
   * @example
   * The instance is running normally
   */
  reportSummary?: string;
  /**
   * @remarks
   * The time when the inspection report was generated. The time is in the yyyy-MM-dd HH:mm:ss format and is in the UTC+8 time zone.
   * 
   * @example
   * 2026-11-05 16:00:00
   */
  reportTime?: string;
  /**
   * @remarks
   * The number of check items categorized by inspection result level.
   */
  subItems?: DescribeInspectionReportListResponseBodyReportItemsSubItems[];
  /**
   * @remarks
   * The ID of the inspection task.
   * 
   * @example
   * task-001
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      latest: 'Latest',
      regionId: 'RegionId',
      reportDescription: 'ReportDescription',
      reportId: 'ReportId',
      reportScore: 'ReportScore',
      reportStatus: 'ReportStatus',
      reportSummary: 'ReportSummary',
      reportTime: 'ReportTime',
      subItems: 'SubItems',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      latest: 'string',
      regionId: 'string',
      reportDescription: 'string',
      reportId: 'string',
      reportScore: 'number',
      reportStatus: 'string',
      reportSummary: 'string',
      reportTime: 'string',
      subItems: { 'type': 'array', 'itemType': DescribeInspectionReportListResponseBodyReportItemsSubItems },
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.subItems)) {
      $dara.Model.validateArray(this.subItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInspectionReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of inspection reports.
   */
  reportItems?: DescribeInspectionReportListResponseBodyReportItems[];
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
   * The score returned by the inspection task.
   * 
   * @example
   * 90
   */
  score?: number;
  /**
   * @remarks
   * The total number of reports that meet the query conditions.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reportItems: 'ReportItems',
      requestId: 'RequestId',
      score: 'Score',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      reportItems: { 'type': 'array', 'itemType': DescribeInspectionReportListResponseBodyReportItems },
      requestId: 'string',
      score: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reportItems)) {
      $dara.Model.validateArray(this.reportItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

