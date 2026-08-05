// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamPushMetricDetailDataResponseBodyStreamDetailDataStreamData extends $dara.Model {
  appName?: string;
  reqBps?: number;
  reqTraffic?: number;
  streamName?: string;
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
   * The end of the time range for the returned data. The time follows the ISO 8601 standard in the UTC time zone.
   * 
   * Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2022-09-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The paging query token. Each query returns a maximum of 5,000 rows of data. If the data to be queried exceeds 5,000 rows, the response includes the start index for the next query.
   * 
   * Pass this token in the request to continue querying data from the row after the last row returned in the previous query.
   * 
   * @example
   * UjsM9x3aVcJi9a0-ArwJUTTC67C***37C0=
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The number of returned data rows.
   * 
   * @example
   * 5000
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5EBF2AC3-4B73-40A5-8B32-83F49D5F035E
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the UTC time zone.
   * 
   * Format: YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2022-09-10T20:00:00Z
   */
  startTime?: string;
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

