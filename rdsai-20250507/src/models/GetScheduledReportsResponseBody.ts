// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetScheduledReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The creation time of the task.
   * 
   * @example
   * 2025-01-01T22:59:59Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The end time of the inspection task. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-01-01T23:59:59Z
   */
  endTime?: string;
  inspectionItems?: string;
  regionId?: string;
  reportLanguage?: string;
  reportType?: string;
  /**
   * @remarks
   * The start time of the inspection task. The time follows the ISO 8601 standard in the YYYY-MM-DDTHH:mm:ssZ format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status of the task.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The ID of the report.
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
   */
  message?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of reports returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The details of the report.
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
   * The total number of returned reports.
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

