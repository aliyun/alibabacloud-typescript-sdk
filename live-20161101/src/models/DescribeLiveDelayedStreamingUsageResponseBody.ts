// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDelayedStreamingUsageResponseBodyDelayDataDelayDataItem extends $dara.Model {
  /**
   * @remarks
   * The domain name. If SplitBy is set to domain, the data returned is grouped by domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The duration of stream delay.
   * 
   * @example
   * 84
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the region. If SplitBy is set to region, the data returned is grouped by region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The name of the stream. If SplitBy is set to stream, the data returned is grouped by stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The timestamp of the data returned.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      duration: 'Duration',
      region: 'Region',
      streamName: 'StreamName',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      duration: 'number',
      region: 'string',
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

export class DescribeLiveDelayedStreamingUsageResponseBodyDelayData extends $dara.Model {
  delayDataItem?: DescribeLiveDelayedStreamingUsageResponseBodyDelayDataDelayDataItem[];
  static names(): { [key: string]: string } {
    return {
      delayDataItem: 'DelayDataItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayDataItem: { 'type': 'array', 'itemType': DescribeLiveDelayedStreamingUsageResponseBodyDelayDataDelayDataItem },
    };
  }

  validate() {
    if(Array.isArray(this.delayDataItem)) {
      $dara.Model.validateArray(this.delayDataItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLiveDelayedStreamingUsageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the stream delay usage data.
   */
  delayData?: DescribeLiveDelayedStreamingUsageResponseBodyDelayData;
  /**
   * @remarks
   * The end of the time range during which the data was queried.
   * 
   * @example
   * 2022-10-10T21:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B460F8B-993C-4F48-B98A-910811DEBFEB
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried.
   * 
   * @example
   * 2022-10-10T20:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      delayData: 'DelayData',
      endTime: 'EndTime',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayData: DescribeLiveDelayedStreamingUsageResponseBodyDelayData,
      endTime: 'string',
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.delayData && typeof (this.delayData as any).validate === 'function') {
      (this.delayData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

