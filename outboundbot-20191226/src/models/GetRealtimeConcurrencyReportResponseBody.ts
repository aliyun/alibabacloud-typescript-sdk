// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeConcurrencyReportResponseBodyReportsList extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 85bf7efa-a07c-498a-850e-99a5849b8589
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * Intelligent outbound call scenario
   */
  instanceName?: string;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * First job group
   */
  jobGroupName?: string;
  /**
   * @remarks
   * The configured maximum concurrency limit.
   * 
   * @example
   * 2
   */
  maxConcurrencyLimit?: number;
  /**
   * @remarks
   * The minimum concurrency limit for the job.
   * 
   * @example
   * 0
   */
  minConcurrencyLimit?: number;
  /**
   * @remarks
   * The occupied concurrency.
   * 
   * @example
   * 1
   */
  occupiedConcurrencyCount?: number;
  /**
   * @remarks
   * The time when the report was generated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1743474900488
   */
  reportDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      jobGroupId: 'JobGroupId',
      jobGroupName: 'JobGroupName',
      maxConcurrencyLimit: 'MaxConcurrencyLimit',
      minConcurrencyLimit: 'MinConcurrencyLimit',
      occupiedConcurrencyCount: 'OccupiedConcurrencyCount',
      reportDate: 'ReportDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      jobGroupId: 'string',
      jobGroupName: 'string',
      maxConcurrencyLimit: 'number',
      minConcurrencyLimit: 'number',
      occupiedConcurrencyCount: 'number',
      reportDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeConcurrencyReportResponseBodyReports extends $dara.Model {
  /**
   * @remarks
   * The list of reports.
   */
  list?: GetRealtimeConcurrencyReportResponseBodyReportsList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 2
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
   * The total number of entries.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': GetRealtimeConcurrencyReportResponseBodyReportsList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRealtimeConcurrencyReportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The time when the report was generated. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1743474900488
   */
  reportDate?: number;
  /**
   * @remarks
   * The report details.
   */
  reports?: GetRealtimeConcurrencyReportResponseBodyReports;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      reportDate: 'ReportDate',
      reports: 'Reports',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      reportDate: 'number',
      reports: GetRealtimeConcurrencyReportResponseBodyReports,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.reports && typeof (this.reports as any).validate === 'function') {
      (this.reports as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

