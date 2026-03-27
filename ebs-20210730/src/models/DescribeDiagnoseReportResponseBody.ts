// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnoseReportResponseBodyReportsEvents extends $dara.Model {
  description?: string;
  /**
   * @example
   * DiskIOPSExceedDiskMaxLimit
   */
  eventName?: string;
  /**
   * @example
   * ResizeDisk
   */
  recommendAction?: string;
  /**
   * @example
   * 4096
   */
  recommendParams?: string;
  /**
   * @example
   * Warn
   */
  severity?: string;
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      eventName: 'EventName',
      recommendAction: 'RecommendAction',
      recommendParams: 'RecommendParams',
      severity: 'Severity',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      eventName: 'string',
      recommendAction: 'string',
      recommendParams: 'string',
      severity: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBodyReports extends $dara.Model {
  /**
   * @example
   * 196380451****
   */
  aliUid?: number;
  /**
   * @example
   * 1727239294
   */
  creationTime?: number;
  /**
   * @example
   * 1727239294
   */
  diagnoseEndTime?: number;
  /**
   * @example
   * 1727229294
   */
  diagnoseStartTime?: number;
  /**
   * @example
   * Performance
   */
  diagnoseType?: string;
  events?: DescribeDiagnoseReportResponseBodyReportsEvents[];
  /**
   * @example
   * 1727239295
   */
  finishedTime?: number;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * report-sag8d****
   */
  reportId?: string;
  /**
   * @example
   * d-wz95ycu****
   */
  resourceId?: string;
  /**
   * @example
   * Disk
   */
  resourceType?: string;
  /**
   * @example
   * Warn
   */
  severity?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      creationTime: 'CreationTime',
      diagnoseEndTime: 'DiagnoseEndTime',
      diagnoseStartTime: 'DiagnoseStartTime',
      diagnoseType: 'DiagnoseType',
      events: 'Events',
      finishedTime: 'FinishedTime',
      regionId: 'RegionId',
      reportId: 'ReportId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      severity: 'Severity',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      creationTime: 'number',
      diagnoseEndTime: 'number',
      diagnoseStartTime: 'number',
      diagnoseType: 'string',
      events: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyReportsEvents },
      finishedTime: 'number',
      regionId: 'string',
      reportId: 'string',
      resourceId: 'string',
      resourceType: 'string',
      severity: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDiagnoseReportResponseBody extends $dara.Model {
  /**
   * @example
   * f07b150eadfa1d7a
   */
  nextToken?: string;
  reports?: DescribeDiagnoseReportResponseBodyReports[];
  /**
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      reports: 'Reports',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      reports: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyReports },
      requestId: 'string',
      totalCount: 'number',
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

