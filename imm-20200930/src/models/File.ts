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
   * The origin allowed in cross-origin requests.
   * 
   * @example
   * https://aliyundoc.com
   */
  accessControlAllowOrigin?: string;
  /**
   * @remarks
   * The method to be used in the actual cross-origin request.
   * 
   * @example
   * PUT
   */
  accessControlRequestMethod?: string;
  /**
   * @remarks
   * The addresses.
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
   * The singer.
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
   * The audio covers.
   */
  audioCovers?: Image[];
  /**
   * @remarks
   * The list of audio streams.
   */
  audioStreams?: AudioStream[];
  /**
   * @remarks
   * The bitrate. Unit: bit/s.
   * 
   * @example
   * 13091201
   */
  bitrate?: number;
  /**
   * @remarks
   * The caching behavior of the web page when the object is downloaded.
   * 
   * This parameter corresponds to the Cache-Control HTTP header of the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
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
   * The name of the object during the download.
   * 
   * This parameter corresponds to the Content-Disposition HTTP header of the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * attachment; filename =test.jpg
   */
  contentDisposition?: string;
  /**
   * @remarks
   * The content encoding format of the object when the object is downloaded.
   * 
   * This parameter corresponds to the Content-Encoding HTTP header of the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * UTF-8
   */
  contentEncoding?: string;
  /**
   * @remarks
   * The language of the object content.
   * 
   * This parameter corresponds to the Content-Language HTTP header of the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * zh-CN
   */
  contentLanguage?: string;
  /**
   * @remarks
   * The MD5 value.
   * 
   * @example
   * HZwoCnxPZ/fvhz4oRJ2+Fw==
   */
  contentMd5?: string;
  /**
   * @remarks
   * The Multipurpose Internet Mail Extensions (MIME) type of the file.
   * 
   * @example
   * image/jpeg
   */
  contentType?: string;
  /**
   * @remarks
   * The RFC3339Nano timestamp when the metadata was created.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  createTime?: string;
  /**
   * @remarks
   * The cropping suggestions for the image.
   * 
   * > Not supported.
   */
  croppingSuggestions?: CroppingSuggestion[];
  /**
   * @remarks
   * The custom ID of the file. When the cluster is indexed into the dataset, the custom ID is stored as the data attribute. You can map the custom ID to other data in your business system. Configure this parameter based on your business requirements. For example, you can associate a URI with an ID in your system. We recommend that you set this parameter to a globally unique value.
   * 
   * @example
   * member-image-id-0001
   */
  customId?: string;
  /**
   * @remarks
   * The custom labels of the file. This parameter is optional. The parameter stores custom key-value labels, which can be used to filter data.
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
   * The name of the dataset. You can obtain the name of the dataset from the response of the [CreateDataset](https://help.aliyun.com/document_detail/478160.html) operation.
   * 
   * @example
   * test-dataset
   */
  datasetName?: string;
  /**
   * @remarks
   * The total duration of the video. Unit: seconds.
   * 
   * @example
   * 15.263000
   */
  duration?: number;
  /**
   * @remarks
   * The ETag of the object. ETags are used to identify the content of objects.
   * 
   * @example
   * "1D9C280A7C4F67F7EF873E28449****"
   */
  ETag?: string;
  /**
   * @remarks
   * The original EXIF information about the image. The EXIF information is stored in the serialized JSON format. For more information, see [Query image information](https://help.aliyun.com/document_detail/44975.html).
   * 
   * @example
   * {"Compression":{"value":"6"},"DateTime":{"value":"2020:08:19 17:11:11"}}
   */
  EXIF?: string;
  /**
   * @remarks
   * The document elements that match the current query content when you call the SemanticQuery operation for semantic search.
   */
  elements?: Element[];
  /**
   * @remarks
   * The number of persons.
   * 
   * @example
   * 10
   */
  figureCount?: number;
  /**
   * @remarks
   * The list of persons. The persons are detected via AI models.
   */
  figures?: Figure[];
  /**
   * @remarks
   * The RFC3339Nano timestamp when the file was accessed.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  fileAccessTime?: string;
  /**
   * @remarks
   * The RFC3339Nano timestamp when the file was created.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  fileCreateTime?: string;
  /**
   * @remarks
   * The hash value of the file.
   * 
   * @example
   * 1d9c280a7c4f67f7ef873e28449dbe17
   */
  fileHash?: string;
  /**
   * @remarks
   * The RFC3339Nano timestamp when the file was last modified.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  fileModifiedTime?: string;
  /**
   * @remarks
   * The name of the object. For an OSS object, the value of this parameter is the object name.
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
   * The height of the image. Unit: pixels.
   * 
   * @example
   * 500
   */
  imageHeight?: number;
  /**
   * @remarks
   * The score of the image. The score is calculated by using AI models.
   */
  imageScore?: ImageScore;
  /**
   * @remarks
   * The width of the image. Unit: pixels.
   * 
   * @example
   * 270
   */
  imageWidth?: number;
  /**
   * @remarks
   * Summary and description of the file.
   * 
   * > Not supported.
   * 
   * **if can be null:**
   * true
   */
  insights?: Insights;
  /**
   * @remarks
   * The labels of the file. The labels are detected via AI models.
   */
  labels?: Label[];
  /**
   * @remarks
   * The language specified by using a BCP 47 language tag.
   * 
   * @example
   * eng
   */
  language?: string;
  /**
   * @remarks
   * The latitude and longitude.
   * 
   * @example
   * 30.134390,120.074997
   */
  latLong?: string;
  /**
   * @remarks
   * The media type of the file.
   * 
   * Valid values:
   * 
   * *   image
   * *   other
   * *   document
   * *   archive
   * *   audio
   * *   video
   * 
   * @example
   * image
   */
  mediaType?: string;
  /**
   * @remarks
   * The Optical Character Recognition (OCR) results.
   * 
   * > Not supported.
   */
  OCRContents?: OCRContents[];
  /**
   * @remarks
   * The text detected in the image.
   * 
   * @example
   * Alibaba Cloud IMM
   */
  OCRTexts?: string;
  /**
   * @remarks
   * The CRC64 value.
   * 
   * @example
   * 559890638950338001
   */
  OSSCRC64?: string;
  /**
   * @remarks
   * The delete marker of the object.
   * 
   * @example
   * CAEQMhiBgIDXiaaB0BYiIGQzYmRkZGUxMTM1ZDRjOTZhNjk4YjRjMTAyZjhl****
   */
  OSSDeleteMarker?: string;
  /**
   * @remarks
   * The expiration time of the OSS object.
   * 
   * This parameter corresponds to the Expires HTTP header of the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * 2120-01-01T12:00:00.000Z
   */
  OSSExpiration?: string;
  /**
   * @remarks
   * The type of the OSS object. Set the value to `Normal`.
   * 
   * @example
   * Normal
   */
  OSSObjectType?: string;
  /**
   * @remarks
   * The storage class of the OSS bucket.
   * 
   * @example
   * Standard
   */
  OSSStorageClass?: string;
  /**
   * @remarks
   * The tag of the object.
   * 
   * For more information, see [Add tags to an object](https://help.aliyun.com/document_detail/106678.html).
   * 
   * @example
   * {"key": "val"}
   */
  OSSTagging?: { [key: string]: any };
  /**
   * @remarks
   * The number of OSS object tags.
   * 
   * This parameter is available only if tags are added to the corresponding OSS object. For more information, see [Add tags to an object](https://help.aliyun.com/document_detail/106678.html).
   * 
   * @example
   * 2
   */
  OSSTaggingCount?: number;
  /**
   * @remarks
   * The URI of the OSS object. This parameter is available only if the value of the URI parameter is the URI of a file in Photo and Drive Service.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  OSSURI?: string;
  /**
   * @remarks
   * The user metadata of the OSS object.
   * 
   * This parameter is available only if user metadata is configured for the OSS object. For more information, see [Manage object metadata](https://help.aliyun.com/document_detail/31859.html).
   * 
   * @example
   * {"key": "val"}
   */
  OSSUserMeta?: { [key: string]: any };
  /**
   * @remarks
   * The version of the object.
   * 
   * This parameter is available only if versioning is enabled for the bucket. For more information, see [Overview](https://help.aliyun.com/document_detail/109695.html).
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
   * The status of the object.
   * 
   * @example
   * Indexed
   */
  objectStatus?: string;
  /**
   * @remarks
   * The type of the object. Set the value to **file**.
   * 
   * @example
   * file
   */
  objectType?: string;
  /**
   * @remarks
   * The image rotation angle. You can obtain the value from the exchangeable image file format (EXIF).
   * 
   * If the EXIF metadata does not contain the image rotation angle, this parameter is not included in the response.
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
   * > Not supported.
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
   * The time when the image was taken.
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
   * The name of the project. You can obtain the name of the project from the response of the [CreateProject](https://help.aliyun.com/document_detail/478153.html) operation.
   * 
   * @example
   * test-project
   */
  projectName?: string;
  /**
   * @remarks
   * The reason why the file failed to run the index.
   * 
   * @example
   * [InternalError] The request has been failed due to some unknown error. status: 500, requestId: CC5ACFBD-BB7A-496D-A9D6-****
   */
  reason?: string;
  /**
   * @remarks
   * The elements in the video segment, which are scene elements that you can extract from the video by using an AI model.
   */
  sceneElements?: SceneElement[];
  /**
   * @remarks
   * The reasons for which the current file is included in the search results when you call the SemanticQuery operation for semantic search.
   */
  semanticTypes?: string[];
  /**
   * @remarks
   * The encryption method of the object.
   * 
   * This parameter is available only if server encryption is configured for the OSS bucket. For more information, see [Server-side encryption](https://help.aliyun.com/document_detail/31871.html).
   * 
   * @example
   * SM4
   */
  serverSideDataEncryption?: string;
  /**
   * @remarks
   * The encryption method on the server side.
   * 
   * This parameter is available only if server encryption is configured for the OSS bucket. For more information, see [Server-side encryption](https://help.aliyun.com/document_detail/31871.html).
   * 
   * @example
   * AES256
   */
  serverSideEncryption?: string;
  /**
   * @remarks
   * The algorithm that is used to encrypt the file on the server side.
   * 
   * @example
   * SM4
   */
  serverSideEncryptionCustomerAlgorithm?: string;
  /**
   * @remarks
   * The ID of the customer master key (CMK) managed by Key Management Service (KMS).
   * 
   * This parameter is available only if server encryption is configured for the OSS bucket. For more information, see [Server-side encryption](https://help.aliyun.com/document_detail/31871.html).
   * 
   * @example
   * 9468da86-3509-4f8d-a61e-6eab1eac****
   */
  serverSideEncryptionKeyId?: string;
  /**
   * @remarks
   * The size of the object. Unit: bytes.
   * 
   * @example
   * 1000
   */
  size?: number;
  /**
   * @remarks
   * The time of the first frame. Unit: seconds.
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
   * The list of subtitle streams.
   */
  subtitles?: SubtitleStream[];
  /**
   * @remarks
   * The time zone.
   * 
   * >  Not supported.
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
   * > Not supported.
   * 
   * @example
   * -
   */
  travelClusterId?: string;
  /**
   * @remarks
   * The URI of the file.
   * 
   * The URI of an OSS object follows the oss://${Bucket}/${Object} format, where `${Bucket}` is the name of the bucket in the same region as the current project and `${Object}` is the path of the object with the extension included.
   * 
   * The URI of a file in Photo and Drive Service follows the pds://domains/${domain}/drives/${drive}/files/${file}/revisions/${revision} format.
   * 
   * @example
   * oss://examplebucket/sampleobject.jpg
   */
  URI?: string;
  /**
   * @remarks
   * The RFC3339Nano timestamp when the metadata was modified.
   * 
   * @example
   * 2021-06-29T14:50:13.011643661+08:00
   */
  updateTime?: string;
  /**
   * @remarks
   * The height of the video. Unit: pixels.
   * 
   * @example
   * 1920
   */
  videoHeight?: number;
  /**
   * @remarks
   * The list of video streams.
   */
  videoStreams?: VideoStream[];
  /**
   * @remarks
   * The width of the video. Unit: pixels.
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

