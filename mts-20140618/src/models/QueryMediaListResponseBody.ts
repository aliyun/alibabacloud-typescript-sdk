// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryMediaListResponseBodyMediaListMediaFile extends $dara.Model {
  /**
   * @remarks
   * The status of the input file. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Deleted**: deleted
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The OSS URL of the input file.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoFormat extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 2659.326
   */
  bitrate?: string;
  /**
   * @remarks
   * The total duration.
   * 
   * @example
   * 7.965000
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
   * The short name of the container format. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
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
   * 2
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
   * The size of the file.
   * 
   * @example
   * 2647692
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 160.008
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
   * AAC(Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values: H264, mov, aac, avc, and mpeg.
   * 
   * @example
   * mov
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
   * The duration.
   * 
   * @example
   * 182.591995
   */
  duration?: string;
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
   * The language. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata).
   * 
   * @example
   * und
   */
  lang?: string;
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
   * The sampling format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 44100
   */
  samplerate?: string;
  /**
   * @remarks
   * The start time.
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList extends $dara.Model {
  audioStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream[];
  static names(): { [key: string]: string } {
    return {
      audioStream: 'AudioStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamListAudioStream },
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream extends $dara.Model {
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
   * The language. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata).
   * 
   * @example
   * und
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList extends $dara.Model {
  subtitleStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream[];
  static names(): { [key: string]: string } {
    return {
      subtitleStream: 'SubtitleStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      subtitleStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamListSubtitleStream },
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost extends $dara.Model {
  /**
   * @remarks
   * The average bitrate.
   * 
   * @example
   * 2659.326
   */
  avgBitrate?: string;
  /**
   * @remarks
   * The maximum bandwidth that was consumed.
   * 
   * @example
   * 100
   */
  costBandwidth?: string;
  /**
   * @remarks
   * The amount of preload time.
   * 
   * @example
   * 0.01
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 29.97003
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 2659.326
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * QuickTime/MOV
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
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
   * 1001/60000
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR).
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 182.683000
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 29.97003
   */
  fps?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains bidirectional frames (B-frames). A value of **1** indicates that the video stream contains B-frames. A value of **2** indicates that the video stream does not contain B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The latter number in the video resolution. The number indicates the video height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams.
   * 
   * @example
   * 5
   */
  index?: string;
  /**
   * @remarks
   * The language. For more information, see [FFmpeg documentation](https://www.ffmpeg.org/ffmpeg-all.html#Metadata).
   * 
   * @example
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
   * 
   * @example
   * 40
   */
  level?: string;
  /**
   * @remarks
   * The network bandwidth consumption.
   */
  networkCost?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 12
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
   * The video rotation angle.
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
   * The start time.
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
   * 1/30000
   */
  timebase?: string;
  /**
   * @remarks
   * The former number in the video resolution. The number indicates the video width.
   * 
   * @example
   * 100
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
      dar: 'Dar',
      duration: 'Duration',
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
      dar: 'string',
      duration: 'string',
      fps: 'string',
      hasBFrames: 'string',
      height: 'string',
      index: 'string',
      lang: 'string',
      level: 'string',
      networkCost: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStreamNetworkCost,
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList extends $dara.Model {
  videoStream?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream[];
  static names(): { [key: string]: string } {
    return {
      videoStream: 'VideoStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoStream: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamListVideoStream },
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfoStreams extends $dara.Model {
  /**
   * @remarks
   * The list of audio streams.
   */
  audioStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList;
  /**
   * @remarks
   * The list of subtitle streams.
   */
  subtitleStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList;
  /**
   * @remarks
   * The list of video streams.
   */
  videoStreamList?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      subtitleStreamList: 'SubtitleStreamList',
      videoStreamList: 'VideoStreamList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsAudioStreamList,
      subtitleStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsSubtitleStreamList,
      videoStreamList: QueryMediaListResponseBodyMediaListMediaMediaInfoStreamsVideoStreamList,
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

