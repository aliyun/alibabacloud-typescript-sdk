// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeConcurrencyReportResponseBodyReportsList extends $dara.Model {
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 85bf7efa-a07c-498a-850e-99a5849b8589
   */
  instanceId?: string;
  /**
   * @remarks
   * Instance name
   * 
   * @example
   * 智能外呼场景
   */
  instanceName?: string;
  /**
   * @remarks
   * Job ID
   * 
   * @example
   * c62e6789-28a8-41db-941e-171a01d3b3b9
   */
  jobGroupId?: string;
  /**
   * @remarks
   * Job name.
   * 
   * @example
   * 第一个作业组
   */
  jobGroupName?: string;
  /**
   * @remarks
   * Maximum configured concurrency limit
   * 
   * @example
   * 2
   */
  maxConcurrencyLimit?: number;
  /**
   * @remarks
   * Minimum concurrency limit for the job
   * 
   * @example
   * 0
   */
  minConcurrencyLimit?: number;
  /**
   * @remarks
   * Occupied concurrency value
   * 
   * @example
   * 1
   */
  occupiedConcurrencyCount?: number;
  /**
   * @remarks
   * Report generation time
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
   * Report collection data
   */
  list?: GetRealtimeConcurrencyReportResponseBodyReportsList[];
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 2
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total count
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
   * API status code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Report generation time
   * 
   * @example
   * 1743474900488
   */
  reportDate?: number;
  /**
   * @remarks
   * Report details.
   */
  reports?: GetRealtimeConcurrencyReportResponseBodyReports;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Is successful
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

