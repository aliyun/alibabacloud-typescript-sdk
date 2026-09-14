// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnoseReportResponseBodyReportsEvents extends $dara.Model {
  /**
   * @remarks
   * The event description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The issue name. Valid values:
   * 
   * - NoSnapshot: data protection
   * - BurstIOTriggered: I/O burst
   * - CostOptimizationNeeded: cost optimization
   * - DiskSpecNotMatchedWithInstance: instance and cloud disk specification mismatch
   * - DiskIONo4kAligned: non-4K-aligned read/write
   * - DiskIOHang: IOHang occurred on the cloud disk
   * - InstanceIOPSExceedInstanceMaxLimit: instance IOPS reached the upper limit
   * - InstanceBPSExceedInstanceMaxLimit: instance BPS reached the upper limit
   * - DiskIOPSExceedInstanceMaxLimit: cloud disk IOPS reached the instance upper limit
   * - DiskBPSExceedInstanceMaxLimit: cloud disk BPS reached the instance upper limit
   * - DiskIOPSExceedDiskMaxLimit: cloud disk IOPS reached the cloud disk upper limit
   * - DiskBPSExceedDiskMaxLimit: cloud disk BPS reached the cloud disk upper limit
   * 
   * @example
   * DiskIOPSExceedDiskMaxLimit
   */
  eventName?: string;
  /**
   * @remarks
   * The recommended action after the event occurs. Valid values:
   * 
   * - ModifyDiskSpec: change cloud disk specifications
   * - CreateSnapshot: create a snapshot
   * - ResizeDisk: expand the cloud disk
   * - AdjustProvision: adjust provisioned performance
   * - ModifyInstanceSpec: change instance specifications
   * 
   * @example
   * ResizeDisk
   */
  recommendAction?: string;
  /**
   * @remarks
   * The parameters for the recommended action after the event occurs.
   * 
   * @example
   * 4096
   */
  recommendParams?: string;
  /**
   * @remarks
   * The severity level of the diagnosed issue. The severity levels in ascending order are:
   * 
   * - Info: Associated information that may be related to an anomaly.
   * - Warn: Associated information that may cause an anomaly.
   * - Critical: A critical anomaly exists.
   * 
   * @example
   * Warn
   */
  severity?: string;
  /**
   * @remarks
   * The start timestamp of the event, in milliseconds.
   * 
   * @example
   * 1755756214000
   */
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
   * @remarks
   * The user ID.
   * 
   * @example
   * 196380451****
   */
  aliUid?: number;
  /**
   * @remarks
   * The time when the diagnostic report was created, in Unix/POSIX timestamp (seconds).
   * 
   * @example
   * 1727239294
   */
  creationTime?: number;
  /**
   * @remarks
   * The end timestamp of the resource diagnosis.
   * 
   * @example
   * 1727239294
   */
  diagnoseEndTime?: number;
  /**
   * @remarks
   * The start timestamp of the resource diagnosis.
   * 
   * @example
   * 1727229294
   */
  diagnoseStartTime?: number;
  /**
   * @remarks
   * The type of diagnosis.
   * 
   * @example
   * Performance
   */
  diagnoseType?: string;
  /**
   * @remarks
   * The list of diagnosed issues.
   */
  events?: DescribeDiagnoseReportResponseBodyReportsEvents[];
  /**
   * @remarks
   * The time when the diagnostic report was completed, in Unix/POSIX timestamp (seconds).
   * 
   * @example
   * 1727239295
   */
  finishedTime?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The diagnostic report ID.
   * 
   * @example
   * report-sag8d****
   */
  reportId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * @example
   * d-wz95ycu****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - Disk
   * 
   * @example
   * Disk
   */
  resourceType?: string;
  /**
   * @remarks
   * The severity level of the diagnosis. The severity levels in ascending order are:
   * 
   * - Info: Associated information that may be related to an anomaly.
   * - Warn: Associated information that may cause an anomaly.
   * - Critical: A critical anomaly exists.
   * 
   * @example
   * Warn
   */
  severity?: string;
  /**
   * @remarks
   * The status of the diagnostic report. Valid values:
   * - Running
   * - Success
   * - TimeOut
   * - Fail
   * 
   * The Severity and Events fields are valid only when Status is set to Success.
   * 
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
   * @remarks
   * The pagination token returned in this call.
   * 
   * @example
   * f07b150eadfa1d7a
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of diagnostic reports.
   */
  reports?: DescribeDiagnoseReportResponseBodyReports[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

