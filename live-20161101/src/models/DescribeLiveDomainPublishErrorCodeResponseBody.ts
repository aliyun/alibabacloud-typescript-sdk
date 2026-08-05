// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeDataCodeData extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * - 3: read data timeout.
   * - 4: write data error.
   * - 6: write data timeout.
   * - 200: success.
   * - 500: internal system unknown error.
   * - 501: stream ingest exception.
   * - 502: signaling took too long.
   * - 401: stream ingest parameter exception.
   * - 403: stream ingest authentication failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of responses.
   * 
   * @example
   * 20
   */
  count?: string;
  /**
   * @remarks
   * The proportion of responses.
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
   * The list of status code distribution data.
   */
  codeData?: DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeDataCodeData[];
  /**
   * @remarks
   * The start time of the time interval. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
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
   * The time granularity of the queried data. Unit: seconds. Default value: 60.
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
   * example1.aliyundoc.com,example2.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2016-06-29T09:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The status code distribution data for each time interval.
   */
  realTimeCodeData?: DescribeLiveDomainPublishErrorCodeResponseBodyRealTimeCodeData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BC858082-736F-4A25-867B-E5B67C******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
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

