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

export class AddressForStory extends $tea.Model {
  city?: string;
  country?: string;
  district?: string;
  province?: string;
  township?: string;
  static names(): { [key: string]: string } {
    return {
      city: 'City',
      country: 'Country',
      district: 'District',
      province: 'Province',
      township: 'Township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      city: 'string',
      country: 'string',
      district: 'string',
      province: 'string',
      township: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AlgorithmDefinition extends $tea.Model {
  algorithmDefinitionId?: string;
  createTime?: string;
  customLabels?: { [key: string]: string }[];
  description?: string;
  name?: string;
  ownerId?: string;
  projectName?: string;
  trainingSpecification?: TrainingSpecification;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      algorithmDefinitionId: 'AlgorithmDefinitionId',
      createTime: 'CreateTime',
      customLabels: 'CustomLabels',
      description: 'Description',
      name: 'Name',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      trainingSpecification: 'TrainingSpecification',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithmDefinitionId: 'string',
      createTime: 'string',
      customLabels: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      description: 'string',
      name: 'string',
      ownerId: 'string',
      projectName: 'string',
      trainingSpecification: TrainingSpecification,
      updateTime: 'string',
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
  frameCount?: number;
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
      frameCount: 'FrameCount',
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
      frameCount: 'number',
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

export class Body extends $tea.Model {
  boundary?: Boundary;
  confidence?: number;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
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

export class Car extends $tea.Model {
  boundary?: Boundary;
  carColor?: string;
  carColorConfidence?: number;
  carType?: string;
  carTypeConfidence?: number;
  confidence?: number;
  licensePlates?: LicensePlate[];
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      carColor: 'CarColor',
      carColorConfidence: 'CarColorConfidence',
      carType: 'CarType',
      carTypeConfidence: 'CarTypeConfidence',
      confidence: 'Confidence',
      licensePlates: 'LicensePlates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      carColor: 'string',
      carColorConfidence: 'number',
      carType: 'string',
      carTypeConfidence: 'number',
      confidence: 'number',
      licensePlates: { 'type': 'array', 'itemType': LicensePlate },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterForReq extends $tea.Model {
  cover?: ClusterForReqCover;
  customId?: string;
  customLabels?: { [key: string]: any };
  name?: string;
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      name: 'Name',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: ClusterForReqCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      objectId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Codes extends $tea.Model {
  boundary?: Boundary;
  confidence?: number;
  content?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
      content: 'Content',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
      content: 'string',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfig extends $tea.Model {
  chain?: CredentialConfigChain[];
  policy?: string;
  serviceRole?: string;
  static names(): { [key: string]: string } {
    return {
      chain: 'Chain',
      policy: 'Policy',
      serviceRole: 'ServiceRole',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chain: { 'type': 'array', 'itemType': CredentialConfigChain },
      policy: 'string',
      serviceRole: 'string',
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

export class CustomParams extends $tea.Model {
  name?: string;
  properties?: Property[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      properties: 'Properties',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      properties: { 'type': 'array', 'itemType': Property },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestion extends $tea.Model {
  actions?: DataIngestionActions[];
  createTime?: string;
  error?: string;
  id?: string;
  input?: Input;
  marker?: string;
  notification?: DataIngestionNotification;
  state?: string;
  statistic?: DataIngestionStatistic;
  tags?: { [key: string]: any };
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      createTime: 'CreateTime',
      error: 'Error',
      id: 'Id',
      input: 'Input',
      marker: 'Marker',
      notification: 'Notification',
      state: 'State',
      statistic: 'Statistic',
      tags: 'Tags',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': DataIngestionActions },
      createTime: 'string',
      error: 'string',
      id: 'string',
      input: Input,
      marker: 'string',
      notification: DataIngestionNotification,
      state: 'string',
      statistic: DataIngestionStatistic,
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      updateTime: 'string',
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
  templateId?: string;
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
      templateId: 'TemplateId',
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
      templateId: 'string',
      totalFileSize: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Figure extends $tea.Model {
  age?: number;
  ageSD?: number;
  attractive?: number;
  beard?: string;
  beardConfidence?: number;
  boundary?: Boundary;
  emotion?: string;
  emotionConfidence?: number;
  faceQuality?: number;
  figureClusterConfidence?: number;
  figureClusterId?: string;
  figureConfidence?: number;
  figureId?: string;
  figureType?: string;
  gender?: string;
  genderConfidence?: number;
  glasses?: string;
  glassesConfidence?: number;
  hat?: string;
  hatConfidence?: number;
  headPose?: HeadPose;
  mask?: string;
  maskConfidence?: number;
  mouth?: string;
  mouthConfidence?: number;
  sharpness?: number;
  static names(): { [key: string]: string } {
    return {
      age: 'Age',
      ageSD: 'AgeSD',
      attractive: 'Attractive',
      beard: 'Beard',
      beardConfidence: 'BeardConfidence',
      boundary: 'Boundary',
      emotion: 'Emotion',
      emotionConfidence: 'EmotionConfidence',
      faceQuality: 'FaceQuality',
      figureClusterConfidence: 'FigureClusterConfidence',
      figureClusterId: 'FigureClusterId',
      figureConfidence: 'FigureConfidence',
      figureId: 'FigureId',
      figureType: 'FigureType',
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      glasses: 'Glasses',
      glassesConfidence: 'GlassesConfidence',
      hat: 'Hat',
      hatConfidence: 'HatConfidence',
      headPose: 'HeadPose',
      mask: 'Mask',
      maskConfidence: 'MaskConfidence',
      mouth: 'Mouth',
      mouthConfidence: 'MouthConfidence',
      sharpness: 'Sharpness',
    };
  }

  static types(): { [key: string]: any } {
    return {
      age: 'number',
      ageSD: 'number',
      attractive: 'number',
      beard: 'string',
      beardConfidence: 'number',
      boundary: Boundary,
      emotion: 'string',
      emotionConfidence: 'number',
      faceQuality: 'number',
      figureClusterConfidence: 'number',
      figureClusterId: 'string',
      figureConfidence: 'number',
      figureId: 'string',
      figureType: 'string',
      gender: 'string',
      genderConfidence: 'number',
      glasses: 'string',
      glassesConfidence: 'number',
      hat: 'string',
      hatConfidence: 'number',
      headPose: HeadPose,
      mask: 'string',
      maskConfidence: 'number',
      mouth: 'string',
      mouthConfidence: 'number',
      sharpness: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureCluster extends $tea.Model {
  averageAge?: number;
  cover?: File;
  createTime?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  faceCount?: number;
  gender?: string;
  imageCount?: number;
  maxAge?: number;
  metaLockVersion?: number;
  minAge?: number;
  name?: string;
  objectId?: string;
  objectType?: string;
  ownerId?: string;
  projectName?: string;
  updateTime?: string;
  videoCount?: number;
  static names(): { [key: string]: string } {
    return {
      averageAge: 'AverageAge',
      cover: 'Cover',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      faceCount: 'FaceCount',
      gender: 'Gender',
      imageCount: 'ImageCount',
      maxAge: 'MaxAge',
      metaLockVersion: 'MetaLockVersion',
      minAge: 'MinAge',
      name: 'Name',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      updateTime: 'UpdateTime',
      videoCount: 'VideoCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageAge: 'number',
      cover: File,
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      faceCount: 'number',
      gender: 'string',
      imageCount: 'number',
      maxAge: 'number',
      metaLockVersion: 'number',
      minAge: 'number',
      name: 'string',
      objectId: 'string',
      objectType: 'string',
      ownerId: 'string',
      projectName: 'string',
      updateTime: 'string',
      videoCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReq extends $tea.Model {
  cover?: FigureClusterForReqCover;
  customId?: string;
  customLabels?: { [key: string]: any };
  metaLockVersion?: number;
  name?: string;
  objectId?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      metaLockVersion: 'MetaLockVersion',
      name: 'Name',
      objectId: 'ObjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: FigureClusterForReqCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      metaLockVersion: 'number',
      name: 'string',
      objectId: 'string',
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
  labels?: Label[];
  language?: string;
  latLong?: string;
  mediaType?: string;
  OCRContents?: OCRContents[];
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
  objectType?: string;
  orientation?: number;
  ownerId?: string;
  pageCount?: number;
  performer?: string;
  produceTime?: string;
  programCount?: number;
  projectName?: string;
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
      labels: 'Labels',
      language: 'Language',
      latLong: 'LatLong',
      mediaType: 'MediaType',
      OCRContents: 'OCRContents',
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
      objectType: 'ObjectType',
      orientation: 'Orientation',
      ownerId: 'OwnerId',
      pageCount: 'PageCount',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      programCount: 'ProgramCount',
      projectName: 'ProjectName',
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
      labels: { 'type': 'array', 'itemType': Label },
      language: 'string',
      latLong: 'string',
      mediaType: 'string',
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
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
      objectType: 'string',
      orientation: 'number',
      ownerId: 'string',
      pageCount: 'number',
      performer: 'string',
      produceTime: 'string',
      programCount: 'number',
      projectName: 'string',
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

export class Hyperparameters extends $tea.Model {
  backupInterval?: number;
  batchSize?: number;
  dataLoaderWorkers?: number;
  evaluator?: CustomParams;
  inputSize?: number[];
  maxEpoch?: number;
  optimization?: Optimization;
  schedule?: Schedule;
  static names(): { [key: string]: string } {
    return {
      backupInterval: 'BackupInterval',
      batchSize: 'BatchSize',
      dataLoaderWorkers: 'DataLoaderWorkers',
      evaluator: 'Evaluator',
      inputSize: 'InputSize',
      maxEpoch: 'MaxEpoch',
      optimization: 'Optimization',
      schedule: 'Schedule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupInterval: 'number',
      batchSize: 'number',
      dataLoaderWorkers: 'number',
      evaluator: CustomParams,
      inputSize: { 'type': 'array', 'itemType': 'number' },
      maxEpoch: 'number',
      optimization: Optimization,
      schedule: Schedule,
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

export class Input extends $tea.Model {
  OSS?: InputOSS;
  static names(): { [key: string]: string } {
    return {
      OSS: 'OSS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSS: InputOSS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputFile extends $tea.Model {
  contentType?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  figures?: InputFileFigures[];
  fileHash?: string;
  mediaType?: string;
  OSSURI?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'ContentType',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      figures: 'Figures',
      fileHash: 'FileHash',
      mediaType: 'MediaType',
      OSSURI: 'OSSURI',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      figures: { 'type': 'array', 'itemType': InputFileFigures },
      fileHash: 'string',
      mediaType: 'string',
      OSSURI: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputOSS extends $tea.Model {
  bucket?: string;
  matchExpressions?: string[];
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      matchExpressions: 'MatchExpressions',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      matchExpressions: { 'type': 'array', 'itemType': 'string' },
      prefix: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class KdtreeOption extends $tea.Model {
  compressionLevel?: number;
  libraryName?: string;
  quantizationBits?: number;
  static names(): { [key: string]: string } {
    return {
      compressionLevel: 'CompressionLevel',
      libraryName: 'LibraryName',
      quantizationBits: 'QuantizationBits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressionLevel: 'number',
      libraryName: 'string',
      quantizationBits: 'number',
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
  centricScore?: number;
  labelConfidence?: number;
  labelLevel?: number;
  labelName?: string;
  language?: string;
  parentLabelName?: string;
  static names(): { [key: string]: string } {
    return {
      centricScore: 'CentricScore',
      labelConfidence: 'LabelConfidence',
      labelLevel: 'LabelLevel',
      labelName: 'LabelName',
      language: 'Language',
      parentLabelName: 'ParentLabelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      centricScore: 'number',
      labelConfidence: 'number',
      labelLevel: 'number',
      labelName: 'string',
      language: 'string',
      parentLabelName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LicensePlate extends $tea.Model {
  boundary?: Boundary;
  confidence?: number;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      confidence: 'Confidence',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      confidence: 'number',
      content: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class LocationDateCluster extends $tea.Model {
  addresses?: Address[];
  createTime?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  locationDateClusterEndTime?: string;
  locationDateClusterLevel?: string;
  locationDateClusterStartTime?: string;
  objectId?: string;
  title?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      locationDateClusterEndTime: 'LocationDateClusterEndTime',
      locationDateClusterLevel: 'LocationDateClusterLevel',
      locationDateClusterStartTime: 'LocationDateClusterStartTime',
      objectId: 'ObjectId',
      title: 'Title',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      locationDateClusterEndTime: 'string',
      locationDateClusterLevel: 'string',
      locationDateClusterStartTime: 'string',
      objectId: 'string',
      title: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MNS extends $tea.Model {
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      topicName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetaData extends $tea.Model {
  identifier?: string;
  provider?: string;
  version?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      provider: 'Provider',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      provider: 'string',
      version: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModelSpecification extends $tea.Model {
  metaData?: MetaData;
  spec?: Spec;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: MetaData,
      spec: Spec,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Notification extends $tea.Model {
  extendedMessageURI?: string;
  MNS?: MNS;
  rocketMQ?: RocketMQ;
  static names(): { [key: string]: string } {
    return {
      extendedMessageURI: 'ExtendedMessageURI',
      MNS: 'MNS',
      rocketMQ: 'RocketMQ',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedMessageURI: 'string',
      MNS: MNS,
      rocketMQ: RocketMQ,
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

export class OctreeOption extends $tea.Model {
  doVoxelGridDownDownSampling?: boolean;
  libraryName?: string;
  octreeResolution?: number;
  pointResolution?: number;
  static names(): { [key: string]: string } {
    return {
      doVoxelGridDownDownSampling: 'DoVoxelGridDownDownSampling',
      libraryName: 'LibraryName',
      octreeResolution: 'OctreeResolution',
      pointResolution: 'PointResolution',
    };
  }

  static types(): { [key: string]: any } {
    return {
      doVoxelGridDownDownSampling: 'boolean',
      libraryName: 'string',
      octreeResolution: 'number',
      pointResolution: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Optimization extends $tea.Model {
  learningRate?: number;
  optimizer?: string;
  static names(): { [key: string]: string } {
    return {
      learningRate: 'LearningRate',
      optimizer: 'Optimizer',
    };
  }

  static types(): { [key: string]: any } {
    return {
      learningRate: 'number',
      optimizer: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PresetReference extends $tea.Model {
  name?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      type: 'string',
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
  templateId?: string;
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
      templateId: 'TemplateId',
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
      templateId: 'string',
      totalFileSize: 'number',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Property extends $tea.Model {
  itemsType?: string;
  name?: string;
  value?: string;
  valueType?: string;
  static names(): { [key: string]: string } {
    return {
      itemsType: 'ItemsType',
      name: 'Name',
      value: 'Value',
      valueType: 'ValueType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      itemsType: 'string',
      name: 'string',
      value: 'string',
      valueType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RegionType extends $tea.Model {
  localName?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      regionId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Resource extends $tea.Model {
  CPU?: number;
  ECSInstance?: string;
  GPUModel?: string;
  GPUNum?: number;
  name?: string;
  RAM?: number;
  static names(): { [key: string]: string } {
    return {
      CPU: 'CPU',
      ECSInstance: 'ECSInstance',
      GPUModel: 'GPUModel',
      GPUNum: 'GPUNum',
      name: 'Name',
      RAM: 'RAM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      CPU: 'number',
      ECSInstance: 'string',
      GPUModel: 'string',
      GPUNum: 'number',
      name: 'string',
      RAM: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RocketMQ extends $tea.Model {
  instanceId?: string;
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      topicName: 'string',
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

export class Runtime extends $tea.Model {
  hyperparameters?: Hyperparameters;
  resource?: Resource;
  static names(): { [key: string]: string } {
    return {
      hyperparameters: 'Hyperparameters',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperparameters: Hyperparameters,
      resource: Resource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Schedule extends $tea.Model {
  gamma?: number;
  LRScheduler?: string;
  stepSize?: number;
  static names(): { [key: string]: string } {
    return {
      gamma: 'Gamma',
      LRScheduler: 'LRScheduler',
      stepSize: 'StepSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gamma: 'number',
      LRScheduler: 'string',
      stepSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimilarImage extends $tea.Model {
  imageScore?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      imageScore: 'ImageScore',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScore: 'number',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimilarImageCluster extends $tea.Model {
  createTime?: string;
  customLabels?: { [key: string]: any };
  files?: SimilarImage[];
  objectId?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customLabels: 'CustomLabels',
      files: 'Files',
      objectId: 'ObjectId',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      files: { 'type': 'array', 'itemType': SimilarImage },
      objectId: 'string',
      updateTime: 'string',
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

export class Spec extends $tea.Model {
  backbone?: CustomParams;
  classNum?: number;
  head?: CustomParams;
  inputChannel?: number;
  loss?: CustomParams;
  name?: string;
  neck?: CustomParams;
  numLandmarks?: number;
  pretrainedPath?: string;
  static names(): { [key: string]: string } {
    return {
      backbone: 'Backbone',
      classNum: 'ClassNum',
      head: 'Head',
      inputChannel: 'InputChannel',
      loss: 'Loss',
      name: 'Name',
      neck: 'Neck',
      numLandmarks: 'NumLandmarks',
      pretrainedPath: 'PretrainedPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backbone: CustomParams,
      classNum: 'number',
      head: CustomParams,
      inputChannel: 'number',
      loss: CustomParams,
      name: 'string',
      neck: CustomParams,
      numLandmarks: 'number',
      pretrainedPath: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Story extends $tea.Model {
  addresses?: Address[];
  cover?: File;
  createTime?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  figureClusterIds?: string[];
  files?: File[];
  objectId?: string;
  objectType?: string;
  ownerId?: string;
  projectName?: string;
  storyEndTime?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      cover: 'Cover',
      createTime: 'CreateTime',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      figureClusterIds: 'FigureClusterIds',
      files: 'Files',
      objectId: 'ObjectId',
      objectType: 'ObjectType',
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      storyEndTime: 'StoryEndTime',
      storyName: 'StoryName',
      storyStartTime: 'StoryStartTime',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      cover: File,
      createTime: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      figureClusterIds: { 'type': 'array', 'itemType': 'string' },
      files: { 'type': 'array', 'itemType': File },
      objectId: 'string',
      objectType: 'string',
      ownerId: 'string',
      projectName: 'string',
      storyEndTime: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      updateTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtitleStream extends $tea.Model {
  bitrate?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  content?: string;
  duration?: number;
  height?: number;
  index?: number;
  language?: string;
  startTime?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      content: 'Content',
      duration: 'Duration',
      height: 'Height',
      index: 'Index',
      language: 'Language',
      startTime: 'StartTime',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      content: 'string',
      duration: 'number',
      height: 'number',
      index: 'number',
      language: 'string',
      startTime: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetAudio extends $tea.Model {
  disableAudio?: boolean;
  filterAudio?: TargetAudioFilterAudio;
  stream?: number[];
  transcodeAudio?: TargetAudioTranscodeAudio;
  static names(): { [key: string]: string } {
    return {
      disableAudio: 'DisableAudio',
      filterAudio: 'FilterAudio',
      stream: 'Stream',
      transcodeAudio: 'TranscodeAudio',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableAudio: 'boolean',
      filterAudio: TargetAudioFilterAudio,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeAudio: TargetAudioTranscodeAudio,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetImage extends $tea.Model {
  animations?: TargetImageAnimations[];
  snapshots?: TargetImageSnapshots[];
  sprites?: TargetImageSprites[];
  static names(): { [key: string]: string } {
    return {
      animations: 'Animations',
      snapshots: 'Snapshots',
      sprites: 'Sprites',
    };
  }

  static types(): { [key: string]: any } {
    return {
      animations: { 'type': 'array', 'itemType': TargetImageAnimations },
      snapshots: { 'type': 'array', 'itemType': TargetImageSnapshots },
      sprites: { 'type': 'array', 'itemType': TargetImageSprites },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetSubtitle extends $tea.Model {
  disableSubtitle?: boolean;
  extractSubtitle?: TargetSubtitleExtractSubtitle;
  stream?: number[];
  static names(): { [key: string]: string } {
    return {
      disableSubtitle: 'DisableSubtitle',
      extractSubtitle: 'ExtractSubtitle',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableSubtitle: 'boolean',
      extractSubtitle: TargetSubtitleExtractSubtitle,
      stream: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideo extends $tea.Model {
  disableVideo?: boolean;
  filterVideo?: TargetVideoFilterVideo;
  stream?: number[];
  transcodeVideo?: TargetVideoTranscodeVideo;
  static names(): { [key: string]: string } {
    return {
      disableVideo: 'DisableVideo',
      filterVideo: 'FilterVideo',
      stream: 'Stream',
      transcodeVideo: 'TranscodeVideo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableVideo: 'boolean',
      filterVideo: TargetVideoFilterVideo,
      stream: { 'type': 'array', 'itemType': 'number' },
      transcodeVideo: TargetVideoTranscodeVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TaskInfo extends $tea.Model {
  code?: string;
  endTime?: string;
  message?: string;
  progress?: number;
  startTime?: string;
  status?: string;
  tags?: { [key: string]: any };
  taskId?: string;
  taskRequestDefinition?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      message: 'Message',
      progress: 'Progress',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskRequestDefinition: 'TaskRequestDefinition',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      message: 'string',
      progress: 'number',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskId: 'string',
      taskRequestDefinition: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TimeRange extends $tea.Model {
  end?: string;
  start?: string;
  static names(): { [key: string]: string } {
    return {
      end: 'End',
      start: 'Start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      end: 'string',
      start: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrainingSpecification extends $tea.Model {
  datasetName?: string;
  endpoint?: string;
  modelSpecification?: ModelSpecification;
  runtime?: Runtime;
  sourceURI?: string;
  targetURI?: string;
  transforms?: CustomParams[];
  validationSourceURI?: string;
  validationSplit?: number;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      endpoint: 'Endpoint',
      modelSpecification: 'ModelSpecification',
      runtime: 'Runtime',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      transforms: 'Transforms',
      validationSourceURI: 'ValidationSourceURI',
      validationSplit: 'ValidationSplit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      endpoint: 'string',
      modelSpecification: ModelSpecification,
      runtime: Runtime,
      sourceURI: 'string',
      targetURI: 'string',
      transforms: { 'type': 'array', 'itemType': CustomParams },
      validationSourceURI: 'string',
      validationSplit: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrimPolicy extends $tea.Model {
  disableDeleteEmptyCell?: boolean;
  disableDeleteRepeatedStyle?: boolean;
  disableDeleteUnusedPicture?: boolean;
  disableDeleteUnusedShape?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableDeleteEmptyCell: 'DisableDeleteEmptyCell',
      disableDeleteRepeatedStyle: 'DisableDeleteRepeatedStyle',
      disableDeleteUnusedPicture: 'DisableDeleteUnusedPicture',
      disableDeleteUnusedShape: 'DisableDeleteUnusedShape',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableDeleteEmptyCell: 'boolean',
      disableDeleteRepeatedStyle: 'boolean',
      disableDeleteUnusedPicture: 'boolean',
      disableDeleteUnusedShape: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoStream extends $tea.Model {
  averageFrameRate?: string;
  bitDepth?: number;
  bitrate?: number;
  codecLongName?: string;
  codecName?: string;
  codecTag?: string;
  codecTagString?: string;
  codecTimeBase?: string;
  colorPrimaries?: string;
  colorRange?: string;
  colorSpace?: string;
  colorTransfer?: string;
  displayAspectRatio?: string;
  duration?: number;
  frameCount?: number;
  frameRate?: string;
  hasBFrames?: number;
  height?: number;
  index?: number;
  language?: string;
  level?: number;
  pixelFormat?: string;
  profile?: string;
  rotate?: string;
  sampleAspectRatio?: string;
  startTime?: number;
  timeBase?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      averageFrameRate: 'AverageFrameRate',
      bitDepth: 'BitDepth',
      bitrate: 'Bitrate',
      codecLongName: 'CodecLongName',
      codecName: 'CodecName',
      codecTag: 'CodecTag',
      codecTagString: 'CodecTagString',
      codecTimeBase: 'CodecTimeBase',
      colorPrimaries: 'ColorPrimaries',
      colorRange: 'ColorRange',
      colorSpace: 'ColorSpace',
      colorTransfer: 'ColorTransfer',
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
      rotate: 'Rotate',
      sampleAspectRatio: 'SampleAspectRatio',
      startTime: 'StartTime',
      timeBase: 'TimeBase',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      averageFrameRate: 'string',
      bitDepth: 'number',
      bitrate: 'number',
      codecLongName: 'string',
      codecName: 'string',
      codecTag: 'string',
      codecTagString: 'string',
      codecTimeBase: 'string',
      colorPrimaries: 'string',
      colorRange: 'string',
      colorSpace: 'string',
      colorTransfer: 'string',
      displayAspectRatio: 'string',
      duration: 'number',
      frameCount: 'number',
      frameRate: 'string',
      hasBFrames: 'number',
      height: 'number',
      index: 'number',
      language: 'string',
      level: 'number',
      pixelFormat: 'string',
      profile: 'string',
      rotate: 'string',
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

export class AddImageMosaicRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  imageFormat?: string;
  projectName?: string;
  quality?: number;
  sourceURI?: string;
  targetURI?: string;
  targets?: AddImageMosaicRequestTargets[];
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      imageFormat: 'ImageFormat',
      projectName: 'ProjectName',
      quality: 'Quality',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      imageFormat: 'string',
      projectName: 'string',
      quality: 'number',
      sourceURI: 'string',
      targetURI: 'string',
      targets: { 'type': 'array', 'itemType': AddImageMosaicRequestTargets },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageMosaicShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  imageFormat?: string;
  projectName?: string;
  quality?: number;
  sourceURI?: string;
  targetURI?: string;
  targetsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      imageFormat: 'ImageFormat',
      projectName: 'ProjectName',
      quality: 'Quality',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      targetsShrink: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      imageFormat: 'string',
      projectName: 'string',
      quality: 'number',
      sourceURI: 'string',
      targetURI: 'string',
      targetsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageMosaicResponseBody extends $tea.Model {
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

export class AddImageMosaicResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddImageMosaicResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddImageMosaicResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequest extends $tea.Model {
  datasetName?: string;
  files?: AddStoryFilesRequestFiles[];
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': AddStoryFilesRequestFiles },
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesShrinkRequest extends $tea.Model {
  datasetName?: string;
  filesShrink?: string;
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponseBody extends $tea.Model {
  files?: AddStoryFilesResponseBodyFiles[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': AddStoryFilesResponseBodyFiles },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AddStoryFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AddStoryFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachOSSBucketRequest extends $tea.Model {
  OSSBucket?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachOSSBucketResponseBody extends $tea.Model {
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

export class AttachOSSBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: AttachOSSBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: AttachOSSBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaRequest extends $tea.Model {
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

export class BatchDeleteFileMetaShrinkRequest extends $tea.Model {
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

export class BatchDeleteFileMetaResponseBody extends $tea.Model {
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

export class BatchDeleteFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchDeleteFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchDeleteFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFigureClusterRequest extends $tea.Model {
  datasetName?: string;
  objectIds?: string[];
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectIds: 'ObjectIds',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectIds: { 'type': 'array', 'itemType': 'string' },
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFigureClusterShrinkRequest extends $tea.Model {
  datasetName?: string;
  objectIdsShrink?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectIdsShrink: 'ObjectIds',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectIdsShrink: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFigureClusterResponseBody extends $tea.Model {
  figureClusters?: FigureCluster[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      figureClusters: 'FigureClusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusters: { 'type': 'array', 'itemType': FigureCluster },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFigureClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchGetFigureClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetFigureClusterResponseBody,
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
  statusCode: number;
  body: BatchGetFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchGetFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaRequest extends $tea.Model {
  datasetName?: string;
  files?: InputFile[];
  notification?: Notification;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      notification: 'Notification',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': InputFile },
      notification: Notification,
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
  notificationShrink?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      notificationShrink: 'string',
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
  statusCode: number;
  body: BatchIndexFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchIndexFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaRequest extends $tea.Model {
  datasetName?: string;
  files?: InputFile[];
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': InputFile },
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
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaResponseBody extends $tea.Model {
  files?: BatchUpdateFileMetaResponseBodyFiles[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': BatchUpdateFileMetaResponseBodyFiles },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: BatchUpdateFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: BatchUpdateFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  source?: CompareImageFacesRequestSource;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      source: CompareImageFacesRequestSource,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceShrink?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceShrink: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponseBody extends $tea.Model {
  requestId?: string;
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      similarity: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CompareImageFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CompareImageFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArchiveFileInspectionTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  notification?: Notification;
  password?: string;
  projectName?: string;
  sourceURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      password: 'Password',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      notification: Notification,
      password: 'string',
      projectName: 'string',
      sourceURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArchiveFileInspectionTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  notificationShrink?: string;
  password?: string;
  projectName?: string;
  sourceURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      password: 'Password',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      password: 'string',
      projectName: 'string',
      sourceURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArchiveFileInspectionTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateArchiveFileInspectionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateArchiveFileInspectionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateArchiveFileInspectionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRequest extends $tea.Model {
  actions?: CreateBatchRequestActions[];
  input?: Input;
  notification?: CreateBatchRequestNotification;
  projectName?: string;
  serviceRole?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      input: 'Input',
      notification: 'Notification',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': CreateBatchRequestActions },
      input: Input,
      notification: CreateBatchRequestNotification,
      projectName: 'string',
      serviceRole: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchShrinkRequest extends $tea.Model {
  actionsShrink?: string;
  inputShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  serviceRole?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionsShrink: 'Actions',
      inputShrink: 'Input',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionsShrink: 'string',
      inputShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      serviceRole: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBatchResponseBody,
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
  statusCode: number;
  body: CreateBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateBindingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompressPointCloudTaskRequest extends $tea.Model {
  compressMethod?: string;
  credentialConfig?: CredentialConfig;
  kdtreeOption?: KdtreeOption;
  notification?: Notification;
  octreeOption?: OctreeOption;
  pointCloudFields?: string[];
  pointCloudFileFormat?: string;
  projectName?: string;
  sourceURI?: string;
  tags?: { [key: string]: any };
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressMethod: 'CompressMethod',
      credentialConfig: 'CredentialConfig',
      kdtreeOption: 'KdtreeOption',
      notification: 'Notification',
      octreeOption: 'OctreeOption',
      pointCloudFields: 'PointCloudFields',
      pointCloudFileFormat: 'PointCloudFileFormat',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressMethod: 'string',
      credentialConfig: CredentialConfig,
      kdtreeOption: KdtreeOption,
      notification: Notification,
      octreeOption: OctreeOption,
      pointCloudFields: { 'type': 'array', 'itemType': 'string' },
      pointCloudFileFormat: 'string',
      projectName: 'string',
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompressPointCloudTaskShrinkRequest extends $tea.Model {
  compressMethod?: string;
  credentialConfigShrink?: string;
  kdtreeOptionShrink?: string;
  notificationShrink?: string;
  octreeOptionShrink?: string;
  pointCloudFieldsShrink?: string;
  pointCloudFileFormat?: string;
  projectName?: string;
  sourceURI?: string;
  tagsShrink?: string;
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressMethod: 'CompressMethod',
      credentialConfigShrink: 'CredentialConfig',
      kdtreeOptionShrink: 'KdtreeOption',
      notificationShrink: 'Notification',
      octreeOptionShrink: 'OctreeOption',
      pointCloudFieldsShrink: 'PointCloudFields',
      pointCloudFileFormat: 'PointCloudFileFormat',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressMethod: 'string',
      credentialConfigShrink: 'string',
      kdtreeOptionShrink: 'string',
      notificationShrink: 'string',
      octreeOptionShrink: 'string',
      pointCloudFieldsShrink: 'string',
      pointCloudFileFormat: 'string',
      projectName: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompressPointCloudTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCompressPointCloudTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCompressPointCloudTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCompressPointCloudTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequest extends $tea.Model {
  cover?: CreateCustomizedStoryRequestCover;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  files?: CreateCustomizedStoryRequestFiles[];
  projectName?: string;
  storyName?: string;
  storySubType?: string;
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      files: 'Files',
      projectName: 'ProjectName',
      storyName: 'StoryName',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: CreateCustomizedStoryRequestCover,
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': CreateCustomizedStoryRequestFiles },
      projectName: 'string',
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryShrinkRequest extends $tea.Model {
  coverShrink?: string;
  customLabelsShrink?: string;
  datasetName?: string;
  filesShrink?: string;
  projectName?: string;
  storyName?: string;
  storySubType?: string;
  storyType?: string;
  static names(): { [key: string]: string } {
    return {
      coverShrink: 'Cover',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      projectName: 'ProjectName',
      storyName: 'StoryName',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverShrink: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      filesShrink: 'string',
      projectName: 'string',
      storyName: 'string',
      storySubType: 'string',
      storyType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryResponseBody extends $tea.Model {
  objectId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateCustomizedStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateCustomizedStoryResponseBody,
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
  statusCode: number;
  body: CreateDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacesSearchingTaskRequest extends $tea.Model {
  datasetName?: string;
  maxResult?: number;
  notification?: Notification;
  projectName?: string;
  sources?: CreateFacesSearchingTaskRequestSources[];
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResult: 'MaxResult',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResult: 'number',
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateFacesSearchingTaskRequestSources },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacesSearchingTaskShrinkRequest extends $tea.Model {
  datasetName?: string;
  maxResult?: number;
  notificationShrink?: string;
  projectName?: string;
  sourcesShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      maxResult: 'MaxResult',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      maxResult: 'number',
      notificationShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacesSearchingTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacesSearchingTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFacesSearchingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFacesSearchingTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClusteringTaskRequest extends $tea.Model {
  datasetName?: string;
  notification?: Notification;
  projectName?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notification: 'Notification',
      projectName: 'ProjectName',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notification: Notification,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClusteringTaskShrinkRequest extends $tea.Model {
  datasetName?: string;
  notificationShrink?: string;
  projectName?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClusteringTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClusteringTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFigureClusteringTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFigureClusteringTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClustersMergingTaskRequest extends $tea.Model {
  datasetName?: string;
  from?: string;
  froms?: string[];
  notification?: Notification;
  projectName?: string;
  tags?: { [key: string]: any };
  to?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      from: 'From',
      froms: 'Froms',
      notification: 'Notification',
      projectName: 'ProjectName',
      tags: 'Tags',
      to: 'To',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      from: 'string',
      froms: { 'type': 'array', 'itemType': 'string' },
      notification: Notification,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      to: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClustersMergingTaskShrinkRequest extends $tea.Model {
  datasetName?: string;
  from?: string;
  fromsShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  tagsShrink?: string;
  to?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      from: 'From',
      fromsShrink: 'Froms',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
      to: 'To',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      from: 'string',
      fromsShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
      to: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClustersMergingTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFigureClustersMergingTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFigureClustersMergingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFigureClustersMergingTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileCompressionTaskRequest extends $tea.Model {
  compressedFormat?: string;
  credentialConfig?: CredentialConfig;
  notification?: Notification;
  projectName?: string;
  sourceManifestURI?: string;
  sources?: CreateFileCompressionTaskRequestSources[];
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressedFormat: 'CompressedFormat',
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sourceManifestURI: 'SourceManifestURI',
      sources: 'Sources',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressedFormat: 'string',
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sourceManifestURI: 'string',
      sources: { 'type': 'array', 'itemType': CreateFileCompressionTaskRequestSources },
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileCompressionTaskShrinkRequest extends $tea.Model {
  compressedFormat?: string;
  credentialConfigShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  sourceManifestURI?: string;
  sourcesShrink?: string;
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      compressedFormat: 'CompressedFormat',
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourceManifestURI: 'SourceManifestURI',
      sourcesShrink: 'Sources',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressedFormat: 'string',
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourceManifestURI: 'string',
      sourcesShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileCompressionTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileCompressionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFileCompressionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFileCompressionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileUncompressionTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  notification?: Notification;
  password?: string;
  projectName?: string;
  selectedFiles?: string[];
  sourceURI?: string;
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      password: 'Password',
      projectName: 'ProjectName',
      selectedFiles: 'SelectedFiles',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      notification: Notification,
      password: 'string',
      projectName: 'string',
      selectedFiles: { 'type': 'array', 'itemType': 'string' },
      sourceURI: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileUncompressionTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  notificationShrink?: string;
  password?: string;
  projectName?: string;
  selectedFilesShrink?: string;
  sourceURI?: string;
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      password: 'Password',
      projectName: 'ProjectName',
      selectedFilesShrink: 'SelectedFiles',
      sourceURI: 'SourceURI',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      password: 'string',
      projectName: 'string',
      selectedFilesShrink: 'string',
      sourceURI: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileUncompressionTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileUncompressionTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateFileUncompressionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateFileUncompressionTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageModerationTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  interval?: number;
  maxFrames?: number;
  notification?: Notification;
  projectName?: string;
  scenes?: string[];
  sourceURI?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
      notification: 'Notification',
      projectName: 'ProjectName',
      scenes: 'Scenes',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      interval: 'number',
      maxFrames: 'number',
      notification: Notification,
      projectName: 'string',
      scenes: { 'type': 'array', 'itemType': 'string' },
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageModerationTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  interval?: number;
  maxFrames?: number;
  notificationShrink?: string;
  projectName?: string;
  scenesShrink?: string;
  sourceURI?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      scenesShrink: 'Scenes',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      interval: 'number',
      maxFrames: 'number',
      notificationShrink: 'string',
      projectName: 'string',
      scenesShrink: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageModerationTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageModerationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateImageModerationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageModerationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageSplicingTaskRequest extends $tea.Model {
  align?: number;
  backgroundColor?: string;
  credentialConfig?: CredentialConfig;
  direction?: string;
  imageFormat?: string;
  margin?: number;
  notification?: Notification;
  padding?: number;
  projectName?: string;
  quality?: number;
  scaleType?: string;
  sources?: CreateImageSplicingTaskRequestSources[];
  tags?: { [key: string]: any };
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      align: 'Align',
      backgroundColor: 'BackgroundColor',
      credentialConfig: 'CredentialConfig',
      direction: 'Direction',
      imageFormat: 'ImageFormat',
      margin: 'Margin',
      notification: 'Notification',
      padding: 'Padding',
      projectName: 'ProjectName',
      quality: 'Quality',
      scaleType: 'ScaleType',
      sources: 'Sources',
      tags: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      align: 'number',
      backgroundColor: 'string',
      credentialConfig: CredentialConfig,
      direction: 'string',
      imageFormat: 'string',
      margin: 'number',
      notification: Notification,
      padding: 'number',
      projectName: 'string',
      quality: 'number',
      scaleType: 'string',
      sources: { 'type': 'array', 'itemType': CreateImageSplicingTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageSplicingTaskShrinkRequest extends $tea.Model {
  align?: number;
  backgroundColor?: string;
  credentialConfigShrink?: string;
  direction?: string;
  imageFormat?: string;
  margin?: number;
  notificationShrink?: string;
  padding?: number;
  projectName?: string;
  quality?: number;
  scaleType?: string;
  sourcesShrink?: string;
  tagsShrink?: string;
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      align: 'Align',
      backgroundColor: 'BackgroundColor',
      credentialConfigShrink: 'CredentialConfig',
      direction: 'Direction',
      imageFormat: 'ImageFormat',
      margin: 'Margin',
      notificationShrink: 'Notification',
      padding: 'Padding',
      projectName: 'ProjectName',
      quality: 'Quality',
      scaleType: 'ScaleType',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      align: 'number',
      backgroundColor: 'string',
      credentialConfigShrink: 'string',
      direction: 'string',
      imageFormat: 'string',
      margin: 'number',
      notificationShrink: 'string',
      padding: 'number',
      projectName: 'string',
      quality: 'number',
      scaleType: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageSplicingTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageSplicingTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateImageSplicingTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageSplicingTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageToPDFTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  notification?: Notification;
  projectName?: string;
  sources?: CreateImageToPDFTaskRequestSources[];
  tags?: { [key: string]: any };
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      tags: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateImageToPDFTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageToPDFTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  sourcesShrink?: string;
  tagsShrink?: string;
  targetURI?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      targetURI: 'TargetURI',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
      targetURI: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageToPDFTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageToPDFTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateImageToPDFTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateImageToPDFTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskRequest extends $tea.Model {
  datasetName?: string;
  dateOptions?: CreateLocationDateClusteringTaskRequestDateOptions;
  locationOptions?: CreateLocationDateClusteringTaskRequestLocationOptions;
  notification?: Notification;
  projectName?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      dateOptions: 'DateOptions',
      locationOptions: 'LocationOptions',
      notification: 'Notification',
      projectName: 'ProjectName',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      dateOptions: CreateLocationDateClusteringTaskRequestDateOptions,
      locationOptions: CreateLocationDateClusteringTaskRequestLocationOptions,
      notification: Notification,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskShrinkRequest extends $tea.Model {
  datasetName?: string;
  dateOptionsShrink?: string;
  locationOptionsShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      dateOptionsShrink: 'DateOptions',
      locationOptionsShrink: 'LocationOptions',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      dateOptionsShrink: 'string',
      locationOptionsShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateLocationDateClusteringTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateLocationDateClusteringTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequest extends $tea.Model {
  alignmentIndex?: number;
  credentialConfig?: CredentialConfig;
  notification?: Notification;
  projectName?: string;
  sources?: CreateMediaConvertTaskRequestSources[];
  tags?: { [key: string]: any };
  targets?: CreateMediaConvertTaskRequestTargets[];
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentIndex: 'AlignmentIndex',
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sources: 'Sources',
      tags: 'Tags',
      targets: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentIndex: 'number',
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sources: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestSources },
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targets: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestTargets },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskShrinkRequest extends $tea.Model {
  alignmentIndex?: number;
  credentialConfigShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  sourcesShrink?: string;
  tagsShrink?: string;
  targetsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      alignmentIndex: 'AlignmentIndex',
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourcesShrink: 'Sources',
      tagsShrink: 'Tags',
      targetsShrink: 'Targets',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alignmentIndex: 'number',
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourcesShrink: 'string',
      tagsShrink: 'string',
      targetsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateMediaConvertTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateMediaConvertTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  endPage?: number;
  firstPage?: boolean;
  fitToHeight?: boolean;
  fitToWidth?: boolean;
  holdLineFeed?: boolean;
  imageDPI?: number;
  longPicture?: boolean;
  longText?: boolean;
  maxSheetColumn?: number;
  maxSheetRow?: number;
  notification?: Notification;
  pages?: string;
  paperHorizontal?: boolean;
  paperSize?: string;
  password?: string;
  projectName?: string;
  quality?: number;
  scalePercentage?: number;
  sheetCount?: number;
  sheetIndex?: number;
  showComments?: boolean;
  sourceType?: string;
  sourceURI?: string;
  startPage?: number;
  tags?: { [key: string]: any };
  targetType?: string;
  targetURI?: string;
  targetURIPrefix?: string;
  trimPolicy?: TrimPolicy;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      endPage: 'EndPage',
      firstPage: 'FirstPage',
      fitToHeight: 'FitToHeight',
      fitToWidth: 'FitToWidth',
      holdLineFeed: 'HoldLineFeed',
      imageDPI: 'ImageDPI',
      longPicture: 'LongPicture',
      longText: 'LongText',
      maxSheetColumn: 'MaxSheetColumn',
      maxSheetRow: 'MaxSheetRow',
      notification: 'Notification',
      pages: 'Pages',
      paperHorizontal: 'PaperHorizontal',
      paperSize: 'PaperSize',
      password: 'Password',
      projectName: 'ProjectName',
      quality: 'Quality',
      scalePercentage: 'ScalePercentage',
      sheetCount: 'SheetCount',
      sheetIndex: 'SheetIndex',
      showComments: 'ShowComments',
      sourceType: 'SourceType',
      sourceURI: 'SourceURI',
      startPage: 'StartPage',
      tags: 'Tags',
      targetType: 'TargetType',
      targetURI: 'TargetURI',
      targetURIPrefix: 'TargetURIPrefix',
      trimPolicy: 'TrimPolicy',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      endPage: 'number',
      firstPage: 'boolean',
      fitToHeight: 'boolean',
      fitToWidth: 'boolean',
      holdLineFeed: 'boolean',
      imageDPI: 'number',
      longPicture: 'boolean',
      longText: 'boolean',
      maxSheetColumn: 'number',
      maxSheetRow: 'number',
      notification: Notification,
      pages: 'string',
      paperHorizontal: 'boolean',
      paperSize: 'string',
      password: 'string',
      projectName: 'string',
      quality: 'number',
      scalePercentage: 'number',
      sheetCount: 'number',
      sheetIndex: 'number',
      showComments: 'boolean',
      sourceType: 'string',
      sourceURI: 'string',
      startPage: 'number',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      targetType: 'string',
      targetURI: 'string',
      targetURIPrefix: 'string',
      trimPolicy: TrimPolicy,
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  endPage?: number;
  firstPage?: boolean;
  fitToHeight?: boolean;
  fitToWidth?: boolean;
  holdLineFeed?: boolean;
  imageDPI?: number;
  longPicture?: boolean;
  longText?: boolean;
  maxSheetColumn?: number;
  maxSheetRow?: number;
  notificationShrink?: string;
  pages?: string;
  paperHorizontal?: boolean;
  paperSize?: string;
  password?: string;
  projectName?: string;
  quality?: number;
  scalePercentage?: number;
  sheetCount?: number;
  sheetIndex?: number;
  showComments?: boolean;
  sourceType?: string;
  sourceURI?: string;
  startPage?: number;
  tagsShrink?: string;
  targetType?: string;
  targetURI?: string;
  targetURIPrefix?: string;
  trimPolicyShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      endPage: 'EndPage',
      firstPage: 'FirstPage',
      fitToHeight: 'FitToHeight',
      fitToWidth: 'FitToWidth',
      holdLineFeed: 'HoldLineFeed',
      imageDPI: 'ImageDPI',
      longPicture: 'LongPicture',
      longText: 'LongText',
      maxSheetColumn: 'MaxSheetColumn',
      maxSheetRow: 'MaxSheetRow',
      notificationShrink: 'Notification',
      pages: 'Pages',
      paperHorizontal: 'PaperHorizontal',
      paperSize: 'PaperSize',
      password: 'Password',
      projectName: 'ProjectName',
      quality: 'Quality',
      scalePercentage: 'ScalePercentage',
      sheetCount: 'SheetCount',
      sheetIndex: 'SheetIndex',
      showComments: 'ShowComments',
      sourceType: 'SourceType',
      sourceURI: 'SourceURI',
      startPage: 'StartPage',
      tagsShrink: 'Tags',
      targetType: 'TargetType',
      targetURI: 'TargetURI',
      targetURIPrefix: 'TargetURIPrefix',
      trimPolicyShrink: 'TrimPolicy',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      endPage: 'number',
      firstPage: 'boolean',
      fitToHeight: 'boolean',
      fitToWidth: 'boolean',
      holdLineFeed: 'boolean',
      imageDPI: 'number',
      longPicture: 'boolean',
      longText: 'boolean',
      maxSheetColumn: 'number',
      maxSheetRow: 'number',
      notificationShrink: 'string',
      pages: 'string',
      paperHorizontal: 'boolean',
      paperSize: 'string',
      password: 'string',
      projectName: 'string',
      quality: 'number',
      scalePercentage: 'number',
      sheetCount: 'number',
      sheetIndex: 'number',
      showComments: 'boolean',
      sourceType: 'string',
      sourceURI: 'string',
      startPage: 'number',
      tagsShrink: 'string',
      targetType: 'string',
      targetURI: 'string',
      targetURIPrefix: 'string',
      trimPolicyShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOfficeConversionTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
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
  statusCode: number;
  body: CreateOfficeConversionTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  projectMaxDatasetCount?: number;
  projectName?: string;
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
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
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
      projectMaxDatasetCount: 'number',
      projectName: 'string',
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
  statusCode: number;
  body: CreateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusteringTaskRequest extends $tea.Model {
  datasetName?: string;
  notification?: Notification;
  projectName?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notification: 'Notification',
      projectName: 'ProjectName',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notification: Notification,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusteringTaskShrinkRequest extends $tea.Model {
  datasetName?: string;
  notificationShrink?: string;
  projectName?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusteringTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateSimilarImageClusteringTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateSimilarImageClusteringTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateSimilarImageClusteringTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryRequest extends $tea.Model {
  address?: AddressForStory;
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  maxFileCount?: number;
  minFileCount?: number;
  notification?: Notification;
  notifyTopicName?: string;
  objectId?: string;
  projectName?: string;
  storyEndTime?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxFileCount: 'MaxFileCount',
      minFileCount: 'MinFileCount',
      notification: 'Notification',
      notifyTopicName: 'NotifyTopicName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyEndTime: 'StoryEndTime',
      storyName: 'StoryName',
      storyStartTime: 'StoryStartTime',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: AddressForStory,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      maxFileCount: 'number',
      minFileCount: 'number',
      notification: Notification,
      notifyTopicName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyEndTime: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryShrinkRequest extends $tea.Model {
  addressShrink?: string;
  customId?: string;
  customLabelsShrink?: string;
  datasetName?: string;
  maxFileCount?: number;
  minFileCount?: number;
  notificationShrink?: string;
  notifyTopicName?: string;
  objectId?: string;
  projectName?: string;
  storyEndTime?: string;
  storyName?: string;
  storyStartTime?: string;
  storySubType?: string;
  storyType?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      addressShrink: 'Address',
      customId: 'CustomId',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      maxFileCount: 'MaxFileCount',
      minFileCount: 'MinFileCount',
      notificationShrink: 'Notification',
      notifyTopicName: 'NotifyTopicName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyEndTime: 'StoryEndTime',
      storyName: 'StoryName',
      storyStartTime: 'StoryStartTime',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressShrink: 'string',
      customId: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      maxFileCount: 'number',
      minFileCount: 'number',
      notificationShrink: 'string',
      notifyTopicName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyEndTime: 'string',
      storyName: 'string',
      storyStartTime: 'string',
      storySubType: 'string',
      storyType: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequest extends $tea.Model {
  actions?: CreateTriggerRequestActions[];
  input?: Input;
  notification?: CreateTriggerRequestNotification;
  projectName?: string;
  serviceRole?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      input: 'Input',
      notification: 'Notification',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': CreateTriggerRequestActions },
      input: Input,
      notification: CreateTriggerRequestNotification,
      projectName: 'string',
      serviceRole: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerShrinkRequest extends $tea.Model {
  actionsShrink?: string;
  inputShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  serviceRole?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionsShrink: 'Actions',
      inputShrink: 'Input',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionsShrink: 'string',
      inputShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      serviceRole: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponseBody extends $tea.Model {
  id?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoLabelClassificationTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  notification?: Notification;
  projectName?: string;
  sourceURI?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      notification: 'Notification',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      notification: Notification,
      projectName: 'string',
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoLabelClassificationTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  notificationShrink?: string;
  projectName?: string;
  sourceURI?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      notificationShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoLabelClassificationTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoLabelClassificationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVideoLabelClassificationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVideoLabelClassificationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoModerationTaskRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  interval?: number;
  maxFrames?: number;
  notification?: Notification;
  projectName?: string;
  scenes?: string[];
  sourceURI?: string;
  tags?: { [key: string]: any };
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
      notification: 'Notification',
      projectName: 'ProjectName',
      scenes: 'Scenes',
      sourceURI: 'SourceURI',
      tags: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      interval: 'number',
      maxFrames: 'number',
      notification: Notification,
      projectName: 'string',
      scenes: { 'type': 'array', 'itemType': 'string' },
      sourceURI: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoModerationTaskShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  interval?: number;
  maxFrames?: number;
  notificationShrink?: string;
  projectName?: string;
  scenesShrink?: string;
  sourceURI?: string;
  tagsShrink?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      interval: 'Interval',
      maxFrames: 'MaxFrames',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
      scenesShrink: 'Scenes',
      sourceURI: 'SourceURI',
      tagsShrink: 'Tags',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      interval: 'number',
      maxFrames: 'number',
      notificationShrink: 'string',
      projectName: 'string',
      scenesShrink: 'string',
      sourceURI: 'string',
      tagsShrink: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoModerationTaskResponseBody extends $tea.Model {
  eventId?: string;
  requestId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      requestId: 'RequestId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      requestId: 'string',
      taskId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateVideoModerationTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: CreateVideoModerationTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: CreateVideoModerationTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteBatchResponseBody extends $tea.Model {
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

export class DeleteBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteBatchResponseBody,
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
  statusCode: number;
  body: DeleteBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: DeleteDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteFileMetaRequest extends $tea.Model {
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

export class DeleteFileMetaResponseBody extends $tea.Model {
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

export class DeleteFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLocationDateClusterRequest extends $tea.Model {
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteLocationDateClusterResponseBody extends $tea.Model {
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

export class DeleteLocationDateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteLocationDateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteLocationDateClusterResponseBody,
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
  statusCode: number;
  body: DeleteProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryRequest extends $tea.Model {
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteStoryResponseBody extends $tea.Model {
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

export class DeleteStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteTriggerResponseBody extends $tea.Model {
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

export class DeleteTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DeleteTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DeleteTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachOSSBucketRequest extends $tea.Model {
  OSSBucket?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachOSSBucketResponseBody extends $tea.Model {
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

export class DetachOSSBucketResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetachOSSBucketResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetachOSSBucketResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageBodiesRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sensitivity?: number;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sensitivity: 'Sensitivity',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sensitivity: 'number',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageBodiesShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sensitivity?: number;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sensitivity: 'Sensitivity',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sensitivity: 'number',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageBodiesResponseBody extends $tea.Model {
  bodies?: Body[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bodies: 'Bodies',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodies: { 'type': 'array', 'itemType': Body },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageBodiesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageBodiesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageBodiesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCarsRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCarsShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCarsResponseBody extends $tea.Model {
  cars?: Car[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cars: 'Cars',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cars: { 'type': 'array', 'itemType': Car },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCarsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageCarsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageCarsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCodesRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCodesShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCodesResponseBody extends $tea.Model {
  codes?: Codes[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'Codes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': Codes },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCodesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageCodesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageCodesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCroppingRequest extends $tea.Model {
  aspectRatios?: string;
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatios: 'AspectRatios',
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatios: 'string',
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCroppingShrinkRequest extends $tea.Model {
  aspectRatios?: string;
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      aspectRatios: 'AspectRatios',
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatios: 'string',
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCroppingResponseBody extends $tea.Model {
  croppings?: CroppingSuggestion[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      croppings: 'Croppings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      croppings: { 'type': 'array', 'itemType': CroppingSuggestion },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageCroppingResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageCroppingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageCroppingResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponseBody extends $tea.Model {
  faces?: Figure[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      faces: 'Faces',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faces: { 'type': 'array', 'itemType': Figure },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageFacesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageFacesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageFacesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLabelsRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
      threshold: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageLabelsShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
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
  statusCode: number;
  body: DetectImageLabelsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageLabelsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageScoreRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageScoreShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageScoreResponseBody extends $tea.Model {
  imageScore?: DetectImageScoreResponseBodyImageScore;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageScore: 'ImageScore',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageScore: DetectImageScoreResponseBodyImageScore,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageScoreResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectImageScoreResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectImageScoreResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMediaMetaRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMediaMetaShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMediaMetaResponseBody extends $tea.Model {
  addresses?: Address[];
  album?: string;
  albumArtist?: string;
  artist?: string;
  audioStreams?: AudioStream[];
  bitrate?: number;
  composer?: string;
  duration?: number;
  formatLongName?: string;
  formatName?: string;
  language?: string;
  latLong?: string;
  performer?: string;
  produceTime?: string;
  programCount?: number;
  requestId?: string;
  size?: number;
  startTime?: number;
  streamCount?: number;
  subtitles?: SubtitleStream[];
  title?: string;
  videoHeight?: number;
  videoStreams?: VideoStream[];
  videoWidth?: number;
  static names(): { [key: string]: string } {
    return {
      addresses: 'Addresses',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      artist: 'Artist',
      audioStreams: 'AudioStreams',
      bitrate: 'Bitrate',
      composer: 'Composer',
      duration: 'Duration',
      formatLongName: 'FormatLongName',
      formatName: 'FormatName',
      language: 'Language',
      latLong: 'LatLong',
      performer: 'Performer',
      produceTime: 'ProduceTime',
      programCount: 'ProgramCount',
      requestId: 'RequestId',
      size: 'Size',
      startTime: 'StartTime',
      streamCount: 'StreamCount',
      subtitles: 'Subtitles',
      title: 'Title',
      videoHeight: 'VideoHeight',
      videoStreams: 'VideoStreams',
      videoWidth: 'VideoWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addresses: { 'type': 'array', 'itemType': Address },
      album: 'string',
      albumArtist: 'string',
      artist: 'string',
      audioStreams: { 'type': 'array', 'itemType': AudioStream },
      bitrate: 'number',
      composer: 'string',
      duration: 'number',
      formatLongName: 'string',
      formatName: 'string',
      language: 'string',
      latLong: 'string',
      performer: 'string',
      produceTime: 'string',
      programCount: 'number',
      requestId: 'string',
      size: 'number',
      startTime: 'number',
      streamCount: 'number',
      subtitles: { 'type': 'array', 'itemType': SubtitleStream },
      title: 'string',
      videoHeight: 'number',
      videoStreams: { 'type': 'array', 'itemType': VideoStream },
      videoWidth: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectMediaMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectMediaMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectMediaMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTextAnomalyRequest extends $tea.Model {
  content?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTextAnomalyResponseBody extends $tea.Model {
  requestId?: string;
  suggestion?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      suggestion: 'Suggestion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      suggestion: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectTextAnomalyResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: DetectTextAnomalyResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: DetectTextAnomalyResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractDocumentTextRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractDocumentTextShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractDocumentTextResponseBody extends $tea.Model {
  documentText?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      documentText: 'DocumentText',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentText: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExtractDocumentTextResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ExtractDocumentTextResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ExtractDocumentTextResponseBody,
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
  order?: string;
  projectName?: string;
  query?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
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
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      query: 'string',
      sort: 'string',
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
  totalHits?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalHits: 'TotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
      totalHits: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: FuzzyQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: FuzzyQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GenerateWebofficeTokenRequest extends $tea.Model {
  cachePreview?: boolean;
  credentialConfig?: CredentialConfig;
  externalUploaded?: boolean;
  filename?: string;
  hidecmb?: boolean;
  notification?: Notification;
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
      cachePreview: 'CachePreview',
      credentialConfig: 'CredentialConfig',
      externalUploaded: 'ExternalUploaded',
      filename: 'Filename',
      hidecmb: 'Hidecmb',
      notification: 'Notification',
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
      cachePreview: 'boolean',
      credentialConfig: CredentialConfig,
      externalUploaded: 'boolean',
      filename: 'string',
      hidecmb: 'boolean',
      notification: Notification,
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

export class GenerateWebofficeTokenShrinkRequest extends $tea.Model {
  cachePreview?: boolean;
  credentialConfigShrink?: string;
  externalUploaded?: boolean;
  filename?: string;
  hidecmb?: boolean;
  notificationShrink?: string;
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
      cachePreview: 'CachePreview',
      credentialConfigShrink: 'CredentialConfig',
      externalUploaded: 'ExternalUploaded',
      filename: 'Filename',
      hidecmb: 'Hidecmb',
      notificationShrink: 'Notification',
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
      cachePreview: 'boolean',
      credentialConfigShrink: 'string',
      externalUploaded: 'boolean',
      filename: 'string',
      hidecmb: 'boolean',
      notificationShrink: 'string',
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

export class GenerateWebofficeTokenResponseBody extends $tea.Model {
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

export class GenerateWebofficeTokenResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GenerateWebofficeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GenerateWebofficeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchResponseBody extends $tea.Model {
  batch?: DataIngestion;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batch: 'Batch',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batch: DataIngestion,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetBatchResponseBody,
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
  statusCode: number;
  body: GetBindingResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: GetDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFigureClusterRequest extends $tea.Model {
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFigureClusterResponseBody extends $tea.Model {
  figureCluster?: FigureCluster;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      figureCluster: 'FigureCluster',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureCluster: FigureCluster,
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFigureClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetFigureClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFigureClusterResponseBody,
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
  statusCode: number;
  body: GetFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageModerationResultRequest extends $tea.Model {
  projectName?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageModerationResultResponseBody extends $tea.Model {
  code?: string;
  endTime?: string;
  eventId?: string;
  message?: string;
  moderationResult?: GetImageModerationResultResponseBodyModerationResult;
  projectName?: string;
  requestId?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      message: 'Message',
      moderationResult: 'ModerationResult',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      eventId: 'string',
      message: 'string',
      moderationResult: GetImageModerationResultResponseBodyModerationResult,
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageModerationResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetImageModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetImageModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSBucketAttachmentRequest extends $tea.Model {
  OSSBucket?: string;
  static names(): { [key: string]: string } {
    return {
      OSSBucket: 'OSSBucket',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSBucket: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSBucketAttachmentResponseBody extends $tea.Model {
  projectName?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSBucketAttachmentResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetOSSBucketAttachmentResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetOSSBucketAttachmentResponseBody,
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
  statusCode: number;
  body: GetProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryRequest extends $tea.Model {
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryResponseBody extends $tea.Model {
  requestId?: string;
  story?: Story;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      story: 'Story',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      story: Story,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskRequest extends $tea.Model {
  projectName?: string;
  requestDefinition?: boolean;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      requestDefinition: 'RequestDefinition',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      requestDefinition: 'boolean',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponseBody extends $tea.Model {
  code?: string;
  endTime?: string;
  eventId?: string;
  message?: string;
  progress?: number;
  projectName?: string;
  requestId?: string;
  startTime?: string;
  status?: string;
  tags?: { [key: string]: any };
  taskId?: string;
  taskRequestDefinition?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      message: 'Message',
      progress: 'Progress',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      tags: 'Tags',
      taskId: 'TaskId',
      taskRequestDefinition: 'TaskRequestDefinition',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      eventId: 'string',
      message: 'string',
      progress: 'number',
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      taskId: 'string',
      taskRequestDefinition: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTaskResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTaskResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponseBody extends $tea.Model {
  requestId?: string;
  trigger?: DataIngestion;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trigger: 'Trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trigger: DataIngestion,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoLabelClassificationResultRequest extends $tea.Model {
  projectName?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoLabelClassificationResultResponseBody extends $tea.Model {
  code?: string;
  endTime?: string;
  eventId?: string;
  labels?: Label[];
  message?: string;
  projectName?: string;
  requestId?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      labels: 'Labels',
      message: 'Message',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      eventId: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      message: 'string',
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoLabelClassificationResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoLabelClassificationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoLabelClassificationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultRequest extends $tea.Model {
  projectName?: string;
  taskId?: string;
  taskType?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      taskId: 'TaskId',
      taskType: 'TaskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      taskId: 'string',
      taskType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBody extends $tea.Model {
  code?: string;
  endTime?: string;
  eventId?: string;
  message?: string;
  moderationResult?: GetVideoModerationResultResponseBodyModerationResult;
  projectName?: string;
  requestId?: string;
  startTime?: string;
  status?: string;
  taskId?: string;
  taskType?: string;
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      eventId: 'EventId',
      message: 'Message',
      moderationResult: 'ModerationResult',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      eventId: 'string',
      message: 'string',
      moderationResult: GetVideoModerationResultResponseBodyModerationResult,
      projectName: 'string',
      requestId: 'string',
      startTime: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      userData: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: GetVideoModerationResultResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: GetVideoModerationResultResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaRequest extends $tea.Model {
  datasetName?: string;
  file?: InputFile;
  notification?: Notification;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      file: 'File',
      notification: 'Notification',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      file: InputFile,
      notification: Notification,
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
  notificationShrink?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      fileShrink: 'File',
      notificationShrink: 'Notification',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      fileShrink: 'string',
      notificationShrink: 'string',
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
  statusCode: number;
  body: IndexFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: IndexFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchesRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  state?: string;
  tagSelector?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      state: 'State',
      tagSelector: 'TagSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      state: 'string',
      tagSelector: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchesResponseBody extends $tea.Model {
  batches?: DataIngestion[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      batches: 'Batches',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batches: { 'type': 'array', 'itemType': DataIngestion },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBatchesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListBatchesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListBatchesResponseBody,
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
  statusCode: number;
  body: ListBindingsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
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
  statusCode: number;
  body: ListDatasetsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListDatasetsResponseBody,
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
  statusCode: number;
  body: ListProjectsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListProjectsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsRequest extends $tea.Model {
  acceptLanguage?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponseBody extends $tea.Model {
  regions?: RegionType[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      regions: 'Regions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regions: { 'type': 'array', 'itemType': RegionType },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRegionsResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListRegionsResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListRegionsResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksRequest extends $tea.Model {
  endTimeRange?: TimeRange;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  requestDefinition?: boolean;
  sort?: string;
  startTimeRange?: TimeRange;
  status?: string;
  tagSelector?: string;
  taskTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      endTimeRange: 'EndTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      requestDefinition: 'RequestDefinition',
      sort: 'Sort',
      startTimeRange: 'StartTimeRange',
      status: 'Status',
      tagSelector: 'TagSelector',
      taskTypes: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeRange: TimeRange,
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      requestDefinition: 'boolean',
      sort: 'string',
      startTimeRange: TimeRange,
      status: 'string',
      tagSelector: 'string',
      taskTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksShrinkRequest extends $tea.Model {
  endTimeRangeShrink?: string;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  requestDefinition?: boolean;
  sort?: string;
  startTimeRangeShrink?: string;
  status?: string;
  tagSelector?: string;
  taskTypesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      endTimeRangeShrink: 'EndTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      requestDefinition: 'RequestDefinition',
      sort: 'Sort',
      startTimeRangeShrink: 'StartTimeRange',
      status: 'Status',
      tagSelector: 'TagSelector',
      taskTypesShrink: 'TaskTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTimeRangeShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      requestDefinition: 'boolean',
      sort: 'string',
      startTimeRangeShrink: 'string',
      status: 'string',
      tagSelector: 'string',
      taskTypesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponseBody extends $tea.Model {
  maxResults?: string;
  nextToken?: string;
  projectName?: string;
  requestId?: string;
  tasks?: TaskInfo[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectName: 'ProjectName',
      requestId: 'RequestId',
      tasks: 'Tasks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      projectName: 'string',
      requestId: 'string',
      tasks: { 'type': 'array', 'itemType': TaskInfo },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTasksResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTasksResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTasksResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  state?: string;
  tagSelector?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      state: 'State',
      tagSelector: 'TagSelector',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      state: 'string',
      tagSelector: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  triggers?: DataIngestion[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': DataIngestion },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTriggersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ListTriggersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ListTriggersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFigureClustersRequest extends $tea.Model {
  createTimeRange?: TimeRange;
  customLabels?: string;
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  updateTimeRange?: TimeRange;
  withTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRange: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      updateTimeRange: 'UpdateTimeRange',
      withTotalCount: 'WithTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRange: TimeRange,
      customLabels: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      updateTimeRange: TimeRange,
      withTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFigureClustersShrinkRequest extends $tea.Model {
  createTimeRangeShrink?: string;
  customLabels?: string;
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  updateTimeRangeShrink?: string;
  withTotalCount?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRangeShrink: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      updateTimeRangeShrink: 'UpdateTimeRange',
      withTotalCount: 'WithTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRangeShrink: 'string',
      customLabels: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      updateTimeRangeShrink: 'string',
      withTotalCount: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFigureClustersResponseBody extends $tea.Model {
  figureClusters?: FigureCluster[];
  nextToken?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      figureClusters: 'FigureClusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusters: { 'type': 'array', 'itemType': FigureCluster },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryFigureClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryFigureClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryFigureClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocationDateClustersRequest extends $tea.Model {
  address?: Address;
  createTimeRange?: TimeRange;
  customLabels?: string;
  datasetName?: string;
  locationDateClusterEndTimeRange?: TimeRange;
  locationDateClusterLevels?: string[];
  locationDateClusterStartTimeRange?: TimeRange;
  maxResults?: number;
  nextToken?: string;
  objectId?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  title?: string;
  updateTimeRange?: TimeRange;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      createTimeRange: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      locationDateClusterEndTimeRange: 'LocationDateClusterEndTimeRange',
      locationDateClusterLevels: 'LocationDateClusterLevels',
      locationDateClusterStartTimeRange: 'LocationDateClusterStartTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      title: 'Title',
      updateTimeRange: 'UpdateTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: Address,
      createTimeRange: TimeRange,
      customLabels: 'string',
      datasetName: 'string',
      locationDateClusterEndTimeRange: TimeRange,
      locationDateClusterLevels: { 'type': 'array', 'itemType': 'string' },
      locationDateClusterStartTimeRange: TimeRange,
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      title: 'string',
      updateTimeRange: TimeRange,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocationDateClustersShrinkRequest extends $tea.Model {
  addressShrink?: string;
  createTimeRangeShrink?: string;
  customLabels?: string;
  datasetName?: string;
  locationDateClusterEndTimeRangeShrink?: string;
  locationDateClusterLevelsShrink?: string;
  locationDateClusterStartTimeRangeShrink?: string;
  maxResults?: number;
  nextToken?: string;
  objectId?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  title?: string;
  updateTimeRangeShrink?: string;
  static names(): { [key: string]: string } {
    return {
      addressShrink: 'Address',
      createTimeRangeShrink: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      locationDateClusterEndTimeRangeShrink: 'LocationDateClusterEndTimeRange',
      locationDateClusterLevelsShrink: 'LocationDateClusterLevels',
      locationDateClusterStartTimeRangeShrink: 'LocationDateClusterStartTimeRange',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      title: 'Title',
      updateTimeRangeShrink: 'UpdateTimeRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addressShrink: 'string',
      createTimeRangeShrink: 'string',
      customLabels: 'string',
      datasetName: 'string',
      locationDateClusterEndTimeRangeShrink: 'string',
      locationDateClusterLevelsShrink: 'string',
      locationDateClusterStartTimeRangeShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      title: 'string',
      updateTimeRangeShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocationDateClustersResponseBody extends $tea.Model {
  locationDateClusters?: LocationDateCluster[];
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      locationDateClusters: 'LocationDateClusters',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDateClusters: { 'type': 'array', 'itemType': LocationDateCluster },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryLocationDateClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryLocationDateClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryLocationDateClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySimilarImageClustersRequest extends $tea.Model {
  customLabels?: string;
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customLabels: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySimilarImageClustersResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  similarImageClusters?: SimilarImageCluster[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      similarImageClusters: 'SimilarImageClusters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      similarImageClusters: { 'type': 'array', 'itemType': SimilarImageCluster },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySimilarImageClustersResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QuerySimilarImageClustersResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QuerySimilarImageClustersResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStoriesRequest extends $tea.Model {
  createTimeRange?: TimeRange;
  customLabels?: string;
  datasetName?: string;
  figureClusterIds?: string[];
  maxResults?: number;
  nextToken?: string;
  objectId?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  storyEndTimeRange?: TimeRange;
  storyName?: string;
  storyStartTimeRange?: TimeRange;
  storySubType?: string;
  storyType?: string;
  withEmptyStories?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRange: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      figureClusterIds: 'FigureClusterIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      storyEndTimeRange: 'StoryEndTimeRange',
      storyName: 'StoryName',
      storyStartTimeRange: 'StoryStartTimeRange',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      withEmptyStories: 'WithEmptyStories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRange: TimeRange,
      customLabels: 'string',
      datasetName: 'string',
      figureClusterIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      storyEndTimeRange: TimeRange,
      storyName: 'string',
      storyStartTimeRange: TimeRange,
      storySubType: 'string',
      storyType: 'string',
      withEmptyStories: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStoriesShrinkRequest extends $tea.Model {
  createTimeRangeShrink?: string;
  customLabels?: string;
  datasetName?: string;
  figureClusterIdsShrink?: string;
  maxResults?: number;
  nextToken?: string;
  objectId?: string;
  order?: string;
  projectName?: string;
  sort?: string;
  storyEndTimeRangeShrink?: string;
  storyName?: string;
  storyStartTimeRangeShrink?: string;
  storySubType?: string;
  storyType?: string;
  withEmptyStories?: boolean;
  static names(): { [key: string]: string } {
    return {
      createTimeRangeShrink: 'CreateTimeRange',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      figureClusterIdsShrink: 'FigureClusterIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectId: 'ObjectId',
      order: 'Order',
      projectName: 'ProjectName',
      sort: 'Sort',
      storyEndTimeRangeShrink: 'StoryEndTimeRange',
      storyName: 'StoryName',
      storyStartTimeRangeShrink: 'StoryStartTimeRange',
      storySubType: 'StorySubType',
      storyType: 'StoryType',
      withEmptyStories: 'WithEmptyStories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTimeRangeShrink: 'string',
      customLabels: 'string',
      datasetName: 'string',
      figureClusterIdsShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
      objectId: 'string',
      order: 'string',
      projectName: 'string',
      sort: 'string',
      storyEndTimeRangeShrink: 'string',
      storyName: 'string',
      storyStartTimeRangeShrink: 'string',
      storySubType: 'string',
      storyType: 'string',
      withEmptyStories: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStoriesResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  stories?: Story[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      stories: 'Stories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      stories: { 'type': 'array', 'itemType': Story },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryStoriesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: QueryStoriesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryStoriesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenRequest extends $tea.Model {
  accessToken?: string;
  credentialConfig?: CredentialConfig;
  projectName?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      credentialConfig: 'CredentialConfig',
      projectName: 'ProjectName',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      credentialConfig: CredentialConfig,
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
  credentialConfigShrink?: string;
  projectName?: string;
  refreshToken?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'AccessToken',
      credentialConfigShrink: 'CredentialConfig',
      projectName: 'ProjectName',
      refreshToken: 'RefreshToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      credentialConfigShrink: 'string',
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
  statusCode: number;
  body: RefreshWebofficeTokenResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RefreshWebofficeTokenResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesRequest extends $tea.Model {
  datasetName?: string;
  files?: RemoveStoryFilesRequestFiles[];
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      files: 'Files',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': RemoveStoryFilesRequestFiles },
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesShrinkRequest extends $tea.Model {
  datasetName?: string;
  filesShrink?: string;
  objectId?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      filesShrink: 'Files',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      filesShrink: 'string',
      objectId: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesResponseBody extends $tea.Model {
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

export class RemoveStoryFilesResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: RemoveStoryFilesResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: RemoveStoryFilesResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeBatchRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeBatchResponseBody extends $tea.Model {
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

export class ResumeBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeTriggerRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ResumeTriggerResponseBody extends $tea.Model {
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

export class ResumeTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: ResumeTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: ResumeTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageFigureClusterRequest extends $tea.Model {
  credentialConfig?: CredentialConfig;
  datasetName?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfig: 'CredentialConfig',
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfig: CredentialConfig,
      datasetName: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageFigureClusterShrinkRequest extends $tea.Model {
  credentialConfigShrink?: string;
  datasetName?: string;
  projectName?: string;
  sourceURI?: string;
  static names(): { [key: string]: string } {
    return {
      credentialConfigShrink: 'CredentialConfig',
      datasetName: 'DatasetName',
      projectName: 'ProjectName',
      sourceURI: 'SourceURI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialConfigShrink: 'string',
      datasetName: 'string',
      projectName: 'string',
      sourceURI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageFigureClusterResponseBody extends $tea.Model {
  clusters?: SearchImageFigureClusterResponseBodyClusters[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: { 'type': 'array', 'itemType': SearchImageFigureClusterResponseBodyClusters },
      requestId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageFigureClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SearchImageFigureClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SearchImageFigureClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SemanticQueryRequest extends $tea.Model {
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

export class SemanticQueryResponseBody extends $tea.Model {
  files?: File[];
  nextToken?: string;
  requestId?: string;
  totalHits?: number;
  static names(): { [key: string]: string } {
    return {
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalHits: 'TotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
      totalHits: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SemanticQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SemanticQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SemanticQueryResponseBody,
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
  withFields?: string[];
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
      withFields: 'WithFields',
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
      withFields: { 'type': 'array', 'itemType': 'string' },
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
  withFieldsShrink?: string;
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
      withFieldsShrink: 'WithFields',
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
      withFieldsShrink: 'string',
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
  totalHits?: number;
  static names(): { [key: string]: string } {
    return {
      aggregations: 'Aggregations',
      files: 'Files',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalHits: 'TotalHits',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregations: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregations },
      files: { 'type': 'array', 'itemType': File },
      nextToken: 'string',
      requestId: 'string',
      totalHits: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SimpleQueryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SimpleQueryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendBatchRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendBatchResponseBody extends $tea.Model {
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

export class SuspendBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendBatchResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendTriggerRequest extends $tea.Model {
  id?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SuspendTriggerResponseBody extends $tea.Model {
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

export class SuspendTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: SuspendTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: SuspendTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchRequest extends $tea.Model {
  actions?: UpdateBatchRequestActions[];
  id?: string;
  input?: Input;
  projectName?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      id: 'Id',
      input: 'Input',
      projectName: 'ProjectName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': UpdateBatchRequestActions },
      id: 'string',
      input: Input,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchShrinkRequest extends $tea.Model {
  actionsShrink?: string;
  id?: string;
  inputShrink?: string;
  projectName?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionsShrink: 'Actions',
      id: 'Id',
      inputShrink: 'Input',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionsShrink: 'string',
      id: 'string',
      inputShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchResponseBody extends $tea.Model {
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

export class UpdateBatchResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateBatchResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateBatchResponseBody,
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
  statusCode: number;
  body: UpdateDatasetResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateDatasetResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFigureClusterRequest extends $tea.Model {
  datasetName?: string;
  figureCluster?: FigureClusterForReq;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      figureCluster: 'FigureCluster',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      figureCluster: FigureClusterForReq,
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFigureClusterShrinkRequest extends $tea.Model {
  datasetName?: string;
  figureClusterShrink?: string;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      figureClusterShrink: 'FigureCluster',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      figureClusterShrink: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFigureClusterResponseBody extends $tea.Model {
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

export class UpdateFigureClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFigureClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFigureClusterResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaRequest extends $tea.Model {
  datasetName?: string;
  file?: InputFile;
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      file: 'File',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      file: InputFile,
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
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      datasetName: 'DatasetName',
      fileShrink: 'File',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetName: 'string',
      fileShrink: 'string',
      projectName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaResponseBody extends $tea.Model {
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

export class UpdateFileMetaResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateFileMetaResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateFileMetaResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLocationDateClusterRequest extends $tea.Model {
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLocationDateClusterShrinkRequest extends $tea.Model {
  customId?: string;
  customLabelsShrink?: string;
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      customId: 'CustomId',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customId: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      title: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateLocationDateClusterResponseBody extends $tea.Model {
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

export class UpdateLocationDateClusterResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateLocationDateClusterResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateLocationDateClusterResponseBody,
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
  projectMaxDatasetCount?: number;
  projectName?: string;
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
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      projectName: 'ProjectName',
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
      projectMaxDatasetCount: 'number',
      projectName: 'string',
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
  statusCode: number;
  body: UpdateProjectResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateProjectResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequest extends $tea.Model {
  cover?: UpdateStoryRequestCover;
  customId?: string;
  customLabels?: { [key: string]: any };
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  storyName?: string;
  static names(): { [key: string]: string } {
    return {
      cover: 'Cover',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyName: 'StoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cover: UpdateStoryRequestCover,
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryShrinkRequest extends $tea.Model {
  coverShrink?: string;
  customId?: string;
  customLabelsShrink?: string;
  datasetName?: string;
  objectId?: string;
  projectName?: string;
  storyName?: string;
  static names(): { [key: string]: string } {
    return {
      coverShrink: 'Cover',
      customId: 'CustomId',
      customLabelsShrink: 'CustomLabels',
      datasetName: 'DatasetName',
      objectId: 'ObjectId',
      projectName: 'ProjectName',
      storyName: 'StoryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverShrink: 'string',
      customId: 'string',
      customLabelsShrink: 'string',
      datasetName: 'string',
      objectId: 'string',
      projectName: 'string',
      storyName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryResponseBody extends $tea.Model {
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

export class UpdateStoryResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateStoryResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateStoryResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequest extends $tea.Model {
  actions?: UpdateTriggerRequestActions[];
  id?: string;
  input?: Input;
  projectName?: string;
  tags?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      actions: 'Actions',
      id: 'Id',
      input: 'Input',
      projectName: 'ProjectName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actions: { 'type': 'array', 'itemType': UpdateTriggerRequestActions },
      id: 'string',
      input: Input,
      projectName: 'string',
      tags: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerShrinkRequest extends $tea.Model {
  actionsShrink?: string;
  id?: string;
  inputShrink?: string;
  projectName?: string;
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      actionsShrink: 'Actions',
      id: 'Id',
      inputShrink: 'Input',
      projectName: 'ProjectName',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionsShrink: 'string',
      id: 'string',
      inputShrink: 'string',
      projectName: 'string',
      tagsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerResponseBody extends $tea.Model {
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

export class UpdateTriggerResponse extends $tea.Model {
  headers: { [key: string]: string };
  statusCode: number;
  body: UpdateTriggerResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: UpdateTriggerResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterForReqCoverFigures extends $tea.Model {
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ClusterForReqCover extends $tea.Model {
  figures?: ClusterForReqCoverFigures[];
  static names(): { [key: string]: string } {
    return {
      figures: 'Figures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figures: { 'type': 'array', 'itemType': ClusterForReqCoverFigures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialConfigChain extends $tea.Model {
  assumeRoleFor?: string;
  role?: string;
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      role: 'Role',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'string',
      role: 'string',
      roleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestionActions extends $tea.Model {
  name?: string;
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestionNotification extends $tea.Model {
  endpoint?: string;
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      topic: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DataIngestionStatistic extends $tea.Model {
  submitFailure?: number;
  submitSuccess?: number;
  static names(): { [key: string]: string } {
    return {
      submitFailure: 'SubmitFailure',
      submitSuccess: 'SubmitSuccess',
    };
  }

  static types(): { [key: string]: any } {
    return {
      submitFailure: 'number',
      submitSuccess: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReqCoverFigures extends $tea.Model {
  figureId?: string;
  static names(): { [key: string]: string } {
    return {
      figureId: 'FigureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureId: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FigureClusterForReqCover extends $tea.Model {
  figures?: FigureClusterForReqCoverFigures[];
  static names(): { [key: string]: string } {
    return {
      figures: 'Figures',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figures: { 'type': 'array', 'itemType': FigureClusterForReqCoverFigures },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InputFileFigures extends $tea.Model {
  figureClusterId?: string;
  figureId?: string;
  figureType?: string;
  static names(): { [key: string]: string } {
    return {
      figureClusterId: 'FigureClusterId',
      figureId: 'FigureId',
      figureType: 'FigureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      figureClusterId: 'string',
      figureId: 'string',
      figureType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetAudioFilterAudio extends $tea.Model {
  mixing?: boolean;
  static names(): { [key: string]: string } {
    return {
      mixing: 'Mixing',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mixing: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetAudioTranscodeAudio extends $tea.Model {
  bitrate?: number;
  bitrateOption?: string;
  channel?: number;
  codec?: string;
  quality?: number;
  sampleRate?: number;
  sampleRateOption?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      bitrateOption: 'BitrateOption',
      channel: 'Channel',
      codec: 'Codec',
      quality: 'Quality',
      sampleRate: 'SampleRate',
      sampleRateOption: 'SampleRateOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'number',
      bitrateOption: 'string',
      channel: 'number',
      codec: 'string',
      quality: 'number',
      sampleRate: 'number',
      sampleRateOption: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetImageAnimations extends $tea.Model {
  format?: string;
  frameRate?: number;
  height?: number;
  interval?: number;
  number?: number;
  scaleType?: string;
  startTime?: number;
  URI?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      frameRate: 'FrameRate',
      height: 'Height',
      interval: 'Interval',
      number: 'Number',
      scaleType: 'ScaleType',
      startTime: 'StartTime',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      frameRate: 'number',
      height: 'number',
      interval: 'number',
      number: 'number',
      scaleType: 'string',
      startTime: 'number',
      URI: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetImageSnapshots extends $tea.Model {
  format?: string;
  height?: number;
  interval?: number;
  number?: number;
  scaleType?: string;
  startTime?: number;
  URI?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      height: 'Height',
      interval: 'Interval',
      number: 'Number',
      scaleType: 'ScaleType',
      startTime: 'StartTime',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      height: 'number',
      interval: 'number',
      number: 'number',
      scaleType: 'string',
      startTime: 'number',
      URI: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetImageSprites extends $tea.Model {
  format?: string;
  interval?: number;
  margin?: number;
  number?: number;
  pad?: number;
  scaleHeight?: number;
  scaleType?: string;
  scaleWidth?: number;
  startTime?: number;
  tileHeight?: number;
  tileWidth?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      interval: 'Interval',
      margin: 'Margin',
      number: 'Number',
      pad: 'Pad',
      scaleHeight: 'ScaleHeight',
      scaleType: 'ScaleType',
      scaleWidth: 'ScaleWidth',
      startTime: 'StartTime',
      tileHeight: 'TileHeight',
      tileWidth: 'TileWidth',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      interval: 'number',
      margin: 'number',
      number: 'number',
      pad: 'number',
      scaleHeight: 'number',
      scaleType: 'string',
      scaleWidth: 'number',
      startTime: 'number',
      tileHeight: 'number',
      tileWidth: 'number',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetSubtitleExtractSubtitle extends $tea.Model {
  format?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      format: 'Format',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      format: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoDelogos extends $tea.Model {
  duration?: number;
  dx?: number;
  dy?: number;
  height?: number;
  referPos?: string;
  startTime?: number;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      dx: 'number',
      dy: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideoWatermarks extends $tea.Model {
  borderColor?: string;
  borderWidth?: number;
  content?: string;
  duration?: number;
  dx?: number;
  dy?: number;
  fontApha?: number;
  fontColor?: string;
  fontName?: string;
  fontSize?: number;
  height?: number;
  referPos?: string;
  startTime?: number;
  type?: string;
  URI?: string;
  width?: number;
  static names(): { [key: string]: string } {
    return {
      borderColor: 'BorderColor',
      borderWidth: 'BorderWidth',
      content: 'Content',
      duration: 'Duration',
      dx: 'Dx',
      dy: 'Dy',
      fontApha: 'FontApha',
      fontColor: 'FontColor',
      fontName: 'FontName',
      fontSize: 'FontSize',
      height: 'Height',
      referPos: 'ReferPos',
      startTime: 'StartTime',
      type: 'Type',
      URI: 'URI',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      borderColor: 'string',
      borderWidth: 'number',
      content: 'string',
      duration: 'number',
      dx: 'number',
      dy: 'number',
      fontApha: 'number',
      fontColor: 'string',
      fontName: 'string',
      fontSize: 'number',
      height: 'number',
      referPos: 'string',
      startTime: 'number',
      type: 'string',
      URI: 'string',
      width: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoFilterVideo extends $tea.Model {
  delogos?: TargetVideoFilterVideoDelogos[];
  watermarks?: TargetVideoFilterVideoWatermarks[];
  static names(): { [key: string]: string } {
    return {
      delogos: 'Delogos',
      watermarks: 'Watermarks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delogos: { 'type': 'array', 'itemType': TargetVideoFilterVideoDelogos },
      watermarks: { 'type': 'array', 'itemType': TargetVideoFilterVideoWatermarks },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TargetVideoTranscodeVideo extends $tea.Model {
  adaptiveResolutionDirection?: boolean;
  BFrames?: number;
  bitrate?: number;
  bitrateOption?: string;
  bufferSize?: number;
  CRF?: number;
  codec?: string;
  frameRate?: number;
  frameRateOption?: string;
  GOPSize?: number;
  maxBitrate?: number;
  pixelFormat?: string;
  refs?: number;
  resolution?: string;
  resolutionOption?: string;
  rotation?: number;
  scaleType?: string;
  static names(): { [key: string]: string } {
    return {
      adaptiveResolutionDirection: 'AdaptiveResolutionDirection',
      BFrames: 'BFrames',
      bitrate: 'Bitrate',
      bitrateOption: 'BitrateOption',
      bufferSize: 'BufferSize',
      CRF: 'CRF',
      codec: 'Codec',
      frameRate: 'FrameRate',
      frameRateOption: 'FrameRateOption',
      GOPSize: 'GOPSize',
      maxBitrate: 'MaxBitrate',
      pixelFormat: 'PixelFormat',
      refs: 'Refs',
      resolution: 'Resolution',
      resolutionOption: 'ResolutionOption',
      rotation: 'Rotation',
      scaleType: 'ScaleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adaptiveResolutionDirection: 'boolean',
      BFrames: 'number',
      bitrate: 'number',
      bitrateOption: 'string',
      bufferSize: 'number',
      CRF: 'number',
      codec: 'string',
      frameRate: 'number',
      frameRateOption: 'string',
      GOPSize: 'number',
      maxBitrate: 'number',
      pixelFormat: 'string',
      refs: 'number',
      resolution: 'string',
      resolutionOption: 'string',
      rotation: 'number',
      scaleType: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageMosaicRequestTargetsBoundary extends $tea.Model {
  height?: number;
  referPos?: string;
  width?: number;
  x?: number;
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      referPos: 'ReferPos',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      referPos: 'string',
      width: 'number',
      x: 'number',
      y: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddImageMosaicRequestTargets extends $tea.Model {
  blurRadius?: number;
  boundary?: AddImageMosaicRequestTargetsBoundary;
  color?: string;
  mosaicRadius?: number;
  sigma?: number;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      blurRadius: 'BlurRadius',
      boundary: 'Boundary',
      color: 'Color',
      mosaicRadius: 'MosaicRadius',
      sigma: 'Sigma',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blurRadius: 'number',
      boundary: AddImageMosaicRequestTargetsBoundary,
      color: 'string',
      mosaicRadius: 'number',
      sigma: 'number',
      type: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesRequestFiles extends $tea.Model {
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddStoryFilesResponseBodyFiles extends $tea.Model {
  errorCode?: string;
  errorMessage?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaResponseBodyFiles extends $tea.Model {
  message?: string;
  success?: boolean;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      success: 'Success',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      success: 'boolean',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CompareImageFacesRequestSource extends $tea.Model {
  URI1?: string;
  URI2?: string;
  static names(): { [key: string]: string } {
    return {
      URI1: 'URI1',
      URI2: 'URI2',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI1: 'string',
      URI2: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRequestActions extends $tea.Model {
  name?: string;
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBatchRequestNotification extends $tea.Model {
  MNS?: MNS;
  static names(): { [key: string]: string } {
    return {
      MNS: 'MNS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MNS: MNS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequestCover extends $tea.Model {
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateCustomizedStoryRequestFiles extends $tea.Model {
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFacesSearchingTaskRequestSources extends $tea.Model {
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateFileCompressionTaskRequestSources extends $tea.Model {
  alias?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageSplicingTaskRequestSources extends $tea.Model {
  rotate?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      rotate: 'Rotate',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotate: 'number',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateImageToPDFTaskRequestSources extends $tea.Model {
  rotate?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      rotate: 'Rotate',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rotate: 'number',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskRequestDateOptions extends $tea.Model {
  gapDays?: number;
  maxDays?: number;
  minDays?: number;
  static names(): { [key: string]: string } {
    return {
      gapDays: 'GapDays',
      maxDays: 'MaxDays',
      minDays: 'MinDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gapDays: 'number',
      maxDays: 'number',
      minDays: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateLocationDateClusteringTaskRequestLocationOptions extends $tea.Model {
  locationDateClusterLevels?: string[];
  static names(): { [key: string]: string } {
    return {
      locationDateClusterLevels: 'LocationDateClusterLevels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      locationDateClusterLevels: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestSourcesSubtitles extends $tea.Model {
  language?: string;
  timeOffset?: number;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      timeOffset: 'TimeOffset',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      timeOffset: 'number',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestSources extends $tea.Model {
  duration?: number;
  startTime?: number;
  subtitles?: CreateMediaConvertTaskRequestSourcesSubtitles[];
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      startTime: 'StartTime',
      subtitles: 'Subtitles',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      startTime: 'number',
      subtitles: { 'type': 'array', 'itemType': CreateMediaConvertTaskRequestSourcesSubtitles },
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestTargetsSegment extends $tea.Model {
  duration?: number;
  format?: string;
  startNumber?: number;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      format: 'Format',
      startNumber: 'StartNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      format: 'string',
      startNumber: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateMediaConvertTaskRequestTargets extends $tea.Model {
  audio?: TargetAudio;
  container?: string;
  image?: TargetImage;
  segment?: CreateMediaConvertTaskRequestTargetsSegment;
  speed?: number;
  stripMetadata?: boolean;
  subtitle?: TargetSubtitle;
  URI?: string;
  video?: TargetVideo;
  static names(): { [key: string]: string } {
    return {
      audio: 'Audio',
      container: 'Container',
      image: 'Image',
      segment: 'Segment',
      speed: 'Speed',
      stripMetadata: 'StripMetadata',
      subtitle: 'Subtitle',
      URI: 'URI',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      audio: TargetAudio,
      container: 'string',
      image: TargetImage,
      segment: CreateMediaConvertTaskRequestTargetsSegment,
      speed: 'number',
      stripMetadata: 'boolean',
      subtitle: TargetSubtitle,
      URI: 'string',
      video: TargetVideo,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequestActions extends $tea.Model {
  name?: string;
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateTriggerRequestNotification extends $tea.Model {
  MNS?: MNS;
  static names(): { [key: string]: string } {
    return {
      MNS: 'MNS',
    };
  }

  static types(): { [key: string]: any } {
    return {
      MNS: MNS,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectImageScoreResponseBodyImageScore extends $tea.Model {
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

export class GetImageModerationResultResponseBodyModerationResultFramesBlockFrames extends $tea.Model {
  label?: string;
  offset?: number;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      offset: 'Offset',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageModerationResultResponseBodyModerationResultFrames extends $tea.Model {
  blockFrames?: GetImageModerationResultResponseBodyModerationResultFramesBlockFrames[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'BlockFrames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': GetImageModerationResultResponseBodyModerationResultFramesBlockFrames },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetImageModerationResultResponseBodyModerationResult extends $tea.Model {
  categories?: string[];
  frames?: GetImageModerationResultResponseBodyModerationResultFrames;
  suggestion?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      frames: 'Frames',
      suggestion: 'Suggestion',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      frames: GetImageModerationResultResponseBodyModerationResultFrames,
      suggestion: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames extends $tea.Model {
  label?: string;
  offset?: number;
  rate?: number;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      offset: 'Offset',
      rate: 'Rate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      offset: 'number',
      rate: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBodyModerationResultFrames extends $tea.Model {
  blockFrames?: GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames[];
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      blockFrames: 'BlockFrames',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blockFrames: { 'type': 'array', 'itemType': GetVideoModerationResultResponseBodyModerationResultFramesBlockFrames },
      totalCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoModerationResultResponseBodyModerationResult extends $tea.Model {
  categories?: string[];
  frames?: GetVideoModerationResultResponseBodyModerationResultFrames;
  suggestion?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      categories: 'Categories',
      frames: 'Frames',
      suggestion: 'Suggestion',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categories: { 'type': 'array', 'itemType': 'string' },
      frames: GetVideoModerationResultResponseBodyModerationResultFrames,
      suggestion: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RemoveStoryFilesRequestFiles extends $tea.Model {
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchImageFigureClusterResponseBodyClusters extends $tea.Model {
  boundary?: Boundary;
  clusterId?: string;
  similarity?: number;
  static names(): { [key: string]: string } {
    return {
      boundary: 'Boundary',
      clusterId: 'ClusterId',
      similarity: 'Similarity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boundary: Boundary,
      clusterId: 'string',
      similarity: 'number',
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
  count?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      value: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponseBodyAggregations extends $tea.Model {
  field?: string;
  groups?: SimpleQueryResponseBodyAggregationsGroups[];
  operation?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      groups: 'Groups',
      operation: 'Operation',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      groups: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregationsGroups },
      operation: 'string',
      value: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBatchRequestActions extends $tea.Model {
  name?: string;
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateStoryRequestCover extends $tea.Model {
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateTriggerRequestActions extends $tea.Model {
  name?: string;
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
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

  async addImageMosaicWithOptions(tmpReq: AddImageMosaicRequest, runtime: $Util.RuntimeOptions): Promise<AddImageMosaicResponse> {
    Util.validateModel(tmpReq);
    let request = new AddImageMosaicShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.imageFormat)) {
      query["ImageFormat"] = request.imageFormat;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.quality)) {
      query["Quality"] = request.quality;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AddImageMosaic",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddImageMosaicResponse>(await this.callApi(params, req, runtime), new AddImageMosaicResponse({}));
  }

  async addImageMosaic(request: AddImageMosaicRequest): Promise<AddImageMosaicResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addImageMosaicWithOptions(request, runtime);
  }

  async addStoryFilesWithOptions(tmpReq: AddStoryFilesRequest, runtime: $Util.RuntimeOptions): Promise<AddStoryFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new AddStoryFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!Util.isUnset(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "AddStoryFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AddStoryFilesResponse>(await this.callApi(params, req, runtime), new AddStoryFilesResponse({}));
  }

  async addStoryFiles(request: AddStoryFilesRequest): Promise<AddStoryFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.addStoryFilesWithOptions(request, runtime);
  }

  async attachOSSBucketWithOptions(request: AttachOSSBucketRequest, runtime: $Util.RuntimeOptions): Promise<AttachOSSBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "AttachOSSBucket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<AttachOSSBucketResponse>(await this.callApi(params, req, runtime), new AttachOSSBucketResponse({}));
  }

  async attachOSSBucket(request: AttachOSSBucketRequest): Promise<AttachOSSBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.attachOSSBucketWithOptions(request, runtime);
  }

  async batchDeleteFileMetaWithOptions(tmpReq: BatchDeleteFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<BatchDeleteFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchDeleteFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.URIs)) {
      request.URIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.URIs, "URIs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URIsShrink)) {
      query["URIs"] = request.URIsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchDeleteFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchDeleteFileMetaResponse>(await this.callApi(params, req, runtime), new BatchDeleteFileMetaResponse({}));
  }

  async batchDeleteFileMeta(request: BatchDeleteFileMetaRequest): Promise<BatchDeleteFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchDeleteFileMetaWithOptions(request, runtime);
  }

  async batchGetFigureClusterWithOptions(tmpReq: BatchGetFigureClusterRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetFigureClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchGetFigureClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.objectIds)) {
      request.objectIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.objectIds, "ObjectIds", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.objectIdsShrink)) {
      query["ObjectIds"] = request.objectIdsShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchGetFigureClusterResponse>(await this.callApi(params, req, runtime), new BatchGetFigureClusterResponse({}));
  }

  async batchGetFigureCluster(request: BatchGetFigureClusterRequest): Promise<BatchGetFigureClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchGetFigureClusterWithOptions(request, runtime);
  }

  async batchGetFileMetaWithOptions(tmpReq: BatchGetFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<BatchGetFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new BatchGetFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.URIs)) {
      request.URIsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.URIs, "URIs", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URIsShrink)) {
      query["URIs"] = request.URIsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchGetFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchIndexFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.filesShrink)) {
      query["Files"] = request.filesShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "BatchUpdateFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<BatchUpdateFileMetaResponse>(await this.callApi(params, req, runtime), new BatchUpdateFileMetaResponse({}));
  }

  async batchUpdateFileMeta(request: BatchUpdateFileMetaRequest): Promise<BatchUpdateFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateFileMetaWithOptions(request, runtime);
  }

  async compareImageFacesWithOptions(tmpReq: CompareImageFacesRequest, runtime: $Util.RuntimeOptions): Promise<CompareImageFacesResponse> {
    Util.validateModel(tmpReq);
    let request = new CompareImageFacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.source)) {
      request.sourceShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.source, "Source", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceShrink)) {
      query["Source"] = request.sourceShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CompareImageFaces",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CompareImageFacesResponse>(await this.callApi(params, req, runtime), new CompareImageFacesResponse({}));
  }

  async compareImageFaces(request: CompareImageFacesRequest): Promise<CompareImageFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.compareImageFacesWithOptions(request, runtime);
  }

  async createArchiveFileInspectionTaskWithOptions(tmpReq: CreateArchiveFileInspectionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateArchiveFileInspectionTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateArchiveFileInspectionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateArchiveFileInspectionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateArchiveFileInspectionTaskResponse>(await this.callApi(params, req, runtime), new CreateArchiveFileInspectionTaskResponse({}));
  }

  async createArchiveFileInspectionTask(request: CreateArchiveFileInspectionTaskRequest): Promise<CreateArchiveFileInspectionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createArchiveFileInspectionTaskWithOptions(request, runtime);
  }

  async createBatchWithOptions(tmpReq: CreateBatchRequest, runtime: $Util.RuntimeOptions): Promise<CreateBatchResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!Util.isUnset(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      body["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.serviceRole)) {
      body["ServiceRole"] = request.serviceRole;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBatchResponse>(await this.callApi(params, req, runtime), new CreateBatchResponse({}));
  }

  async createBatch(request: CreateBatchRequest): Promise<CreateBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBatchWithOptions(request, runtime);
  }

  async createBindingWithOptions(request: CreateBindingRequest, runtime: $Util.RuntimeOptions): Promise<CreateBindingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateBindingResponse>(await this.callApi(params, req, runtime), new CreateBindingResponse({}));
  }

  async createBinding(request: CreateBindingRequest): Promise<CreateBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  async createCompressPointCloudTaskWithOptions(tmpReq: CreateCompressPointCloudTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateCompressPointCloudTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCompressPointCloudTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.kdtreeOption)) {
      request.kdtreeOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.kdtreeOption, "KdtreeOption", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.octreeOption)) {
      request.octreeOptionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.octreeOption, "OctreeOption", "json");
    }

    if (!Util.isUnset(tmpReq.pointCloudFields)) {
      request.pointCloudFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.pointCloudFields, "PointCloudFields", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.compressMethod)) {
      query["CompressMethod"] = request.compressMethod;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.kdtreeOptionShrink)) {
      query["KdtreeOption"] = request.kdtreeOptionShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.octreeOptionShrink)) {
      query["OctreeOption"] = request.octreeOptionShrink;
    }

    if (!Util.isUnset(request.pointCloudFieldsShrink)) {
      query["PointCloudFields"] = request.pointCloudFieldsShrink;
    }

    if (!Util.isUnset(request.pointCloudFileFormat)) {
      query["PointCloudFileFormat"] = request.pointCloudFileFormat;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateCompressPointCloudTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCompressPointCloudTaskResponse>(await this.callApi(params, req, runtime), new CreateCompressPointCloudTaskResponse({}));
  }

  async createCompressPointCloudTask(request: CreateCompressPointCloudTaskRequest): Promise<CreateCompressPointCloudTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCompressPointCloudTaskWithOptions(request, runtime);
  }

  async createCustomizedStoryWithOptions(tmpReq: CreateCustomizedStoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateCustomizedStoryResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateCustomizedStoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.cover)) {
      request.coverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cover, "Cover", "json");
    }

    if (!Util.isUnset(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coverShrink)) {
      body["Cover"] = request.coverShrink;
    }

    if (!Util.isUnset(request.customLabelsShrink)) {
      body["CustomLabels"] = request.customLabelsShrink;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.storyName)) {
      body["StoryName"] = request.storyName;
    }

    if (!Util.isUnset(request.storySubType)) {
      body["StorySubType"] = request.storySubType;
    }

    if (!Util.isUnset(request.storyType)) {
      body["StoryType"] = request.storyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateCustomizedStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateCustomizedStoryResponse>(await this.callApi(params, req, runtime), new CreateCustomizedStoryResponse({}));
  }

  async createCustomizedStory(request: CreateCustomizedStoryRequest): Promise<CreateCustomizedStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createCustomizedStoryWithOptions(request, runtime);
  }

  async createDatasetWithOptions(request: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!Util.isUnset(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!Util.isUnset(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!Util.isUnset(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!Util.isUnset(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateDatasetResponse>(await this.callApi(params, req, runtime), new CreateDatasetResponse({}));
  }

  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  async createFacesSearchingTaskWithOptions(tmpReq: CreateFacesSearchingTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateFacesSearchingTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFacesSearchingTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResult)) {
      query["MaxResult"] = request.maxResult;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFacesSearchingTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFacesSearchingTaskResponse>(await this.callApi(params, req, runtime), new CreateFacesSearchingTaskResponse({}));
  }

  async createFacesSearchingTask(request: CreateFacesSearchingTaskRequest): Promise<CreateFacesSearchingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFacesSearchingTaskWithOptions(request, runtime);
  }

  async createFigureClusteringTaskWithOptions(tmpReq: CreateFigureClusteringTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateFigureClusteringTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFigureClusteringTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFigureClusteringTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFigureClusteringTaskResponse>(await this.callApi(params, req, runtime), new CreateFigureClusteringTaskResponse({}));
  }

  async createFigureClusteringTask(request: CreateFigureClusteringTaskRequest): Promise<CreateFigureClusteringTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFigureClusteringTaskWithOptions(request, runtime);
  }

  async createFigureClustersMergingTaskWithOptions(tmpReq: CreateFigureClustersMergingTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateFigureClustersMergingTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFigureClustersMergingTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.froms)) {
      request.fromsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.froms, "Froms", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.from)) {
      query["From"] = request.from;
    }

    if (!Util.isUnset(request.fromsShrink)) {
      query["Froms"] = request.fromsShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.to)) {
      query["To"] = request.to;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFigureClustersMergingTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFigureClustersMergingTaskResponse>(await this.callApi(params, req, runtime), new CreateFigureClustersMergingTaskResponse({}));
  }

  async createFigureClustersMergingTask(request: CreateFigureClustersMergingTaskRequest): Promise<CreateFigureClustersMergingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFigureClustersMergingTaskWithOptions(request, runtime);
  }

  async createFileCompressionTaskWithOptions(tmpReq: CreateFileCompressionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileCompressionTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFileCompressionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    let query = { };
    if (!Util.isUnset(request.compressedFormat)) {
      query["CompressedFormat"] = request.compressedFormat;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceManifestURI)) {
      query["SourceManifestURI"] = request.sourceManifestURI;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFileCompressionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFileCompressionTaskResponse>(await this.callApi(params, req, runtime), new CreateFileCompressionTaskResponse({}));
  }

  async createFileCompressionTask(request: CreateFileCompressionTaskRequest): Promise<CreateFileCompressionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileCompressionTaskWithOptions(request, runtime);
  }

  async createFileUncompressionTaskWithOptions(tmpReq: CreateFileUncompressionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateFileUncompressionTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateFileUncompressionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.selectedFiles)) {
      request.selectedFilesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.selectedFiles, "SelectedFiles", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.selectedFilesShrink)) {
      query["SelectedFiles"] = request.selectedFilesShrink;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateFileUncompressionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateFileUncompressionTaskResponse>(await this.callApi(params, req, runtime), new CreateFileUncompressionTaskResponse({}));
  }

  async createFileUncompressionTask(request: CreateFileUncompressionTaskRequest): Promise<CreateFileUncompressionTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createFileUncompressionTaskWithOptions(request, runtime);
  }

  async createImageModerationTaskWithOptions(tmpReq: CreateImageModerationTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageModerationTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateImageModerationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.scenes)) {
      request.scenesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scenes, "Scenes", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.maxFrames)) {
      query["MaxFrames"] = request.maxFrames;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.scenesShrink)) {
      query["Scenes"] = request.scenesShrink;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageModerationTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageModerationTaskResponse>(await this.callApi(params, req, runtime), new CreateImageModerationTaskResponse({}));
  }

  async createImageModerationTask(request: CreateImageModerationTaskRequest): Promise<CreateImageModerationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageModerationTaskWithOptions(request, runtime);
  }

  async createImageSplicingTaskWithOptions(tmpReq: CreateImageSplicingTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageSplicingTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateImageSplicingTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.align)) {
      query["Align"] = request.align;
    }

    if (!Util.isUnset(request.backgroundColor)) {
      query["BackgroundColor"] = request.backgroundColor;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.direction)) {
      query["Direction"] = request.direction;
    }

    if (!Util.isUnset(request.imageFormat)) {
      query["ImageFormat"] = request.imageFormat;
    }

    if (!Util.isUnset(request.margin)) {
      query["Margin"] = request.margin;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.padding)) {
      query["Padding"] = request.padding;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.quality)) {
      query["Quality"] = request.quality;
    }

    if (!Util.isUnset(request.scaleType)) {
      query["ScaleType"] = request.scaleType;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageSplicingTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageSplicingTaskResponse>(await this.callApi(params, req, runtime), new CreateImageSplicingTaskResponse({}));
  }

  async createImageSplicingTask(request: CreateImageSplicingTaskRequest): Promise<CreateImageSplicingTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageSplicingTaskWithOptions(request, runtime);
  }

  async createImageToPDFTaskWithOptions(tmpReq: CreateImageToPDFTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateImageToPDFTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateImageToPDFTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateImageToPDFTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateImageToPDFTaskResponse>(await this.callApi(params, req, runtime), new CreateImageToPDFTaskResponse({}));
  }

  async createImageToPDFTask(request: CreateImageToPDFTaskRequest): Promise<CreateImageToPDFTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createImageToPDFTaskWithOptions(request, runtime);
  }

  async createLocationDateClusteringTaskWithOptions(tmpReq: CreateLocationDateClusteringTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateLocationDateClusteringTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateLocationDateClusteringTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.dateOptions)) {
      request.dateOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.dateOptions, "DateOptions", "json");
    }

    if (!Util.isUnset(tmpReq.locationOptions)) {
      request.locationOptionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationOptions, "LocationOptions", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.dateOptionsShrink)) {
      query["DateOptions"] = request.dateOptionsShrink;
    }

    if (!Util.isUnset(request.locationOptionsShrink)) {
      query["LocationOptions"] = request.locationOptionsShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateLocationDateClusteringTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateLocationDateClusteringTaskResponse>(await this.callApi(params, req, runtime), new CreateLocationDateClusteringTaskResponse({}));
  }

  async createLocationDateClusteringTask(request: CreateLocationDateClusteringTaskRequest): Promise<CreateLocationDateClusteringTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createLocationDateClusteringTaskWithOptions(request, runtime);
  }

  async createMediaConvertTaskWithOptions(tmpReq: CreateMediaConvertTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateMediaConvertTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateMediaConvertTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.sources)) {
      request.sourcesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.sources, "Sources", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!Util.isUnset(tmpReq.targets)) {
      request.targetsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.targets, "Targets", "json");
    }

    let query = { };
    if (!Util.isUnset(request.alignmentIndex)) {
      query["AlignmentIndex"] = request.alignmentIndex;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourcesShrink)) {
      query["Sources"] = request.sourcesShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targetsShrink)) {
      query["Targets"] = request.targetsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateMediaConvertTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateMediaConvertTaskResponse>(await this.callApi(params, req, runtime), new CreateMediaConvertTaskResponse({}));
  }

  async createMediaConvertTask(request: CreateMediaConvertTaskRequest): Promise<CreateMediaConvertTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createMediaConvertTaskWithOptions(request, runtime);
  }

  async createOfficeConversionTaskWithOptions(tmpReq: CreateOfficeConversionTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateOfficeConversionTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateOfficeConversionTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    if (!Util.isUnset(tmpReq.trimPolicy)) {
      request.trimPolicyShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.trimPolicy, "TrimPolicy", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.endPage)) {
      query["EndPage"] = request.endPage;
    }

    if (!Util.isUnset(request.firstPage)) {
      query["FirstPage"] = request.firstPage;
    }

    if (!Util.isUnset(request.fitToHeight)) {
      query["FitToHeight"] = request.fitToHeight;
    }

    if (!Util.isUnset(request.fitToWidth)) {
      query["FitToWidth"] = request.fitToWidth;
    }

    if (!Util.isUnset(request.holdLineFeed)) {
      query["HoldLineFeed"] = request.holdLineFeed;
    }

    if (!Util.isUnset(request.imageDPI)) {
      query["ImageDPI"] = request.imageDPI;
    }

    if (!Util.isUnset(request.longPicture)) {
      query["LongPicture"] = request.longPicture;
    }

    if (!Util.isUnset(request.longText)) {
      query["LongText"] = request.longText;
    }

    if (!Util.isUnset(request.maxSheetColumn)) {
      query["MaxSheetColumn"] = request.maxSheetColumn;
    }

    if (!Util.isUnset(request.maxSheetRow)) {
      query["MaxSheetRow"] = request.maxSheetRow;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.pages)) {
      query["Pages"] = request.pages;
    }

    if (!Util.isUnset(request.paperHorizontal)) {
      query["PaperHorizontal"] = request.paperHorizontal;
    }

    if (!Util.isUnset(request.paperSize)) {
      query["PaperSize"] = request.paperSize;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.quality)) {
      query["Quality"] = request.quality;
    }

    if (!Util.isUnset(request.scalePercentage)) {
      query["ScalePercentage"] = request.scalePercentage;
    }

    if (!Util.isUnset(request.sheetCount)) {
      query["SheetCount"] = request.sheetCount;
    }

    if (!Util.isUnset(request.sheetIndex)) {
      query["SheetIndex"] = request.sheetIndex;
    }

    if (!Util.isUnset(request.showComments)) {
      query["ShowComments"] = request.showComments;
    }

    if (!Util.isUnset(request.sourceType)) {
      query["SourceType"] = request.sourceType;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.startPage)) {
      query["StartPage"] = request.startPage;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.targetType)) {
      query["TargetType"] = request.targetType;
    }

    if (!Util.isUnset(request.targetURI)) {
      query["TargetURI"] = request.targetURI;
    }

    if (!Util.isUnset(request.targetURIPrefix)) {
      query["TargetURIPrefix"] = request.targetURIPrefix;
    }

    if (!Util.isUnset(request.trimPolicyShrink)) {
      query["TrimPolicy"] = request.trimPolicyShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateOfficeConversionTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    if (!Util.isUnset(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!Util.isUnset(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!Util.isUnset(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!Util.isUnset(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!Util.isUnset(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.projectMaxDatasetCount)) {
      query["ProjectMaxDatasetCount"] = request.projectMaxDatasetCount;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.serviceRole)) {
      query["ServiceRole"] = request.serviceRole;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateProjectResponse>(await this.callApi(params, req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async createSimilarImageClusteringTaskWithOptions(tmpReq: CreateSimilarImageClusteringTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateSimilarImageClusteringTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateSimilarImageClusteringTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateSimilarImageClusteringTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateSimilarImageClusteringTaskResponse>(await this.callApi(params, req, runtime), new CreateSimilarImageClusteringTaskResponse({}));
  }

  async createSimilarImageClusteringTask(request: CreateSimilarImageClusteringTaskRequest): Promise<CreateSimilarImageClusteringTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createSimilarImageClusteringTaskWithOptions(request, runtime);
  }

  async createStoryWithOptions(tmpReq: CreateStoryRequest, runtime: $Util.RuntimeOptions): Promise<CreateStoryResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateStoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.address)) {
      request.addressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.address, "Address", "json");
    }

    if (!Util.isUnset(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.addressShrink)) {
      body["Address"] = request.addressShrink;
    }

    if (!Util.isUnset(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!Util.isUnset(request.customLabelsShrink)) {
      body["CustomLabels"] = request.customLabelsShrink;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxFileCount)) {
      body["MaxFileCount"] = request.maxFileCount;
    }

    if (!Util.isUnset(request.minFileCount)) {
      body["MinFileCount"] = request.minFileCount;
    }

    if (!Util.isUnset(request.notifyTopicName)) {
      body["NotifyTopicName"] = request.notifyTopicName;
    }

    if (!Util.isUnset(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.storyEndTime)) {
      body["StoryEndTime"] = request.storyEndTime;
    }

    if (!Util.isUnset(request.storyName)) {
      body["StoryName"] = request.storyName;
    }

    if (!Util.isUnset(request.storyStartTime)) {
      body["StoryStartTime"] = request.storyStartTime;
    }

    if (!Util.isUnset(request.storySubType)) {
      body["StorySubType"] = request.storySubType;
    }

    if (!Util.isUnset(request.storyType)) {
      body["StoryType"] = request.storyType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateStoryResponse>(await this.callApi(params, req, runtime), new CreateStoryResponse({}));
  }

  async createStory(request: CreateStoryRequest): Promise<CreateStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createStoryWithOptions(request, runtime);
  }

  async createTriggerWithOptions(tmpReq: CreateTriggerRequest, runtime: $Util.RuntimeOptions): Promise<CreateTriggerResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateTriggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!Util.isUnset(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      body["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.serviceRole)) {
      body["ServiceRole"] = request.serviceRole;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "CreateTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateTriggerResponse>(await this.callApi(params, req, runtime), new CreateTriggerResponse({}));
  }

  async createTrigger(request: CreateTriggerRequest): Promise<CreateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createTriggerWithOptions(request, runtime);
  }

  async createVideoLabelClassificationTaskWithOptions(tmpReq: CreateVideoLabelClassificationTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoLabelClassificationTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateVideoLabelClassificationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVideoLabelClassificationTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVideoLabelClassificationTaskResponse>(await this.callApi(params, req, runtime), new CreateVideoLabelClassificationTaskResponse({}));
  }

  async createVideoLabelClassificationTask(request: CreateVideoLabelClassificationTaskRequest): Promise<CreateVideoLabelClassificationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoLabelClassificationTaskWithOptions(request, runtime);
  }

  async createVideoModerationTaskWithOptions(tmpReq: CreateVideoModerationTaskRequest, runtime: $Util.RuntimeOptions): Promise<CreateVideoModerationTaskResponse> {
    Util.validateModel(tmpReq);
    let request = new CreateVideoModerationTaskShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.scenes)) {
      request.scenesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.scenes, "Scenes", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.interval)) {
      query["Interval"] = request.interval;
    }

    if (!Util.isUnset(request.maxFrames)) {
      query["MaxFrames"] = request.maxFrames;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.scenesShrink)) {
      query["Scenes"] = request.scenesShrink;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      query["Tags"] = request.tagsShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "CreateVideoModerationTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<CreateVideoModerationTaskResponse>(await this.callApi(params, req, runtime), new CreateVideoModerationTaskResponse({}));
  }

  async createVideoModerationTask(request: CreateVideoModerationTaskRequest): Promise<CreateVideoModerationTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createVideoModerationTaskWithOptions(request, runtime);
  }

  async deleteBatchWithOptions(request: DeleteBatchRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteBatchResponse>(await this.callApi(params, req, runtime), new DeleteBatchResponse({}));
  }

  async deleteBatch(request: DeleteBatchRequest): Promise<DeleteBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBatchWithOptions(request, runtime);
  }

  async deleteBindingWithOptions(request: DeleteBindingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBindingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteFileMetaResponse>(await this.callApi(params, req, runtime), new DeleteFileMetaResponse({}));
  }

  async deleteFileMeta(request: DeleteFileMetaRequest): Promise<DeleteFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileMetaWithOptions(request, runtime);
  }

  async deleteLocationDateClusterWithOptions(request: DeleteLocationDateClusterRequest, runtime: $Util.RuntimeOptions): Promise<DeleteLocationDateClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteLocationDateCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteLocationDateClusterResponse>(await this.callApi(params, req, runtime), new DeleteLocationDateClusterResponse({}));
  }

  async deleteLocationDateCluster(request: DeleteLocationDateClusterRequest): Promise<DeleteLocationDateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteLocationDateClusterWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteProjectResponse>(await this.callApi(params, req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async deleteStoryWithOptions(request: DeleteStoryRequest, runtime: $Util.RuntimeOptions): Promise<DeleteStoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DeleteStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteStoryResponse>(await this.callApi(params, req, runtime), new DeleteStoryResponse({}));
  }

  async deleteStory(request: DeleteStoryRequest): Promise<DeleteStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteStoryWithOptions(request, runtime);
  }

  async deleteTriggerWithOptions(request: DeleteTriggerRequest, runtime: $Util.RuntimeOptions): Promise<DeleteTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "DeleteTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DeleteTriggerResponse>(await this.callApi(params, req, runtime), new DeleteTriggerResponse({}));
  }

  async deleteTrigger(request: DeleteTriggerRequest): Promise<DeleteTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteTriggerWithOptions(request, runtime);
  }

  async detachOSSBucketWithOptions(request: DetachOSSBucketRequest, runtime: $Util.RuntimeOptions): Promise<DetachOSSBucketResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetachOSSBucket",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetachOSSBucketResponse>(await this.callApi(params, req, runtime), new DetachOSSBucketResponse({}));
  }

  async detachOSSBucket(request: DetachOSSBucketRequest): Promise<DetachOSSBucketResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detachOSSBucketWithOptions(request, runtime);
  }

  async detectImageBodiesWithOptions(tmpReq: DetectImageBodiesRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageBodiesResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageBodiesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sensitivity)) {
      query["Sensitivity"] = request.sensitivity;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageBodies",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageBodiesResponse>(await this.callApi(params, req, runtime), new DetectImageBodiesResponse({}));
  }

  async detectImageBodies(request: DetectImageBodiesRequest): Promise<DetectImageBodiesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageBodiesWithOptions(request, runtime);
  }

  async detectImageCarsWithOptions(tmpReq: DetectImageCarsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageCarsResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageCarsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageCars",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageCarsResponse>(await this.callApi(params, req, runtime), new DetectImageCarsResponse({}));
  }

  async detectImageCars(request: DetectImageCarsRequest): Promise<DetectImageCarsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageCarsWithOptions(request, runtime);
  }

  async detectImageCodesWithOptions(tmpReq: DetectImageCodesRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageCodesResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageCodesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageCodes",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageCodesResponse>(await this.callApi(params, req, runtime), new DetectImageCodesResponse({}));
  }

  async detectImageCodes(request: DetectImageCodesRequest): Promise<DetectImageCodesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageCodesWithOptions(request, runtime);
  }

  async detectImageCroppingWithOptions(tmpReq: DetectImageCroppingRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageCroppingResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageCroppingShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.aspectRatios)) {
      query["AspectRatios"] = request.aspectRatios;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageCropping",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageCroppingResponse>(await this.callApi(params, req, runtime), new DetectImageCroppingResponse({}));
  }

  async detectImageCropping(request: DetectImageCroppingRequest): Promise<DetectImageCroppingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageCroppingWithOptions(request, runtime);
  }

  async detectImageFacesWithOptions(tmpReq: DetectImageFacesRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageFacesResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageFacesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageFaces",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageFacesResponse>(await this.callApi(params, req, runtime), new DetectImageFacesResponse({}));
  }

  async detectImageFaces(request: DetectImageFacesRequest): Promise<DetectImageFacesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageFacesWithOptions(request, runtime);
  }

  async detectImageLabelsWithOptions(tmpReq: DetectImageLabelsRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageLabelsResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageLabelsShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.threshold)) {
      query["Threshold"] = request.threshold;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageLabels",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageLabelsResponse>(await this.callApi(params, req, runtime), new DetectImageLabelsResponse({}));
  }

  async detectImageLabels(request: DetectImageLabelsRequest): Promise<DetectImageLabelsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageLabelsWithOptions(request, runtime);
  }

  async detectImageScoreWithOptions(tmpReq: DetectImageScoreRequest, runtime: $Util.RuntimeOptions): Promise<DetectImageScoreResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectImageScoreShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectImageScore",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectImageScoreResponse>(await this.callApi(params, req, runtime), new DetectImageScoreResponse({}));
  }

  async detectImageScore(request: DetectImageScoreRequest): Promise<DetectImageScoreResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectImageScoreWithOptions(request, runtime);
  }

  async detectMediaMetaWithOptions(tmpReq: DetectMediaMetaRequest, runtime: $Util.RuntimeOptions): Promise<DetectMediaMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new DetectMediaMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectMediaMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectMediaMetaResponse>(await this.callApi(params, req, runtime), new DetectMediaMetaResponse({}));
  }

  async detectMediaMeta(request: DetectMediaMetaRequest): Promise<DetectMediaMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectMediaMetaWithOptions(request, runtime);
  }

  async detectTextAnomalyWithOptions(request: DetectTextAnomalyRequest, runtime: $Util.RuntimeOptions): Promise<DetectTextAnomalyResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.content)) {
      query["Content"] = request.content;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "DetectTextAnomaly",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<DetectTextAnomalyResponse>(await this.callApi(params, req, runtime), new DetectTextAnomalyResponse({}));
  }

  async detectTextAnomaly(request: DetectTextAnomalyRequest): Promise<DetectTextAnomalyResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.detectTextAnomalyWithOptions(request, runtime);
  }

  async extractDocumentTextWithOptions(tmpReq: ExtractDocumentTextRequest, runtime: $Util.RuntimeOptions): Promise<ExtractDocumentTextResponse> {
    Util.validateModel(tmpReq);
    let request = new ExtractDocumentTextShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ExtractDocumentText",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ExtractDocumentTextResponse>(await this.callApi(params, req, runtime), new ExtractDocumentTextResponse({}));
  }

  async extractDocumentText(request: ExtractDocumentTextRequest): Promise<ExtractDocumentTextResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.extractDocumentTextWithOptions(request, runtime);
  }

  async fuzzyQueryWithOptions(request: FuzzyQueryRequest, runtime: $Util.RuntimeOptions): Promise<FuzzyQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "FuzzyQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<FuzzyQueryResponse>(await this.callApi(params, req, runtime), new FuzzyQueryResponse({}));
  }

  async fuzzyQuery(request: FuzzyQueryRequest): Promise<FuzzyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyQueryWithOptions(request, runtime);
  }

  async generateWebofficeTokenWithOptions(tmpReq: GenerateWebofficeTokenRequest, runtime: $Util.RuntimeOptions): Promise<GenerateWebofficeTokenResponse> {
    Util.validateModel(tmpReq);
    let request = new GenerateWebofficeTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    if (!Util.isUnset(tmpReq.permission)) {
      request.permissionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.permission, "Permission", "json");
    }

    if (!Util.isUnset(tmpReq.user)) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.user, "User", "json");
    }

    if (!Util.isUnset(tmpReq.watermark)) {
      request.watermarkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.watermark, "Watermark", "json");
    }

    let query = { };
    if (!Util.isUnset(request.cachePreview)) {
      query["CachePreview"] = request.cachePreview;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.externalUploaded)) {
      query["ExternalUploaded"] = request.externalUploaded;
    }

    if (!Util.isUnset(request.filename)) {
      query["Filename"] = request.filename;
    }

    if (!Util.isUnset(request.hidecmb)) {
      query["Hidecmb"] = request.hidecmb;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.notifyTopicName)) {
      query["NotifyTopicName"] = request.notifyTopicName;
    }

    if (!Util.isUnset(request.password)) {
      query["Password"] = request.password;
    }

    if (!Util.isUnset(request.permissionShrink)) {
      query["Permission"] = request.permissionShrink;
    }

    if (!Util.isUnset(request.previewPages)) {
      query["PreviewPages"] = request.previewPages;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.referer)) {
      query["Referer"] = request.referer;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    if (!Util.isUnset(request.userShrink)) {
      query["User"] = request.userShrink;
    }

    if (!Util.isUnset(request.userData)) {
      query["UserData"] = request.userData;
    }

    if (!Util.isUnset(request.watermarkShrink)) {
      query["Watermark"] = request.watermarkShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GenerateWebofficeToken",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GenerateWebofficeTokenResponse>(await this.callApi(params, req, runtime), new GenerateWebofficeTokenResponse({}));
  }

  async generateWebofficeToken(request: GenerateWebofficeTokenRequest): Promise<GenerateWebofficeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.generateWebofficeTokenWithOptions(request, runtime);
  }

  async getBatchWithOptions(request: GetBatchRequest, runtime: $Util.RuntimeOptions): Promise<GetBatchResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetBatchResponse>(await this.callApi(params, req, runtime), new GetBatchResponse({}));
  }

  async getBatch(request: GetBatchRequest): Promise<GetBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBatchWithOptions(request, runtime);
  }

  async getBindingWithOptions(request: GetBindingRequest, runtime: $Util.RuntimeOptions): Promise<GetBindingResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetBinding",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.withStatistics)) {
      query["WithStatistics"] = request.withStatistics;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetDatasetResponse>(await this.callApi(params, req, runtime), new GetDatasetResponse({}));
  }

  async getDataset(request: GetDatasetRequest): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  async getFigureClusterWithOptions(request: GetFigureClusterRequest, runtime: $Util.RuntimeOptions): Promise<GetFigureClusterResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFigureClusterResponse>(await this.callApi(params, req, runtime), new GetFigureClusterResponse({}));
  }

  async getFigureCluster(request: GetFigureClusterRequest): Promise<GetFigureClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFigureClusterWithOptions(request, runtime);
  }

  async getFileMetaWithOptions(request: GetFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetFileMetaResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.URI)) {
      query["URI"] = request.URI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetFileMetaResponse>(await this.callApi(params, req, runtime), new GetFileMetaResponse({}));
  }

  async getFileMeta(request: GetFileMetaRequest): Promise<GetFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileMetaWithOptions(request, runtime);
  }

  async getImageModerationResultWithOptions(request: GetImageModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetImageModerationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetImageModerationResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetImageModerationResultResponse>(await this.callApi(params, req, runtime), new GetImageModerationResultResponse({}));
  }

  async getImageModerationResult(request: GetImageModerationResultRequest): Promise<GetImageModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getImageModerationResultWithOptions(request, runtime);
  }

  async getOSSBucketAttachmentWithOptions(request: GetOSSBucketAttachmentRequest, runtime: $Util.RuntimeOptions): Promise<GetOSSBucketAttachmentResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.OSSBucket)) {
      query["OSSBucket"] = request.OSSBucket;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetOSSBucketAttachment",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetOSSBucketAttachmentResponse>(await this.callApi(params, req, runtime), new GetOSSBucketAttachmentResponse({}));
  }

  async getOSSBucketAttachment(request: GetOSSBucketAttachmentRequest): Promise<GetOSSBucketAttachmentResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getOSSBucketAttachmentWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.withStatistics)) {
      query["WithStatistics"] = request.withStatistics;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetProjectResponse>(await this.callApi(params, req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  async getStoryWithOptions(request: GetStoryRequest, runtime: $Util.RuntimeOptions): Promise<GetStoryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetStoryResponse>(await this.callApi(params, req, runtime), new GetStoryResponse({}));
  }

  async getStory(request: GetStoryRequest): Promise<GetStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getStoryWithOptions(request, runtime);
  }

  async getTaskWithOptions(request: GetTaskRequest, runtime: $Util.RuntimeOptions): Promise<GetTaskResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.requestDefinition)) {
      query["RequestDefinition"] = request.requestDefinition;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTask",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTaskResponse>(await this.callApi(params, req, runtime), new GetTaskResponse({}));
  }

  async getTask(request: GetTaskRequest): Promise<GetTaskResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTaskWithOptions(request, runtime);
  }

  async getTriggerWithOptions(request: GetTriggerRequest, runtime: $Util.RuntimeOptions): Promise<GetTriggerResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.id)) {
      query["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetTriggerResponse>(await this.callApi(params, req, runtime), new GetTriggerResponse({}));
  }

  async getTrigger(request: GetTriggerRequest): Promise<GetTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getTriggerWithOptions(request, runtime);
  }

  async getVideoLabelClassificationResultWithOptions(request: GetVideoLabelClassificationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoLabelClassificationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoLabelClassificationResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoLabelClassificationResultResponse>(await this.callApi(params, req, runtime), new GetVideoLabelClassificationResultResponse({}));
  }

  async getVideoLabelClassificationResult(request: GetVideoLabelClassificationResultRequest): Promise<GetVideoLabelClassificationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoLabelClassificationResultWithOptions(request, runtime);
  }

  async getVideoModerationResultWithOptions(request: GetVideoModerationResultRequest, runtime: $Util.RuntimeOptions): Promise<GetVideoModerationResultResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.taskId)) {
      query["TaskId"] = request.taskId;
    }

    if (!Util.isUnset(request.taskType)) {
      query["TaskType"] = request.taskType;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "GetVideoModerationResult",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<GetVideoModerationResultResponse>(await this.callApi(params, req, runtime), new GetVideoModerationResultResponse({}));
  }

  async getVideoModerationResult(request: GetVideoModerationResultRequest): Promise<GetVideoModerationResultResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getVideoModerationResultWithOptions(request, runtime);
  }

  async indexFileMetaWithOptions(tmpReq: IndexFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<IndexFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new IndexFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.file)) {
      request.fileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.file, "File", "json");
    }

    if (!Util.isUnset(tmpReq.notification)) {
      request.notificationShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.notification, "Notification", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.fileShrink)) {
      query["File"] = request.fileShrink;
    }

    if (!Util.isUnset(request.notificationShrink)) {
      query["Notification"] = request.notificationShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "IndexFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<IndexFileMetaResponse>(await this.callApi(params, req, runtime), new IndexFileMetaResponse({}));
  }

  async indexFileMeta(request: IndexFileMetaRequest): Promise<IndexFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.indexFileMetaWithOptions(request, runtime);
  }

  async listBatchesWithOptions(request: ListBatchesRequest, runtime: $Util.RuntimeOptions): Promise<ListBatchesResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.tagSelector)) {
      query["TagSelector"] = request.tagSelector;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBatches",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListBatchesResponse>(await this.callApi(params, req, runtime), new ListBatchesResponse({}));
  }

  async listBatches(request: ListBatchesRequest): Promise<ListBatchesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBatchesWithOptions(request, runtime);
  }

  async listBindingsWithOptions(request: ListBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListBindingsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListBindings",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
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
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListDatasets",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListDatasetsResponse>(await this.callApi(params, req, runtime), new ListDatasetsResponse({}));
  }

  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.prefix)) {
      query["Prefix"] = request.prefix;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListProjects",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListProjectsResponse>(await this.callApi(params, req, runtime), new ListProjectsResponse({}));
  }

  async listProjects(request: ListProjectsRequest): Promise<ListProjectsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listProjectsWithOptions(request, runtime);
  }

  async listRegionsWithOptions(request: ListRegionsRequest, runtime: $Util.RuntimeOptions): Promise<ListRegionsResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.acceptLanguage)) {
      query["AcceptLanguage"] = request.acceptLanguage;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListRegions",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListRegionsResponse>(await this.callApi(params, req, runtime), new ListRegionsResponse({}));
  }

  async listRegions(request: ListRegionsRequest): Promise<ListRegionsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listRegionsWithOptions(request, runtime);
  }

  async listTasksWithOptions(tmpReq: ListTasksRequest, runtime: $Util.RuntimeOptions): Promise<ListTasksResponse> {
    Util.validateModel(tmpReq);
    let request = new ListTasksShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.endTimeRange)) {
      request.endTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.endTimeRange, "EndTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.startTimeRange)) {
      request.startTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.startTimeRange, "StartTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.taskTypes)) {
      request.taskTypesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.taskTypes, "TaskTypes", "json");
    }

    let query = { };
    if (!Util.isUnset(request.endTimeRangeShrink)) {
      query["EndTimeRange"] = request.endTimeRangeShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.requestDefinition)) {
      query["RequestDefinition"] = request.requestDefinition;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.startTimeRangeShrink)) {
      query["StartTimeRange"] = request.startTimeRangeShrink;
    }

    if (!Util.isUnset(request.status)) {
      query["Status"] = request.status;
    }

    if (!Util.isUnset(request.tagSelector)) {
      query["TagSelector"] = request.tagSelector;
    }

    if (!Util.isUnset(request.taskTypesShrink)) {
      query["TaskTypes"] = request.taskTypesShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTasks",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTasksResponse>(await this.callApi(params, req, runtime), new ListTasksResponse({}));
  }

  async listTasks(request: ListTasksRequest): Promise<ListTasksResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTasksWithOptions(request, runtime);
  }

  async listTriggersWithOptions(request: ListTriggersRequest, runtime: $Util.RuntimeOptions): Promise<ListTriggersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.state)) {
      query["State"] = request.state;
    }

    if (!Util.isUnset(request.tagSelector)) {
      query["TagSelector"] = request.tagSelector;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "ListTriggers",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ListTriggersResponse>(await this.callApi(params, req, runtime), new ListTriggersResponse({}));
  }

  async listTriggers(request: ListTriggersRequest): Promise<ListTriggersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listTriggersWithOptions(request, runtime);
  }

  async queryFigureClustersWithOptions(tmpReq: QueryFigureClustersRequest, runtime: $Util.RuntimeOptions): Promise<QueryFigureClustersResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryFigureClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createTimeRange)) {
      request.createTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimeRange, "CreateTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.updateTimeRange)) {
      request.updateTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateTimeRange, "UpdateTimeRange", "json");
    }

    let query = { };
    if (!Util.isUnset(request.createTimeRangeShrink)) {
      query["CreateTimeRange"] = request.createTimeRangeShrink;
    }

    if (!Util.isUnset(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.updateTimeRangeShrink)) {
      query["UpdateTimeRange"] = request.updateTimeRangeShrink;
    }

    if (!Util.isUnset(request.withTotalCount)) {
      query["WithTotalCount"] = request.withTotalCount;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryFigureClusters",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryFigureClustersResponse>(await this.callApi(params, req, runtime), new QueryFigureClustersResponse({}));
  }

  async queryFigureClusters(request: QueryFigureClustersRequest): Promise<QueryFigureClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryFigureClustersWithOptions(request, runtime);
  }

  async queryLocationDateClustersWithOptions(tmpReq: QueryLocationDateClustersRequest, runtime: $Util.RuntimeOptions): Promise<QueryLocationDateClustersResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryLocationDateClustersShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.address)) {
      request.addressShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.address, "Address", "json");
    }

    if (!Util.isUnset(tmpReq.createTimeRange)) {
      request.createTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimeRange, "CreateTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.locationDateClusterEndTimeRange)) {
      request.locationDateClusterEndTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDateClusterEndTimeRange, "LocationDateClusterEndTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.locationDateClusterLevels)) {
      request.locationDateClusterLevelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDateClusterLevels, "LocationDateClusterLevels", "json");
    }

    if (!Util.isUnset(tmpReq.locationDateClusterStartTimeRange)) {
      request.locationDateClusterStartTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.locationDateClusterStartTimeRange, "LocationDateClusterStartTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.updateTimeRange)) {
      request.updateTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.updateTimeRange, "UpdateTimeRange", "json");
    }

    let query = { };
    if (!Util.isUnset(request.addressShrink)) {
      query["Address"] = request.addressShrink;
    }

    if (!Util.isUnset(request.createTimeRangeShrink)) {
      query["CreateTimeRange"] = request.createTimeRangeShrink;
    }

    if (!Util.isUnset(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.locationDateClusterEndTimeRangeShrink)) {
      query["LocationDateClusterEndTimeRange"] = request.locationDateClusterEndTimeRangeShrink;
    }

    if (!Util.isUnset(request.locationDateClusterLevelsShrink)) {
      query["LocationDateClusterLevels"] = request.locationDateClusterLevelsShrink;
    }

    if (!Util.isUnset(request.locationDateClusterStartTimeRangeShrink)) {
      query["LocationDateClusterStartTimeRange"] = request.locationDateClusterStartTimeRangeShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    if (!Util.isUnset(request.updateTimeRangeShrink)) {
      query["UpdateTimeRange"] = request.updateTimeRangeShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryLocationDateClusters",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryLocationDateClustersResponse>(await this.callApi(params, req, runtime), new QueryLocationDateClustersResponse({}));
  }

  async queryLocationDateClusters(request: QueryLocationDateClustersRequest): Promise<QueryLocationDateClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryLocationDateClustersWithOptions(request, runtime);
  }

  async querySimilarImageClustersWithOptions(request: QuerySimilarImageClustersRequest, runtime: $Util.RuntimeOptions): Promise<QuerySimilarImageClustersResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QuerySimilarImageClusters",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QuerySimilarImageClustersResponse>(await this.callApi(params, req, runtime), new QuerySimilarImageClustersResponse({}));
  }

  async querySimilarImageClusters(request: QuerySimilarImageClustersRequest): Promise<QuerySimilarImageClustersResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.querySimilarImageClustersWithOptions(request, runtime);
  }

  async queryStoriesWithOptions(tmpReq: QueryStoriesRequest, runtime: $Util.RuntimeOptions): Promise<QueryStoriesResponse> {
    Util.validateModel(tmpReq);
    let request = new QueryStoriesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.createTimeRange)) {
      request.createTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.createTimeRange, "CreateTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.figureClusterIds)) {
      request.figureClusterIdsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.figureClusterIds, "FigureClusterIds", "json");
    }

    if (!Util.isUnset(tmpReq.storyEndTimeRange)) {
      request.storyEndTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storyEndTimeRange, "StoryEndTimeRange", "json");
    }

    if (!Util.isUnset(tmpReq.storyStartTimeRange)) {
      request.storyStartTimeRangeShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.storyStartTimeRange, "StoryStartTimeRange", "json");
    }

    let query = { };
    if (!Util.isUnset(request.createTimeRangeShrink)) {
      query["CreateTimeRange"] = request.createTimeRangeShrink;
    }

    if (!Util.isUnset(request.customLabels)) {
      query["CustomLabels"] = request.customLabels;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.figureClusterIdsShrink)) {
      query["FigureClusterIds"] = request.figureClusterIdsShrink;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.storyEndTimeRangeShrink)) {
      query["StoryEndTimeRange"] = request.storyEndTimeRangeShrink;
    }

    if (!Util.isUnset(request.storyName)) {
      query["StoryName"] = request.storyName;
    }

    if (!Util.isUnset(request.storyStartTimeRangeShrink)) {
      query["StoryStartTimeRange"] = request.storyStartTimeRangeShrink;
    }

    if (!Util.isUnset(request.storySubType)) {
      query["StorySubType"] = request.storySubType;
    }

    if (!Util.isUnset(request.storyType)) {
      query["StoryType"] = request.storyType;
    }

    if (!Util.isUnset(request.withEmptyStories)) {
      query["WithEmptyStories"] = request.withEmptyStories;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "QueryStories",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<QueryStoriesResponse>(await this.callApi(params, req, runtime), new QueryStoriesResponse({}));
  }

  async queryStories(request: QueryStoriesRequest): Promise<QueryStoriesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.queryStoriesWithOptions(request, runtime);
  }

  async refreshWebofficeTokenWithOptions(tmpReq: RefreshWebofficeTokenRequest, runtime: $Util.RuntimeOptions): Promise<RefreshWebofficeTokenResponse> {
    Util.validateModel(tmpReq);
    let request = new RefreshWebofficeTokenShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.accessToken)) {
      query["AccessToken"] = request.accessToken;
    }

    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.refreshToken)) {
      query["RefreshToken"] = request.refreshToken;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "RefreshWebofficeToken",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RefreshWebofficeTokenResponse>(await this.callApi(params, req, runtime), new RefreshWebofficeTokenResponse({}));
  }

  async refreshWebofficeToken(request: RefreshWebofficeTokenRequest): Promise<RefreshWebofficeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshWebofficeTokenWithOptions(request, runtime);
  }

  async removeStoryFilesWithOptions(tmpReq: RemoveStoryFilesRequest, runtime: $Util.RuntimeOptions): Promise<RemoveStoryFilesResponse> {
    Util.validateModel(tmpReq);
    let request = new RemoveStoryFilesShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.files)) {
      request.filesShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.files, "Files", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.filesShrink)) {
      body["Files"] = request.filesShrink;
    }

    if (!Util.isUnset(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "RemoveStoryFiles",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<RemoveStoryFilesResponse>(await this.callApi(params, req, runtime), new RemoveStoryFilesResponse({}));
  }

  async removeStoryFiles(request: RemoveStoryFilesRequest): Promise<RemoveStoryFilesResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.removeStoryFilesWithOptions(request, runtime);
  }

  async resumeBatchWithOptions(request: ResumeBatchRequest, runtime: $Util.RuntimeOptions): Promise<ResumeBatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumeBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeBatchResponse>(await this.callApi(params, req, runtime), new ResumeBatchResponse({}));
  }

  async resumeBatch(request: ResumeBatchRequest): Promise<ResumeBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeBatchWithOptions(request, runtime);
  }

  async resumeTriggerWithOptions(request: ResumeTriggerRequest, runtime: $Util.RuntimeOptions): Promise<ResumeTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "ResumeTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<ResumeTriggerResponse>(await this.callApi(params, req, runtime), new ResumeTriggerResponse({}));
  }

  async resumeTrigger(request: ResumeTriggerRequest): Promise<ResumeTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeTriggerWithOptions(request, runtime);
  }

  async searchImageFigureClusterWithOptions(tmpReq: SearchImageFigureClusterRequest, runtime: $Util.RuntimeOptions): Promise<SearchImageFigureClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new SearchImageFigureClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.credentialConfig)) {
      request.credentialConfigShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.credentialConfig, "CredentialConfig", "json");
    }

    let query = { };
    if (!Util.isUnset(request.credentialConfigShrink)) {
      query["CredentialConfig"] = request.credentialConfigShrink;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.sourceURI)) {
      query["SourceURI"] = request.sourceURI;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SearchImageFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SearchImageFigureClusterResponse>(await this.callApi(params, req, runtime), new SearchImageFigureClusterResponse({}));
  }

  async searchImageFigureCluster(request: SearchImageFigureClusterRequest): Promise<SearchImageFigureClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.searchImageFigureClusterWithOptions(request, runtime);
  }

  async semanticQueryWithOptions(request: SemanticQueryRequest, runtime: $Util.RuntimeOptions): Promise<SemanticQueryResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.query)) {
      query["Query"] = request.query;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SemanticQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SemanticQueryResponse>(await this.callApi(params, req, runtime), new SemanticQueryResponse({}));
  }

  async semanticQuery(request: SemanticQueryRequest): Promise<SemanticQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.semanticQueryWithOptions(request, runtime);
  }

  async simpleQueryWithOptions(tmpReq: SimpleQueryRequest, runtime: $Util.RuntimeOptions): Promise<SimpleQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new SimpleQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.aggregations)) {
      request.aggregationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregations, "Aggregations", "json");
    }

    if (!Util.isUnset(tmpReq.query)) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.query, "Query", "json");
    }

    if (!Util.isUnset(tmpReq.withFields)) {
      request.withFieldsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.withFields, "WithFields", "json");
    }

    let query = { };
    if (!Util.isUnset(request.aggregationsShrink)) {
      query["Aggregations"] = request.aggregationsShrink;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.maxResults)) {
      query["MaxResults"] = request.maxResults;
    }

    if (!Util.isUnset(request.nextToken)) {
      query["NextToken"] = request.nextToken;
    }

    if (!Util.isUnset(request.order)) {
      query["Order"] = request.order;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.queryShrink)) {
      query["Query"] = request.queryShrink;
    }

    if (!Util.isUnset(request.sort)) {
      query["Sort"] = request.sort;
    }

    if (!Util.isUnset(request.withFieldsShrink)) {
      query["WithFields"] = request.withFieldsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "SimpleQuery",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SimpleQueryResponse>(await this.callApi(params, req, runtime), new SimpleQueryResponse({}));
  }

  async simpleQuery(request: SimpleQueryRequest): Promise<SimpleQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.simpleQueryWithOptions(request, runtime);
  }

  async suspendBatchWithOptions(request: SuspendBatchRequest, runtime: $Util.RuntimeOptions): Promise<SuspendBatchResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SuspendBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendBatchResponse>(await this.callApi(params, req, runtime), new SuspendBatchResponse({}));
  }

  async suspendBatch(request: SuspendBatchRequest): Promise<SuspendBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendBatchWithOptions(request, runtime);
  }

  async suspendTriggerWithOptions(request: SuspendTriggerRequest, runtime: $Util.RuntimeOptions): Promise<SuspendTriggerResponse> {
    Util.validateModel(request);
    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "SuspendTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<SuspendTriggerResponse>(await this.callApi(params, req, runtime), new SuspendTriggerResponse({}));
  }

  async suspendTrigger(request: SuspendTriggerRequest): Promise<SuspendTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.suspendTriggerWithOptions(request, runtime);
  }

  async updateBatchWithOptions(tmpReq: UpdateBatchRequest, runtime: $Util.RuntimeOptions): Promise<UpdateBatchResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateBatchShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateBatch",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateBatchResponse>(await this.callApi(params, req, runtime), new UpdateBatchResponse({}));
  }

  async updateBatch(request: UpdateBatchRequest): Promise<UpdateBatchResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateBatchWithOptions(request, runtime);
  }

  async updateDatasetWithOptions(request: UpdateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!Util.isUnset(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!Util.isUnset(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!Util.isUnset(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!Util.isUnset(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateDataset",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateDatasetResponse>(await this.callApi(params, req, runtime), new UpdateDatasetResponse({}));
  }

  async updateDataset(request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  async updateFigureClusterWithOptions(tmpReq: UpdateFigureClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFigureClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateFigureClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.figureCluster)) {
      request.figureClusterShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.figureCluster, "FigureCluster", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.figureClusterShrink)) {
      query["FigureCluster"] = request.figureClusterShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFigureCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFigureClusterResponse>(await this.callApi(params, req, runtime), new UpdateFigureClusterResponse({}));
  }

  async updateFigureCluster(request: UpdateFigureClusterRequest): Promise<UpdateFigureClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFigureClusterWithOptions(request, runtime);
  }

  async updateFileMetaWithOptions(tmpReq: UpdateFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.file)) {
      request.fileShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.file, "File", "json");
    }

    let query = { };
    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.fileShrink)) {
      query["File"] = request.fileShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateFileMeta",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateFileMetaResponse>(await this.callApi(params, req, runtime), new UpdateFileMetaResponse({}));
  }

  async updateFileMeta(request: UpdateFileMetaRequest): Promise<UpdateFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileMetaWithOptions(request, runtime);
  }

  async updateLocationDateClusterWithOptions(tmpReq: UpdateLocationDateClusterRequest, runtime: $Util.RuntimeOptions): Promise<UpdateLocationDateClusterResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateLocationDateClusterShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    let query = { };
    if (!Util.isUnset(request.customId)) {
      query["CustomId"] = request.customId;
    }

    if (!Util.isUnset(request.customLabelsShrink)) {
      query["CustomLabels"] = request.customLabelsShrink;
    }

    if (!Util.isUnset(request.datasetName)) {
      query["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.objectId)) {
      query["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.title)) {
      query["Title"] = request.title;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateLocationDateCluster",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateLocationDateClusterResponse>(await this.callApi(params, req, runtime), new UpdateLocationDateClusterResponse({}));
  }

  async updateLocationDateCluster(request: UpdateLocationDateClusterRequest): Promise<UpdateLocationDateClusterResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateLocationDateClusterWithOptions(request, runtime);
  }

  async updateProjectWithOptions(request: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(request);
    let query = { };
    if (!Util.isUnset(request.datasetMaxBindCount)) {
      query["DatasetMaxBindCount"] = request.datasetMaxBindCount;
    }

    if (!Util.isUnset(request.datasetMaxEntityCount)) {
      query["DatasetMaxEntityCount"] = request.datasetMaxEntityCount;
    }

    if (!Util.isUnset(request.datasetMaxFileCount)) {
      query["DatasetMaxFileCount"] = request.datasetMaxFileCount;
    }

    if (!Util.isUnset(request.datasetMaxRelationCount)) {
      query["DatasetMaxRelationCount"] = request.datasetMaxRelationCount;
    }

    if (!Util.isUnset(request.datasetMaxTotalFileSize)) {
      query["DatasetMaxTotalFileSize"] = request.datasetMaxTotalFileSize;
    }

    if (!Util.isUnset(request.description)) {
      query["Description"] = request.description;
    }

    if (!Util.isUnset(request.projectMaxDatasetCount)) {
      query["ProjectMaxDatasetCount"] = request.projectMaxDatasetCount;
    }

    if (!Util.isUnset(request.projectName)) {
      query["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.serviceRole)) {
      query["ServiceRole"] = request.serviceRole;
    }

    if (!Util.isUnset(request.templateId)) {
      query["TemplateId"] = request.templateId;
    }

    let req = new $OpenApi.OpenApiRequest({
      query: OpenApiUtil.query(query),
    });
    let params = new $OpenApi.Params({
      action: "UpdateProject",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateProjectResponse>(await this.callApi(params, req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

  async updateStoryWithOptions(tmpReq: UpdateStoryRequest, runtime: $Util.RuntimeOptions): Promise<UpdateStoryResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateStoryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.cover)) {
      request.coverShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.cover, "Cover", "json");
    }

    if (!Util.isUnset(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.coverShrink)) {
      body["Cover"] = request.coverShrink;
    }

    if (!Util.isUnset(request.customId)) {
      body["CustomId"] = request.customId;
    }

    if (!Util.isUnset(request.customLabelsShrink)) {
      body["CustomLabels"] = request.customLabelsShrink;
    }

    if (!Util.isUnset(request.datasetName)) {
      body["DatasetName"] = request.datasetName;
    }

    if (!Util.isUnset(request.objectId)) {
      body["ObjectId"] = request.objectId;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.storyName)) {
      body["StoryName"] = request.storyName;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateStory",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateStoryResponse>(await this.callApi(params, req, runtime), new UpdateStoryResponse({}));
  }

  async updateStory(request: UpdateStoryRequest): Promise<UpdateStoryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateStoryWithOptions(request, runtime);
  }

  async updateTriggerWithOptions(tmpReq: UpdateTriggerRequest, runtime: $Util.RuntimeOptions): Promise<UpdateTriggerResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateTriggerShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.actions)) {
      request.actionsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.actions, "Actions", "json");
    }

    if (!Util.isUnset(tmpReq.input)) {
      request.inputShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.input, "Input", "json");
    }

    if (!Util.isUnset(tmpReq.tags)) {
      request.tagsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.tags, "Tags", "json");
    }

    let body : {[key: string ]: any} = { };
    if (!Util.isUnset(request.actionsShrink)) {
      body["Actions"] = request.actionsShrink;
    }

    if (!Util.isUnset(request.id)) {
      body["Id"] = request.id;
    }

    if (!Util.isUnset(request.inputShrink)) {
      body["Input"] = request.inputShrink;
    }

    if (!Util.isUnset(request.projectName)) {
      body["ProjectName"] = request.projectName;
    }

    if (!Util.isUnset(request.tagsShrink)) {
      body["Tags"] = request.tagsShrink;
    }

    let req = new $OpenApi.OpenApiRequest({
      body: OpenApiUtil.parseToMap(body),
    });
    let params = new $OpenApi.Params({
      action: "UpdateTrigger",
      version: "2020-09-30",
      protocol: "HTTPS",
      pathname: "/",
      method: "POST",
      authType: "AK",
      style: "RPC",
      reqBodyType: "formData",
      bodyType: "json",
    });
    return $tea.cast<UpdateTriggerResponse>(await this.callApi(params, req, runtime), new UpdateTriggerResponse({}));
  }

  async updateTrigger(request: UpdateTriggerRequest): Promise<UpdateTriggerResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateTriggerWithOptions(request, runtime);
  }

}
