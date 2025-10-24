// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaInfoJobResponseBodyMediaInfoJobInput extends $dara.Model {
  /**
   * @remarks
   * The name of the OSS bucket in which the input media file is stored.
   * 
   * @example
   * example-bucket
   */
  bucket?: string;
  /**
   * @remarks
   * The region in which the OSS bucket that stores the input media file resides.
   * 
   * @example
   * example-location
   */
  location?: string;
  /**
   * @remarks
   * The name of the OSS object that is used as the input media file.
   * 
   * @example
   * example.flv
   */
  object?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult extends $dara.Model {
  /**
   * @remarks
   * The error code that is returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * The parameter \\"Input\\" does not conform to the JSON Object specification
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message that is returned if the job fails. This parameter is not returned if the job is successful.
   * 
   * @example
   * InvalidParameter.JsonObjectFormatInvalid
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the message that is returned if the job is successful. This parameter is not returned if the job fails.
   * 
   * @example
   * 16f01ad6175e4230ac42bb5182cd****
   */
  messageId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      messageId: 'MessageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      messageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat extends $dara.Model {
  /**
   * @remarks
   * The total bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1630.045
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the input media file. Unit: seconds.
   * 
   * @example
   * 17.226000
   */
  duration?: string;
  /**
   * @remarks
   * The full name of the container format.
   * 
   * @example
   * QuickTime/MOV
   */
  formatLongName?: string;
  /**
   * @remarks
   * The short name of the container format. For more information about the parameters, see [Parameter details](https://help.aliyun.com/document_detail/29253.html).
   * 
   * @example
   * mov
   */
  formatName?: string;
  /**
   * @remarks
   * The total number of program streams.
   * 
   * @example
   * 0
   */
  numPrograms?: string;
  /**
   * @remarks
   * The total number of media streams.
   * 
   * @example
   * 2
   */
  numStreams?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 3509895
   */
  size?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      numPrograms: 'NumPrograms',
      numStreams: 'NumStreams',
      size: 'Size',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      formatLongName: 'string',
      formatName: 'string',
      numPrograms: 'string',
      numStreams: 'string',
      size: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate. Unit: Kbit/s.
   * 
   * @example
   * 128.806
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of the sound channels.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Default value: acc. Valid values:
   * 
   * *   **acc**
   * *   **mp3**
   * *   **mp4**
   * *   **ogg**
   * *   **flac**
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * mp4a
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream. Unit: seconds.
   * 
   * @example
   * 17.159546
   */
  duration?: string;
  durationInaccurate?: string;
  /**
   * @remarks
   * The sequence number of the audio stream. The value indicates the position of the audio stream in all audio streams.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 123
   */
  numFrames?: string;
  /**
   * @remarks
   * The sampling format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sampling rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time of the audio stream.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/44100
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      channelLayout: 'ChannelLayout',
      channels: 'Channels',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      durationInaccurate: 'DurationInaccurate',
      index: 'Index',
      lang: 'Lang',
      numFrames: 'NumFrames',
      sampleFmt: 'SampleFmt',
      samplerate: 'Samplerate',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      channelLayout: 'string',
      channels: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      durationInaccurate: 'string',
      index: 'string',
      lang: 'string',
      numFrames: 'string',
      sampleFmt: 'string',
      samplerate: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList extends $dara.Model {
  audioStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamListAudioStream },
    };
  }

  validate() {
    if(Array.isArray(this.audioStream)) {
      $dara.Model.validateArray(this.audioStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * ASS (Advanced SSA) subtitle
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values:
   * 
   * *   **srt**
   * *   **ass**
   * 
   * @example
   * ass
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x0000
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * [0][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 0/1
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the audio stream. Unit: seconds.
   * 
   * @example
   * 1370.116000
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the subtitle stream. The value indicates the position of the subtitle stream in all subtitle streams.
   * 
   * @example
   * 3
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The start time of the subtitle stream.
   * 
   * @example
   * 0.000000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/1000
   */
  timebase?: string;
  static names(): { [key: string]: string } {
    return {
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      duration: 'Duration',
      index: 'Index',
      lang: 'Lang',
      startTime: 'StartTime',
      timebase: 'Timebase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'string',
      index: 'string',
      lang: 'string',
      startTime: 'string',
      timebase: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamListSubtitleStream },
    };
  }

  validate() {
    if(Array.isArray(this.subtitleStream)) {
      $dara.Model.validateArray(this.subtitleStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate. Unit: Kbit/s.
   * 
   * @example
   * 300.34
   */
  avgBitrate?: string;
  /**
   * @remarks
   * The maximum bandwidth that is consumed.
   * 
   * @example
   * 10
   */
  costBandwidth?: string;
  /**
   * @remarks
   * The time consumed to preload the video.
   * 
   * @example
   * 8
   */
  preloadTime?: string;
  static names(): { [key: string]: string } {
    return {
      avgBitrate: 'AvgBitrate',
      costBandwidth: 'CostBandwidth',
      preloadTime: 'PreloadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgBitrate: 'string',
      costBandwidth: 'string',
      preloadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 23.976025
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1496.46
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * H.264/AVC/MPEG-4 AVC/MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values:
   * 
   * *   **h264**
   * *   **h265**
   * *   **gif**
   * *   **webp**
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The tag of the encoding format.
   * 
   * @example
   * 0x31637661
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * avc1
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1001/48000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The level of color reconstruction.
   * 
   * @example
   * 700
   */
  colorPrimaries?: string;
  /**
   * @remarks
   * The color range.
   * 
   * @example
   * 700
   */
  colorRange?: string;
  /**
   * @remarks
   * The color channel.
   * 
   * @example
   * R255 G83 B170
   */
  colorTransfer?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR). DAR is the proportional relationship between the width and the height of a video. The value is used to determine whether the video is in portrait mode or landscape mode.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the video stream. Unit: seconds.
   * 
   * @example
   * 17.225542
   */
  duration?: string;
  durationInaccurate?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames). A value of 1 indicates that the video stream contains B-frames. A value of 0 indicates that the video stream does not contain B-frames.
   * 
   * @example
   * 0
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the video. Unit: pixel.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams. The sequence number of the first video stream to be played can be specified in some players. Default value: 1.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * eng
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
   * 
   * @example
   * 41
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth that is consumed.
   */
  networkCost?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 100
   */
  numFrames?: string;
  /**
   * @remarks
   * The pixel format.
   * 
   * @example
   * yuv420p
   */
  pixFmt?: string;
  /**
   * @remarks
   * The codec profile.
   * 
   * @example
   * High
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle of the video.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR).
   * 
   * @example
   * 1:1
   */
  sar?: string;
  /**
   * @remarks
   * The start time of the video stream.
   * 
   * @example
   * 0.042000
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/24000
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video. Unit: pixel.
   * 
   * @example
   * 1920
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFPS: 'AvgFPS',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      colorPrimaries: 'ColorPrimaries',
      colorRange: 'ColorRange',
      colorTransfer: 'ColorTransfer',
      dar: 'Dar',
      duration: 'Duration',
      durationInaccurate: 'DurationInaccurate',
      fps: 'Fps',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      networkCost: 'NetworkCost',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'StartTime',
      timebase: 'Timebase',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFPS: 'string',
      bitrate: 'string',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      colorPrimaries: 'string',
      colorRange: 'string',
      colorTransfer: 'string',
      dar: 'string',
      duration: 'string',
      durationInaccurate: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStreamNetworkCost,
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
      sar: 'string',
      startTime: 'string',
      timebase: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.networkCost && typeof (this.networkCost as any).validate === 'function') {
      (this.networkCost as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList extends $dara.Model {
  videoStream?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamListVideoStream },
    };
  }

  validate() {
    if(Array.isArray(this.videoStream)) {
      $dara.Model.validateArray(this.videoStream);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams extends $dara.Model {
  /**
   * @remarks
   * The audio streams. A media file can contain up to four audio streams.
   */
  audioStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList;
  /**
   * @remarks
   * The subtitle streams. A media file can contain up to four subtitle streams.
   */
  subtitleStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList;
  /**
   * @remarks
   * The video streams. A media file can contain up to four video streams.
   */
  videoStreamList?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsAudioStreamList,
      subtitleStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsSubtitleStreamList,
      videoStreamList: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreamsVideoStreamList,
    };
  }

  validate() {
    if(this.audioStreamList && typeof (this.audioStreamList as any).validate === 'function') {
      (this.audioStreamList as any).validate();
    }
    if(this.subtitleStreamList && typeof (this.subtitleStreamList as any).validate === 'function') {
      (this.subtitleStreamList as any).validate();
    }
    if(this.videoStreamList && typeof (this.videoStreamList as any).validate === 'function') {
      (this.videoStreamList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJobProperties extends $dara.Model {
  /**
   * @remarks
   * The bitrate. Unit: Kbit/s.
   * 
   * @example
   * 1630.045
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the input media file. Unit: seconds.
   * 
   * @example
   * 17.226000
   */
  duration?: string;
  /**
   * @remarks
   * The format of the input media file.
   * 
   * @example
   * QuickTime/MOV
   */
  fileFormat?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 3509895
   */
  fileSize?: string;
  /**
   * @remarks
   * The format information.
   */
  format?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The height of the video. Unit: pixel.
   * 
   * @example
   * 1080
   */
  height?: string;
  MD5?: string;
  /**
   * @remarks
   * The media streams that are contained in the input media file.
   */
  streams?: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams;
  /**
   * @remarks
   * The width of the video. Unit: pixel.
   * 
   * @example
   * 1920
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileFormat: 'FileFormat',
      fileSize: 'FileSize',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      MD5: 'MD5',
      streams: 'Streams',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileFormat: 'string',
      fileSize: 'string',
      format: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesFormat,
      fps: 'string',
      height: 'string',
      MD5: 'string',
      streams: SubmitMediaInfoJobResponseBodyMediaInfoJobPropertiesStreams,
      width: 'string',
    };
  }

  validate() {
    if(this.format && typeof (this.format as any).validate === 'function') {
      (this.format as any).validate();
    }
    if(this.streams && typeof (this.streams as any).validate === 'function') {
      (this.streams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBodyMediaInfoJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the job is run in asynchronous mode.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The error code returned if the job fails.
   * 
   * @example
   * InvalidParameter.JsonObjectFormatInvalid
   */
  code?: string;
  /**
   * @remarks
   * The time when the job was created.
   * 
   * @example
   * 2014-01-10T12:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about the input media file.
   */
  input?: SubmitMediaInfoJobResponseBodyMediaInfoJobInput;
  /**
   * @remarks
   * The ID of the job.
   * 
   * @example
   * 23ca1d184c0e4341e5b665e2a12****
   */
  jobId?: string;
  /**
   * @remarks
   * The message sent by Message Service (MNS) to notify users of the job result.
   */
  MNSMessageResult?: SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult;
  /**
   * @remarks
   * The error message returned if the job fails.
   * 
   * @example
   * The parameter ”*” does not conform to the JSON Object specification
   */
  message?: string;
  /**
   * @remarks
   * The ID of the MPS queue to which the analysis job is submitted.
   * 
   * @example
   * 88c6ca184c0e432bbf5b665e2a15****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The properties of the input media file.
   */
  properties?: SubmitMediaInfoJobResponseBodyMediaInfoJobProperties;
  /**
   * @remarks
   * The status of the job. Valid values:
   * 
   * *   **Success**: The job is successful.
   * *   **Fail**: The job fails.
   * *   **Analyzing**: The job is being run.
   * 
   * @example
   * Analyzing
   */
  state?: string;
  /**
   * @remarks
   * The custom data.
   * 
   * @example
   * testid-001
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      code: 'Code',
      creationTime: 'CreationTime',
      input: 'Input',
      jobId: 'JobId',
      MNSMessageResult: 'MNSMessageResult',
      message: 'Message',
      pipelineId: 'PipelineId',
      properties: 'Properties',
      state: 'State',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      code: 'string',
      creationTime: 'string',
      input: SubmitMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      MNSMessageResult: SubmitMediaInfoJobResponseBodyMediaInfoJobMNSMessageResult,
      message: 'string',
      pipelineId: 'string',
      properties: SubmitMediaInfoJobResponseBodyMediaInfoJobProperties,
      state: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.MNSMessageResult && typeof (this.MNSMessageResult as any).validate === 'function') {
      (this.MNSMessageResult as any).validate();
    }
    if(this.properties && typeof (this.properties as any).validate === 'function') {
      (this.properties as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitMediaInfoJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the media information analysis job.
   */
  mediaInfoJob?: SubmitMediaInfoJobResponseBodyMediaInfoJob;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62D9BE16-B7D5-550C-A482-7A0F60E09877
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: SubmitMediaInfoJobResponseBodyMediaInfoJob,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaInfoJob && typeof (this.mediaInfoJob as any).validate === 'function') {
      (this.mediaInfoJob as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

