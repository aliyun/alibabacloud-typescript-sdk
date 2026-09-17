// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlPatternCompareReportsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the report can be canceled. The value is true when the report is in the PENDING or RUNNING state.
   * 
   * @example
   * false
   */
  cancelAvailable?: boolean;
  /**
   * @remarks
   * The end time of time range 2. The time is in the yyyy-MM-ddTHH:mmZ UTC format.
   * 
   * @example
   * 2026-09-08T01:00Z
   */
  compareEndTime?: string;
  /**
   * @remarks
   * The start time of time range 2. The time is in the yyyy-MM-ddTHH:mmZ UTC format.
   * 
   * @example
   * 2026-09-08T00:00Z
   */
  compareStartTime?: string;
  /**
   * @remarks
   * The time when the report was created. The time is in the yyyy-MM-ddTHH:mmZ UTC format.
   * 
   * @example
   * 2026-09-08T01:05Z
   */
  createdAt?: string;
  /**
   * @remarks
   * Indicates whether report details can be queried. The value is true when the report is in the SUCCESS state.
   * 
   * @example
   * true
   */
  detailEnabled?: boolean;
  /**
   * @remarks
   * The end time of time range 1. The time is in the yyyy-MM-ddTHH:mmZ UTC format.
   * 
   * @example
   * 2026-09-07T01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the SQL Pattern comparison report.
   * 
   * @example
   * 1001
   */
  reportId?: number;
  /**
   * @remarks
   * The report type. Valid values:
   * 
   * - `NEW`: new patterns.
   * - `CHANGED`: patterns with increased metrics.
   * 
   * @example
   * CHANGED
   */
  reportType?: string;
  /**
   * @remarks
   * The name of the report type.
   * 
   * @example
   * Changed Pattern Comparison Report
   */
  reportTypeName?: string;
  /**
   * @remarks
   * The sequence number in the current sorted result. The value starts from 1.
   * 
   * @example
   * 1
   */
  rowNumber?: number;
  /**
   * @remarks
   * The start time of time range 1. The time is in the yyyy-MM-ddTHH:mmZ UTC format.
   * 
   * @example
   * 2026-09-07T00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The report status. Valid values:
   * 
   * - `PENDING`: waiting to be generated.
   * - `RUNNING`: being generated.
   * - `SUCCESS`: generated.
   * - `FAILED`: failed to be generated.
   * - `CANCELED`: canceled.
   * - `EXPIRED`: expired.
   * 
   * > The current list returns only reports in the `PENDING`, `RUNNING`, or `SUCCESS` state.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      cancelAvailable: 'CancelAvailable',
      compareEndTime: 'CompareEndTime',
      compareStartTime: 'CompareStartTime',
      createdAt: 'CreatedAt',
      detailEnabled: 'DetailEnabled',
      endTime: 'EndTime',
      reportId: 'ReportId',
      reportType: 'ReportType',
      reportTypeName: 'ReportTypeName',
      rowNumber: 'RowNumber',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cancelAvailable: 'boolean',
      compareEndTime: 'string',
      compareStartTime: 'string',
      createdAt: 'string',
      detailEnabled: 'boolean',
      endTime: 'string',
      reportId: 'number',
      reportType: 'string',
      reportTypeName: 'string',
      rowNumber: 'number',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlPatternCompareReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of reports on the current page. An empty array is returned if no reports match the conditions.
   */
  items?: DescribeSqlPatternCompareReportsResponseBodyItems[];
  /**
   * @remarks
   * The number of rows per page used in this query.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. An empty value indicates that no more pages are available.
   * 
   * @example
   * djE6Mjo1MA
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number used in this query. Pages start from 1.
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of rows per page used in this query.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1B2C3D-4E5F-6789-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of reports that match the conditions.
   * 
   * @example
   * 51
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeSqlPatternCompareReportsResponseBodyItems },
      maxResults: 'number',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

