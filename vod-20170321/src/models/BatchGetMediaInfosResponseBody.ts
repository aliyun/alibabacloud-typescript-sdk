// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosResponseBodyMediaInfosMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 781111****
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * CateName
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the media asset.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   * 
   * @example
   * Aliyun VOD Video Description
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the offline download feature is enabled. If you enable the offline download feature, users can download and play videos by using the ApsaraVideo Player on a local PC. For more information, see [Configure download settings](https://help.aliyun.com/document_detail/86107.html). Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 7753d144efd74d6c45fe0570****
   */
  mediaId?: string;
  /**
   * @remarks
   * The time when the media asset was last updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-06-26T06:38:48Z
   */
  modificationTime?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The period of time in which the audio file remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the media asset. Valid values:
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
   * The array of video snapshot URLs.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The status of the video. Valid values:
   * 
   * *   **Uploading**
   * *   **UploadFail**
   * *   **UploadSucc**
   * *   **Transcoding**
   * *   **TranscodeFail**
   * *   **Blocked**
   * *   **Normal**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **Standard**: All media assets are stored as Standard objects.
   * *   **IA**: All media assets are stored as IA objects.
   * *   **Archive**: All media assets are stored as Archive objects.
   * *   **ColdArchive**: All media assets are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source files are IA objects.
   * *   **SourceArchive**: Only the source files are Archive objects.
   * *   **SourceColdArchive**: Only the source file is stored as a Cold Archive object.
   * *   **Changing**: The storage class of the media asset is being changed.
   * *   **SourceChanging**: The storage class of the media asset is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage address of the media asset.
   * 
   * @example
   * outin-***.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the media asset. Separate tags with commas (,).
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * b4039216985f4312a5382a4ed****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the media asset.
   * 
   * @example
   * Aliyun VOD Video Title
   */
  title?: string;
  /**
   * @remarks
   * The custom parameters.
   * 
   * @example
   * {"Extend":"xxx","MessageCallback":"xxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      referenceId: 'ReferenceId',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      snapshots: 'Snapshots',
      status: 'Status',
      storageClass: 'StorageClass',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      templateGroupId: 'TemplateGroupId',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      downloadSwitch: 'string',
      mediaId: 'string',
      modificationTime: 'string',
      referenceId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageClass: 'string',
      storageLocation: 'string',
      tags: 'string',
      templateGroupId: 'string',
      title: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoAudioStreamList extends $dara.Model {
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
   * The output layout of the audio channels. Valid values:
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
   * The number of sound tracks.
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
   * The time base of the encoder.
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
   * The sampling rate.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
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

export class BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoVideoStreamList extends $dara.Model {
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
   * The bitrate of the file. Unit: Kbit/s.
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
   * The time base of the encoder.
   * 
   * @example
   * 1/60
   */
  codecTimeBase?: string;
  /**
   * @remarks
   * The display aspect ratio (DAR).
   * 
   * @example
   * 0:1
   */
  dar?: string;
  /**
   * @remarks
   * The duration.
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
   * Indicates whether the video stream contains bidirectional frames (B-frames).
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
   * The sequence number of the video stream. The value identifies the position of the video stream in all video streams.
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
   * The pixel format of the video stream.
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
   * The rotation angle of the video. Valid values: [0,360).
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
   * 0:1
   */
  sar?: string;
  /**
   * @remarks
   * The start time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-01-11T12:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time base.
   * 
   * @example
   * 0.000000
   */
  timebase?: string;
  /**
   * @remarks
   * The horizontal resolution of the video.
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

export class BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfo extends $dara.Model {
  /**
   * @remarks
   * The information about the audio stream.
   */
  audioStreamList?: BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoAudioStreamList[];
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
   * The time when the source file was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
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
   * The OSS URL of the source file.
   * 
   * @example
   * http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/27ffc438-164h67f57ef-0005-6884-51a-1****.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The frame rate of the file.
   * 
   * @example
   * 25.0000
   */
  fps?: string;
  /**
   * @remarks
   * The height of the file. Unit: pixels.
   * 
   * @example
   * 540
   */
  height?: number;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 1f1a6fc03ca04814031b8a6559e****
   */
  mediaId?: string;
  /**
   * @remarks
   * The size of the file. Unit: bytes.
   * 
   * @example
   * 4096477
   */
  size?: number;
  /**
   * @remarks
   * The state of the file. Valid values:
   * 
   * *   **Uploading**: The file is being uploaded. This is the initial status.
   * *   **Normal**: The file is uploaded.
   * *   **UploadFail**: The file failed to be uploaded.
   * *   **Deleted**: The file is deleted.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The information about the video streams.
   */
  videoStreamList?: BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoVideoStreamList[];
  /**
   * @remarks
   * The width of the file. Unit: pixels.
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
      mediaId: 'MediaId',
      size: 'Size',
      status: 'Status',
      videoStreamList: 'VideoStreamList',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audioStreamList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoAudioStreamList },
      bitrate: 'string',
      creationTime: 'string',
      duration: 'string',
      fileMD5: 'string',
      fileName: 'string',
      fileURL: 'string',
      fps: 'string',
      height: 'number',
      mediaId: 'string',
      size: 'number',
      status: 'string',
      videoStreamList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoVideoStreamList },
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

export class BatchGetMediaInfosResponseBodyMediaInfosPlayInfoList extends $dara.Model {
  /**
   * @remarks
   * The color depth. This value is an integer.
   * 
   * @example
   * 8
   */
  bitDepth?: number;
  /**
   * @remarks
   * The bitrate of the media stream. Unit: Kbit/s.
   * 
   * @example
   * 450.878
   */
  bitrate?: string;
  /**
   * @remarks
   * The short name of the codec.
   * 
   * @example
   * h264
   */
  codecName?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-18T07:37:15Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The quality of the video stream. Valid values:
   * 
   * *   **FD**: low definition
   * *   **LD**: standard definition
   * *   **SD**: high definition
   * *   **HD**: ultra-high definition
   * *   **OD**: original definition
   * *   **2K**
   * *   **4K**
   * *   **SQ**: standard sound quality
   * *   **HQ**: high sound quality
   * *   **AUTO**: adaptive bitrate
   * 
   * @example
   * LD
   */
  definition?: string;
  /**
   * @remarks
   * The duration of the media stream. Unit: seconds.
   * 
   * @example
   * 9.0464
   */
  duration?: string;
  /**
   * @remarks
   * Indicates whether the media stream was encrypted. Valid values:
   * 
   * *   **0**: The media stream is not encrypted.
   * *   **1**: The media stream is encrypted.
   * 
   * @example
   * 1
   */
  encrypt?: number;
  /**
   * @remarks
   * The encryption type of the media stream. Valid values:
   * 
   * *   **License**: decryption on local devices.
   * 
   * >  If the encryption type is **License**, only ApsaraVideo Player SDK can be used to play videos.
   * 
   * @example
   * License
   */
  encryptMode?: string;
  /**
   * @remarks
   * The encryption type of the media stream. Valid values:
   * 
   * *   **AliyunVoDEncryption**: Alibaba Cloud proprietary cryptography
   * *   **HLSEncryption**: HTTP Live Streaming (HLS) encryption
   * 
   * >  If the encryption type is AliyunVoDEncryption, only ApsaraVideo Player SDK can be used to play videos.
   * 
   * @example
   * AliyunVoDEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The format of the media stream.
   * 
   * *   If the media file is a video file, the valid values are **mp4** and **m3u8**.
   * *   If the media asset is an audio-only file, the value is **mp3**.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the media stream. Unit: frames per second (FPS).
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The HDR type of the media stream. Valid values:
   * 
   * *   HDR
   * *   HDR10
   * *   HLG
   * *   DolbyVision
   * *   HDRVivid
   * *   SDR+
   * 
   * @example
   * HLG
   */
  HDRType?: string;
  /**
   * @remarks
   * The height of the media stream. Unit: pixels.
   * 
   * @example
   * 640
   */
  height?: number;
  /**
   * @remarks
   * The custom watermark information of the copyright watermark. This parameter is returned if you set `JobType` to `2`.
   * 
   * @example
   * CopyrightMarkTest
   */
  jobExt?: string;
  /**
   * @remarks
   * The job ID for transcoding the media stream. This ID uniquely identifies a media stream.
   * 
   * @example
   * 80e9c6580e754a798c3c19c59b16****
   */
  jobId?: string;
  /**
   * @remarks
   * The type of the digital watermark. Valid values:
   * 
   * *   **1**: user-tracing watermark
   * *   **2**: copyright watermark
   * 
   * @example
   * 2
   */
  jobType?: number;
  /**
   * @remarks
   * The update time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-04-20T06:32:19Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The transcoding type. Valid values:
   * 
   * *   **0**: regular transcoding
   * *   **1.0**: Narrowband HD™ 1.0 transcoding
   * *   **2.0**: Narrowband HD™ 2.0 transcoding
   * 
   * @example
   * 0
   */
  narrowBandType?: string;
  /**
   * @remarks
   * The playback URL of the video stream.
   */
  playURL?: string;
  /**
   * @remarks
   * The size of the media stream. Unit: bytes.
   * 
   * @example
   * 418112
   */
  size?: number;
  /**
   * @remarks
   * The specifications of transcoded audio and video streams. For more information about the valid values, see [Output specifications](~~124671#section-6bv-l0g-opq~~).
   * 
   * @example
   * H264.LD
   */
  specification?: string;
  /**
   * @remarks
   * The status of the audio or video stream. Valid values:
   * 
   * *   **Normal**: The latest transcoded stream in each quality and format is in the Normal status.
   * *   **Invisible**: If multiple streams are transcoded in the same quality and format, the latest transcoded stream is in the Normal status and other streams are in the Invisible status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The type of the media stream. If the media stream is a video stream, the value is **video**. If the media stream is an audio-only stream, the value is **audio**.
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * fb0716154b21a4ecb5b70a26ccc8****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The ID of the transcoding template.
   * 
   * @example
   * a86a4338dd2e83da45154004a541****
   */
  templateId?: string;
  /**
   * @remarks
   * The ID of the watermark that is associated with the media stream.
   * 
   * @example
   * dgfn26457856****
   */
  watermarkId?: string;
  /**
   * @remarks
   * The width of the media stream. Unit: pixels.
   * 
   * @example
   * 360
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitDepth: 'BitDepth',
      bitrate: 'Bitrate',
      codecName: 'CodecName',
      creationTime: 'CreationTime',
      definition: 'Definition',
      duration: 'Duration',
      encrypt: 'Encrypt',
      encryptMode: 'EncryptMode',
      encryptType: 'EncryptType',
      format: 'Format',
      fps: 'Fps',
      HDRType: 'HDRType',
      height: 'Height',
      jobExt: 'JobExt',
      jobId: 'JobId',
      jobType: 'JobType',
      modificationTime: 'ModificationTime',
      narrowBandType: 'NarrowBandType',
      playURL: 'PlayURL',
      size: 'Size',
      specification: 'Specification',
      status: 'Status',
      streamType: 'StreamType',
      templateGroupId: 'TemplateGroupId',
      templateId: 'TemplateId',
      watermarkId: 'WatermarkId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitDepth: 'number',
      bitrate: 'string',
      codecName: 'string',
      creationTime: 'string',
      definition: 'string',
      duration: 'string',
      encrypt: 'number',
      encryptMode: 'string',
      encryptType: 'string',
      format: 'string',
      fps: 'string',
      HDRType: 'string',
      height: 'number',
      jobExt: 'string',
      jobId: 'string',
      jobType: 'number',
      modificationTime: 'string',
      narrowBandType: 'string',
      playURL: 'string',
      size: 'number',
      specification: 'string',
      status: 'string',
      streamType: 'string',
      templateGroupId: 'string',
      templateId: 'string',
      watermarkId: 'string',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 10a5fa364a5b71ef89246733a78e****
   */
  mediaId?: string;
  /**
   * @remarks
   * The basic information of the media asset.
   */
  mediaInfo?: BatchGetMediaInfosResponseBodyMediaInfosMediaInfo;
  /**
   * @remarks
   * The source file information.
   */
  mezzanineInfo?: BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfo;
  /**
   * @remarks
   * The information about the audio or video stream.
   */
  playInfoList?: BatchGetMediaInfosResponseBodyMediaInfosPlayInfoList[];
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      mediaInfo: 'MediaInfo',
      mezzanineInfo: 'MezzanineInfo',
      playInfoList: 'PlayInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      mediaInfo: BatchGetMediaInfosResponseBodyMediaInfosMediaInfo,
      mezzanineInfo: BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfo,
      playInfoList: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfosPlayInfoList },
    };
  }

  validate() {
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    if(this.mezzanineInfo && typeof (this.mezzanineInfo as any).validate === 'function') {
      (this.mezzanineInfo as any).validate();
    }
    if(Array.isArray(this.playInfoList)) {
      $dara.Model.validateArray(this.playInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of the media assets that do not support the operation typically because you are not authorized to perform the operation. For more information, see [Overview](https://help.aliyun.com/document_detail/113600.html).
   */
  forbiddenMediaIds?: string[];
  /**
   * @remarks
   * Details about media assets.
   */
  mediaInfos?: BatchGetMediaInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * The IDs of the media assets that do not exist.
   */
  nonExistMediaIds?: string[];
  nonExistReferenceIds?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E290613-04F4-47F4-795D30732077****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      forbiddenMediaIds: 'ForbiddenMediaIds',
      mediaInfos: 'MediaInfos',
      nonExistMediaIds: 'NonExistMediaIds',
      nonExistReferenceIds: 'NonExistReferenceIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forbiddenMediaIds: { 'type': 'array', 'itemType': 'string' },
      mediaInfos: { 'type': 'array', 'itemType': BatchGetMediaInfosResponseBodyMediaInfos },
      nonExistMediaIds: { 'type': 'array', 'itemType': 'string' },
      nonExistReferenceIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenMediaIds)) {
      $dara.Model.validateArray(this.forbiddenMediaIds);
    }
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    if(Array.isArray(this.nonExistMediaIds)) {
      $dara.Model.validateArray(this.nonExistMediaIds);
    }
    if(Array.isArray(this.nonExistReferenceIds)) {
      $dara.Model.validateArray(this.nonExistReferenceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

