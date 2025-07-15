// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfosStreamInfo extends $dara.Model {
  /**
   * @remarks
   * The streaming URL.
   * 
   * @example
   * http://out/caster/example.net
   */
  outputStreamUrl?: string;
  /**
   * @remarks
   * The resolution to which the scene transcodes the stream for playback. Valid values:
   * 
   * *   **lsd**: standard definition.
   * *   **lld**: low definition.
   * *   **lud**: ultra high definition.
   * *   **lhd**: high definition.
   * 
   * @example
   * lld
   */
  transcodeConfig?: string;
  /**
   * @remarks
   * The format to which the scene transcodes the stream for playback. Valid values:
   * 
   * *   **flv**.
   * *   **rtmp**.
   * *   **m3u8**.
   * 
   * @example
   * flv
   */
  videoFormat?: string;
  static names(): { [key: string]: string } {
    return {
      outputStreamUrl: 'OutputStreamUrl',
      transcodeConfig: 'TranscodeConfig',
      videoFormat: 'VideoFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputStreamUrl: 'string',
      transcodeConfig: 'string',
      videoFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfos extends $dara.Model {
  streamInfo?: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfosStreamInfo[];
  static names(): { [key: string]: string } {
    return {
      streamInfo: 'StreamInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      streamInfo: { 'type': 'array', 'itemType': DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfosStreamInfo },
    };
  }

  validate() {
    if(Array.isArray(this.streamInfo)) {
      $dara.Model.validateArray(this.streamInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStream extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the output stream is in preview mode or program mode.
   * 
   * *   **0**: indicates that the output videos of the scene are in preview mode.
   * *   **1**: indicates that the output videos of the scene are in program mode.
   * 
   * @example
   * 1
   */
  outputType?: number;
  /**
   * @remarks
   * The Real Time Messaging Protocol (RTMP) URL.
   * 
   * @example
   * rtmp://live/caster/example.edu
   */
  rtmpUrl?: string;
  /**
   * @remarks
   * The ID of the scene.
   * 
   * @example
   * 23ca74e0-aca3-4e7a-8561-9d96f525****
   */
  sceneId?: string;
  /**
   * @remarks
   * The information about the stream.
   */
  streamInfos?: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfos;
  /**
   * @remarks
   * The streaming URL.
   * 
   * @example
   * http://live/caster/example.org
   */
  streamUrl?: string;
  static names(): { [key: string]: string } {
    return {
      outputType: 'OutputType',
      rtmpUrl: 'RtmpUrl',
      sceneId: 'SceneId',
      streamInfos: 'StreamInfos',
      streamUrl: 'StreamUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      outputType: 'number',
      rtmpUrl: 'string',
      sceneId: 'string',
      streamInfos: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStreamStreamInfos,
      streamUrl: 'string',
    };
  }

  validate() {
    if(this.streamInfos && typeof (this.streamInfos as any).validate === 'function') {
      (this.streamInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBodyCasterStreams extends $dara.Model {
  casterStream?: DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStream[];
  static names(): { [key: string]: string } {
    return {
      casterStream: 'CasterStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterStream: { 'type': 'array', 'itemType': DescribeCasterStreamUrlResponseBodyCasterStreamsCasterStream },
    };
  }

  validate() {
    if(Array.isArray(this.casterStream)) {
      $dara.Model.validateArray(this.casterStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCasterStreamUrlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the production studio.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf93880e****
   */
  casterId?: string;
  /**
   * @remarks
   * The information about the streams of the production studio.
   */
  casterStreams?: DescribeCasterStreamUrlResponseBodyCasterStreams;
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
   * The number of streams that were returned.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      casterId: 'CasterId',
      casterStreams: 'CasterStreams',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      casterId: 'string',
      casterStreams: DescribeCasterStreamUrlResponseBodyCasterStreams,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.casterStreams && typeof (this.casterStreams as any).validate === 'function') {
      (this.casterStreams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

