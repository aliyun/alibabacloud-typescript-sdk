// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The time when the report was created, in YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-01-01T22:59:59Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The inspection end time, in YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-01-01T23:59:59Z
   */
  endTime?: string;
  inspectionItems?: string;
  /**
   * @remarks
   * The region ID.
   */
  regionId?: string;
  reportLanguage?: string;
  reportType?: string;
  /**
   * @remarks
   * The inspection start time, in YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the report.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 65f0053b-f933-49f5-bf65-4e4593e1****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      endTime: 'EndTime',
      inspectionItems: 'InspectionItems',
      regionId: 'RegionId',
      reportLanguage: 'ReportLanguage',
      reportType: 'ReportType',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      endTime: 'string',
      inspectionItems: 'string',
      regionId: 'string',
      reportLanguage: 'string',
      reportType: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetScheduledReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 获取巡检报告列表成功
   */
  message?: string;
  /**
   * @remarks
   * The page number. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of inspection reports.
   */
  reports?: GetScheduledReportsResponseBodyReports[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      reports: 'Reports',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      reports: { 'type': 'array', 'itemType': GetScheduledReportsResponseBodyReports },
      requestId: 'string',
      success: 'boolean',
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