export class QueryMediaListResponseBodyMediaListMediaMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The format information.
   */
  format?: QueryMediaListResponseBodyMediaListMediaMediaInfoFormat;
  /**
   * @remarks
   * The stream information.
   */
  streams?: QueryMediaListResponseBodyMediaListMediaMediaInfoStreams;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      streams: 'Streams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: QueryMediaListResponseBodyMediaListMediaMediaInfoFormat,
      streams: QueryMediaListResponseBodyMediaListMediaMediaInfoStreams,
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

export class QueryMediaListResponseBodyMediaListMediaPlayListPlayFile extends $dara.Model {
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Deleted**: deleted
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the output file.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaPlayListPlay extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity.
   * 
   * @example
   * example-activity-****
   */
  activityName?: string;
  /**
   * @remarks
   * The bitrate of the media file.
   * 
   * @example
   * 2659.326
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration of the media file.
   * 
   * @example
   * 7.965000
   */
  duration?: string;
  /**
   * @remarks
   * Indicates whether the media file is encrypted. Valid values:
   * 
   * *   **0**: The media file is not encrypted.
   * *   **1**: The media file is encrypted.
   * 
   * @example
   * 0
   */
  encryption?: string;
  /**
   * @remarks
   * The playback file.
   */
  file?: QueryMediaListResponseBodyMediaListMediaPlayListPlayFile;
  /**
   * @remarks
   * The encoding format of the media file. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the media file.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The ID of the workflow that generates the playback file.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e91d24d****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the workflow that generates the playback file.
   * 
   * @example
   * example-mediaworkflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The size of the media file.
   * 
   * @example
   * 2647692
   */
  size?: string;
  /**
   * @remarks
   * The width of the media file.
   * 
   * @example
   * 760
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      bitrate: 'Bitrate',
      duration: 'Duration',
      encryption: 'Encryption',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      size: 'Size',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      bitrate: 'string',
      duration: 'string',
      encryption: 'string',
      file: QueryMediaListResponseBodyMediaListMediaPlayListPlayFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      size: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaPlayList extends $dara.Model {
  play?: QueryMediaListResponseBodyMediaListMediaPlayListPlay[];
  static names(): { [key: string]: string } {
    return {
      play: 'Play',
    };
  }

  static types(): { [key: string]: any } {
    return {
      play: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaPlayListPlay },
    };
  }

  validate() {
    if(Array.isArray(this.play)) {
      $dara.Model.validateArray(this.play);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaRunIdList extends $dara.Model {
  runId?: string[];
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.runId)) {
      $dara.Model.validateArray(this.runId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshotFile extends $dara.Model {
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * - **Normal**: normal
   * - **Deleted**: deleted
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The OSS URL of the snapshot.
   * 
   * @example
   * http://example1-bucket1-****.oss-cn-hangzhou.aliyuncs.com//example111-****.png
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity that generates the snapshot.
   * 
   * @example
   * example-activity1-****
   */
  activityName?: string;
  /**
   * @remarks
   * The number of snapshots. This parameter is valid only when the value of the **Type** parameter is **Sequence**.
   * 
   * @example
   * 5
   */
  count?: string;
  /**
   * @remarks
   * The snapshot.
   */
  file?: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshotFile;
  /**
   * @remarks
   * The ID of the workflow that generates the snapshot.
   * 
   * @example
   * 6cc3aa66d1cb4bb2adf14e726c0a****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the workflow that generates the snapshot.
   * 
   * @example
   * example-workflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The type of the snapshot. Valid values:
   * 
   * - **Single**
   * - **Sequence**
   * 
   * @example
   * Sequence
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      count: 'Count',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      count: 'string',
      file: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshotFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSnapshotList extends $dara.Model {
  snapshot?: QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot[];
  static names(): { [key: string]: string } {
    return {
      snapshot: 'Snapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      snapshot: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaSnapshotListSnapshot },
    };
  }

  validate() {
    if(Array.isArray(this.snapshot)) {
      $dara.Model.validateArray(this.snapshot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSummaryListSummaryFile extends $dara.Model {
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   **Normal**: normal
   * *   **Deleted**: deleted
   * 
   * @example
   * Normal
   */
  state?: string;
  /**
   * @remarks
   * The OSS URL of the input file.
   * 
   * @example
   * http://example-bucket-****.oss-cn-hangzhou.aliyuncs.com//example-****.mp4
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      state: 'State',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      state: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSummaryListSummary extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow activity.
   * 
   * @example
   * example-activity-****
   */
  activityName?: string;
  /**
   * @remarks
   * The information about the input file.
   */
  file?: QueryMediaListResponseBodyMediaListMediaSummaryListSummaryFile;
  /**
   * @remarks
   * The ID of the workflow that generates the summary.
   * 
   * @example
   * 93ab850b4f6f44eab54b6e91d24d****
   */
  mediaWorkflowId?: string;
  /**
   * @remarks
   * The name of the workflow that generates the summary.
   * 
   * @example
   * example-mediaworkflow-****
   */
  mediaWorkflowName?: string;
  /**
   * @remarks
   * The type of the summary. Valid values:
   * 
   * *   **Video**: video
   * *   **Gif**: dynamic image
   * 
   * @example
   * Video
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      activityName: 'ActivityName',
      file: 'File',
      mediaWorkflowId: 'MediaWorkflowId',
      mediaWorkflowName: 'MediaWorkflowName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityName: 'string',
      file: QueryMediaListResponseBodyMediaListMediaSummaryListSummaryFile,
      mediaWorkflowId: 'string',
      mediaWorkflowName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaSummaryList extends $dara.Model {
  summary?: QueryMediaListResponseBodyMediaListMediaSummaryListSummary[];
  static names(): { [key: string]: string } {
    return {
      summary: 'Summary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      summary: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMediaSummaryListSummary },
    };
  }

  validate() {
    if(Array.isArray(this.summary)) {
      $dara.Model.validateArray(this.summary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMediaTags extends $dara.Model {
  tag?: string[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaListMedia extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 2659.326
   */
  bitrate?: string;
  /**
   * @remarks
   * The ID of the category to which the media file belongs.
   * 
   * @example
   * 1
   */
  cateId?: number;
  /**
   * @remarks
   * The review status of the media file. Valid values:
   * 
   * *   **Initiated**: The media file is uploaded but not reviewed.
   * *   **Pass**: The media file is uploaded and passes the review.
   * 
   * @example
   * Initiated
   */
  censorState?: string;
  /**
   * @remarks
   * The OSS URL of the thumbnail.
   * 
   * @example
   * http://example-bucket1-****.oss-cn-hangzhou.aliyuncs.com//example-****.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media file was created.
   * 
   * @example
   * 2016-09-14T08:30:33Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is description ****
   */
  description?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 7.965000
   */
  duration?: string;
  /**
   * @remarks
   * The details of the input file.
   */
  file?: QueryMediaListResponseBodyMediaListMediaFile;
  /**
   * @remarks
   * The encoding format. Valid values: mov, mp4, m4a, 3gp, 3g2, and mj2.
   * 
   * @example
   * mov
   */
  format?: string;
  /**
   * @remarks
   * The frame rate.
   * 
   * @example
   * 25.0
   */
  fps?: string;
  /**
   * @remarks
   * The height of the media file.
   * 
   * @example
   * 1080
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * 3e1cd21131a94525be55acf65888****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media information.
   */
  mediaInfo?: QueryMediaListResponseBodyMediaListMediaMediaInfo;
  /**
   * @remarks
   * The playlist.
   */
  playList?: QueryMediaListResponseBodyMediaListMediaPlayList;
  /**
   * @remarks
   * The publishing status of the media file. Valid values:
   * 
   * - **Initiated**: The media file is in the initial state.
   * - **UnPublish**: The media file has not been published, and the playback permission on the OSS object is Private.
   * - **Published**: The media file has been published, and the playback permission on the OSS object is Default.
   * - **Deleted**: The media file has been deleted.
   * 
   * @example
   * Published
   */
  publishState?: string;
  /**
   * @remarks
   * The ID of the instance.
   */
  runIdList?: QueryMediaListResponseBodyMediaListMediaRunIdList;
  /**
   * @remarks
   * The size of the file.
   * 
   * @example
   * 2647692
   */
  size?: string;
  /**
   * @remarks
   * The list of snapshots.
   */
  snapshotList?: QueryMediaListResponseBodyMediaListMediaSnapshotList;
  /**
   * @remarks
   * The list of video summaries.
   */
  summaryList?: QueryMediaListResponseBodyMediaListMediaSummaryList;
  /**
   * @remarks
   * The tags of the media file.
   */
  tags?: QueryMediaListResponseBodyMediaListMediaTags;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * example-title-****
   */
  title?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 1920
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      cateId: 'CateId',
      censorState: 'CensorState',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      file: 'File',
      format: 'Format',
      fps: 'Fps',
      height: 'Height',
      mediaId: 'MediaId',
      mediaInfo: 'MediaInfo',
      playList: 'PlayList',
      publishState: 'PublishState',
      runIdList: 'RunIdList',
      size: 'Size',
      snapshotList: 'SnapshotList',
      summaryList: 'SummaryList',
      tags: 'Tags',
      title: 'Title',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      cateId: 'number',
      censorState: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'string',
      file: QueryMediaListResponseBodyMediaListMediaFile,
      format: 'string',
      fps: 'string',
      height: 'string',
      mediaId: 'string',
      mediaInfo: QueryMediaListResponseBodyMediaListMediaMediaInfo,
      playList: QueryMediaListResponseBodyMediaListMediaPlayList,
      publishState: 'string',
      runIdList: QueryMediaListResponseBodyMediaListMediaRunIdList,
      size: 'string',
      snapshotList: QueryMediaListResponseBodyMediaListMediaSnapshotList,
      summaryList: QueryMediaListResponseBodyMediaListMediaSummaryList,
      tags: QueryMediaListResponseBodyMediaListMediaTags,
      title: 'string',
      width: 'string',
    };
  }

  validate() {
    if(this.file && typeof (this.file as any).validate === 'function') {
      (this.file as any).validate();
    }
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    if(this.playList && typeof (this.playList as any).validate === 'function') {
      (this.playList as any).validate();
    }
    if(this.runIdList && typeof (this.runIdList as any).validate === 'function') {
      (this.runIdList as any).validate();
    }
    if(this.snapshotList && typeof (this.snapshotList as any).validate === 'function') {
      (this.snapshotList as any).validate();
    }
    if(this.summaryList && typeof (this.summaryList as any).validate === 'function') {
      (this.summaryList as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyMediaList extends $dara.Model {
  media?: QueryMediaListResponseBodyMediaListMedia[];
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: { 'type': 'array', 'itemType': QueryMediaListResponseBodyMediaListMedia },
    };
  }

  validate() {
    if(Array.isArray(this.media)) {
      $dara.Model.validateArray(this.media);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBodyNonExistMediaIds extends $dara.Model {
  mediaId?: string[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.mediaId)) {
      $dara.Model.validateArray(this.mediaId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryMediaListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of media files.
   */
  mediaList?: QueryMediaListResponseBodyMediaList;
  /**
   * @remarks
   * The IDs of the media files that do not exist. This parameter is not returned when all specified media files exist.
   */
  nonExistMediaIds?: QueryMediaListResponseBodyNonExistMediaIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 283DC68C-146F-4489-A2A1-2F88F1472A56
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      nonExistMediaIds: 'NonExistMediaIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: QueryMediaListResponseBodyMediaList,
      nonExistMediaIds: QueryMediaListResponseBodyNonExistMediaIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaList && typeof (this.mediaList as any).validate === 'function') {
      (this.mediaList as any).validate();
    }
    if(this.nonExistMediaIds && typeof (this.nonExistMediaIds as any).validate === 'function') {
      (this.nonExistMediaIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

