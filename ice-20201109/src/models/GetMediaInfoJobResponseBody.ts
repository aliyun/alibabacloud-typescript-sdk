// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaInfoJobResponseBodyMediaInfoJobInput extends $dara.Model {
  /**
   * @remarks
   * The media object. If Type is set to OSS, the URL of an OSS object is returned. Both the OSS and HTTP protocols are supported. If Type is set to Media, the ID of a media asset is returned.
   * 
   * @example
   * oss://bucket/path/to/video.mp4
   */
  media?: string;
  /**
   * @remarks
   * The type of the media object. Valid values:
   * 
   * *   OSS: an Object Storage Service (OSS) object.
   * *   Media: a media asset.
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

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList extends $dara.Model {
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
   * The sound channel layout.
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
   * The name of the encoding format.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The encoding format.
   * 
   * @example
   * aac
   */
  codecName?: string;
  /**
   * @remarks
   * The encoder tag.
   * 
   * @example
   * 0x000f
   */
  codecTag?: string;
  /**
   * @remarks
   * The name of the encoder tag.
   * 
   * @example
   * [15][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the encoder.
   * 
   * @example
   * 1/44100
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The duration of the stream. Unit: seconds.
   * 
   * @example
   * 403.039989
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the stream.
   * 
   * @example
   * 1
   */
  index?: string;
  /**
   * @remarks
   * The language of the stream.
   * 
   * @example
   * us
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
   * The sampling rate. Unit: Hz.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time of the stream.
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

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo extends $dara.Model {
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
   * The duration of the video. Unit: seconds.
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
   * The file size.
   * 
   * @example
   * 31737
   */
  fileSize?: string;
  /**
   * @remarks
   * The state of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The URL of the file.
   * 
   * @example
   * http://bucket.oss-cn-shanghai.aliyuncs.com/path/to/file.m3u8
   */
  fileUrl?: string;
  /**
   * @remarks
   * The name of the video format.
   * 
   * @example
   * hls,applehttp
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * e520090207114cc7a392d44f0b211574
   */
  mediaId?: string;
  /**
   * @remarks
   * The region in which the file resides.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width of the output video.
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

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList extends $dara.Model {
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
   * The name of the encoding format.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The encoding format.
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
   * 0x001b
   */
  codecTag?: string;
  /**
   * @remarks
   * The tag string of the encoding format.
   * 
   * @example
   * [27][0][0][0]
   */
  codecTagString?: string;
  /**
   * @remarks
   * The time base of the encoder.
   * 
   * @example
   * 1/50
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio.
   * 
   * @example
   * 16:9
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the file.
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
   * Indicates whether the video stream contains bidirectional frames (B-frames). Valid values:
   * 
   * *   0: The stream contains no B-frames.
   * *   1: The stream contains one B-frame.
   * *   2: The stream contains multiple consecutive B-frames.
   * 
   * @example
   * 2
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the output video.
   * 
   * @example
   * 478
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the stream.
   * 
   * @example
   * 0
   */
  index?: string;
  /**
   * @remarks
   * The language of the stream.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
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
   * The rotation angle of the video image.
   * 
   * @example
   * 0
   */
  rotate?: string;
  /**
   * @remarks
   * The aspect ratio of the area from which the sampling points are collected.
   * 
   * @example
   * 478:477
   */
  sar?: string;
  /**
   * @remarks
   * The start time of the stream.
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
   * The width of the output video.
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

export class GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamInfoList?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList[];
  /**
   * @remarks
   * The basic file information.
   */
  fileBasicInfo?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo;
  /**
   * @remarks
   * The information about the video stream.
   */
  videoStreamInfoList?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList[];
  static names(): { [key: string]: string } {
    return {
      audioStreamInfoList: 'AudioStreamInfoList',
      fileBasicInfo: 'FileBasicInfo',
      videoStreamInfoList: 'VideoStreamInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyAudioStreamInfoList },
      fileBasicInfo: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyFileBasicInfo,
      videoStreamInfoList: { 'type': 'array', 'itemType': GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoPropertyVideoStreamInfoList },
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

export class GetMediaInfoJobResponseBodyMediaInfoJobScheduleConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the MPS queue to which the job was submitted.
   * 
   * @example
   * e37ebee5d98b4781897f6086e89f9c56
   */
  pipelineId?: string;
  /**
   * @remarks
   * The priority of the job. Valid values: 1 to 10. The greater the value, the higher the priority.
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

export class GetMediaInfoJobResponseBodyMediaInfoJob extends $dara.Model {
  /**
   * @remarks
   * Indicates whether asynchronous processing was performed.
   * 
   * @example
   * true
   */
  async?: boolean;
  /**
   * @remarks
   * The time when the job was complete.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  finishTime?: string;
  /**
   * @remarks
   * The input of the job.
   */
  input?: GetMediaInfoJobResponseBodyMediaInfoJobInput;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * ab4802364a2e49208c99efab82dfa8e8
   */
  jobId?: string;
  /**
   * @remarks
   * The details of the media information.
   */
  mediaInfoProperty?: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty;
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
  scheduleConfig?: GetMediaInfoJobResponseBodyMediaInfoJobScheduleConfig;
  /**
   * @remarks
   * The state of the job. Valid values: Init (the job is submitted), Success (the job is successful), and Fail (the job failed).
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
   * The time when the job was submitted.
   * 
   * @example
   * 2022-01-12T08:49:41Z
   */
  submitTime?: string;
  /**
   * @remarks
   * The source of the job. Valid values: API, WorkFlow, and Console.
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
      input: GetMediaInfoJobResponseBodyMediaInfoJobInput,
      jobId: 'string',
      mediaInfoProperty: GetMediaInfoJobResponseBodyMediaInfoJobMediaInfoProperty,
      name: 'string',
      requestId: 'string',
      scheduleConfig: GetMediaInfoJobResponseBodyMediaInfoJobScheduleConfig,
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

export class GetMediaInfoJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * MediaInfoJobDTO
   */
  mediaInfoJob?: GetMediaInfoJobResponseBodyMediaInfoJob;
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
      mediaInfoJob: 'MediaInfoJob',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaInfoJob: GetMediaInfoJobResponseBodyMediaInfoJob,
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

