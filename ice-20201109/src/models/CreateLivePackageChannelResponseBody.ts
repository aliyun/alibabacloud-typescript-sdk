// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints extends $dara.Model {
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

export class CreateLivePackageChannelResponseBodyLivePackageChannel extends $dara.Model {
  /**
   * @remarks
   * The name of the channel.
   * 
   * @example
   * example-channel
   */
  channelName?: string;
  /**
   * @remarks
   * The time when the channel was created. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
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
   * This is a test channel
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
   * The ingest endpoints.
   */
  ingestEndpoints?: CreateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints[];
  /**
   * @remarks
   * The time when the channel was created. Format: yyyy-MM-ddTHH:mm:ssZ (UTC time).
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
   * The number of m3u8 segments for the ingest stream.
   * 
   * @example
   * 3
   */
  segmentCount?: number;
  /**
   * @remarks
   * The segment duration for the ingest stream.
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
      ingestEndpoints: { 'type': 'array', 'itemType': CreateLivePackageChannelResponseBodyLivePackageChannelIngestEndpoints },
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

export class CreateLivePackageChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the live packaging channel.
   */
  livePackageChannel?: CreateLivePackageChannelResponseBodyLivePackageChannel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
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
      livePackageChannel: CreateLivePackageChannelResponseBodyLivePackageChannel,
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

