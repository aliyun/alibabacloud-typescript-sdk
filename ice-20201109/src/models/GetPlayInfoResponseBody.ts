// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoResponseBodyMediaBase extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [Intelligent Media Services (IMS) console](https://ims.console.aliyun.com) and choose **Media Asset Management** > **Category Management** to view the category ID.
   * *   View the value of the CateId parameter returned by the AddCategory operation that you called to create a category.
   * *   View the value of the CateId parameter returned by the GetCategories operation that you called to query a category.
   * 
   * @example
   * 4220
   */
  cateId?: number;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/cover/281c64d6-b5fb-4c57-97cd-84da56a8b151_large_cover_url.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2021-09-22T10:07:31+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The content description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 2eea77a61c7b4ddd95bec34a6f65b***
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * *   Up to 16 tags are supported.
   * *   Multiple tags are separated by commas (,).
   * *   Each tag can be up to 32 bytes in length.
   * *   The value is encoded in UTF-8.
   * 
   * @example
   * test,ccc
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * video audio
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * Init: the initial state, which indicates that the source file is not ready.
   * 
   * Preparing: The source file is being prepared. For example, the file is being uploaded or edited.
   * 
   * PrepareFail: The source file failed to be prepared. For example, the information of the source file failed to be obtained.
   * 
   * Normal: The source file is ready.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * testTitle
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      status: 'Status',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      status: 'string',
      title: 'string',
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
  /**
   * @remarks
   * The color depth.
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
   * 20
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the media stream was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-10T02:28:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The quality of the media stream. Valid values:
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
   * HD
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
   * 0
   */
  encrypt?: number;
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
   * The OSS URL of the file.
   * 
   * @example
   * http://outin-***.oss-cn-shanghai.aliyuncs.com/sv/43a68ee9-181809b6aba/43a68ee9-181809b6aba.mpeg
   */
  fileURL?: string;
  /**
   * @remarks
   * The format of the media stream.
   * 
   * *   If the media asset is a video file, the valid values are **mp4** and **m3u8**.
   * *   If the media asset is an audio-only file, the value is **mp3**.
   * 
   * @example
   * mp4
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
   * The high dynamic range (HDR) type of the media stream. Valid values:
   * 
   * *   HDR
   * *   HDR10
   * *   HLG
   * *   DolbyVision
   * *   HDRVivid
   * *   SDR+
   * 
   * @example
   * HDR
   */
  HDRType?: string;
  /**
   * @remarks
   * The height of the media stream. Unit: pixels.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 36c9d38e70bf43ed9f7f8f48d6356***
   */
  jobId?: string;
  /**
   * @remarks
   * The time when the media stream was updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-13T11:39:41.714+08:00
   */
  modificationTime?: string;
  /**
   * @remarks
   * The type of Narrowband HD™ transcoding. Valid values:
   * 
   * *   **0**: standard transcoding
   * *   **1.0**: Narrowband HD™ 1.0 transcoding
   * *   **2.0**: Narrowband HD™ 2.0 transcoding
   * 
   * This parameter is returned only when a definition that is available in the built-in Narrowband HD™ 1.0 transcoding template is specified. For more information, see the [Definition parameter in TranscodeTemplate](https://help.aliyun.com/document_detail/52839.html) table.
   * 
   * @example
   * 0
   */
  narrowBandType?: string;
  /**
   * @remarks
   * The playback URL of the media stream.
   * 
   * @example
   * https://***.aliyuncdn.com/sv/756bee1-17f980f0945/756bee1-17f980f0945.mp4
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
   * The status of the media stream. Valid values:
   * 
   * *   **Normal**
   * *   **Invisible**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The tags of the media stream, which are used to identify the transcoding type.
   * 
   * @example
   * "{\\"ims.audioServiceType\\": \\"AudioEnhancement\\"}"
   */
  streamTags?: string;
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
   * The type of the transcoding template. Valid values:
   * 
   * *   Normal: standard transcoding
   * *   AudioTranscode: audio transcoding
   * *   Remux: container format conversion
   * *   NarrowBandV1: Narrowband HD™ 1.0
   * *   NarrowBandV2: Narrowband HD™ 2.0
   * *   UHD: audio and video enhancement (ultra-high definition)
   * 
   * @example
   * Normal
   */
  transTemplateType?: string;
  /**
   * @remarks
   * The ID of the watermark that is associated with the media stream.
   * 
   * @example
   * 5bed88672b1e2520ead228935ed51***
   */
  watermarkId?: string;
  /**
   * @remarks
   * The width of the media stream. Unit: pixels.
   * 
   * @example
   * 1024
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitDepth: 'BitDepth',
      bitrate: 'Bitrate',
      creationTime: 'CreationTime',
      definition: 'Definition',
      duration: 'Duration',
      encrypt: 'Encrypt',
      encryptType: 'EncryptType',
      fileURL: 'FileURL',
      format: 'Format',
      fps: 'Fps',
      HDRType: 'HDRType',
      height: 'Height',
      jobId: 'JobId',
      modificationTime: 'ModificationTime',
      narrowBandType: 'NarrowBandType',
      playURL: 'PlayURL',
      size: 'Size',
      status: 'Status',
      streamTags: 'StreamTags',
      streamType: 'StreamType',
      transTemplateType: 'TransTemplateType',
      watermarkId: 'WatermarkId',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitDepth: 'number',
      bitrate: 'string',
      creationTime: 'string',
      definition: 'string',
      duration: 'string',
      encrypt: 'number',
      encryptType: 'string',
      fileURL: 'string',
      format: 'string',
      fps: 'string',
      HDRType: 'string',
      height: 'number',
      jobId: 'string',
      modificationTime: 'string',
      narrowBandType: 'string',
      playURL: 'string',
      size: 'number',
      status: 'string',
      streamTags: 'string',
      streamType: 'string',
      transTemplateType: 'string',
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

export class GetPlayInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the media asset.
   */
  mediaBase?: GetPlayInfoResponseBodyMediaBase;
  /**
   * @remarks
   * The information about the audio or video stream.
   */
  playInfoList?: GetPlayInfoResponseBodyPlayInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaBase: 'MediaBase',
      playInfoList: 'PlayInfoList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaBase: GetPlayInfoResponseBodyMediaBase,
      playInfoList: { 'type': 'array', 'itemType': GetPlayInfoResponseBodyPlayInfoList },
      requestId: 'string',
    };
  }

  validate() {
    if(this.mediaBase && typeof (this.mediaBase as any).validate === 'function') {
      (this.mediaBase as any).validate();
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

