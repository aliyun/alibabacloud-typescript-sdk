// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class Address extends $tea.Model {
  addressLine?: string;
  city?: string;
  country?: string;
  district?: string;
  language?: string;
  province?: string;
  township?: string;
  static names(): { [key: string]: string } {
    return {
      addressLine: 'AddressLine',
      city: 'City',
      country: 'Country',
      district: 'District',
      language: 'Language',
      province: 'Province',
      township: 'Township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressLine: 'string',
      city: 'string',
      country: 'string',
      district: 'string',
      language: 'string',
      province: 'string',
      township: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleChain extends $tea.Model {
  chain?: AssumeRoleChainNode[];
  policy?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      policy: 'Policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: { 'type': 'array', 'itemType': AssumeRoleChainNode },
      policy: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleChainNode extends $tea.Model {
  ownerId?: string;
  role?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      role: 'Role',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      role: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AudioStream extends $tea.Model {
  bitrate?: number;
  channelLayout?: string;
  channels?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  duration?: number;
  index?: number;
  language?: string;
  lyric?: string;
  sampleFormat?: string;
  sampleRate?: number;
  startTime?: number;
  timeBase?: string;
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
      language: 'Language',
      lyric: 'Lyric',
      sampleFormat: 'SampleFormat',
      sampleRate: 'SampleRate',
      startTime: 'StartTime',
      timeBase: 'TimeBase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      channelLayout: 'string',
      channels: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      duration: 'number',
      index: 'number',
      language: 'string',
      lyric: 'string',
      sampleFormat: 'string',
      sampleRate: 'number',
      startTime: 'number',
      timeBase: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Binding extends $tea.Model {
  createTime?: string;
  datasetName?: string;
  detail?: string;
  phase?: string;
  projectName?: string;
  state?: string;
  URI?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetName: 'DatasetName',
      detail: 'Detail',
      phase: 'Phase',
      projectName: 'ProjectName',
      state: 'State',
      URI: 'URI',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetName: 'string',
      detail: 'string',
      phase: 'string',
      projectName: 'string',
      state: 'string',
      URI: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Boundary extends $tea.Model {
  height?: number;
  left?: number;
  top?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CroppingSuggestion extends $tea.Model {
  aspectRatio?: string;
  boundary?: Boundary;
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      boundary: 'Boundary',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      boundary: Boundary,
      confidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Dataset extends $tea.Model {
  bindCount?: number;
  createTime?: string;
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  datasetName?: string;
  description?: string;
  fileCount?: number;
  projectName?: string;
  totalFileSize?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      bindCount: 'BindCount',
      createTime: 'CreateTime',
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetName: 'DatasetName',
      description: 'Description',
      fileCount: 'FileCount',
      projectName: 'ProjectName',
      totalFileSize: 'TotalFileSize',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindCount: 'number',
      createTime: 'string',
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetName: 'string',
      description: 'string',
      fileCount: 'number',
      projectName: 'string',
      totalFileSize: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Face extends $tea.Model {
  age?: number;
  ageConfidence?: number;
  beard?: string;
  beardConfidence?: number;
  boundary?: Boundary;
  embeddingsFloat32?: number[];
  embeddingsInt8?: number[];
  emotion?: string;
  emotionConfidence?: number;
  faceClusterId?: string;
  faceConfidence?: number;
  faceId?: string;
  gender?: string;
  genderConfidence?: number;
  glasses?: string;
  glassesConfidence?: number;
  hat?: string;
  hatConfidence?: number;
  headPose?: HeadPose;
  leftEye?: string;
  leftEyeConfidence?: number;
  mask?: string;
  maskConfidence?: number;
  mouth?: string;
  mouthConfidence?: number;
  race?: string;
  raceConfidence?: number;
  rightEye?: string;
  rightEyeConfidence?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageConfidence: 'AgeConfidence',
      beard: 'Beard',
      beardConfidence: 'BeardConfidence',
      boundary: 'Boundary',
      embeddingsFloat32: 'EmbeddingsFloat32',
      embeddingsInt8: 'EmbeddingsInt8',
      emotion: 'Emotion',
      emotionConfidence: 'EmotionConfidence',
      faceClusterId: 'FaceClusterId',
      faceConfidence: 'FaceConfidence',
      faceId: 'FaceId',
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      glasses: 'Glasses',
      glassesConfidence: 'GlassesConfidence',
      hat: 'Hat',
      hatConfidence: 'HatConfidence',
      headPose: 'HeadPose',
      leftEye: 'LeftEye',
      leftEyeConfidence: 'LeftEyeConfidence',
      mask: 'Mask',
      maskConfidence: 'MaskConfidence',
      mouth: 'Mouth',
      mouthConfidence: 'MouthConfidence',
      race: 'Race',
      raceConfidence: 'RaceConfidence',
      rightEye: 'RightEye',
      rightEyeConfidence: 'RightEyeConfidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      ageConfidence: 'number',
      beard: 'string',
      beardConfidence: 'number',
      boundary: Boundary,
      embeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      embeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      emotion: 'string',
      emotionConfidence: 'number',
      faceClusterId: 'string',
      faceConfidence: 'number',
      faceId: 'string',
      gender: 'string',
      genderConfidence: 'number',
      glasses: 'string',
      glassesConfidence: 'number',
      hat: 'string',
      hatConfidence: 'number',
      headPose: HeadPose,
      leftEye: 'string',
      leftEyeConfidence: 'number',
      mask: 'string',
      maskConfidence: 'number',
      mouth: 'string',
      mouthConfidence: 'number',
      race: 'string',
      raceConfidence: 'number',
      rightEye: 'string',
      rightEyeConfidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class File extends $tea.Model {
  accessControlAllowOrigin?: string;
  accessControlRequestMethod?: string;
  addresses?: Address[];
  album?: string;
  albumArtist?: string;
  artists?: string[];
  audioBitrate?: number;
  audioCovers?: Image[];
  audioDuration?: number;
  audioEmbeddingsFloat32?: number[];
  audioEmbeddingsInt8?: number[];
  audioLanguage?: string;
  audioStreams?: AudioStream[];
  audioTakenTime?: string;
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
  documentContent?: string;
  documentEmbeddingsFloat32?: number[];
  documentEmbeddingsInt8?: number[];
  documentLanguage?: string;
  ETag?: string;
  EXIF?: string;
  faceCount?: number;
  faces?: Face[];
  fileAccessTime?: string;
  fileCreateTime?: string;
  fileHash?: string;
  fileModifiedTime?: string;
  filename?: string;
  imageEmbeddingsFloat32?: number[];
  imageEmbeddingsInt8?: number[];
  imageHeight?: number;
  imageScore?: ImageScore;
  imageWidth?: number;
  labels?: Label[];
  latLong?: string;
  mediaType?: string;
  OCRContents?: OCRContents[];
  OSSDeleteMarker?: string;
  OSSExpiration?: string;
  OSSObjectType?: string;
  OSSTagging?: { [key: string]: any };
  OSSTaggingCount?: number;
  OSSUserMeta?: { [key: string]: any };
  OSSVersionId?: string;
  objectACL?: string;
  objectId?: string;
  objectType?: string;
  orientation?: string;
  ownerId?: string;
  pageCount?: number;
  performer?: string;
  produceTime?: string;
  projectName?: string;
  serverSideDataEncryption?: string;
  serverSideEncryption?: string;
  serverSideEncryptionCustomerAlgorithm?: string;
  serverSideEncryptionKeyId?: string;
  size?: number;
  storageClass?: string;
  subtitles?: SubtitleStream[];
  timezone?: string;
  title?: string;
  travelClusterId?: string;
  URI?: string;
  updateTime?: string;
  videoBitrate?: number;
  videoDuration?: number;
  videoEmbeddingsFloat32?: number[];
  videoEmbeddingsInt8?: number[];
  videoHeight?: number;
  videoStartTime?: number;
  videoStreams?: VideoStream[];
  videoTakenTime?: string;
  videoWidth?: number;
  static names(): { [key: string]: string } {
    return {
      accessControlAllowOrigin: 'AccessControlAllowOrigin',
      accessControlRequestMethod: 'AccessControlRequestMethod',
      addresses: 'Addresses',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      artists: 'Artists',
      audioBitrate: 'AudioBitrate',
      audioCovers: 'AudioCovers',
      audioDuration: 'AudioDuration',
      audioEmbeddingsFloat32: 'AudioEmbeddingsFloat32',
      audioEmbeddingsInt8: 'AudioEmbeddingsInt8',
      audioLanguage: 'AudioLanguage',
      audioStreams: 'AudioStreams',
      audioTakenTime: 'AudioTakenTime',
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
      documentContent: 'DocumentContent',
      documentEmbeddingsFloat32: 'DocumentEmbeddingsFloat32',
      documentEmbeddingsInt8: 'DocumentEmbeddingsInt8',
      documentLanguage: 'DocumentLanguage',
      ETag: 'ETag',
      EXIF: 'EXIF',
      faceCount: 'FaceCount',
      faces: 'Faces',
      fileAccessTime: 'FileAccessTime',
      fileCreateTime: 'FileCreateTime',
      fileHash: 'FileHash',
      fileModifiedTime: 'FileModifiedTime',
      filename: 'Filename',
      imageEmbeddingsFloat32: 'ImageEmbeddingsFloat32',
      imageEmbeddingsInt8: 'ImageEmbeddingsInt8',
      imageHeight: 'ImageHeight',
      imageScore: 'ImageScore',
      imageWidth: 'ImageWidth',
      labels: 'Labels',
      latLong: 'LatLong',
      mediaType: 'MediaType',
      OCRContents: 'OCRContents',
      OSSDeleteMarker: 'OSSDeleteMarker',
      OSSExpiration: 'OSSExpiration',
      OSSObjectType: 'OSSObjectType',
      OSSTagging: 'OSSTagging',
      OSSTaggingCount: 'OSSTaggingCount',
      OSSUserMeta: 'OSSUserMeta',
      OSSVersionId: 'OSSVersionId',
      objectACL: 'ObjectACL',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      orientation: 'Orientation',
      ownerId: 'OwnerId',
      pageCount: 'PageCount',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      projectName: 'ProjectName',
      serverSideDataEncryption: 'ServerSideDataEncryption',
      serverSideEncryption: 'ServerSideEncryption',
      serverSideEncryptionCustomerAlgorithm: 'ServerSideEncryptionCustomerAlgorithm',
      serverSideEncryptionKeyId: 'ServerSideEncryptionKeyId',
      size: 'Size',
      storageClass: 'StorageClass',
      subtitles: 'Subtitles',
      timezone: 'Timezone',
      title: 'Title',
      travelClusterId: 'TravelClusterId',
      URI: 'URI',
      updateTime: 'UpdateTime',
      videoBitrate: 'VideoBitrate',
      videoDuration: 'VideoDuration',
      videoEmbeddingsFloat32: 'VideoEmbeddingsFloat32',
      videoEmbeddingsInt8: 'VideoEmbeddingsInt8',
      videoHeight: 'VideoHeight',
      videoStartTime: 'VideoStartTime',
      videoStreams: 'VideoStreams',
      videoTakenTime: 'VideoTakenTime',
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
      artists: { 'type': 'array', 'itemType': 'string' },
      audioBitrate: 'number',
      audioCovers: { 'type': 'array', 'itemType': Image },
      audioDuration: 'number',
      audioEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      audioEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      audioLanguage: 'string',
      audioStreams: { 'type': 'array', 'itemType': AudioStream },
      audioTakenTime: 'string',
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
      documentContent: 'string',
      documentEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      documentEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      documentLanguage: 'string',
      ETag: 'string',
      EXIF: 'string',
      faceCount: 'number',
      faces: { 'type': 'array', 'itemType': Face },
      fileAccessTime: 'string',
      fileCreateTime: 'string',
      fileHash: 'string',
      fileModifiedTime: 'string',
      filename: 'string',
      imageEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      imageEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      imageHeight: 'number',
      imageScore: ImageScore,
      imageWidth: 'number',
      labels: { 'type': 'array', 'itemType': Label },
      latLong: 'string',
      mediaType: 'string',
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
      OSSDeleteMarker: 'string',
      OSSExpiration: 'string',
      OSSObjectType: 'string',
      OSSTagging: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      OSSTaggingCount: 'number',
      OSSUserMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      OSSVersionId: 'string',
      objectACL: 'string',
      objectId: 'string',
      objectType: 'string',
      orientation: 'string',
      ownerId: 'string',
      pageCount: 'number',
      performer: 'string',
      produceTime: 'string',
      projectName: 'string',
      serverSideDataEncryption: 'string',
      serverSideEncryption: 'string',
      serverSideEncryptionCustomerAlgorithm: 'string',
      serverSideEncryptionKeyId: 'string',
      size: 'number',
      storageClass: 'string',
      subtitles: { 'type': 'array', 'itemType': SubtitleStream },
      timezone: 'string',
      title: 'string',
      travelClusterId: 'string',
      URI: 'string',
      updateTime: 'string',
      videoBitrate: 'number',
      videoDuration: 'number',
      videoEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      videoEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      videoHeight: 'number',
      videoStartTime: 'number',
      videoStreams: { 'type': 'array', 'itemType': VideoStream },
      videoTakenTime: 'string',
      videoWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FileForReq extends $tea.Model {
  customId?: string;
  customLabels?: { [key: string]: any };
  fileHash?: string;
  OSSURI?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      fileHash: 'FileHash',
      OSSURI: 'OSSURI',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      fileHash: 'string',
      OSSURI: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HeadPose extends $tea.Model {
  pitch?: number;
  roll?: number;
  yaw?: number;
  static names(): { [key: string]: string } {
    return {
      pitch: 'Pitch',
      roll: 'Roll',
      yaw: 'Yaw',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitch: 'number',
      roll: 'number',
      yaw: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Image extends $tea.Model {
  croppingSuggestions?: CroppingSuggestion[];
  EXIF?: string;
  imageHeight?: number;
  imageScore?: ImageScore;
  imageWidth?: number;
  OCRContents?: OCRContents[];
  static names(): { [key: string]: string } {
    return {
      croppingSuggestions: 'CroppingSuggestions',
      EXIF: 'EXIF',
      imageHeight: 'ImageHeight',
      imageScore: 'ImageScore',
      imageWidth: 'ImageWidth',
      OCRContents: 'OCRContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppingSuggestions: { 'type': 'array', 'itemType': CroppingSuggestion },
      EXIF: 'string',
      imageHeight: 'number',
      imageScore: ImageScore,
      imageWidth: 'number',
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ImageScore extends $tea.Model {
  overallQualityScore?: number;
  static names(): { [key: string]: string } {
    return {
      overallQualityScore: 'OverallQualityScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overallQualityScore: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KeyValuePair extends $tea.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Label extends $tea.Model {
  labelConfidence?: number;
  labelLevel?: number;
  labelName?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      labelConfidence: 'LabelConfidence',
      labelLevel: 'LabelLevel',
      labelName: 'LabelName',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelConfidence: 'number',
      labelLevel: 'number',
      labelName: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OCRContents extends $tea.Model {
  boundary?: Boundary;
  confidence?: number;
  contents?: string;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
      contents: 'Contents',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
      contents: 'string',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OfficeConversionTask extends $tea.Model {
  createTime?: string;
  endTime?: string;
  reason?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  totalPages?: number;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      endTime: 'EndTime',
      reason: 'Reason',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      totalPages: 'TotalPages',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      endTime: 'string',
      reason: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      totalPages: 'number',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Project extends $tea.Model {
  createTime?: string;
  datasetCount?: number;
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  description?: string;
  engineConcurrency?: number;
  fileCount?: number;
  projectMaxDatasetCount?: number;
  projectName?: string;
  projectQueriesPerSecond?: number;
  serviceRole?: string;
  totalFileSize?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      datasetCount: 'DatasetCount',
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      description: 'Description',
      engineConcurrency: 'EngineConcurrency',
      fileCount: 'FileCount',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
      projectQueriesPerSecond: 'ProjectQueriesPerSecond',
      serviceRole: 'ServiceRole',
      totalFileSize: 'TotalFileSize',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      datasetCount: 'number',
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      description: 'string',
      engineConcurrency: 'number',
      fileCount: 'number',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      projectQueriesPerSecond: 'number',
      serviceRole: 'string',
      totalFileSize: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Row extends $tea.Model {
  customLabels?: KeyValuePair[];
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'CustomLabels',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: { 'type': 'array', 'itemType': KeyValuePair },
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQuery extends $tea.Model {
  field?: string;
  operation?: string;
  subQueries?: SimpleQuery[];
  value?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
      subQueries: 'SubQueries',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtitleStream extends $tea.Model {
  content?: string;
  index?: number;
  language?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      index: 'Index',
      language: 'Language',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      index: 'number',
      language: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoStream extends $tea.Model {
  averageFrameRate?: number;
  bitrate?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  displayAspectRatio?: string;
  duration?: number;
  frameCount?: number;
  frameRate?: number;
  hasBFrames?: string;
  height?: number;
  index?: number;
  language?: string;
  level?: number;
  pixelFormat?: string;
  profile?: string;
  sampleAspectRatio?: string;
  startTime?: number;
  timeBase?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      averageFrameRate: 'AverageFrameRate',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      displayAspectRatio: 'DisplayAspectRatio',
      duration: 'Duration',
      frameCount: 'FrameCount',
      frameRate: 'FrameRate',
      hasBFrames: 'HasBFrames',
      height: 'Height',
      index: 'Index',
      language: 'Language',
      level: 'Level',
      pixelFormat: 'PixelFormat',
      profile: 'Profile',
      sampleAspectRatio: 'SampleAspectRatio',
      startTime: 'StartTime',
      timeBase: 'TimeBase',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageFrameRate: 'number',
      bitrate: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      displayAspectRatio: 'string',
      duration: 'number',
      frameCount: 'number',
      frameRate: 'number',
      hasBFrames: 'string',
      height: 'number',
      index: 'number',
      language: 'string',
      level: 'number',
      pixelFormat: 'string',
      profile: 'string',
      sampleAspectRatio: 'string',
      startTime: 'number',
      timeBase: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebofficePermission extends $tea.Model {
  copy?: boolean;
  export?: boolean;
  history?: boolean;
  print?: boolean;
  readonly?: boolean;
  rename?: boolean;
  static names(): { [key: string]: string } {
    return {
      copy: 'Copy',
      export: 'Export',
      history: 'History',
      print: 'Print',
      readonly: 'Readonly',
      rename: 'Rename',
    };
  }

  static types(): { [key: string]: any } {
    return {
      copy: 'boolean',
      export: 'boolean',
      history: 'boolean',
      print: 'boolean',
      readonly: 'boolean',
      rename: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebofficeUser extends $tea.Model {
  avatar?: string;
  id?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'Avatar',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      id: 'string',
      name: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebofficeWatermark extends $tea.Model {
  fillStyle?: string;
  font?: string;
  horizontal?: number;
  rotate?: number;
  type?: number;
  value?: string;
  vertical?: number;
  static names(): { [key: string]: string } {
    return {
      fillStyle: 'FillStyle',
      font: 'Font',
      horizontal: 'Horizontal',
      rotate: 'Rotate',
      type: 'Type',
      value: 'Value',
      vertical: 'Vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fillStyle: 'string',
      font: 'string',
      horizontal: 'number',
      rotate: 'number',
      type: 'number',
      value: 'string',
      vertical: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaRequest extends $tea.Model {
  datasetName?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  URIs?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
      URIs: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
      URIs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaShrinkRequest extends $tea.Model {
  datasetName?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  URIsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
      URIsShrink: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
      URIsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchDeleteFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchDeleteFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFileMetaRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URIs?: string[];
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URIs: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URIs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFileMetaShrinkRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URIsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URIsShrink: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URIsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFileMetaResponseBody extends $tea.Model {
  files?: File[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchGetFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchGetFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaRequest extends $tea.Model {
  datasetName?: string;
  files?: FileForReq[];
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': FileForReq },
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaShrinkRequest extends $tea.Model {
  datasetName?: string;
  filesShrink?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchIndexFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchIndexFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaRequest extends $tea.Model {
  datasetName?: string;
  files?: FileForReq[];
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': FileForReq },
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaShrinkRequest extends $tea.Model {
  datasetName?: string;
  filesShrink?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: BatchUpdateFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: BatchUpdateFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingResponseBody extends $tea.Model {
  binding?: Binding;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      binding: 'Binding',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binding: Binding,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetRequest extends $tea.Model {
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  datasetName?: string;
  description?: string;
  projectName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetName: 'DatasetName',
      description: 'Description',
      projectName: 'ProjectName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetName: 'string',
      description: 'string',
      projectName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  dataset?: Dataset;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: Dataset,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskRequest extends $tea.Model {
  endPage?: string;
  firstPage?: boolean;
  fitToHeight?: boolean;
  fitToWidth?: boolean;
  isHorizontal?: boolean;
  longPic?: boolean;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  paperSize?: string;
  password?: string;
  projectName?: string;
  quality?: number;
  scale?: number;
  sheetCount?: string;
  sheetIndex?: number;
  showComments?: boolean;
  sourceType?: string;
  sourceUri?: string;
  startPage?: string;
  targetType?: string;
  targetUri?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      endPage: 'EndPage',
      firstPage: 'FirstPage',
      fitToHeight: 'FitToHeight',
      fitToWidth: 'FitToWidth',
      isHorizontal: 'IsHorizontal',
      longPic: 'LongPic',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      paperSize: 'PaperSize',
      password: 'Password',
      projectName: 'ProjectName',
      quality: 'Quality',
      scale: 'Scale',
      sheetCount: 'SheetCount',
      sheetIndex: 'SheetIndex',
      showComments: 'ShowComments',
      sourceType: 'SourceType',
      sourceUri: 'SourceUri',
      startPage: 'StartPage',
      targetType: 'TargetType',
      targetUri: 'TargetUri',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endPage: 'string',
      firstPage: 'boolean',
      fitToHeight: 'boolean',
      fitToWidth: 'boolean',
      isHorizontal: 'boolean',
      longPic: 'boolean',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      paperSize: 'string',
      password: 'string',
      projectName: 'string',
      quality: 'number',
      scale: 'number',
      sheetCount: 'string',
      sheetIndex: 'number',
      showComments: 'boolean',
      sourceType: 'string',
      sourceUri: 'string',
      startPage: 'string',
      targetType: 'string',
      targetUri: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskResponseBody extends $tea.Model {
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $tea.Model {
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  description?: string;
  engineConcurrency?: number;
  projectMaxDatasetCount?: number;
  projectName?: string;
  projectQueriesPerSecond?: number;
  serviceRole?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      description: 'Description',
      engineConcurrency: 'EngineConcurrency',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
      projectQueriesPerSecond: 'ProjectQueriesPerSecond',
      serviceRole: 'ServiceRole',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      description: 'string',
      engineConcurrency: 'number',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      projectQueriesPerSecond: 'number',
      serviceRole: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  project?: Project;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: Project,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileMetaRequest extends $tea.Model {
  datasetName?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileMetaResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectRequest extends $tea.Model {
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLabelsRequest extends $tea.Model {
  projectName?: string;
  sourceURI?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      sourceURI: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLabelsResponseBody extends $tea.Model {
  labels?: Label[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'Labels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: { 'type': 'array', 'itemType': Label },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLabelsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: DetectImageLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: DetectImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyQueryRequest extends $tea.Model {
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  projectName?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectName: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyQueryResponseBody extends $tea.Model {
  files?: File[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: FuzzyQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: FuzzyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindingRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindingResponseBody extends $tea.Model {
  binding?: Binding;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      binding: 'Binding',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binding: Binding,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  withStatistics?: boolean;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      withStatistics: 'WithStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      withStatistics: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $tea.Model {
  dataset?: Dataset;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: Dataset,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileMetaRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileMetaResponseBody extends $tea.Model {
  files?: File[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSignedURIRequest extends $tea.Model {
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSignedURIResponseBody extends $tea.Model {
  requestId?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileSignedURIResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetFileSignedURIResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetFileSignedURIResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskRequest extends $tea.Model {
  projectName?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskResponseBody extends $tea.Model {
  officeConversionTask?: OfficeConversionTask;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      officeConversionTask: 'OfficeConversionTask',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      officeConversionTask: OfficeConversionTask,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectRequest extends $tea.Model {
  projectName?: string;
  withStatistics?: boolean;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      withStatistics: 'WithStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      withStatistics: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponseBody extends $tea.Model {
  project?: Project;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: Project,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLRequest extends $tea.Model {
  assumeRoleChain?: AssumeRoleChain;
  externalUploaded?: boolean;
  filename?: string;
  hidecmb?: boolean;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  password?: string;
  permission?: WebofficePermission;
  previewPages?: number;
  projectName?: string;
  referer?: string;
  sourceURI?: string;
  user?: WebofficeUser;
  userData?: string;
  watermark?: WebofficeWatermark;
  static names(): { [key: string]: string } {
    return {
      assumeRoleChain: 'AssumeRoleChain',
      externalUploaded: 'ExternalUploaded',
      filename: 'Filename',
      hidecmb: 'Hidecmb',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      password: 'Password',
      permission: 'Permission',
      previewPages: 'PreviewPages',
      projectName: 'ProjectName',
      referer: 'Referer',
      sourceURI: 'SourceURI',
      user: 'User',
      userData: 'UserData',
      watermark: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleChain: AssumeRoleChain,
      externalUploaded: 'boolean',
      filename: 'string',
      hidecmb: 'boolean',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      password: 'string',
      permission: WebofficePermission,
      previewPages: 'number',
      projectName: 'string',
      referer: 'string',
      sourceURI: 'string',
      user: WebofficeUser,
      userData: 'string',
      watermark: WebofficeWatermark,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLShrinkRequest extends $tea.Model {
  assumeRoleChainShrink?: string;
  externalUploaded?: boolean;
  filename?: string;
  hidecmb?: boolean;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  password?: string;
  permissionShrink?: string;
  previewPages?: number;
  projectName?: string;
  referer?: string;
  sourceURI?: string;
  userShrink?: string;
  userData?: string;
  watermarkShrink?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleChainShrink: 'AssumeRoleChain',
      externalUploaded: 'ExternalUploaded',
      filename: 'Filename',
      hidecmb: 'Hidecmb',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      password: 'Password',
      permissionShrink: 'Permission',
      previewPages: 'PreviewPages',
      projectName: 'ProjectName',
      referer: 'Referer',
      sourceURI: 'SourceURI',
      userShrink: 'User',
      userData: 'UserData',
      watermarkShrink: 'Watermark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleChainShrink: 'string',
      externalUploaded: 'boolean',
      filename: 'string',
      hidecmb: 'boolean',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      password: 'string',
      permissionShrink: 'string',
      previewPages: 'number',
      projectName: 'string',
      referer: 'string',
      sourceURI: 'string',
      userShrink: 'string',
      userData: 'string',
      watermarkShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLResponseBody extends $tea.Model {
  accessToken?: string;
  accessTokenExpiredTime?: string;
  refreshToken?: string;
  refreshTokenExpiredTime?: string;
  requestId?: string;
  webofficeURL?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      requestId: 'RequestId',
      webofficeURL: 'WebofficeURL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'string',
      refreshToken: 'string',
      refreshTokenExpiredTime: 'string',
      requestId: 'string',
      webofficeURL: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeURLResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebofficeURLResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebofficeURLResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaRequest extends $tea.Model {
  datasetName?: string;
  file?: FileForReq;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      file: 'File',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      file: FileForReq,
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaShrinkRequest extends $tea.Model {
  datasetName?: string;
  fileShrink?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      fileShrink: 'File',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      fileShrink: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: IndexFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: IndexFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsRequest extends $tea.Model {
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBody extends $tea.Model {
  bindings?: Binding[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bindings: 'Bindings',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindings: { 'type': 'array', 'itemType': Binding },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListBindingsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  prefix?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefix: 'Prefix',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefix: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $tea.Model {
  datasets?: Dataset[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datasets: 'Datasets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasets: { 'type': 'array', 'itemType': Dataset },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListDatasetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListDatasetsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeConversionTaskRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeConversionTaskResponseBody extends $tea.Model {
  nextToken?: string;
  officeConversionTasks?: OfficeConversionTask[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      officeConversionTasks: 'OfficeConversionTasks',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      officeConversionTasks: { 'type': 'array', 'itemType': OfficeConversionTask },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOfficeConversionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListOfficeConversionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  nextToken?: string;
  projects?: Project[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      projects: 'Projects',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      projects: { 'type': 'array', 'itemType': Project },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenRequest extends $tea.Model {
  accessToken?: string;
  assumeRoleChain?: AssumeRoleChain;
  projectName?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      assumeRoleChain: 'AssumeRoleChain',
      projectName: 'ProjectName',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      assumeRoleChain: AssumeRoleChain,
      projectName: 'string',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenShrinkRequest extends $tea.Model {
  accessToken?: string;
  assumeRoleChainShrink?: string;
  projectName?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      assumeRoleChainShrink: 'AssumeRoleChain',
      projectName: 'ProjectName',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      assumeRoleChainShrink: 'string',
      projectName: 'string',
      refreshToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenResponseBody extends $tea.Model {
  accessToken?: string;
  accessTokenExpiredTime?: string;
  refreshToken?: string;
  refreshTokenExpiredTime?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshToken: 'RefreshToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      accessTokenExpiredTime: 'string',
      refreshToken: 'string',
      refreshTokenExpiredTime: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: RefreshWebofficeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: RefreshWebofficeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeBindingRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeBindingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: ResumeBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: ResumeBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryRequest extends $tea.Model {
  aggregations?: SimpleQueryRequestAggregations[];
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  query?: SimpleQuery;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      query: 'Query',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: { 'type': 'array', 'itemType': SimpleQueryRequestAggregations },
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      query: SimpleQuery,
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryShrinkRequest extends $tea.Model {
  aggregationsShrink?: string;
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  queryShrink?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      aggregationsShrink: 'Aggregations',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      queryShrink: 'Query',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationsShrink: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      queryShrink: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponseBody extends $tea.Model {
  aggregations?: SimpleQueryResponseBodyAggregations[];
  files?: File[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregations },
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: SimpleQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: SimpleQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBindingRequest extends $tea.Model {
  datasetName?: string;
  projectName?: string;
  reason?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      reason: 'Reason',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      projectName: 'string',
      reason: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBindingResponseBody extends $tea.Model {
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class StopBindingResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: StopBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: StopBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetRequest extends $tea.Model {
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  datasetName?: string;
  description?: string;
  projectName?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetName: 'DatasetName',
      description: 'Description',
      projectName: 'ProjectName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetName: 'string',
      description: 'string',
      projectName: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $tea.Model {
  dataset?: Dataset;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataset: 'Dataset',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataset: Dataset,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaRequest extends $tea.Model {
  datasetName?: string;
  file?: FileForReq;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      file: 'File',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      file: FileForReq,
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaShrinkRequest extends $tea.Model {
  datasetName?: string;
  fileShrink?: string;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      fileShrink: 'File',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      fileShrink: 'string',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectRequest extends $tea.Model {
  datasetMaxBindCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  description?: string;
  engineConcurrency?: number;
  projectMaxDatasetCount?: number;
  projectName?: string;
  projectQueriesPerSecond?: number;
  serviceRole?: string;
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      datasetMaxBindCount: 'DatasetMaxBindCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      description: 'Description',
      engineConcurrency: 'EngineConcurrency',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
      projectQueriesPerSecond: 'ProjectQueriesPerSecond',
      serviceRole: 'ServiceRole',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetMaxBindCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      description: 'string',
      engineConcurrency: 'number',
      projectMaxDatasetCount: 'number',
      projectName: 'string',
      projectQueriesPerSecond: 'number',
      serviceRole: 'string',
      templateId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
  project?: Project;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: Project,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryRequestAggregations extends $tea.Model {
  field?: string;
  operation?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponseBodyAggregationsGroups extends $tea.Model {
  value?: string;
  count?: number;
  static names(): { [key: string]: string } {
    return {
      value: 'Value',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      value: 'string',
      count: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponseBodyAggregations extends $tea.Model {
  field?: string;
  operation?: string;
  value?: number;
  groups?: SimpleQueryResponseBodyAggregationsGroups[];
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      operation: 'Operation',
      value: 'Value',
      groups: 'Groups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      operation: 'string',
      value: 'number',
      groups: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregationsGroups },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}


export default class Client extends OpenApi {

  constructor(config: $OpenApi.Config) {
    super(config);
    this._endpointRule = "regional";
    this._endpointMap = {
      'cn-beijing-gov-1': "imm-vpc.cn-beijing-gov-1.aliyuncs.com",
    };
    this.checkConfig(config);
    this._endpoint = this.getEndpoint("imm", this._regionId, this._endpointRule, this._network, this._suffix, this._endpointMap, this._endpoint);
  }


  getEndpoint(productId: string, regionId: string, endpointRule: string, network: string, suffix: string, endpointMap: {[key: string ]: string}, endpoint: string): string {
    if (!Util.empty(endpoint)) {
      return endpoint;
    }

    if (!Util.isUnset(endpointMap) && !Util.empty(endpointMap[regionId])) {
      return endpointMap[regionId];
    }

    return EndpointUtil.getEndpointRules(productId, regionId, endpointRule, network, suffix);
  }

  async batchDeleteFileMetaWithOptions(tmpReq: BatchDeleteFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchDeleteFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.URIs)) {
      request.URIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.URIs, "URIs", "json");
    }

    let query = { };
    query["DatasetName"] = request.datasetName;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["ProjectName"] = request.projectName;
    query["URIs"] = request.URIsShrink;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteFileMetaResponse>(await this.callApi(params, req, runtime), new BatchDeleteFileMetaResponse({}));
  }

  async batchDeleteFileMeta(request: BatchDeleteFileMetaRequest): Promise<BatchDeleteFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteFileMetaWithOptions(request, runtime);
  }

  async batchGetFileMetaWithOptions(tmpReq: BatchGetFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchGetFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.URIs)) {
      request.URIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.URIs, "URIs", "json");
    }

    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["URIs"] = request.URIsShrink;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchGetFileMetaResponse>(await this.callApi(params, req, runtime), new BatchGetFileMetaResponse({}));
  }

  async batchGetFileMeta(request: BatchGetFileMetaRequest): Promise<BatchGetFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetFileMetaWithOptions(request, runtime);
  }

  async batchIndexFileMetaWithOptions(tmpReq: BatchIndexFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<BatchIndexFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchIndexFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let query = { };
    query["DatasetName"] = request.datasetName;
    query["Files"] = request.filesShrink;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BatchIndexFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchIndexFileMetaResponse>(await this.callApi(params, req, runtime), new BatchIndexFileMetaResponse({}));
  }

  async batchIndexFileMeta(request: BatchIndexFileMetaRequest): Promise<BatchIndexFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchIndexFileMetaWithOptions(request, runtime);
  }

  async batchUpdateFileMetaWithOptions(tmpReq: BatchUpdateFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<BatchUpdateFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchUpdateFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let query = { };
    query["DatasetName"] = request.datasetName;
    query["Files"] = request.filesShrink;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "BatchUpdateFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdateFileMetaResponse>(await this.callApi(params, req, runtime), new BatchUpdateFileMetaResponse({}));
  }

  async batchUpdateFileMeta(request: BatchUpdateFileMetaRequest): Promise<BatchUpdateFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateFileMetaWithOptions(request, runtime);
  }

  async createBindingWithOptions(request: CreateBindingRequest, runtime: $Util.RuntimeOptions): Promise<CreateBindingResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateBindingResponse>(await this.callApi(params, req, runtime), new CreateBindingResponse({}));
  }

  async createBinding(request: CreateBindingRequest): Promise<CreateBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  async createDatasetWithOptions(request: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    query["DatasetName"] = request.datasetName;
    query["Description"] = request.description;
    query["ProjectName"] = request.projectName;
    query["TemplateId"] = request.templateId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  async createOfficeConversionTaskWithOptions(request: CreateOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["EndPage"] = request.endPage;
    query["FirstPage"] = request.firstPage;
    query["FitToHeight"] = request.fitToHeight;
    query["FitToWidth"] = request.fitToWidth;
    query["IsHorizontal"] = request.isHorizontal;
    query["LongPic"] = request.longPic;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["PaperSize"] = request.paperSize;
    query["Password"] = request.password;
    query["ProjectName"] = request.projectName;
    query["Quality"] = request.quality;
    query["Scale"] = request.scale;
    query["SheetCount"] = request.sheetCount;
    query["SheetIndex"] = request.sheetIndex;
    query["ShowComments"] = request.showComments;
    query["SourceType"] = request.sourceType;
    query["SourceUri"] = request.sourceUri;
    query["StartPage"] = request.startPage;
    query["TargetType"] = request.targetType;
    query["TargetUri"] = request.targetUri;
    query["UserData"] = request.userData;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateOfficeConversionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateOfficeConversionTaskResponse>(await this.callApi(params, req, runtime), new CreateOfficeConversionTaskResponse({}));
  }

  async createOfficeConversionTask(request: CreateOfficeConversionTaskRequest): Promise<CreateOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createOfficeConversionTaskWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    query["Description"] = request.description;
    query["EngineConcurrency"] = request.engineConcurrency;
    query["ProjectMaxDatasetCount"] = request.projectMaxDatasetCount;
    query["ProjectName"] = request.projectName;
    query["ProjectQueriesPerSecond"] = request.projectQueriesPerSecond;
    query["ServiceRole"] = request.serviceRole;
    query["TemplateId"] = request.templateId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async deleteBindingWithOptions(request: DeleteBindingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBindingResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteBindingResponse>(await this.callApi(params, req, runtime), new DeleteBindingResponse({}));
  }

  async deleteBinding(request: DeleteBindingRequest): Promise<DeleteBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBindingWithOptions(request, runtime);
  }

  async deleteDatasetWithOptions(request: DeleteDatasetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteDatasetResponse>(await this.callApi(params, req, runtime), new DeleteDatasetResponse({}));
  }

  async deleteDataset(request: DeleteDatasetRequest): Promise<DeleteDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  async deleteFileMetaWithOptions(request: DeleteFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileMetaResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileMetaResponse>(await this.callApi(params, req, runtime), new DeleteFileMetaResponse({}));
  }

  async deleteFileMeta(request: DeleteFileMetaRequest): Promise<DeleteFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileMetaWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let query = { };
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async detectImageLabelsWithOptions(request: DetectImageLabelsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageLabelsResponse> {
    Util.validateModel(request);
    let query = { };
    query["ProjectName"] = request.projectName;
    query["SourceURI"] = request.sourceURI;
    query["Threshold"] = request.threshold;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageLabels",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<DetectImageLabelsResponse>(await this.callApi(params, req, runtime), new DetectImageLabelsResponse({}));
  }

  async detectImageLabels(request: DetectImageLabelsRequest): Promise<DetectImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageLabelsWithOptions(request, runtime);
  }

  async fuzzyQueryWithOptions(request: FuzzyQueryRequest, runtime: $Util.RuntimeOptions): Promise<FuzzyQueryResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["ProjectName"] = request.projectName;
    query["Query"] = request.query;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "FuzzyQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<FuzzyQueryResponse>(await this.callApi(params, req, runtime), new FuzzyQueryResponse({}));
  }

  async fuzzyQuery(request: FuzzyQueryRequest): Promise<FuzzyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyQueryWithOptions(request, runtime);
  }

  async getBindingWithOptions(request: GetBindingRequest, runtime: $Util.RuntimeOptions): Promise<GetBindingResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetBindingResponse>(await this.callApi(params, req, runtime), new GetBindingResponse({}));
  }

  async getBinding(request: GetBindingRequest): Promise<GetBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBindingWithOptions(request, runtime);
  }

  async getDatasetWithOptions(request: GetDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["WithStatistics"] = request.withStatistics;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  async getDataset(request: GetDatasetRequest): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  async getFileMetaWithOptions(request: GetFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetFileMetaResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileMetaResponse>(await this.callApi(params, req, runtime), new GetFileMetaResponse({}));
  }

  async getFileMeta(request: GetFileMetaRequest): Promise<GetFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileMetaWithOptions(request, runtime);
  }

  async getFileSignedURIWithOptions(request: GetFileSignedURIRequest, runtime: $Util.RuntimeOptions): Promise<GetFileSignedURIResponse> {
    Util.validateModel(request);
    let query = { };
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetFileSignedURI",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetFileSignedURIResponse>(await this.callApi(params, req, runtime), new GetFileSignedURIResponse({}));
  }

  async getFileSignedURI(request: GetFileSignedURIRequest): Promise<GetFileSignedURIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileSignedURIWithOptions(request, runtime);
  }

  async getOfficeConversionTaskWithOptions(request: GetOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["ProjectName"] = request.projectName;
    query["TaskId"] = request.taskId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetOfficeConversionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetOfficeConversionTaskResponse>(await this.callApi(params, req, runtime), new GetOfficeConversionTaskResponse({}));
  }

  async getOfficeConversionTask(request: GetOfficeConversionTaskRequest): Promise<GetOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOfficeConversionTaskWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query = { };
    query["ProjectName"] = request.projectName;
    query["WithStatistics"] = request.withStatistics;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  async getWebofficeURLWithOptions(tmpReq: GetWebofficeURLRequest, runtime: $Util.RuntimeOptions): Promise<GetWebofficeURLResponse> {
    Util.validateModel(tmpReq);
    let request = new GetWebofficeURLShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.assumeRoleChain))) {
      request.assumeRoleChainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.assumeRoleChain), "AssumeRoleChain", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.permission))) {
      request.permissionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.permission), "Permission", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.user))) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.user), "User", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.watermark))) {
      request.watermarkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.watermark), "Watermark", "json");
    }

    let query = { };
    query["AssumeRoleChain"] = request.assumeRoleChainShrink;
    query["ExternalUploaded"] = request.externalUploaded;
    query["Filename"] = request.filename;
    query["Hidecmb"] = request.hidecmb;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["Password"] = request.password;
    query["Permission"] = request.permissionShrink;
    query["PreviewPages"] = request.previewPages;
    query["ProjectName"] = request.projectName;
    query["Referer"] = request.referer;
    query["SourceURI"] = request.sourceURI;
    query["User"] = request.userShrink;
    query["UserData"] = request.userData;
    query["Watermark"] = request.watermarkShrink;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "GetWebofficeURL",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<GetWebofficeURLResponse>(await this.callApi(params, req, runtime), new GetWebofficeURLResponse({}));
  }

  async getWebofficeURL(request: GetWebofficeURLRequest): Promise<GetWebofficeURLResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebofficeURLWithOptions(request, runtime);
  }

  async indexFileMetaWithOptions(tmpReq: IndexFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<IndexFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new IndexFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.file))) {
      request.fileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.file), "File", "json");
    }

    let query = { };
    query["DatasetName"] = request.datasetName;
    query["File"] = request.fileShrink;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "IndexFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<IndexFileMetaResponse>(await this.callApi(params, req, runtime), new IndexFileMetaResponse({}));
  }

  async indexFileMeta(request: IndexFileMetaRequest): Promise<IndexFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.indexFileMetaWithOptions(request, runtime);
  }

  async listBindingsWithOptions(request: ListBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListBindingsResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListBindings",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListBindingsResponse>(await this.callApi(params, req, runtime), new ListBindingsResponse({}));
  }

  async listBindings(request: ListBindingsRequest): Promise<ListBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  async listDatasetsWithOptions(request: ListDatasetsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetsResponse> {
    Util.validateModel(request);
    let query = { };
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["Prefix"] = request.prefix;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasets",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
  }

  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  async listOfficeConversionTaskWithOptions(request: ListOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<ListOfficeConversionTaskResponse> {
    Util.validateModel(request);
    let query = { };
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListOfficeConversionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListOfficeConversionTaskResponse>(await this.callApi(params, req, runtime), new ListOfficeConversionTaskResponse({}));
  }

  async listOfficeConversionTask(request: ListOfficeConversionTaskRequest): Promise<ListOfficeConversionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listOfficeConversionTaskWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["Prefix"] = request.prefix;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async refreshWebofficeTokenWithOptions(tmpReq: RefreshWebofficeTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshWebofficeTokenResponse> {
    Util.validateModel(tmpReq);
    let request = new RefreshWebofficeTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.assumeRoleChain))) {
      request.assumeRoleChainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.assumeRoleChain), "AssumeRoleChain", "json");
    }

    let query = { };
    query["AccessToken"] = request.accessToken;
    query["AssumeRoleChain"] = request.assumeRoleChainShrink;
    query["ProjectName"] = request.projectName;
    query["RefreshToken"] = request.refreshToken;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "RefreshWebofficeToken",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<RefreshWebofficeTokenResponse>(await this.callApi(params, req, runtime), new RefreshWebofficeTokenResponse({}));
  }

  async refreshWebofficeToken(request: RefreshWebofficeTokenRequest): Promise<RefreshWebofficeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshWebofficeTokenWithOptions(request, runtime);
  }

  async resumeBindingWithOptions(request: ResumeBindingRequest, runtime: $Util.RuntimeOptions): Promise<ResumeBindingResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "ResumeBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<ResumeBindingResponse>(await this.callApi(params, req, runtime), new ResumeBindingResponse({}));
  }

  async resumeBinding(request: ResumeBindingRequest): Promise<ResumeBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeBindingWithOptions(request, runtime);
  }

  async simpleQueryWithOptions(tmpReq: SimpleQueryRequest, runtime: $Util.RuntimeOptions): Promise<SimpleQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new SimpleQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aggregations)) {
      request.aggregationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregations, "Aggregations", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.query))) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.query), "Query", "json");
    }

    let query = { };
    query["Aggregations"] = request.aggregationsShrink;
    query["DatasetName"] = request.datasetName;
    query["MaxResults"] = request.maxResults;
    query["NextToken"] = request.nextToken;
    query["Order"] = request.order;
    query["ProjectName"] = request.projectName;
    query["Query"] = request.queryShrink;
    query["Sort"] = request.sort;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "SimpleQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<SimpleQueryResponse>(await this.callApi(params, req, runtime), new SimpleQueryResponse({}));
  }

  async simpleQuery(request: SimpleQueryRequest): Promise<SimpleQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.simpleQueryWithOptions(request, runtime);
  }

  async stopBindingWithOptions(request: StopBindingRequest, runtime: $Util.RuntimeOptions): Promise<StopBindingResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetName"] = request.datasetName;
    query["ProjectName"] = request.projectName;
    query["Reason"] = request.reason;
    query["URI"] = request.URI;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "StopBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<StopBindingResponse>(await this.callApi(params, req, runtime), new StopBindingResponse({}));
  }

  async stopBinding(request: StopBindingRequest): Promise<StopBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopBindingWithOptions(request, runtime);
  }

  async updateDatasetWithOptions(request: UpdateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    query["DatasetName"] = request.datasetName;
    query["Description"] = request.description;
    query["ProjectName"] = request.projectName;
    query["TemplateId"] = request.templateId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
  }

  async updateDataset(request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  async updateFileMetaWithOptions(tmpReq: UpdateFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.file))) {
      request.fileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.file), "File", "json");
    }

    let query = { };
    query["DatasetName"] = request.datasetName;
    query["File"] = request.fileShrink;
    query["NotifyEndpoint"] = request.notifyEndpoint;
    query["NotifyTopicName"] = request.notifyTopicName;
    query["ProjectName"] = request.projectName;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileMetaResponse>(await this.callApi(params, req, runtime), new UpdateFileMetaResponse({}));
  }

  async updateFileMeta(request: UpdateFileMetaRequest): Promise<UpdateFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileMetaWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    query["Description"] = request.description;
    query["EngineConcurrency"] = request.engineConcurrency;
    query["ProjectMaxDatasetCount"] = request.projectMaxDatasetCount;
    query["ProjectName"] = request.projectName;
    query["ProjectQueriesPerSecond"] = request.projectQueriesPerSecond;
    query["ServiceRole"] = request.serviceRole;
    query["TemplateId"] = request.templateId;
    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: Util.toMap(request),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "json",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

}
