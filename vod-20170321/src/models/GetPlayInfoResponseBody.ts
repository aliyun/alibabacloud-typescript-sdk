// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoResponseBodyPlayInfoListPlayInfo extends $dara.Model {
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
   * The encoding type. The possible values are:
   * 
   * - H264
   * 
   * - H265
   * 
   * @example
   * H264
   */
  codecName?: string;
  /**
   * @remarks
   * The time when the audio or video stream was created. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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
   * Indicates whether the media stream is encrypted. Valid values:
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
   * *   **License**: decryption on local devices
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
   * *   **HLSEncryption**: HTTP-Live-Streaming (HLS) encryption
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
   * The frame rate of the media stream. Unit: frames per second.
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
   * The time when the audio or video file was last updated. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
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

export class GetPlayInfoResponseBodyPlayInfoList extends $dara.Model {
  playInfo?: GetPlayInfoResponseBodyPlayInfoListPlayInfo[];
  static names(): { [key: string]: string } {
    return {
      playInfo: 'PlayInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfo: { 'type': 'array', 'itemType': GetPlayInfoResponseBodyPlayInfoListPlayInfo },
    };
  }

  validate() {
    if(Array.isArray(this.playInfo)) {
      $dara.Model.validateArray(this.playInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBodyVideoBase extends $dara.Model {
  /**
   * @remarks
   * The thumbnail URL of the audio or video file.
   * 
   * @example
   * http://example.aliyundoc.com/sample.jpg?auth_key=2333232-atb****
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio or video file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-06-26T06:38:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the masked live comment data.
   * 
   * @example
   * http://example.aliyundoc.com/****?auth_key=abdf2123-6783232****
   */
  danMuURL?: string;
  /**
   * @remarks
   * The duration of the audio or video file. Unit: seconds.
   * 
   * @example
   * 3.1667
   */
  duration?: string;
  /**
   * @remarks
   * The type of the media file. Valid values:
   * 
   * *   **video**
   * *   **audio**
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The status of the media file. For more information about the value range and description, see the [Status](~~52839#title-vqg-8cz-7p8~~) table.
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
   * *   **SourceColdArchive**: Only the source file is stored as a Cold Archive object.
   * *   **Changing**: The storage class of the video file is being changed.
   * *   **SourceChanging**: The storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The title of the audio or video file.
   * 
   * @example
   * ApsaraVideo VOD
   */
  title?: string;
  /**
   * @remarks
   * The ID of the media file.
   * 
   * @example
   * 93ab850b4f654b6e91d24d81d44****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      danMuURL: 'DanMuURL',
      duration: 'Duration',
      mediaType: 'MediaType',
      status: 'Status',
      storageClass: 'StorageClass',
      title: 'Title',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      creationTime: 'string',
      danMuURL: 'string',
      duration: 'string',
      mediaType: 'string',
      status: 'string',
      storageClass: 'string',
      title: 'string',
      videoId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPlayInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the audio or video stream.
   */
  playInfoList?: GetPlayInfoResponseBodyPlayInfoList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F552E596-967D-5500-842F-17E6364****
   */
  requestId?: string;
  /**
   * @remarks
   * The basic information about the audio or video file.
   */
  videoBase?: GetPlayInfoResponseBodyVideoBase;
  static names(): { [key: string]: string } {
    return {
      playInfoList: 'PlayInfoList',
      requestId: 'RequestId',
      videoBase: 'VideoBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playInfoList: GetPlayInfoResponseBodyPlayInfoList,
      requestId: 'string',
      videoBase: GetPlayInfoResponseBodyVideoBase,
    };
  }

  validate() {
    if(this.playInfoList && typeof (this.playInfoList as any).validate === 'function') {
      (this.playInfoList as any).validate();
    }
    if(this.videoBase && typeof (this.videoBase as any).validate === 'function') {
      (this.videoBase as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

