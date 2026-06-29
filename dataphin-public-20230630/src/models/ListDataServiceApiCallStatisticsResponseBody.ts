// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallStatisticsResponseBodyPageResultCallStatisticsList extends $dara.Model {
  /**
   * @remarks
   * API ID.
   * 
   * @example
   * 1003
   */
  apiId?: number;
  /**
   * @remarks
   * API name.
   * 
   * @example
   * test
   */
  apiName?: string;
  /**
   * @remarks
   * Authorized application names.
   */
  appNameList?: string[];
  /**
   * @remarks
   * Number of authorized applications.
   * 
   * @example
   * 1
   */
  authorizedAppCount?: number;
  /**
   * @remarks
   * Average response time, in milliseconds.
   * 
   * @example
   * 11
   */
  avgResponseTime?: number;
  /**
   * @remarks
   * Number of calls.
   * 
   * @example
   * 100
   */
  callCount?: number;
  /**
   * @remarks
   * Creator.
   * 
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @remarks
   * Number of call errors.
   * 
   * @example
   * 22
   */
  errorCount?: string;
  /**
   * @remarks
   * Error rate.
   * 
   * @example
   * 23.2%
   */
  errorRate?: string;
  /**
   * @remarks
   * Last call time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  lastCallTime?: string;
  /**
   * @remarks
   * Offline percentage.
   * 
   * @example
   * 23.2%
   */
  offlineRate?: string;
  /**
   * @remarks
   * Data service project ID.
   * 
   * @example
   * 101201
   */
  projectId?: number;
  /**
   * @remarks
   * Data service project.
   * 
   * @example
   * test
   */
  projectName?: string;
  /**
   * @remarks
   * SQL table primary key.
   * 
   * @example
   * 1121
   */
  sqlId?: number;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      appNameList: 'AppNameList',
      authorizedAppCount: 'AuthorizedAppCount',
      avgResponseTime: 'AvgResponseTime',
      callCount: 'CallCount',
      creator: 'Creator',
      errorCount: 'ErrorCount',
      errorRate: 'ErrorRate',
      lastCallTime: 'LastCallTime',
      offlineRate: 'OfflineRate',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      sqlId: 'SqlId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      apiName: 'string',
      appNameList: { 'type': 'array', 'itemType': 'string' },
      authorizedAppCount: 'number',
      avgResponseTime: 'number',
      callCount: 'number',
      creator: 'string',
      errorCount: 'string',
      errorRate: 'string',
      lastCallTime: 'string',
      offlineRate: 'string',
      projectId: 'number',
      projectName: 'string',
      sqlId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appNameList)) {
      $dara.Model.validateArray(this.appNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiCallStatisticsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * API call statistics list.
   */
  callStatisticsList?: ListDataServiceApiCallStatisticsResponseBodyPageResultCallStatisticsList[];
  /**
   * @remarks
   * Total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      callStatisticsList: 'CallStatisticsList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatisticsList: { 'type': 'array', 'itemType': ListDataServiceApiCallStatisticsResponseBodyPageResultCallStatisticsList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.callStatisticsList)) {
      $dara.Model.validateArray(this.callStatisticsList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiCallStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
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
   * Backend error details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Paginated query result.
   */
  pageResult?: ListDataServiceApiCallStatisticsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListDataServiceApiCallStatisticsResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

