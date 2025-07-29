// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInspectReportsResponseBodyReportsSummary extends $dara.Model {
  /**
   * @remarks
   * The number of items whose result is advice.
   * 
   * @example
   * 0
   */
  adviceCount?: number;
  /**
   * @remarks
   * Aggregated inspection task result code.
   * 
   * @example
   * warning
   */
  code?: string;
  /**
   * @remarks
   * The number of items whose result is error.
   * 
   * @example
   * 0
   */
  errorCount?: number;
  /**
   * @remarks
   * The number of items whose result is normal.
   * 
   * @example
   * 1
   */
  normalCount?: number;
  /**
   * @remarks
   * The number of items whose result is warning.
   * 
   * @example
   * 0
   */
  warnCount?: number;
  static names(): { [key: string]: string } {
    return {
      adviceCount: 'adviceCount',
      code: 'code',
      errorCount: 'errorCount',
      normalCount: 'normalCount',
      warnCount: 'warnCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adviceCount: 'number',
      code: 'string',
      errorCount: 'number',
      normalCount: 'number',
      warnCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInspectReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The report completion time.
   * 
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  endTime?: string;
  /**
   * @remarks
   * An inspection report ID.
   * 
   * @example
   * 782df89346054a0000562063a6****
   */
  reportId?: string;
  /**
   * @remarks
   * The report start time.
   * 
   * @example
   * 2024-12-18T19:40:16.778333+08:00
   */
  startTime?: string;
  /**
   * @remarks
   * The inspection report status.
   * 
   * @example
   * completed
   */
  status?: string;
  /**
   * @remarks
   * The inspection summary.
   */
  summary?: ListClusterInspectReportsResponseBodyReportsSummary;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      reportId: 'reportId',
      startTime: 'startTime',
      status: 'status',
      summary: 'summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      reportId: 'string',
      startTime: 'string',
      status: 'string',
      summary: ListClusterInspectReportsResponseBodyReportsSummary,
    };
  }

  validate() {
    if(this.summary && typeof (this.summary as any).validate === 'function') {
      (this.summary as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListClusterInspectReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 405b99e5411f9a4e7148506e45
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of inspection reports.
   */
  reports?: ListClusterInspectReportsResponseBodyReports[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 49511F2D-D56A-5C24-B9AE-C8491E09B***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      reports: 'reports',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      reports: { 'type': 'array', 'itemType': ListClusterInspectReportsResponseBodyReports },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

