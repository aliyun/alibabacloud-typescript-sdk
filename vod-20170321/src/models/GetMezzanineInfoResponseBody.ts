// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMezzanineInfoResponseBodyMezzanineAudioStreamList extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 62.885
   */
  bitrate?: string;
  /**
   * @remarks
   * The output layout of the sound channels. Valid values:
   * 
   * *   **mono**
   * *   **stereo**
   * 
   * @example
   * mono
   */
  channelLayout?: string;
  /**
   * @remarks
   * The number of sound channels.
   * 
   * @example
   * 1
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
   * The short name of the encoding format.
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
   * The duration of the audio file.
   * 
   * @example
   * 3.227574
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the audio stream. The value indicates the position of the audio stream in all audio streams.
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
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 1
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
   * The sampling rate of the audio stream.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time base of the audio stream.
   * 
   * @example
   * 0.000000
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
      numFrames: 'string',
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

export class GetMezzanineInfoResponseBodyMezzanineVideoStreamList extends $dara.Model {
  /**
   * @remarks
   * The average frame rate.
   * 
   * @example
   * 30.0
   */
  avgFPS?: string;
  /**
   * @remarks
   * The bitrate. Unit: Kbit/s.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the encoding format.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the encoding format.
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
   * 1/60
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR) of the video stream.
   * 
   * @example
   * 0:1
   */
  dar?: string;
  /**
   * @remarks
   * The duration of the audio file.
   * 
   * @example
   * 3.166667
   */
  duration?: string;
  /**
   * @remarks
   * The frame rate of the output file.
   * 
   * @example
   * 30.0
   */
  fps?: string;
  /**
   * @remarks
   * The HDR type of the video stream.
   * 
   * @example
   * HDR
   */
  HDRType?: string;
  /**
   * @remarks
   * Indicates whether the video stream contains B-frames.
   * 
   * @example
   * 0
   */
  hasBFrames?: string;
  /**
   * @remarks
   * The height of the video stream.
   * 
   * @example
   * 320
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream. The value indicates the position of the video stream in all video streams.
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
   * und
   */
  lang?: string;
  /**
   * @remarks
   * The codec level.
   * 
   * @example
   * 30
   */
  level?: string;
  /**
   * @remarks
   * The total number of frames.
   * 
   * @example
   * 0
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
   * Main
   */
  profile?: string;
  /**
   * @remarks
   * The rotation angle of the video. Valid values: **[0,360)**.
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio (SAR) of the video stream.
   * 
   * @example
   * 0:1
   */
  sar?: string;
  /**
   * @remarks
   * The beginning of the time range during which the data was queried. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time base of the audio stream.
   * 
   * @example
   * 0.000000
   */
  timebase?: string;
  /**
   * @remarks
   * The width of the video in pixels.
   * 
   * @example
   * 568
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
      HDRType: 'HDRType',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      lang: 'Lang',
      level: 'Level',
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
      HDRType: 'string',
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
      timebase: 'string',
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

export class GetMezzanineInfoResponseBodyMezzanine extends $dara.Model {
  /**
   * @remarks
   * The codec time base.
   */
  audioStreamList?: GetMezzanineInfoResponseBodyMezzanineAudioStreamList[];
  /**
   * @remarks
   * The bitrate of the file. Unit: Kbit/s.
   * 
   * @example
   * 771.2280
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The duration of the file. Unit: seconds.
   * 
   * @example
   * 42.4930
   */
  duration?: string;
  fileMD5?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 27ffc438-164h67f57ef-0005-6884-51a-1****.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the file.
   * 
   * @example
   * http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/27ffc438-164h67f57ef-0005-6884-51a-1****.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The frame rate of the file. Unit: frames per second.
   * 
   * @example
   * 25.0000
   */
  fps?: string;
  /**
   * @remarks
   * The height of the file. Unit: pixel.
   * 
   * @example
   * 540
   */
  height?: number;
  /**
   * @remarks
   * The type of the mezzanine file URL. Valid values:
   * 
   * - **oss**: OSS URL
   * - **cdn** (default): CDN URL
   * 
   * > If you specify an OSS URL for the video stream, the video stream must be in the MP4 format.
   * 
   * @example
   * oss
   */
  outputType?: string;
  /**
   * @remarks
   * The preprocess status od the media.
   * 
   * @example
   * UnPreprocess
   */
  preprocessStatus?: string;
  /**
   * @remarks
   * The period of time in which the object remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the audio or video file. Valid values:
   * 
   * *   **Processing**
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The size of the file. Unit: byte.
   * 
   * @example
   * 4096477
   */
  size?: number;
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   **Uploading**: The file is being uploaded. This is the initial status.
   * *   **Normal**: The file is uploaded.
   * *   **UploadFail**: The file fails to be uploaded.
   * *   **Deleted**: The file is deleted.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the audio file. Valid values:
   * 
   * *   **Standard**: All media resources are stored as Standard objects.
   * *   **IA**: All media resources are stored as IA objects.
   * *   **Archive**: All media resources are stored as Archive objects.
   * *   **ColdArchive**: All media resources are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source files are IA objects.
   * *   **SourceArchive**: Only the source files are Archive objects.
   * *   **SourceColdArchive**: Only the source files are Cold Archive objects.
   * *   **Changing**: The storage class of the audio file is being changed.
   * *   **SourceChanging**: The storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The ID of the video.
   * 
   * @example
   * 1f1a6fc03ca04814031b8a6559e****
   */
  videoId?: string;
  /**
   * @remarks
   * The HDR type of the video stream.
   */
  videoStreamList?: GetMezzanineInfoResponseBodyMezzanineVideoStreamList[];
  /**
   * @remarks
   * The width of the file. Unit: pixel.
   * 
   * @example
   * 960
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      audioStreamList: 'AudioStreamList',
      bitrate: 'Bitrate',
      creationTime: 'CreationTime',
      duration: 'Duration',
      fileMD5: 'FileMD5',
      fileName: 'FileName',
      fileURL: 'FileURL',
      fps: 'Fps',
      height: 'Height',
      outputType: 'OutputType',
      preprocessStatus: 'PreprocessStatus',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      size: 'Size',
      status: 'Status',
      storageClass: 'StorageClass',
      videoId: 'VideoId',
      videoStreamList: 'VideoStreamList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: { 'type': 'array', 'itemType': GetMezzanineInfoResponseBodyMezzanineAudioStreamList },
      bitrate: 'string',
      creationTime: 'string',
      duration: 'string',
      fileMD5: 'string',
      fileName: 'string',
      fileURL: 'string',
      fps: 'string',
      height: 'number',
      outputType: 'string',
      preprocessStatus: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      status: 'string',
      storageClass: 'string',
      videoId: 'string',
      videoStreamList: { 'type': 'array', 'itemType': GetMezzanineInfoResponseBodyMezzanineVideoStreamList },
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.audioStreamList)) {
      $dara.Model.validateArray(this.audioStreamList);
    }
    if(Array.isArray(this.videoStreamList)) {
      $dara.Model.validateArray(this.videoStreamList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMezzanineInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the source file.
   */
  mezzanine?: GetMezzanineInfoResponseBodyMezzanine;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mezzanine: 'Mezzanine',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mezzanine: GetMezzanineInfoResponseBodyMezzanine,
      requestId: 'string',
    };
  }

  validate() {
    if(this.mezzanine && typeof (this.mezzanine as any).validate === 'function') {
      (this.mezzanine as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

