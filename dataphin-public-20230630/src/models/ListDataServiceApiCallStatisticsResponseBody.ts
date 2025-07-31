// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiCallStatisticsResponseBodyPageResultCallStatisticsList extends $dara.Model {
  /**
   * @example
   * 1003
   */
  apiId?: number;
  /**
   * @example
   * test
   */
  apiName?: string;
  appNameList?: string[];
  /**
   * @example
   * 1
   */
  authorizedAppCount?: number;
  /**
   * @example
   * 11
   */
  avgResponseTime?: number;
  /**
   * @example
   * 100
   */
  callCount?: number;
  /**
   * @example
   * 30012011
   */
  creator?: string;
  /**
   * @example
   * 22
   */
  errorCount?: string;
  /**
   * @example
   * 23.2%
   */
  errorRate?: string;
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  lastCallTime?: string;
  /**
   * @example
   * 23.2%
   */
  offlineRate?: string;
  /**
   * @example
   * 101201
   */
  projectId?: number;
  /**
   * @example
   * test
   */
  projectName?: string;
  /**
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
  callStatisticsList?: ListDataServiceApiCallStatisticsResponseBodyPageResultCallStatisticsList[];
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * internal error
   */
  message?: string;
  pageResult?: ListDataServiceApiCallStatisticsResponseBodyPageResult;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
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

