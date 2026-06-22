// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Address } from "./Address";
import { Image } from "./Image";
import { AudioStream } from "./AudioStream";
import { CroppingSuggestion } from "./CroppingSuggestion";
import { Element } from "./Element";
import { Figure } from "./Figure";
import { ImageScore } from "./ImageScore";
import { Insights } from "./Insights";
import { Label } from "./Label";
import { OCRContents } from "./Ocrcontents";
import { SceneElement } from "./SceneElement";
import { SubtitleStream } from "./SubtitleStream";
import { VideoStream } from "./VideoStream";


export class File extends $dara.Model {
  /**
   * @remarks
   * The allowed origins for cross-origin requests.
   * 
   * @example
   * https://aliyundoc.com
   */
  accessControlAllowOrigin?: string;
  /**
   * @remarks
   * The allowed methods for the cross-origin request.
   * 
   * @example
   * PUT
   */
  accessControlRequestMethod?: string;
  /**
   * @remarks
   * The address information.
   */
  addresses?: Address[];
  /**
   * @remarks
   * The album.
   * 
   * @example
   * FirstAlbum
   */
  album?: string;
  /**
   * @remarks
   * The album artist.
   * 
   * @example
   * Jane
   */
  albumArtist?: string;
  /**
   * @remarks
   * The artist.
   * 
   * @example
   * Jane
   */
  artist?: string;
  /**
   * @remarks
   * The cover images for the audio.
   */
  audioCovers?: Image[];
  /**
   * @remarks
   * A list of audio streams.
   */
  audioStreams?: AudioStream[];
  /**
   * @remarks
   * The bitrate, in bit/s.
   * 
   * @example
   * 13091201
   */
  bitrate?: number;
  /**
   * @remarks
   * The web cache behavior that the browser should use when the object is downloaded.
   * 
   * This parameter is returned only if the Cache-Control HTTP header is set for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * no-cache
   */
  cacheControl?: string;
  /**
   * @remarks
   * The composer.
   * 
   * @example
   * Jane
   */
  composer?: string;
  /**
   * @remarks
   * The name of the object when it is downloaded.
   * 
   * This parameter is returned only if the Content-Disposition HTTP header is set for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * attachment; filename =test.jpg
   */
  contentDisposition?: string;
  /**
   * @remarks
   * The content encoding format of the object when it is downloaded.
   * 
   * This parameter is returned only if the Content-Encoding HTTP header is set for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * UTF-8
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The language of the object content.
   * 
   * This parameter is returned only if the Content-Language HTTP header is set for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * zh-CN
   */
  contentLanguage?: string;
  /**
   * @remarks
   * The MD5 hash of the object content.
   * 
   * @example
   * HZwoCnxPZ/fvhz4oRJ2+Fw==
   */
  contentMd5?: string;
  /**
   * @remarks
   * The content type of the file (MIME type).
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The time when the metadata was created. The time is in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The cropping suggestions for the image.
   * 
   * > This feature is not supported.
   */
  croppingSuggestions?: CroppingSuggestion[];
  /**
   * @remarks
   * The custom ID of the file, which you can use to associate the file with an ID in your business system. When the file is indexed into a dataset, this ID is stored as a metadata attribute. We recommend using a globally unique value.
   * 
   * @example
   * member-image-id-0001
   */
  customId?: string;
  /**
   * @remarks
   * Custom key-value labels for the file. This parameter is optional and can be used to store business-specific data and to filter queries.
   * 
   * @example
   * {
   *       "MemberName": "Tim",
   *       "Enabled": "True",
   *       "ItemCount": "10"
   * }
   */
  customLabels?: { [key: string]: any };
  /**
   * @remarks
   * The dataset name. For more information, see [Create a dataset](https://help.aliyun.com/document_detail/478160.html).
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The total duration of the video, in seconds.
   * 
   * @example
   * 15.263000
   */
  duration?: number;
  /**
   * @remarks
   * An ETag is generated when an object is created. The ETag identifies the content of an object.
   * 
   * @example
   * "1D9C280A7C4F67F7EF873E28449****"
   */
  ETag?: string;
  /**
   * @remarks
   * The original EXIF information of the image, stored as a serialized JSON object. For more information, see [Obtain image information](https://help.aliyun.com/document_detail/44975.html).
   * 
   * @example
   * {"Compression":{"value":"6"},"DateTime":{"value":"2020:08:19 17:11:11"}}
   */
  EXIF?: string;
  /**
   * @remarks
   * A list of document fragments that match the current search content when you use the SemanticQuery API to perform a semantic search.
   */
  elements?: Element[];
  /**
   * @remarks
   * The number of figures.
   * 
   * @example
   * 10
   */
  figureCount?: number;
  /**
   * @remarks
   * A list of figures detected by the AI model.
   */
  figures?: Figure[];
  /**
   * @remarks
   * The time when the file was last accessed. The time is in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  fileAccessTime?: string;
  /**
   * @remarks
   * The time when the file was created. The time is in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The hash of the file.
   * 
   * @example
   * 1d9c280a7c4f67f7ef873e28449dbe17
   */
  fileHash?: string;
  /**
   * @remarks
   * The time when the file was last modified. The time is in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  fileModifiedTime?: string;
  /**
   * @remarks
   * The name of the file. For an OSS object, this parameter is the ObjectKey.
   * 
   * @example
   * sampleobject.jpg
   */
  filename?: string;
  /**
   * @remarks
   * The full name of the media format.
   * 
   * @example
   * QuickTime / MOV
   */
  formatLongName?: string;
  /**
   * @remarks
   * The name of the media format.
   * 
   * @example
   * mov
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the image, in pixels (px).
   * 
   * @example
   * 500
   */
  imageHeight?: number;
  /**
   * @remarks
   * The image score information, detected by an AI model.
   */
  imageScore?: ImageScore;
  /**
   * @remarks
   * The width of the image, in pixels (px).
   * 
   * @example
   * 270
   */
  imageWidth?: number;
  /**
   * @remarks
   * Summary and description of the file.
   * 
   * > Currently not supported
   * 
   * **if can be null:**
   * true
   */
  insights?: Insights;
  /**
   * @remarks
   * A list of AI-detected labels for the file.
   */
  labels?: Label[];
  /**
   * @remarks
   * The language in BCP 47 format.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The GPS latitude and longitude.
   * 
   * @example
   * 30.134390,120.074997
   */
  latLong?: string;
  /**
   * @remarks
   * The media type of the file.
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * The OCR results.
   * 
   * > This feature is not supported.
   */
  OCRContents?: OCRContents[];
  /**
   * @remarks
   * The text detected in the image.
   * 
   * @example
   * 阿里云IMM
   */
  OCRTexts?: string;
  /**
   * @remarks
   * The CRC-64 value of the object.
   * 
   * @example
   * 559890638950338001
   */
  OSSCRC64?: string;
  /**
   * @remarks
   * The OSS delete marker.
   * 
   * @example
   * CAEQMhiBgIDXiaaB0BYiIGQzYmRkZGUxMTM1ZDRjOTZhNjk4YjRjMTAyZjhl****
   */
  OSSDeleteMarker?: string;
  /**
   * @remarks
   * The expiration time of the OSS object.
   * 
   * This parameter is returned only if the Expires HTTP header is set for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * 2120-01-01T12:00:00.000Z
   */
  OSSExpiration?: string;
  /**
   * @remarks
   * The type of the OSS object. A common value is `Normal`.
   * 
   * @example
   * Normal
   */
  OSSObjectType?: string;
  /**
   * @remarks
   * The storage class of the OSS object.
   * 
   * @example
   * Standard
   */
  OSSStorageClass?: string;
  /**
   * @remarks
   * The tags of the OSS object.
   * 
   * For more information, see [Object tagging](https://help.aliyun.com/document_detail/106678.html).
   * 
   * @example
   * {"key": "val"}
   */
  OSSTagging?: { [key: string]: any };
  /**
   * @remarks
   * The number of tags on the OSS object.
   * 
   * This parameter is returned only if tags are set for the OSS object. For more information, see [Object tagging](https://help.aliyun.com/document_detail/106678.html).
   * 
   * @example
   * 2
   */
  OSSTaggingCount?: number;
  /**
   * @remarks
   * The URI of the OSS file. This parameter is returned only if the URI is a PDS address.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  OSSURI?: string;
  /**
   * @remarks
   * The user-defined metadata of the OSS object.
   * 
   * This parameter is returned only if user-defined metadata is set for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * {"key": "val"}
   */
  OSSUserMeta?: { [key: string]: any };
  /**
   * @remarks
   * The version ID of the OSS object.
   * 
   * This parameter is returned only if versioning is enabled for the bucket. For more information, see [Overview of versioning](https://help.aliyun.com/document_detail/109695.html).
   * 
   * @example
   * CAEQNhiBgMDJgZCA0BYiIDc4MGZjZGI2OTBjOTRmNTE5NmU5NmFhZjhjYmY0****
   */
  OSSVersionId?: string;
  /**
   * @remarks
   * The access control list (ACL) of the OSS object.
   * 
   * @example
   * default
   */
  objectACL?: string;
  /**
   * @remarks
   * The unique ID of the object.
   * 
   * @example
   * 75d5de2c50754e3dadd5c35dbca5f9949369e37eb342a73821f690c94c36c7f7
   */
  objectId?: string;
  /**
   * @remarks
   * File index status.
   * 
   * @example
   * Indexed
   */
  objectStatus?: string;
  /**
   * @remarks
   * The type of the object. The value is always **file**.
   * 
   * @example
   * file
   */
  objectType?: string;
  /**
   * @remarks
   * The rotation value of the image, read from its EXIF data.
   * 
   * This parameter is returned only if this value is available in the EXIF data.
   * 
   * @example
   * 0
   */
  orientation?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 102321002467****
   */
  ownerId?: string;
  /**
   * @remarks
   * The number of pages.
   * 
   * > This feature is not supported.
   * 
   * @example
   * 5
   */
  pageCount?: number;
  /**
   * @remarks
   * The performer.
   * 
   * @example
   * Jane
   */
  performer?: string;
  /**
   * @remarks
   * The time when the photo was taken.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  produceTime?: string;
  /**
   * @remarks
   * The number of programs in the media container.
   * 
   * @example
   * 1
   */
  programCount?: number;
  /**
   * @remarks
   * The project name. For more information, see [Create a project](https://help.aliyun.com/document_detail/478153.html).
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The reason the file failed to be indexed.
   * 
   * @example
   * [InternalError] The request has been failed due to some unknown error. status: 500, requestId: CC5ACFBD-BB7A-496D-A9D6-****
   */
  reason?: string;
  /**
   * @remarks
   * A list of scene elements extracted from the video by the AI model during analysis.
   */
  sceneElements?: SceneElement[];
  /**
   * @remarks
   * Indicates why this file was returned when you use the SemanticQuery API to perform a semantic search.
   */
  semanticTypes?: string[];
  /**
   * @remarks
   * The encryption algorithm of the object.
   * 
   * This parameter is returned only if server-side encryption is enabled for the bucket. For more information, see [Server-side encryption](https://help.aliyun.com/document_detail/31871.html).
   * 
   * @example
   * SM4
   */
  serverSideDataEncryption?: string;
  /**
   * @remarks
   * The server-side encryption method.
   * 
   * This parameter is returned only if server-side encryption is enabled for the bucket. For more information, see [Server-side encryption](https://help.aliyun.com/document_detail/31871.html).
   * 
   * @example
   * AES256
   */
  serverSideEncryption?: string;
  /**
   * @remarks
   * The encryption algorithm used for server-side encryption with customer-provided keys.
   * 
   * @example
   * SM4
   */
  serverSideEncryptionCustomerAlgorithm?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) that is managed by KMS.
   * 
   * This parameter is returned only if server-side encryption is enabled for the bucket. For more information, see [Server-side encryption](https://help.aliyun.com/document_detail/31871.html).
   * 
   * @example
   * 9468da86-3509-4f8d-a61e-6eab1eac****
   */
  serverSideEncryptionKeyId?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 1000
   */
  size?: number;
  /**
   * @remarks
   * The start time of the first frame, in seconds.
   * 
   * @example
   * 0.000000
   */
  startTime?: number;
  /**
   * @remarks
   * The number of media streams in the media container.
   * 
   * @example
   * 1
   */
  streamCount?: number;
  /**
   * @remarks
   * A list of subtitle streams.
   */
  subtitles?: SubtitleStream[];
  /**
   * @remarks
   * The timezone.
   * 
   * > This feature is not supported.
   * 
   * @example
   * ""
   */
  timezone?: string;
  /**
   * @remarks
   * The title of the file.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * A reserved parameter.
   * 
   * > This feature is not supported.
   * 
   * @example
   * -
   */
  travelClusterId?: string;
  /**
   * @remarks
   * The address of the file.
   * 
   * An OSS URI must be in the `oss://${Bucket}/${Object}` format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the full path to the object, including the file extension.
   * 
   * A PDS URI must be in the `pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision}` format.
   * 
   * @example
   * oss://test-bucket/test-object.jpg
   */
  URI?: string;
  /**
   * @remarks
   * The time when the metadata was last updated. The time is in the RFC3339Nano format.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The height of the video, in pixels (px).
   * 
   * @example
   * 1920
   */
  videoHeight?: number;
  /**
   * @remarks
   * A list of video streams.
   */
  videoStreams?: VideoStream[];
  /**
   * @remarks
   * The width of the video, in pixels (px).
   * 
   * @example
   * 1080
   */
  videoWidth?: number;
  static names(): { [key: string]: string } {
    return {
      accessControlAllowOrigin: 'AccessControlAllowOrigin',
      accessControlRequestMethod: 'AccessControlRequestMethod',
      addresses: 'Addresses',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      artist: 'Artist',
      audioCovers: 'AudioCovers',
      audioStreams: 'AudioStreams',
      bitrate: 'Bitrate',
      cacheControl: 'CacheControl',
      composer: 'Composer',
      contentDisposition: 'ContentDisposition',
      contentEncoding: 'ContentEncoding',
      contentLanguage: 'ContentLanguage',
      contentMd5: 'ContentMd5',
      contentType: 'ContentType',
      createTime: 'CreateTime',
      croppingSuggestions: 'CroppingSuggestions',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      duration: 'Duration',
      ETag: 'ETag',
      EXIF: 'EXIF',
      elements: 'Elements',
      figureCount: 'FigureCount',
      figures: 'Figures',
      fileAccessTime: 'FileAccessTime',
      fileCreateTime: 'FileCreateTime',
      fileHash: 'FileHash',
      fileModifiedTime: 'FileModifiedTime',
      filename: 'Filename',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      imageHeight: 'ImageHeight',
      imageScore: 'ImageScore',
      imageWidth: 'ImageWidth',
      insights: 'Insights',
      labels: 'Labels',
      language: 'Language',
      latLong: 'LatLong',
      mediaType: 'MediaType',
      OCRContents: 'OCRContents',
      OCRTexts: 'OCRTexts',
      OSSCRC64: 'OSSCRC64',
      OSSDeleteMarker: 'OSSDeleteMarker',
      OSSExpiration: 'OSSExpiration',
      OSSObjectType: 'OSSObjectType',
      OSSStorageClass: 'OSSStorageClass',
      OSSTagging: 'OSSTagging',
      OSSTaggingCount: 'OSSTaggingCount',
      OSSURI: 'OSSURI',
      OSSUserMeta: 'OSSUserMeta',
      OSSVersionId: 'OSSVersionId',
      objectACL: 'ObjectACL',
      objectId: 'ObjectId',
      objectStatus: 'ObjectStatus',
      objectType: 'ObjectType',
      orientation: 'Orientation',
      ownerId: 'OwnerId',
      pageCount: 'PageCount',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      programCount: 'ProgramCount',
      projectName: 'ProjectName',
      reason: 'Reason',
      sceneElements: 'SceneElements',
      semanticTypes: 'SemanticTypes',
      serverSideDataEncryption: 'ServerSideDataEncryption',
      serverSideEncryption: 'ServerSideEncryption',
      serverSideEncryptionCustomerAlgorithm: 'ServerSideEncryptionCustomerAlgorithm',
      serverSideEncryptionKeyId: 'ServerSideEncryptionKeyId',
      size: 'Size',
      startTime: 'StartTime',
      streamCount: 'StreamCount',
      subtitles: 'Subtitles',
      timezone: 'Timezone',
      title: 'Title',
      travelClusterId: 'TravelClusterId',
      URI: 'URI',
      updateTime: 'UpdateTime',
      videoHeight: 'VideoHeight',
      videoStreams: 'VideoStreams',
      videoWidth: 'VideoWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessControlAllowOrigin: 'string',
      accessControlRequestMethod: 'string',
      addresses: { 'type': 'array', 'itemType': Address },
      album: 'string',
      albumArtist: 'string',
      artist: 'string',
      audioCovers: { 'type': 'array', 'itemType': Image },
      audioStreams: { 'type': 'array', 'itemType': AudioStream },
      bitrate: 'number',
      cacheControl: 'string',
      composer: 'string',
      contentDisposition: 'string',
      contentEncoding: 'string',
      contentLanguage: 'string',
      contentMd5: 'string',
      contentType: 'string',
      createTime: 'string',
      croppingSuggestions: { 'type': 'array', 'itemType': CroppingSuggestion },
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      duration: 'number',
      ETag: 'string',
      EXIF: 'string',
      elements: { 'type': 'array', 'itemType': Element },
      figureCount: 'number',
      figures: { 'type': 'array', 'itemType': Figure },
      fileAccessTime: 'string',
      fileCreateTime: 'string',
      fileHash: 'string',
      fileModifiedTime: 'string',
      filename: 'string',
      formatLongName: 'string',
      formatName: 'string',
      imageHeight: 'number',
      imageScore: ImageScore,
      imageWidth: 'number',
      insights: Insights,
      labels: { 'type': 'array', 'itemType': Label },
      language: 'string',
      latLong: 'string',
      mediaType: 'string',
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
      OCRTexts: 'string',
      OSSCRC64: 'string',
      OSSDeleteMarker: 'string',
      OSSExpiration: 'string',
      OSSObjectType: 'string',
      OSSStorageClass: 'string',
      OSSTagging: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      OSSTaggingCount: 'number',
      OSSURI: 'string',
      OSSUserMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      OSSVersionId: 'string',
      objectACL: 'string',
      objectId: 'string',
      objectStatus: 'string',
      objectType: 'string',
      orientation: 'number',
      ownerId: 'string',
      pageCount: 'number',
      performer: 'string',
      produceTime: 'string',
      programCount: 'number',
      projectName: 'string',
      reason: 'string',
      sceneElements: { 'type': 'array', 'itemType': SceneElement },
      semanticTypes: { 'type': 'array', 'itemType': 'string' },
      serverSideDataEncryption: 'string',
      serverSideEncryption: 'string',
      serverSideEncryptionCustomerAlgorithm: 'string',
      serverSideEncryptionKeyId: 'string',
      size: 'number',
      startTime: 'number',
      streamCount: 'number',
      subtitles: { 'type': 'array', 'itemType': SubtitleStream },
      timezone: 'string',
      title: 'string',
      travelClusterId: 'string',
      URI: 'string',
      updateTime: 'string',
      videoHeight: 'number',
      videoStreams: { 'type': 'array', 'itemType': VideoStream },
      videoWidth: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.addresses)) {
      $dara.Model.validateArray(this.addresses);
    }
    if(Array.isArray(this.audioCovers)) {
      $dara.Model.validateArray(this.audioCovers);
    }
    if(Array.isArray(this.audioStreams)) {
      $dara.Model.validateArray(this.audioStreams);
    }
    if(Array.isArray(this.croppingSuggestions)) {
      $dara.Model.validateArray(this.croppingSuggestions);
    }
    if(this.customLabels) {
      $dara.Model.validateMap(this.customLabels);
    }
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    if(Array.isArray(this.figures)) {
      $dara.Model.validateArray(this.figures);
    }
    if(this.imageScore && typeof (this.imageScore as any).validate === 'function') {
      (this.imageScore as any).validate();
    }
    if(this.insights && typeof (this.insights as any).validate === 'function') {
      (this.insights as any).validate();
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.OCRContents)) {
      $dara.Model.validateArray(this.OCRContents);
    }
    if(this.OSSTagging) {
      $dara.Model.validateMap(this.OSSTagging);
    }
    if(this.OSSUserMeta) {
      $dara.Model.validateMap(this.OSSUserMeta);
    }
    if(Array.isArray(this.sceneElements)) {
      $dara.Model.validateArray(this.sceneElements);
    }
    if(Array.isArray(this.semanticTypes)) {
      $dara.Model.validateArray(this.semanticTypes);
    }
    if(Array.isArray(this.subtitles)) {
      $dara.Model.validateArray(this.subtitles);
    }
    if(Array.isArray(this.videoStreams)) {
      $dara.Model.validateArray(this.videoStreams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

