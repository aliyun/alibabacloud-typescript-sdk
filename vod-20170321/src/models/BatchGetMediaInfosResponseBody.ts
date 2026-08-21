// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosResponseBodyMediaInfosMediaInfo extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 781111****
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL of the audio/video file.
   * 
   * @example
   * https://example.aliyundoc.com/****.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio/video file was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the audio/video file.
   * 
   * @example
   * Alibaba Cloud VOD video description
   */
  description?: string;
  /**
   * @remarks
   * The status of the offline download switch. After the offline download feature is enabled, mobile users can cache videos to their local devices for viewing by using ApsaraVideo Player. For more information, see [Offline download](https://help.aliyun.com/document_detail/86107.html). Valid values:
   * 
   * - **on**: Offline download is enabled.
   * - **off**: Offline download is disabled.
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 7753d144efd74d6c45fe0570****
   */
  mediaId?: string;
  /**
   * @remarks
   * The last time when the audio/video file was updated. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2017-06-26T06:38:48Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The ID must be 6 to 64 characters in length and is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The expiration time of the media asset restoration.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the media asset. Valid values:
   * - **Processing**: The media asset is being restored.
   * - **Success**: The media asset is restored.
   * - **Failed**: The media asset failed to be restored.
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The video snapshot URL array.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The video status. Valid values:
   * 
   * - **Uploading**: The video is being uploaded.
   * - **UploadFail**: The video failed to be uploaded.
   * - **UploadSucc**: The video has been uploaded.
   * - **Transcoding**: The video is being transcoded.
   * - **TranscodeFail**: The video failed to be transcoded.
   * - **Blocked**: The video is blocked.
   * - **Normal**: The video is in a normal state.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the media asset. Valid values:
   * - **Standard**: standard.
   * - **IA**: Infrequent Access for media assets.
   * - **Archive**: Archive for media assets.
   * - **ColdArchive**: Cold Archive for media assets.
   * - **SourceIA**: Infrequent Access for source files.
   * - **SourceArchive**: Archive for source files.
   * - **SourceColdArchive**: Cold Archive for source files.
   * - **Changing**: The storage class of the media asset is being changed.
   * - **SourceChanging**: The storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage address of the audio/video file.
   * 
   * @example
   * outin-***.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio/video file. Multiple tags are separated by commas (,).
   * 
   * @example
   * tag1, tag2
   */
  tags?: string;
  /**
   * @remarks
   * The transcoding template group ID.
   * 
   * @example
   * b4039216985f4312a5382a4ed****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The title of the audio/video file.
   * 
   * @example
   * Alibaba Cloud VOD Video Title
   */
  title?: string;
  /**
   * @remarks
   * The custom parameter.
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
   * The channel layout. Valid values:
   * 
   * - **mono**: mono.
   * - **stereo**: stereo.
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
   * The full name of the codec.
   * 
   * @example
   * AAC (Advanced Audio Coding)
   */
  codecLongName?: string;
  /**
   * @remarks
   * The short name of the codec.
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
   * 0x6134706d
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
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
   * 3.227574
   */
  duration?: string;
  /**
   * @remarks
   * The sequence number of the audio stream, which identifies the position of the audio stream in the overall media stream.
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
   * The sample format.
   * 
   * @example
   * fltp
   */
  sampleFmt?: string;
  /**
   * @remarks
   * The sample rate.
   * 
   * @example
   * 44100
   */
  sampleRate?: string;
  /**
   * @remarks
   * The start time. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
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
   * The bitrate of the file. Unit: Kbps.
   * 
   * @example
   * 500
   */
  bitrate?: string;
  /**
   * @remarks
   * The full name of the codec.
   * 
   * @example
   * H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10
   */
  codecLongName?: string;
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
   * The codec tag.
   * 
   * @example
   * 0x31637661
   */
  codecTag?: string;
  /**
   * @remarks
   * The codec tag string.
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
   * The display aspect ratio.
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
   * The target frame rate.
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
   * The height of the video resolution.
   * 
   * @example
   * 320
   */
  height?: string;
  /**
   * @remarks
   * The sequence number of the video stream, which identifies the position of the video stream in the overall media stream.
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
   * The video rotation angle. Valid values: [0, 360).
   * 
   * @example
   * 90
   */
  rotate?: string;
  /**
   * @remarks
   * The sample aspect ratio.
   * 
   * @example
   * 0:1
   */
  sar?: string;
  /**
   * @remarks
   * The start time. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
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
   * The width of the video resolution.
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
   * The audio stream information.
   */
  audioStreamList?: BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoAudioStreamList[];
  /**
   * @remarks
   * The bitrate of the file. Unit: Kbps.
   * 
   * @example
   * 771.2280
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the file was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
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
   * The file name.
   * 
   * @example
   * 27ffc438-164h67f57ef-0005-6884-51a-1****.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The URL of the source file.
   * 
   * @example
   * http://example-bucket-****.oss-cn-shanghai.aliyuncs.com/27ffc438-164h67f57ef-0005-6884-51a-1****.mp4
   */
  fileURL?: string;
  /**
   * @remarks
   * The frame rate of the file, in frames per second.
   * 
   * @example
   * 25.0000
   */
  fps?: string;
  /**
   * @remarks
   * The height of the file. Unit: px.
   * 
   * @example
   * 540
   */
  height?: number;
  /**
   * @remarks
   * The media asset ID.
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
   * The file status. Valid values:
   * 
   * - **Uploading**: The file is being uploaded. This is the initial status of the file.
   * - **Normal**: The file is uploaded.
   * - **UploadFail**: The file failed to be uploaded.
   * - **Deleted**: The file is deleted.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The video stream information.
   */
  videoStreamList?: BatchGetMediaInfosResponseBodyMediaInfosMezzanineInfoVideoStreamList[];
  /**
   * @remarks
   * The width of the file. Unit: px.
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
   * The color bit depth. The value is an integer.
   * 
   * @example
   * 8
   */
  bitDepth?: number;
  /**
   * @remarks
   * The bitrate of the media stream. Unit: Kbps.
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
   * The time when the stream was created. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2022-04-18T07:37:15Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The definition of the video stream. Valid values:
   * 
   * - **FD**: low definition.
   * - **LD**: standard definition.
   * - **SD**: high definition.
   * - **HD**: ultra high definition.
   * - **OD**: original quality.
   * - **2K**: 2K.
   * - **4K**: 4K.
   * - **SQ**: standard sound quality.
   * - **HQ**: high sound quality.
   * - **AUTO**: adaptive bitrate streaming.
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
   * Indicates whether the media stream is encrypted. Valid values:
   * 
   * - **0**: The stream is not encrypted.
   * - **1**: The stream is encrypted.
   * 
   * @example
   * 1
   */
  encrypt?: number;
  /**
   * @remarks
   * The encryption mode of the media stream. Valid values:
   * 
   * - **License**: local decryption mode.
   * 
   * > If the encryption mode is **License**, only ApsaraVideo Player SDK can be used for playback.
   * 
   * @example
   * License
   */
  encryptMode?: string;
  /**
   * @remarks
   * The encryption type of the media stream. Valid values:
   * 
   * - **AliyunVoDEncryption**: Alibaba Cloud video encryption.
   * - **HLSEncryption**: HLS encryption.
   * 
   * > If the encryption type is **AliyunVoDEncryption**, only ApsaraVideo Player SDK can be used for playback.
   * 
   * @example
   * AliyunVoDEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The format of the media stream.
   * - If the media file is a video, valid values are **mp4** and **m3u8**.
   * - If the media file is audio-only, the value is **mp3**.
   * 
   * @example
   * m3u8
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the media stream. Unit: frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The HDR type of the media stream. Valid values:
   * - HDR
   * - HDR10
   * - HLG
   * - DolbyVision
   * - HDRVivid
   * - SDR+
   * 
   * @example
   * HLG
   */
  HDRType?: string;
  /**
   * @remarks
   * The height of the media stream. Unit: px.
   * 
   * @example
   * 640
   */
  height?: number;
  /**
   * @remarks
   * The custom watermark information of the copyright watermark. This field is returned only when `JobType` is `2`.
   * 
   * @example
   * CopyrightMarkTest
   */
  jobExt?: string;
  /**
   * @remarks
   * The job ID of the media stream transcoding. This value serves as the unique identifier of the media stream.
   * 
   * @example
   * 80e9c6580e754a798c3c19c59b16****
   */
  jobId?: string;
  /**
   * @remarks
   * The digital watermarking type. Valid values:
   * - **1**: tracing watermark.
   * - **2**: copyright watermark.
   * 
   * @example
   * 2
   */
  jobType?: number;
  /**
   * @remarks
   * The time when the stream was last updated. The time is in the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2022-04-20T06:32:19Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The transcoding type. Valid values:
   * 
   * - **0**: standard transcoding.
   * - **1.0**: Narrowband HD 1.0 transcoding.
   * - **2.0**: Narrowband HD 2.0 transcoding.
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
   * The output specification of the audio/video transcoding. For more information about valid values and descriptions, see [Output specifications: Specification](~~124671#section-6bv-l0g-opq~~).
   * 
   * @example
   * H264.LD
   */
  specification?: string;
  /**
   * @remarks
   * The status of the media stream. Valid values:
   * 
   * - **Normal**: The stream is in a normal state. This value indicates the status of the latest transcoded stream for each definition and format.
   * - **Invisible**: The stream is invisible. When multiple duplicate transcoded streams exist for each definition and format, only the latest stream is marked as Normal, and the other streams are marked as Invisible.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The type of the media stream.
   * If the media stream is a video, the value is **video**. If the media stream is audio-only, the value is **audio**.
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The transcoding template group ID.
   * 
   * @example
   * fb0716154b21a4ecb5b70a26ccc8****
   */
  templateGroupId?: string;
  /**
   * @remarks
   * The transcoding template ID.
   * 
   * @example
   * a86a4338dd2e83da45154004a541****
   */
  templateId?: string;
  /**
   * @remarks
   * The watermark template ID associated with the current media stream.
   * 
   * @example
   * dgfn26457856****
   */
  watermarkId?: string;
  /**
   * @remarks
   * The width of the media stream. Unit: px.
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
   * The media asset ID.
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
   * The playback information (stream information) of the audio/video file.
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
   * The list of media asset IDs that are forbidden. This is typically because you do not have permissions for multi-application operations. For more information, see [Multi-application](https://help.aliyun.com/document_detail/113600.html).
   */
  forbiddenMediaIds?: string[];
  /**
   * @remarks
   * The media asset list.
   */
  mediaInfos?: BatchGetMediaInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * The list of media asset IDs that do not exist.
   */
  nonExistMediaIds?: string[];
  /**
   * @remarks
   * The list of custom IDs that do not exist.
   */
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

