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
   * The URL of the audio or video thumbnail.
   * > If you need to obtain the thumbnail URL in real time after a video is uploaded, you can configure VOD callbacks. For more information, refer to [HTTP callbacks](https://help.aliyun.com/document_detail/67214.html) and [Snapshot completion event](https://help.aliyun.com/document_detail/57337.html).
   * 
   * @example
   * http://example.aliyundoc.com/sample.jpg?auth_key=2333232-atb****
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio or video file was created. The time follows the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format. The time is displayed in UTC.
   * 
   * @example
   * 2017-06-26T06:38:48Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The URL of the live comment mask data.
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
   * - **video**: video.
   * - **audio**: audio-only.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The status of the audio or video file. For more information about the valid values and descriptions, refer to [Status: Audio and video status](~~52839#title-vqg-8cz-7p8~~).
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the media asset. Valid values:
   * 
   * - **Standard**: Standard.
   * - **IA**: Infrequent Access.
   * - **Archive**: Archive.
   * - **ColdArchive**: Cold Archive.
   * - **SourceIA**: Infrequent Access for mezzanine files.
   * - **SourceArchive**: Archive for mezzanine files.
   * - **SourceColdArchive**: Cold Archive for mezzanine files.
   * - **Changing**: The storage class of the media asset is being changed.
   * - **SourceChanging**: The storage class of the mezzanine file is being changed.
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
   * Alibaba Cloud VOD
   */
  title?: string;
  /**
   * @remarks
   * The ID of the audio or video file.
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
   * The request ID.
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

