// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaInfoJobsResponseBodyJobsInput extends $dara.Model {
  /**
   * @remarks
   * The media value:
   * 
   * - If type is set to OSS, the value is a URL that supports the OSS protocol and HTTP protocol.
   * - If type is set to Media, the value is a media asset ID.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The media object type.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 0.f
   */
  bitrate?: string;
  /**
   * @remarks
   * The channel layout.
   * 
   * @example
   * stereo
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of audio channels.
   * 
   * @example
   * 2
   */
  channels?: string;
  /**
   * @remarks
   * The codec format name.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The codec format.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   * 
   * @example
   * 0x000f
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * [15][0][0][0]
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
   * The duration. Unit: seconds.
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * The stream index.
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
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The sample format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sample rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/90000
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
      sampleFmt: 'SampleFmt',
      sampleRate: 'SampleRate',
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
      sampleFmt: 'string',
      sampleRate: 'string',
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

export class ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The video bitrate.
   * 
   * @example
   * 888.563
   */
  bitrate?: string;
  /**
   * @remarks
   * The video duration. Unit: seconds.
   * 
   * @example
   * 403.039999
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * file.m3u8
   */
  fileName?: string;
  /**
   * @remarks
   * The file size. Unit: bytes.
   * 
   * @example
   * 31737
   */
  fileSize?: string;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The file type. Valid values:
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The file URL.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/path/to/file.m3u8
   */
  fileUrl?: string;
  /**
   * @remarks
   * The video format name.
   * 
   * @example
   * hls,applehttp
   */
  formatName?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 4765337007f571edbfdf81848c01****
   */
  mediaId?: string;
  /**
   * @remarks
   * The region where the file is stored.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 848
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      mediaId: 'MediaId',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      mediaId: 'string',
      region: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 25.0
   */
  avgFps?: string;
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 888.563
   */
  bitRate?: string;
  /**
   * @remarks
   * The codec format name.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The codec format.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The codec tag.
   * 
   * @example
   * 0x001b
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
   * 
   * @example
   * [27][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The codec time base.
   * 
   * @example
   * 1/50
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
   * The duration. Unit: seconds.
   * 
   * @example
   * 403.039989
   */
  duration?: string;
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
   * Indicates whether B-frames exist. Valid values:
   * - 0: no B-frames.
   * - 1: one B-frame.
   * - 2: multiple consecutive B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The stream index.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language.
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The encoding level.
   * 
   * @example
   * 31
   */
  level?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 10040
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
   * The encoder profile.
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
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR).
   * 
   * @example
   * 478:477
   */
  sar?: string;
  /**
   * @remarks
   * The start time.
   * 
   * @example
   * 1.473556
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 1/90000
   */
  timeBase?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 848
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      avgFps: 'Avg_fps',
      bitRate: 'Bit_rate',
      codecLongName: 'Codec_long_name',
      codecName: 'Codec_name',
      codecTag: 'Codec_tag',
      codecTagString: 'Codec_tag_string',
      codecTimeBase: 'Codec_time_base',
      dar: 'Dar',
      duration: 'Duration',
      fps: 'Fps',
      hasBFrames: 'Has_b_frames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
      numFrames: 'NumFrames',
      pixFmt: 'PixFmt',
      profile: 'Profile',
      rotate: 'Rotate',
      sar: 'Sar',
      startTime: 'Start_time',
      timeBase: 'Time_base',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avgFps: 'string',
      bitRate: 'string',
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
      numFrames: 'string',
      pixFmt: 'string',
      profile: 'string',
      rotate: 'string',
      sar: 'string',
      startTime: 'string',
      timeBase: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsMediaInfoProperty extends $dara.Model {
  /**
   * @remarks
   * The audio stream information.
   */
  audioStreamInfoList?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo;
  /**
   * @remarks
   * The video stream information.
   */
  videoStreamInfoList?: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobsMediaInfoPropertyVideoStreamInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.audioStreamInfoList)) {
      $dara.Model.validateArray(this.audioStreamInfoList);
    }
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    if(Array.isArray(this.videoStreamInfoList)) {
      $dara.Model.validateArray(this.videoStreamInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobsScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f****
   */
  pipelineId?: string;
  /**
   * @remarks
   * The job priority. A larger value indicates a higher priority. Valid values: 1 to 10.
   * 
   * @example
   * 5
   */
  priority?: number;
  static names(): { [key: string]: string } {
    return {
      pipelineId: 'PipelineId',
      priority: 'Priority',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineId: 'string',
      priority: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the job is processed asynchronously.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The job completion time. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The job input.
   */
  input?: ListMediaInfoJobsResponseBodyJobsInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ab4802364a2e49208c99efab82df****
   */
  jobId?: string;
  /**
   * @remarks
   * The media information details.
   */
  mediaInfoProperty?: ListMediaInfoJobsResponseBodyJobsMediaInfoProperty;
  /**
   * @remarks
   * The job name.
   * 
   * @example
   * job-name
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4879B9DE-E4B6-19DC-91F5-9D5F4DCE4168
   */
  requestId?: string;
  /**
   * @remarks
   * The scheduling information.
   */
  scheduleConfig?: ListMediaInfoJobsResponseBodyJobsScheduleConfig;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Init
   */
  status?: string;
  /**
   * @remarks
   * The job submission information.
   */
  submitResultJson?: { [key: string]: any };
  /**
   * @remarks
   * The job submission time. The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The job source.
   * 
   * @example
   * API
   */
  triggerSource?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * user-data
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      finishTime: 'FinishTime',
      input: 'Input',
      jobId: 'JobId',
      mediaInfoProperty: 'MediaInfoProperty',
      name: 'Name',
      requestId: 'RequestId',
      scheduleConfig: 'ScheduleConfig',
      status: 'Status',
      submitResultJson: 'SubmitResultJson',
      submitTime: 'SubmitTime',
      triggerSource: 'TriggerSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      finishTime: 'string',
      input: ListMediaInfoJobsResponseBodyJobsInput,
      jobId: 'string',
      mediaInfoProperty: ListMediaInfoJobsResponseBodyJobsMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: ListMediaInfoJobsResponseBodyJobsScheduleConfig,
      status: 'string',
      submitResultJson: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      submitTime: 'string',
      triggerSource: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    if(this.mediaInfoProperty && typeof (this.mediaInfoProperty as any).validate === 'function') {
      (this.mediaInfoProperty as any).validate();
    }
    if(this.scheduleConfig && typeof (this.scheduleConfig as any).validate === 'function') {
      (this.scheduleConfig as any).validate();
    }
    if(this.submitResultJson) {
      $dara.Model.validateMap(this.submitResultJson);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaInfoJobsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of media information jobs.
   */
  jobs?: ListMediaInfoJobsResponseBodyJobs[];
  /**
   * @remarks
   * The token used to retrieve the next page. Leave this parameter empty for the first request. The token for the next page is returned after the first query.
   * 
   * @example
   * 019daf5780f74831b0e1a767c9f1c178
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 31E30781-9495-5E2D-A84D-759B0A01E262
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobs: 'Jobs',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobs: { 'type': 'array', 'itemType': ListMediaInfoJobsResponseBodyJobs },
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.jobs)) {
      $dara.Model.validateArray(this.jobs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

