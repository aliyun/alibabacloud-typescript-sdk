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
  accessControlAllowOrigin?: string;
  accessControlRequestMethod?: string;
  addresses?: Address[];
  album?: string;
  albumArtist?: string;
  artist?: string;
  audioCovers?: Image[];
  audioStreams?: AudioStream[];
  bitrate?: number;
  cacheControl?: string;
  composer?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  contentMd5?: string;
  contentType?: string;
  createTime?: string;
  croppingSuggestions?: CroppingSuggestion[];
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  duration?: number;
  ETag?: string;
  EXIF?: string;
  elements?: Element[];
  figureCount?: number;
  figures?: Figure[];
  fileAccessTime?: string;
  fileCreateTime?: string;
  fileHash?: string;
  fileModifiedTime?: string;
  filename?: string;
  formatLongName?: string;
  formatName?: string;
  imageHeight?: number;
  imageScore?: ImageScore;
  imageWidth?: number;
  /**
   * **if can be null:**
   * true
   */
  insights?: Insights;
  labels?: Label[];
  language?: string;
  latLong?: string;
  mediaType?: string;
  OCRContents?: OCRContents[];
  OCRTexts?: string;
  OSSCRC64?: string;
  OSSDeleteMarker?: string;
  OSSExpiration?: string;
  OSSObjectType?: string;
  OSSStorageClass?: string;
  OSSTagging?: { [key: string]: any };
  OSSTaggingCount?: number;
  OSSURI?: string;
  OSSUserMeta?: { [key: string]: any };
  OSSVersionId?: string;
  objectACL?: string;
  objectId?: string;
  objectStatus?: string;
  objectType?: string;
  orientation?: number;
  ownerId?: string;
  pageCount?: number;
  performer?: string;
  produceTime?: string;
  programCount?: number;
  projectName?: string;
  reason?: string;
  sceneElements?: SceneElement[];
  semanticTypes?: string[];
  serverSideDataEncryption?: string;
  serverSideEncryption?: string;
  serverSideEncryptionCustomerAlgorithm?: string;
  serverSideEncryptionKeyId?: string;
  size?: number;
  startTime?: number;
  streamCount?: number;
  subtitles?: SubtitleStream[];
  timezone?: string;
  title?: string;
  travelClusterId?: string;
  URI?: string;
  updateTime?: string;
  videoHeight?: number;
  videoStreams?: VideoStream[];
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

