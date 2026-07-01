// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPlayInfoResponseBodyMediaBase extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID in one of the following ways:
   * 
   * - Log on to the [IMS console](https://ims.console.aliyun.com) and choose **media asset management** > **category management** to view the category ID.
   * 
   * - The create category operation returns the category ID in the `CateId` parameter.
   * 
   * - The get category operation returns the category ID in the `CateId` parameter.
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
   * The time when the media asset was created.
   * 
   * @example
   * 2021-09-22T10:07:31+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
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
   * - You can add up to 16 tags.
   * 
   * - Separate multiple tags with commas (,).
   * 
   * - The maximum length of a tag is 32 bytes.
   * 
   * - Tags must be UTF-8 encoded.
   * 
   * @example
   * test,ccc
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media file. Valid values:
   * 
   * `video`: A video file. `audio`: An audio-only file.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The status of the media asset. Valid values:
   * 
   * - `Init`: The source file is not ready.
   * 
   * - `Preparing`: The source file is being prepared. This process may involve uploading or compositing.
   * 
   * - `PrepareFail`: Preparation of the source file failed. For example, the system failed to retrieve the source file metadata.
   * 
   * - `Normal`: The source file is ready.
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
   * The bitrate of the media stream in Kbit/s.
   * 
   * @example
   * 20
   */
  bitrate?: string;
  /**
   * @remarks
   * The creation time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-10T02:28:49Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The definition of the video stream. Valid values:
   * 
   * - **FD**: fluent
   * 
   * - **LD**: standard definition
   * 
   * - **SD**: high definition
   * 
   * - **HD**: ultra-high definition
   * 
   * - **OD**: original
   * 
   * - **2K**
   * 
   * - **4K**
   * 
   * - **SQ**: standard-quality audio
   * 
   * - **HQ**: high-quality audio
   * 
   * - **AUTO**: adaptive bitrate
   * 
   * @example
   * HD
   */
  definition?: string;
  /**
   * @remarks
   * The duration of the media stream in seconds.
   * 
   * @example
   * 9.0464
   */
  duration?: string;
  /**
   * @remarks
   * Indicates whether the media stream is encrypted. Valid values:
   * 
   * - **0**: No.
   * 
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  encrypt?: number;
  /**
   * @remarks
   * The encryption type of the media stream. Valid values:
   * 
   * - **AliyunVoDEncryption**: Alibaba Cloud VoD Encryption.
   * 
   * - **HLSEncryption**: HLS standard encryption.
   * 
   * > If a stream is encrypted with **AliyunVoDEncryption**, you can play it only with the Alibaba Cloud Player SDK.
   * 
   * @example
   * AliyunVoDEncryption
   */
  encryptType?: string;
  /**
   * @remarks
   * The OSS file URL.
   * 
   * @example
   * http://outin-***.oss-cn-shanghai.aliyuncs.com/sv/43a68ee9-181809b6aba/43a68ee9-181809b6aba.mpeg
   */
  fileURL?: string;
  /**
   * @remarks
   * The format of the media stream.
   * 
   * - For video streams, valid values are **mp4** and **m3u8**.
   * 
   * - For audio-only streams, the value is **mp3**.
   * 
   * @example
   * mp4
   */
  format?: string;
  /**
   * @remarks
   * The frame rate of the media stream in frames per second.
   * 
   * @example
   * 25
   */
  fps?: string;
  /**
   * @remarks
   * The High Dynamic Range (HDR) type of the media stream. Valid values:
   * 
   * - HDR
   * 
   * - HDR10
   * 
   * - HLG
   * 
   * - DolbyVision
   * 
   * - HDRVivid
   * 
   * - SDR+
   * 
   * @example
   * HDR
   */
  HDRType?: string;
  /**
   * @remarks
   * The height of the media stream in pixels.
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
   * The last modification time. The time is in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-05-13T11:39:41.714+08:00
   */
  modificationTime?: string;
  /**
   * @remarks
   * The Narrowband HD type. Valid values:
   * 
   * - **0**: regular.
   * 
   * - **1.0**: Narrowband HD 1.0.
   * 
   * - **2.0**: Narrowband HD 2.0.
   * 
   * This parameter applies only if a definition is configured in the built-in transcoding template for Narrowband HD 1.0. For more information, see [Configure transcoding templates - Definition](https://help.aliyun.com/document_detail/52839.html).
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
   * The size of the media stream in bytes.
   * 
   * @example
   * 418112
   */
  size?: number;
  /**
   * @remarks
   * The media stream status. Valid values:
   * 
   * - **Normal**: The stream is available.
   * 
   * - **Invisible**: The stream is not visible.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The stream tags, which are used to identify the transcoding type.
   * 
   * @example
   * "{\\"ims.audioServiceType\\": \\"AudioEnhancement\\"}"
   */
  streamTags?: string;
  /**
   * @remarks
   * The type of the media stream. The value is **video** for video streams or **audio** for audio-only streams.
   * 
   * @example
   * video
   */
  streamType?: string;
  /**
   * @remarks
   * The type of the transcoding template. Valid values:
   * 
   * - `Normal`: regular transcoding
   * 
   * - `AudioTranscode`: audio transcoding
   * 
   * - `Remux`: remuxing
   * 
   * - `NarrowBandV1`: Narrowband HD 1.0
   * 
   * - `NarrowBandV2`: Narrowband HD 2.0
   * 
   * - `UHD`: audio and video enhancement (ultra-high definition)
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
   * The width of the media stream in pixels.
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
   * The basic information about the media asset.
   */
  mediaBase?: GetPlayInfoResponseBodyMediaBase;
  /**
   * @remarks
   * A list of audio or video playback streams.
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

