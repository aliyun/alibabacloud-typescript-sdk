// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints extends $dara.Model {
  /**
   * @remarks
   * The ID of the ingest endpoint.
   * 
   * @example
   * ingest1
   */
  id?: string;
  /**
   * @remarks
   * The password.
   * 
   * @example
   * 2F9e******b569c8
   */
  password?: string;
  /**
   * @remarks
   * The URL of the ingest endpoint.
   * 
   * @example
   * http://xxx-1.packagepush-abcxxx.ap-southeast-1.aliyuncsiceintl.com/v1/group01/1/ch01/manifest
   */
  url?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * us12******das
   */
  username?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      password: 'Password',
      url: 'Url',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      password: 'string',
      url: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLivePackageChannelResponseBodyLivePackageChannel extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * ch4
   */
  channelName?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard and is displayed in UTC (ending with Z).
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the channel.
   * 
   * @example
   * Test channel
   */
  description?: string;
  /**
   * @remarks
   * The name of the channel group.
   * 
   * @example
   * channel-group-1
   */
  groupName?: string;
  /**
   * @remarks
   * The array of ingest endpoints.
   */
  ingestEndpoints?: GetLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints[];
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2023-04-01T12:00:00Z
   */
  lastModified?: string;
  /**
   * @remarks
   * The ingest protocol. Valid values: HLS, HLS_CMAF, and SRT_RTMP.
   * 
   * @example
   * HLS
   */
  protocol?: string;
  /**
   * @remarks
   * The number of m3u8 segments in the ingest stream.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment duration of the ingest stream.
   * 
   * @example
   * 5
   */
  segmentDuration?: number;
  static names(): { [key: string]: string } {
    return {
      channelName: 'ChannelName',
      createTime: 'CreateTime',
      description: 'Description',
      groupName: 'GroupName',
      ingestEndpoints: 'IngestEndpoints',
      lastModified: 'LastModified',
      protocol: 'Protocol',
      segmentCount: 'SegmentCount',
      segmentDuration: 'SegmentDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      createTime: 'string',
      description: 'string',
      groupName: 'string',
      ingestEndpoints: { 'type': 'array', 'itemType': GetLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints },
      lastModified: 'string',
      protocol: 'string',
      segmentCount: 'number',
      segmentDuration: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ingestEndpoints)) {
      $dara.Model.validateArray(this.ingestEndpoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLivePackageChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The detailed information about the real-time packaging channel.
   */
  livePackageChannel?: GetLivePackageChannelResponseBodyLivePackageChannel;
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * RequestId-12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      livePackageChannel: 'LivePackageChannel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      livePackageChannel: GetLivePackageChannelResponseBodyLivePackageChannel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.livePackageChannel && typeof (this.livePackageChannel as any).validate === 'function') {
      (this.livePackageChannel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

