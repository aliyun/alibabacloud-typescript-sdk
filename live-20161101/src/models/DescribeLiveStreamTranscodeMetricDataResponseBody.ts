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
   * The end time. Format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2023-06-11T02:46:40Z
   */
  endTime?: string;
  /**
   * @remarks
   * The paged query token. Each query returns a maximum of 5,000 rows of data. If the data to be queried exceeds 5,000 rows, the response provides the start index for the next query.
   * 
   * Pass this token in the request to continue querying data from the row after the last row returned in the previous query. This token is used for paging.
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
   * 16A96B9A-F203-4EC5-8E43-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The start time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
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

