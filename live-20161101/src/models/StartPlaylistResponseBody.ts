// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartPlaylistResponseBodyStreamInfoStreamsStream extends $dara.Model {
  /**
   * @remarks
   * The streaming URL in the Flash Video (FLV) format.
   * 
   * @example
   * http://aliyundoc.com/caster/liveStream****.flv?auth_key=1612772224-0-0-3632be7cd9907169e8b09e91099c****
   */
  pullFlvUrl?: string;
  /**
   * @remarks
   * The streaming URL in the Real-Time Messaging Protocol (RTMP) format.
   * 
   * @example
   * rtmp:///aliyundoc.com/caster/liveStream****?auth_key=1612772224-0-0-4404ca59c0246226d49d01f734b1****
   */
  pullM3U8Url?: string;
  /**
   * @remarks
   * The streaming URL in the M3U8 format.
   * 
   * @example
   * http://aliyundoc.com/caster/liveStream****.m3u8?auth_key=1612772224-0-0-919a023a127156fe82e3562c3b3b****
   */
  pullRtmpUrl?: string;
  /**
   * @remarks
   * The video quality of the live stream. Valid values: **original**: original quality
   * 
   * @example
   * original
   */
  quality?: string;
  static names(): { [key: string]: string } {
    return {
      pullFlvUrl: 'PullFlvUrl',
      pullM3U8Url: 'PullM3U8Url',
      pullRtmpUrl: 'PullRtmpUrl',
      quality: 'Quality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pullFlvUrl: 'string',
      pullM3U8Url: 'string',
      pullRtmpUrl: 'string',
      quality: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPlaylistResponseBodyStreamInfoStreams extends $dara.Model {
  stream?: StartPlaylistResponseBodyStreamInfoStreamsStream[];
  static names(): { [key: string]: string } {
    return {
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stream: { 'type': 'array', 'itemType': StartPlaylistResponseBodyStreamInfoStreamsStream },
    };
  }

  validate() {
    if(Array.isArray(this.stream)) {
      $dara.Model.validateArray(this.stream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPlaylistResponseBodyStreamInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * liveApp****
   */
  appName?: string;
  /**
   * @remarks
   * The main streaming domain.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  streamName?: string;
  /**
   * @remarks
   * The streaming URLs.
   */
  streams?: StartPlaylistResponseBodyStreamInfoStreams;
  static names(): { [key: string]: string } {
    return {
      appName: 'AppName',
      domainName: 'DomainName',
      streamName: 'StreamName',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      domainName: 'string',
      streamName: 'string',
      streams: StartPlaylistResponseBodyStreamInfoStreams,
    };
  }

  validate() {
    if(this.streams && typeof (this.streams as any).validate === 'function') {
      (this.streams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StartPlaylistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the episode list. You can use the ID as a request parameter in the API operation that is used to stop playing the episode list.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  programId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0d-f228-4a64-af62-20e91b96****
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the live stream.
   */
  streamInfo?: StartPlaylistResponseBodyStreamInfo;
  static names(): { [key: string]: string } {
    return {
      programId: 'ProgramId',
      requestId: 'RequestId',
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      programId: 'string',
      requestId: 'string',
      streamInfo: StartPlaylistResponseBodyStreamInfo,
    };
  }

  validate() {
    if(this.streamInfo && typeof (this.streamInfo as any).validate === 'function') {
      (this.streamInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

