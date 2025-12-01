// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageServiceCustomerResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Customer UID.
   * 
   * @example
   * 1667751131382856
   */
  aliuid?: string;
  /**
   * @remarks
   * Authorization status.
   * 
   * @example
   * 1
   */
  authStatus?: number;
  /**
   * @remarks
   * Cloud Monitoring - Alert authorization status.
   * 
   * @example
   * 0
   */
  cmAuthStatus?: number;
  /**
   * @remarks
   * End time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710123149222
   */
  endTime?: number;
  /**
   * @remarks
   * Customer level.
   * 
   * @example
   * GC1
   */
  level?: string;
  /**
   * @remarks
   * Cloud Security - Alert authorization status.
   * 
   * @example
   * 1
   */
  monitorAuthStatus?: number;
  /**
   * @remarks
   * Customer name.
   * 
   * @example
   * 中国工程院
   */
  name?: string;
  /**
   * @remarks
   * Owner name.
   * 
   * @example
   * 常温
   */
  ownId?: string;
  /**
   * @remarks
   * Start time. The format is a Unix timestamp, which is the number of milliseconds since January 1, 1970.
   * 
   * @example
   * 1710123149000
   */
  startTime?: number;
  /**
   * @remarks
   * Customer ID.
   * 
   * @example
   * 1667751131382856
   */
  userId?: string;
  /**
   * @remarks
   * Version information.
   * 
   * @example
   * 企业版
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      authStatus: 'AuthStatus',
      cmAuthStatus: 'CmAuthStatus',
      endTime: 'EndTime',
      level: 'Level',
      monitorAuthStatus: 'MonitorAuthStatus',
      name: 'Name',
      ownId: 'OwnId',
      startTime: 'StartTime',
      userId: 'UserId',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
      authStatus: 'number',
      cmAuthStatus: 'number',
      endTime: 'number',
      level: 'string',
      monitorAuthStatus: 'number',
      name: 'string',
      ownId: 'string',
      startTime: 'number',
      userId: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number in pagination queries.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Number of items per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of query results.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageServiceCustomerResponseBody extends $dara.Model {
  /**
   * @remarks
   * Interface return code.
   * 
   * @example
   * System error or openapi error
   */
  code?: string;
  /**
   * @remarks
   * Data query results.
   */
  data?: PageServiceCustomerResponseBodyData[];
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Return message. When the request is successful, it returns a success message; when the request fails, it returns the reason for the failure.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Pagination information.
   */
  pageInfo?: PageServiceCustomerResponseBodyPageInfo;
  /**
   * @remarks
   * Request ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 808A307F-9513-5099-AAA5-98D4EF199140
   */
  requestId?: string;
  /**
   * @remarks
   * Request return status.
   * - true: Success.
   * - false: Failure.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': PageServiceCustomerResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      pageInfo: PageServiceCustomerResponseBodyPageInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

