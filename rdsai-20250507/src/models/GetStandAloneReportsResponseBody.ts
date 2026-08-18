// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStandAloneReportsResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-01-22T08:20:31Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The inspection end time in the format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2026-01-23T08:20:31Z
   */
  endTime?: string;
  inspectionItems?: string;
  regionId?: string;
  reportLanguage?: string;
  reportType?: string;
  /**
   * @remarks
   * The inspection start time in the format of YYYY-MM-DDTHH:mm:ssZ.
   * 
   * @example
   * 2026-01-23T08:00:31Z
   */
  startTime?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The inspection report ID.
   * 
   * @example
   * 0f19210c-7bb8-4e38-a099-f94152df****
   */
  taskId?: string;
  templateId?: string;
  templateName?: string;
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
      templateId: 'TemplateId',
      templateName: 'TemplateName',
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
      templateId: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStandAloneReportsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successfully retrieved the inspection report list
   */
  message?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of reports.
   */
  reports?: GetStandAloneReportsResponseBodyReports[];
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
   * The request result.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of records.
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
      reports: { 'type': 'array', 'itemType': GetStandAloneReportsResponseBodyReports },
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

