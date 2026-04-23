// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoResponseBodyPlayInfoListPlayInfo extends $dara.Model {
  bitDepth?: number;
  bitrate?: string;
  codecName?: string;
  creationTime?: string;
  definition?: string;
  duration?: string;
  encrypt?: number;
  encryptMode?: string;
  encryptType?: string;
  format?: string;
  fps?: string;
  HDRType?: string;
  height?: number;
  jobExt?: string;
  jobId?: string;
  jobType?: number;
  modificationTime?: string;
  narrowBandType?: string;
  playURL?: string;
  size?: number;
  specification?: string;
  status?: string;
  streamType?: string;
  watermarkId?: string;
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

