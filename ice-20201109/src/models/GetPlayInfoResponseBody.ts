// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoResponseBodyMediaBase extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * - Log on to the [IMS console](https://ims.console.aliyun.com) and choose **Media Asset Management** > **Category Management** to view the category ID.
   * - When you create a category by calling the create category operation, the category ID is the value of CateId in the response.
   * - When you query a category by calling the get category operation, the category ID is the value of CateId in the response.
   * 
   * @example
   * 4220
   */
  cateId?: number;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://***.oss-cn-shanghai.aliyuncs.com/cover/281c64d6-b5fb-4c57-97cd-84da56a8b151_large_cover_url.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The creation time.
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
   * The media asset ID.
   * 
   * @example
   * 2eea77a61c7b4ddd95bec34a6f65b***
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * - A maximum of 16 tags are supported.
   * 
   * - Separate multiple tags with commas (,).
   * 
   * - Each tag can be up to 32 bytes in length.
   * 
   * - UTF-8 encoding is used.
   * 
   * @example
   * test,ccc
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media file type. Valid values:
   * 
   * video: video.
   * audio: audio only.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The resource status. Valid values:
   * 
   * - Init: The source file is not ready.
   * 
   * - Preparing: The source file is being prepared, for example, being uploaded or composed.
   * 
   * - PrepareFail: The source file failed to be prepared, for example, failed to obtain source file information.
   * 
   * - Normal: The source file is ready.
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
   * The color bit depth.
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
   * 20
   */
  bitrate?: string;
  /**
   * @remarks
   * The creation time. The time follows the format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-05-10T02:28:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The definition of the video stream. Valid values:
   * 
   * - **FD**: low definition.
   * - **LD**: standard definition.
   * - **SD**: high definition.
   * - **HD**: ultra-high definition.
   * - **OD**: original quality.
   * - **2K**: 2K.
   * - **4K**: 4K.
   * - **SQ**: standard sound quality.
   * - **HQ**: high sound quality.
   * - **AUTO**: adaptive bitrate.
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
   * - **0**: not encrypted.
   * - **1**: encrypted.
   * 
   * @example
   * 0
   */
  encrypt?: number;
  /**
   * @remarks
   * The encryption type of the media stream. Valid values:
   * 
   * - **AliyunVoDEncryption**: Alibaba Cloud video encryption.
   * - **HLSEncryption**: HLS standard encryption.
   * 
   * > If the encryption type is **AliyunVoDEncryption**, only the Alibaba Cloud Player SDK can be used for playback.
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
   * - If the media file is a video, valid values are **mp4** and **m3u8**.
   * - If the media file is audio only, the value is **mp3**.
   * 
   * @example
   * mp4
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
   * HDR
   */
  HDRType?: string;
  /**
   * @remarks
   * The height of the media stream. Unit: px.
   * 
   * @example
   * 1080
   */
  height?: number;
  /**
   * @remarks
   * The job ID.
   * 
   * @example
   * 36c9d38e70bf43ed9f7f8f48d6356***
   */
  jobId?: string;
  /**
   * @remarks
   * The modification time. The time follows the format: <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z (UTC).
   * 
   * @example
   * 2022-05-13T11:39:41.714+08:00
   */
  modificationTime?: string;
  /**
   * @remarks
   * The Narrowband HD type. Valid values:
   * 
   * - **0**: normal.
   * - **1.0**: Narrowband HD 1.0.
   * - **2.0**: Narrowband HD 2.0.
   * 
   * This parameter takes effect only when the definition of a Narrowband HD 1.0 built-in transcoding template is configured. For more information, see [Transcoding template configuration - Definition](https://help.aliyun.com/document_detail/52839.html).
   * 
   * @example
   * 0
   */
  narrowBandType?: string;
  /**
   * @remarks
   * The playback URL of the video stream.
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
   * The media stream status. Valid values:
   * 
   * - **Normal**: normal.
   * - **Invisible**: invisible.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The stream tag that identifies the transcoding processing type.
   * 
   * @example
   * "{\\"ims.audioServiceType\\": \\"AudioEnhancement\\"}"
   */
  streamTags?: string;
  /**
   * @remarks
   * The media stream type. If the media stream is a video, the value is **video**. If the media stream is audio only, the value is **audio**.
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The transcoding templatetype. Valid values:
   * - Normal: normal template.
   * - AudioTranscode: audio transcoding.
   * - Remux: encapsulation conversion.
   * - NarrowBandV1: Narrowband HD 1.0.
   * - NarrowBandV2: Narrowband HD 2.0.
   * - UHD: audio and video enhancement (ultra-high definition).
   * 
   * @example
   * Normal
   */
  transTemplateType?: string;
  /**
   * @remarks
   * The watermark ID associated with the current media stream.
   * 
   * @example
   * 5bed88672b1e2520ead228935ed51***
   */
  watermarkId?: string;
  /**
   * @remarks
   * The width of the media stream. Unit: px.
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
   * The media asset information.
   */
  mediaBase?: GetPlayInfoResponseBodyMediaBase;
  /**
   * @remarks
   * The audio or video playback information (stream information).
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

