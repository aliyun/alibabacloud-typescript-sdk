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
   * @example
   * test
   */
  appName?: string;
  /**
   * @example
   * 11
   */
  callCount?: number;
  /**
   * @example
   * 2
   */
  clientFailCount?: number;
  /**
   * @example
   * 192.168.1.1
   */
  clientIp?: string;
  /**
   * @example
   * 1
   */
  errorApiCount?: number;
  /**
   * @example
   * 1
   */
  errorCount?: number;
  /**
   * @example
   * 10.0
   */
  errorRate?: string;
  /**
   * @example
   * 2025-06-30 08:00:00
   */
  lastCallTime?: string;
  /**
   * @example
   * 2025_0611_1011
   */
  minute?: string;
  /**
   * @example
   * 1
   */
  offlineCount?: number;
  /**
   * @example
   * 99
   */
  successTimeCost?: string;
  /**
   * @example
   * 88
   */
  totalCount?: number;
  /**
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
  impactList?: ListDataServiceApiImpactsResponseBodyPageResultImpactList[];
  /**
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
  pageResult?: ListDataServiceApiImpactsResponseBodyPageResult;
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

