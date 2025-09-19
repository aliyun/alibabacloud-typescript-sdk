// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeReportListResponseBodyReportList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the report is the default report. Valid values:
   * 
   * *   **0**: no
   * *   **1**: yes
   * 
   * @example
   * 1
   */
  isDefault?: string;
  /**
   * @remarks
   * The timestamp when the report is pinned. Unit: milliseconds.
   * 
   * @example
   * 1721836800000
   */
  pinnedTime?: number;
  /**
   * @remarks
   * The most recent days for report statistics.
   * 
   * @example
   * 7
   */
  reportDays?: number;
  /**
   * @remarks
   * The end date on which the report is sent. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1721923199999
   */
  reportEndDate?: number;
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 1
   */
  reportId?: number;
  /**
   * @remarks
   * The start date on which the report is sent. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1721836800000
   */
  reportStartDate?: number;
  /**
   * @remarks
   * The state of the report. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  reportStatus?: string;
  /**
   * @remarks
   * The type of the report. Valid values:
   * 
   * *   **0**: daily report
   * *   **1**: weekly report
   * *   **2**: monthly report
   * *   **3**: report whose statistics are collected in a custom time range
   * 
   * @example
   * 0
   */
  reportType?: number;
  /**
   * @remarks
   * The report version.
   * 
   * @example
   * 2.0.0
   */
  reportVersion?: string;
  /**
   * @remarks
   * The name of the report.
   * 
   * @example
   * test
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      isDefault: 'IsDefault',
      pinnedTime: 'PinnedTime',
      reportDays: 'ReportDays',
      reportEndDate: 'ReportEndDate',
      reportId: 'ReportId',
      reportStartDate: 'ReportStartDate',
      reportStatus: 'ReportStatus',
      reportType: 'ReportType',
      reportVersion: 'ReportVersion',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isDefault: 'string',
      pinnedTime: 'number',
      reportDays: 'number',
      reportEndDate: 'number',
      reportId: 'number',
      reportStartDate: 'number',
      reportStatus: 'string',
      reportType: 'number',
      reportVersion: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeReportListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The reports.
   */
  reportList?: DescribeCustomizeReportListResponseBodyReportList[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 9FBC6E47-7508-58C9-9E76-528E118CB1CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      reportList: 'ReportList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportList: { 'type': 'array', 'itemType': DescribeCustomizeReportListResponseBodyReportList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reportList)) {
      $dara.Model.validateArray(this.reportList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

