// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServiceApiImpactsResponseBodyPageResultImpactList extends $dara.Model {
  /**
   * @remarks
   * apiNo
   * 
   * @example
   * 2011
   */
  apiId?: number;
  /**
   * @remarks
   * appKey
   * 
   * @example
   * 1101
   */
  appKey?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * test
   */
  appName?: string;
  /**
   * @remarks
   * The number of calls.
   * 
   * @example
   * 11
   */
  callCount?: number;
  /**
   * @remarks
   * The number of client failures.
   * 
   * @example
   * 2
   */
  clientFailCount?: number;
  /**
   * @remarks
   * The source IP address of the access request.
   * 
   * @example
   * 192.168.1.1
   */
  clientIp?: string;
  /**
   * @remarks
   * The number of abnormal API calls.
   * 
   * @example
   * 1
   */
  errorApiCount?: number;
  /**
   * @remarks
   * The number of errors.
   * 
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @remarks
   * The error rate.
   * 
   * @example
   * 10.0
   */
  errorRate?: string;
  /**
   * @remarks
   * The most recent call time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-06-30 08:00:00
   */
  lastCallTime?: string;
  /**
   * @remarks
   * The gateway statistics time. Format: yyyy_MMdd_HHmm.
   * 
   * @example
   * 2025_0611_1011
   */
  minute?: string;
  /**
   * @remarks
   * The number of offline instances.
   * 
   * @example
   * 1
   */
  offlineCount?: number;
  /**
   * @remarks
   * The total time consumed by successful calls.
   * 
   * @example
   * 99
   */
  successTimeCost?: string;
  /**
   * @remarks
   * The total number of calls.
   * 
   * @example
   * 88
   */
  totalCount?: number;
  /**
   * @remarks
   * The total time consumed by the API, including failed calls.
   * 
   * @example
   * 231
   */
  totalTimeCost?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      appKey: 'AppKey',
      appName: 'AppName',
      callCount: 'CallCount',
      clientFailCount: 'ClientFailCount',
      clientIp: 'ClientIp',
      errorApiCount: 'ErrorApiCount',
      errorCount: 'ErrorCount',
      errorRate: 'ErrorRate',
      lastCallTime: 'LastCallTime',
      minute: 'Minute',
      offlineCount: 'OfflineCount',
      successTimeCost: 'SuccessTimeCost',
      totalCount: 'TotalCount',
      totalTimeCost: 'TotalTimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'number',
      appKey: 'number',
      appName: 'string',
      callCount: 'number',
      clientFailCount: 'number',
      clientIp: 'string',
      errorApiCount: 'number',
      errorCount: 'number',
      errorRate: 'string',
      lastCallTime: 'string',
      minute: 'string',
      offlineCount: 'number',
      successTimeCost: 'string',
      totalCount: 'number',
      totalTimeCost: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiImpactsResponseBodyPageResult extends $dara.Model {
  /**
   * @remarks
   * The list of API impact analysis results.
   */
  impactList?: ListDataServiceApiImpactsResponseBodyPageResultImpactList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 68
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      impactList: 'ImpactList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      impactList: { 'type': 'array', 'itemType': ListDataServiceApiImpactsResponseBodyPageResultImpactList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.impactList)) {
      $dara.Model.validateArray(this.impactList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataServiceApiImpactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
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
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The paged query result.
   */
  pageResult?: ListDataServiceApiImpactsResponseBodyPageResult;
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
      pageResult: ListDataServiceApiImpactsResponseBodyPageResult,
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

