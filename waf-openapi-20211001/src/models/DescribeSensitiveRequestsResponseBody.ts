// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveRequestsResponseBodyDataInfoCount extends $dara.Model {
  /**
   * @remarks
   * The type of the sensitive data.
   * 
   * @example
   * 1001
   */
  code?: string;
  /**
   * @remarks
   * The number of sensitive data entries.
   * 
   * @example
   * 23
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveRequestsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of risks in the previous 30 days.
   * 
   * @example
   * 23
   */
  abnormalCount?: number;
  /**
   * @remarks
   * The API.
   * 
   * @example
   * /api/users/login
   */
  apiFormat?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 09559c0d71ca2ffc996b81***836d8
   */
  apiId?: string;
  /**
   * @remarks
   * The IP address.
   * 
   * @example
   * 103.118.55.**
   */
  clientIP?: string;
  /**
   * @remarks
   * The evaluation result. Valid values:
   * 
   * *   **leak**: Data leaks may occur.
   * *   **none**: No data leak can occur.
   * 
   * @example
   * leak
   */
  detectionResult?: string;
  /**
   * @remarks
   * The number of events in the previous 30 days.
   * 
   * @example
   * 679
   */
  eventCount?: number;
  /**
   * @remarks
   * The statistics of the sensitive data.
   */
  infoCount?: DescribeSensitiveRequestsResponseBodyDataInfoCount[];
  /**
   * @remarks
   * The domain name of the API.
   * 
   * @example
   * a.****.com
   */
  matchedHost?: string;
  /**
   * @remarks
   * The sensitive data.
   */
  sensitiveList?: string[];
  static names(): { [key: string]: string } {
    return {
      abnormalCount: 'AbnormalCount',
      apiFormat: 'ApiFormat',
      apiId: 'ApiId',
      clientIP: 'ClientIP',
      detectionResult: 'DetectionResult',
      eventCount: 'EventCount',
      infoCount: 'InfoCount',
      matchedHost: 'MatchedHost',
      sensitiveList: 'SensitiveList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalCount: 'number',
      apiFormat: 'string',
      apiId: 'string',
      clientIP: 'string',
      detectionResult: 'string',
      eventCount: 'number',
      infoCount: { 'type': 'array', 'itemType': DescribeSensitiveRequestsResponseBodyDataInfoCount },
      matchedHost: 'string',
      sensitiveList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.infoCount)) {
      $dara.Model.validateArray(this.infoCount);
    }
    if(Array.isArray(this.sensitiveList)) {
      $dara.Model.validateArray(this.sensitiveList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveRequestsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tracing results of the data.
   */
  data?: DescribeSensitiveRequestsResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26E46541-7AAB-5565-801D-F14DBDC5****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSensitiveRequestsResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

