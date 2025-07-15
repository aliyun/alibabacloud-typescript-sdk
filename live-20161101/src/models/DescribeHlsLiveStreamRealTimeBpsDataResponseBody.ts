// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos extends $dara.Model {
  /**
   * @remarks
   * The bandwidth. Unit: bit/s.
   * 
   * @example
   * 11440.88
   */
  downFlow?: number;
  /**
   * @remarks
   * The number of online users.
   * 
   * @example
   * 1
   */
  online?: number;
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 1028
   */
  rate?: string;
  static names(): { [key: string]: string } {
    return {
      downFlow: 'DownFlow',
      online: 'Online',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      downFlow: 'number',
      online: 'number',
      rate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos extends $dara.Model {
  /**
   * @remarks
   * The statistics on the HLS stream.
   */
  infos?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos[];
  /**
   * @remarks
   * The name of the stream.
   * 
   * @example
   * /live/sport.m3u8
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      infos: 'Infos',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfosInfos },
      streamName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.infos)) {
      $dara.Model.validateArray(this.infos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData extends $dara.Model {
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
   * Details about the statistics on each HLS stream under the domain name.
   */
  streamInfos?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos[];
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      streamInfos: 'StreamInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      streamInfos: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageDataStreamInfos },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfos)) {
      $dara.Model.validateArray(this.streamInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHlsLiveStreamRealTimeBpsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 17C16B18-D3EA-4809-9CC3-8A2CBE14BC7B
   */
  requestId?: string;
  /**
   * @remarks
   * The timestamp for which the data was queried.
   * 
   * @example
   * 2018-08-08T00:00:00Z
   */
  time?: string;
  /**
   * @remarks
   * The usage data.
   */
  usageData?: DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      time: 'Time',
      usageData: 'UsageData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      time: 'string',
      usageData: { 'type': 'array', 'itemType': DescribeHlsLiveStreamRealTimeBpsDataResponseBodyUsageData },
    };
  }

  validate() {
    if(Array.isArray(this.usageData)) {
      $dara.Model.validateArray(this.usageData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

