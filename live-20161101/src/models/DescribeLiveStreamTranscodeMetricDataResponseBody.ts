// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveStreamTranscodeMetricDataResponseBodyStreamDetailDataStreamData extends $dara.Model {
  appName?: string;
  duration?: number;
  fps?: string;
  region?: string;
  resolution?: string;
  streamName?: string;
  timeStamp?: string;
  transcodeType?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      duration: 'Duration',
      fps: 'Fps',
      region: 'Region',
      resolution: 'Resolution',
      streamName: 'StreamName',
      timeStamp: 'TimeStamp',
      transcodeType: 'TranscodeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      duration: 'number',
      fps: 'string',
      region: 'string',
      resolution: 'string',
      streamName: 'string',
      timeStamp: 'string',
      transcodeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveStreamTranscodeMetricDataResponseBodyStreamDetailData extends $dara.Model {
  streamData?: DescribeLiveStreamTranscodeMetricDataResponseBodyStreamDetailDataStreamData[];
  static names(): { [key: string]: string } {
    return {
      streamData: 'StreamData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamData: { 'type': 'array', 'itemType': DescribeLiveStreamTranscodeMetricDataResponseBodyStreamDetailDataStreamData },
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

export class DescribeLiveStreamTranscodeMetricDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The end of the time range during which data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-11T02:46:40Z
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
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which data was queried. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2023-06-11T03:46:40Z
   */
  startTime?: string;
  streamDetailData?: DescribeLiveStreamTranscodeMetricDataResponseBodyStreamDetailData;
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
      streamDetailData: DescribeLiveStreamTranscodeMetricDataResponseBodyStreamDetailData,
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

