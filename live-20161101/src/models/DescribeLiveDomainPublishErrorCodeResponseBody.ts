// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeDataCodeData extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   3: The data read timed out.
   * *   4: A data write error occurred.
   * *   6: The data write timed out.
   * *   200: The request is successful.
   * *   500: An unknown internal error occurred.
   * *   501: The stream ingest failed.
   * *   502: The signaling operation timed out.
   * *   401: A stream ingest parameter is invalid.
   * *   403: The stream ingest authentication failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of times the HTTP status code was returned.
   * 
   * @example
   * 20
   */
  count?: string;
  /**
   * @remarks
   * The proportion of the HTTP status code.
   * 
   * @example
   * 66.04
   */
  proportion?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      proportion: 'Proportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'string',
      proportion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeData extends $dara.Model {
  /**
   * @remarks
   * The proportions of error codes.
   */
  codeData?: DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeDataCodeData[];
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2016-06-29T09:01:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      codeData: 'CodeData',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeData: { 'type': 'array', 'itemType': DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeDataCodeData },
      timeStamp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codeData)) {
      $dara.Model.validateArray(this.codeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDomainPublishErrorCodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time granularity of the query. Unit: seconds. Default value: 60.
   * 
   * @example
   * 60
   */
  dataInterval?: string;
  /**
   * @remarks
   * The ingest domain.
   * 
   * @example
   * example.com,example.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-06-29T09:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The proportions of error codes at each time interval.
   */
  realTimeCodeData?: DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C85ACF7
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2016-06-29T09:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      dataInterval: 'DataInterval',
      domainName: 'DomainName',
      endTime: 'EndTime',
      realTimeCodeData: 'RealTimeCodeData',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataInterval: 'string',
      domainName: 'string',
      endTime: 'string',
      realTimeCodeData: { 'type': 'array', 'itemType': DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeData },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.realTimeCodeData)) {
      $dara.Model.validateArray(this.realTimeCodeData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

