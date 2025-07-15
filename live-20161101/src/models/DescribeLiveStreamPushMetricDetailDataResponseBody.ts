// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailDataStreamData extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * app
   */
  appName?: string;
  /**
   * @remarks
   * The total bandwidth consumed by the stream per minute. Unit: bit/s.
   * 
   * @example
   * 423304182
   */
  reqBps?: number;
  /**
   * @remarks
   * The total amount of traffic consumed by the stream per minute. Unit: bytes.
   * 
   * @example
   * 423304182.66
   */
  reqTraffic?: number;
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * test.flv
   */
  streamName?: string;
  /**
   * @remarks
   * The timestamp of the returned data.
   * 
   * @example
   * 2022-09-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      reqBps: 'ReqBps',
      reqTraffic: 'ReqTraffic',
      streamName: 'StreamName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      reqBps: 'number',
      reqTraffic: 'number',
      streamName: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailData extends $dara.Model {
  streamData?: DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailDataStreamData[];
  static names(): { [key: string]: string } {
    return {
      streamData: 'StreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamData: { 'type': 'array', 'itemType': DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailDataStreamData },
    };
  }

  validate() {
    if(Array.isArray(this.streamData)) {
      $dara.Model.validateArray(this.streamData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamPushMetricDetailDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range that was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * A pagination token. When you call this operation, up to 5,000 rows of data can be returned per query. If the number of rows exceeds 5,000, the response includes a pagination token that is used in the next request to retrieve a new page of results.
   * 
   * When you specify the token in the next query, data continues to be obtained from the end of the previous query.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of rows returned.
   * 
   * @example
   * 5000
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5EBF2AC3-4B73-40A5-8B32-83F49D5F035E
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range that was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-09-10T20:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The data array returned.
   */
  streamDetailData?: DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailData;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      endTime: 'EndTime',
      nextPageToken: 'NextPageToken',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      startTime: 'StartTime',
      streamDetailData: 'StreamDetailData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      endTime: 'string',
      nextPageToken: 'string',
      pageSize: 'number',
      requestId: 'string',
      startTime: 'string',
      streamDetailData: DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailData,
    };
  }

  validate() {
    if(this.streamDetailData && typeof (this.streamDetailData as any).validate === 'function') {
      (this.streamDetailData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

