// This file is auto-generated, don't edit it
/**
 *
 */
import Util, * as $Util from '@alicloud/tea-util';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import OpenApiUtil from '@alicloud/openapi-util';
import EndpointUtil from '@alicloud/endpoint-util';
import * as $tea from '@alicloud/tea-typescript';

export class CroppingSuggestion extends $tea.Model {
  aspectRatio?: string;
  confidence?: number;
  boundary?: Boundary;
  static names(): { [key: string]: string } {
    return {
      aspectRatio: 'AspectRatio',
      confidence: 'Confidence',
      boundary: 'Boundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aspectRatio: 'string',
      confidence: 'number',
      boundary: Boundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Address extends $tea.Model {
  language?: string;
  addressLine?: string;
  country?: string;
  province?: string;
  city?: string;
  district?: string;
  township?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      addressLine: 'AddressLine',
      country: 'Country',
      province: 'Province',
      city: 'City',
      district: 'District',
      township: 'Township',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      addressLine: 'string',
      country: 'string',
      province: 'string',
      city: 'string',
      district: 'string',
      township: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubtitleStream extends $tea.Model {
  index?: number;
  language?: string;
  content?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      language: 'Language',
      content: 'Content',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      language: 'string',
      content: 'string',
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

export class Label extends $tea.Model {
  language?: string;
  labelName?: string;
  labelLevel?: number;
  labelConfidence?: number;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      labelName: 'LabelName',
      labelLevel: 'LabelLevel',
      labelConfidence: 'LabelConfidence',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      labelName: 'string',
      labelLevel: 'number',
      labelConfidence: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VideoStream extends $tea.Model {
  index?: number;
  language?: string;
  codecName?: string;
  codecLongName?: string;
  profile?: string;
  codecTimeBase?: string;
  codecTagString?: string;
  codecTag?: string;
  width?: number;
  height?: number;
  hasBFrames?: string;
  sampleAspectRatio?: string;
  displayAspectRatio?: string;
  pixelFormat?: string;
  level?: number;
  frameRate?: number;
  averageFrameRate?: number;
  timeBase?: string;
  startTime?: number;
  duration?: number;
  bitrate?: number;
  frameCount?: number;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      language: 'Language',
      codecName: 'CodecName',
      codecLongName: 'CodecLongName',
      profile: 'Profile',
      codecTimeBase: 'CodecTimeBase',
      codecTagString: 'CodecTagString',
      codecTag: 'CodecTag',
      width: 'Width',
      height: 'Height',
      hasBFrames: 'HasBFrames',
      sampleAspectRatio: 'SampleAspectRatio',
      displayAspectRatio: 'DisplayAspectRatio',
      pixelFormat: 'PixelFormat',
      level: 'Level',
      frameRate: 'FrameRate',
      averageFrameRate: 'AverageFrameRate',
      timeBase: 'TimeBase',
      startTime: 'StartTime',
      duration: 'Duration',
      bitrate: 'Bitrate',
      frameCount: 'FrameCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      language: 'string',
      codecName: 'string',
      codecLongName: 'string',
      profile: 'string',
      codecTimeBase: 'string',
      codecTagString: 'string',
      codecTag: 'string',
      width: 'number',
      height: 'number',
      hasBFrames: 'string',
      sampleAspectRatio: 'string',
      displayAspectRatio: 'string',
      pixelFormat: 'string',
      level: 'number',
      frameRate: 'number',
      averageFrameRate: 'number',
      timeBase: 'string',
      startTime: 'number',
      duration: 'number',
      bitrate: 'number',
      frameCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Image extends $tea.Model {
  imageWidth?: number;
  imageHeight?: number;
  EXIF?: string;
  imageScore?: ImageScore;
  croppingSuggestions?: CroppingSuggestion[];
  OCRContents?: OCRContents[];
  static names(): { [key: string]: string } {
    return {
      imageWidth: 'ImageWidth',
      imageHeight: 'ImageHeight',
      EXIF: 'EXIF',
      imageScore: 'ImageScore',
      croppingSuggestions: 'CroppingSuggestions',
      OCRContents: 'OCRContents',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageWidth: 'number',
      imageHeight: 'number',
      EXIF: 'string',
      imageScore: ImageScore,
      croppingSuggestions: { 'type': 'array', 'itemType': CroppingSuggestion },
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Boundary extends $tea.Model {
  width?: number;
  height?: number;
  left?: number;
  top?: number;
  static names(): { [key: string]: string } {
    return {
      width: 'Width',
      height: 'Height',
      left: 'Left',
      top: 'Top',
    };
  }

  static types(): { [key: string]: any } {
    return {
      width: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AudioStream extends $tea.Model {
  index?: number;
  language?: string;
  codecName?: string;
  codecLongName?: string;
  codecTimeBase?: string;
  codecTagString?: string;
  codecTag?: string;
  sampleFormat?: string;
  sampleRate?: number;
  channels?: number;
  channelLayout?: string;
  timeBase?: string;
  startTime?: number;
  duration?: number;
  bitrate?: number;
  lyric?: string;
  static names(): { [key: string]: string } {
    return {
      index: 'Index',
      language: 'Language',
      codecName: 'CodecName',
      codecLongName: 'CodecLongName',
      codecTimeBase: 'CodecTimeBase',
      codecTagString: 'CodecTagString',
      codecTag: 'CodecTag',
      sampleFormat: 'SampleFormat',
      sampleRate: 'SampleRate',
      channels: 'Channels',
      channelLayout: 'ChannelLayout',
      timeBase: 'TimeBase',
      startTime: 'StartTime',
      duration: 'Duration',
      bitrate: 'Bitrate',
      lyric: 'Lyric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      index: 'number',
      language: 'string',
      codecName: 'string',
      codecLongName: 'string',
      codecTimeBase: 'string',
      codecTagString: 'string',
      codecTag: 'string',
      sampleFormat: 'string',
      sampleRate: 'number',
      channels: 'number',
      channelLayout: 'string',
      timeBase: 'string',
      startTime: 'number',
      duration: 'number',
      bitrate: 'number',
      lyric: 'string',
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

export class OCRContents extends $tea.Model {
  language?: string;
  contents?: string;
  confidence?: number;
  boundary?: Boundary;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      contents: 'Contents',
      confidence: 'Confidence',
      boundary: 'Boundary',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      contents: 'string',
      confidence: 'number',
      boundary: Boundary,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class Face extends $tea.Model {
  faceId?: string;
  faceConfidence?: number;
  age?: number;
  ageConfidence?: number;
  gender?: string;
  genderConfidence?: number;
  emotion?: string;
  emotionConfidence?: number;
  faceClusterId?: string;
  mouth?: string;
  mouthConfidence?: number;
  beard?: string;
  beardConfidence?: number;
  hat?: string;
  hatConfidence?: number;
  race?: string;
  raceConfidence?: number;
  mask?: string;
  maskConfidence?: number;
  glasses?: string;
  glassesConfidence?: number;
  leftEye?: string;
  leftEyeConfidence?: number;
  rightEye?: string;
  rightEyeConfidence?: number;
  headPose?: HeadPose;
  boundary?: Boundary;
  embeddingsFloat32?: number[];
  embeddingsInt8?: number[];
  static names(): { [key: string]: string } {
    return {
      faceId: 'FaceId',
      faceConfidence: 'FaceConfidence',
      age: 'Age',
      ageConfidence: 'AgeConfidence',
      gender: 'Gender',
      genderConfidence: 'GenderConfidence',
      emotion: 'Emotion',
      emotionConfidence: 'EmotionConfidence',
      faceClusterId: 'FaceClusterId',
      mouth: 'Mouth',
      mouthConfidence: 'MouthConfidence',
      beard: 'Beard',
      beardConfidence: 'BeardConfidence',
      hat: 'Hat',
      hatConfidence: 'HatConfidence',
      race: 'Race',
      raceConfidence: 'RaceConfidence',
      mask: 'Mask',
      maskConfidence: 'MaskConfidence',
      glasses: 'Glasses',
      glassesConfidence: 'GlassesConfidence',
      leftEye: 'LeftEye',
      leftEyeConfidence: 'LeftEyeConfidence',
      rightEye: 'RightEye',
      rightEyeConfidence: 'RightEyeConfidence',
      headPose: 'HeadPose',
      boundary: 'Boundary',
      embeddingsFloat32: 'EmbeddingsFloat32',
      embeddingsInt8: 'EmbeddingsInt8',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceId: 'string',
      faceConfidence: 'number',
      age: 'number',
      ageConfidence: 'number',
      gender: 'string',
      genderConfidence: 'number',
      emotion: 'string',
      emotionConfidence: 'number',
      faceClusterId: 'string',
      mouth: 'string',
      mouthConfidence: 'number',
      beard: 'string',
      beardConfidence: 'number',
      hat: 'string',
      hatConfidence: 'number',
      race: 'string',
      raceConfidence: 'number',
      mask: 'string',
      maskConfidence: 'number',
      glasses: 'string',
      glassesConfidence: 'number',
      leftEye: 'string',
      leftEyeConfidence: 'number',
      rightEye: 'string',
      rightEyeConfidence: 'number',
      headPose: HeadPose,
      boundary: Boundary,
      embeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      embeddingsInt8: { 'type': 'array', 'itemType': 'number' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class File extends $tea.Model {
  ownerId?: string;
  projectName?: string;
  datasetName?: string;
  objectType?: string;
  objectId?: string;
  updateTime?: string;
  createTime?: string;
  URI?: string;
  filename?: string;
  mediaType?: string;
  contentType?: string;
  size?: number;
  fileHash?: string;
  fileModifiedTime?: string;
  fileCreateTime?: string;
  fileAccessTime?: string;
  produceTime?: string;
  latLong?: string;
  timezone?: string;
  addresses?: Address[];
  travelClusterId?: string;
  orientation?: string;
  faces?: Face[];
  faceCount?: number;
  labels?: Label[];
  title?: string;
  imageWidth?: number;
  imageHeight?: number;
  EXIF?: string;
  imageScore?: ImageScore;
  croppingSuggestions?: CroppingSuggestion[];
  OCRContents?: OCRContents[];
  imageEmbeddingsFloat32?: number[];
  imageEmbeddingsInt8?: number[];
  videoWidth?: number;
  videoHeight?: number;
  videoTakenTime?: string;
  videoDuration?: number;
  videoBitrate?: number;
  videoStartTime?: number;
  videoStreams?: VideoStream[];
  subtitles?: SubtitleStream[];
  videoEmbeddingsFloat32?: number[];
  videoEmbeddingsInt8?: number[];
  audioTakenTime?: string;
  audioDuration?: number;
  audioBitrate?: number;
  audioStreams?: AudioStream[];
  artists?: string[];
  audioCovers?: Image[];
  composer?: string;
  performer?: string;
  audioLanguage?: string;
  album?: string;
  albumArtist?: string;
  audioEmbeddingsFloat32?: number[];
  audioEmbeddingsInt8?: number[];
  documentLanguage?: string;
  pageCount?: number;
  documentContent?: string;
  documentEmbeddingsFloat32?: number[];
  documentEmbeddingsInt8?: number[];
  ETag?: string;
  cacheControl?: string;
  contentDisposition?: string;
  contentEncoding?: string;
  contentLanguage?: string;
  accessControlAllowOrigin?: string;
  accessControlRequestMethod?: string;
  serverSideEncryptionCustomerAlgorithm?: string;
  serverSideEncryption?: string;
  serverSideDataEncryption?: string;
  serverSideEncryptionKeyId?: string;
  storageClass?: string;
  objectACL?: string;
  contentMd5?: string;
  OSSUserMeta?: { [key: string]: any };
  OSSTaggingCount?: number;
  OSSTagging?: { [key: string]: any };
  OSSExpiration?: string;
  OSSVersionId?: string;
  OSSDeleteMarker?: string;
  OSSObjectType?: string;
  customId?: string;
  customLabels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      objectType: 'ObjectType',
      objectId: 'ObjectId',
      updateTime: 'UpdateTime',
      createTime: 'CreateTime',
      URI: 'URI',
      filename: 'Filename',
      mediaType: 'MediaType',
      contentType: 'ContentType',
      size: 'Size',
      fileHash: 'FileHash',
      fileModifiedTime: 'FileModifiedTime',
      fileCreateTime: 'FileCreateTime',
      fileAccessTime: 'FileAccessTime',
      produceTime: 'ProduceTime',
      latLong: 'LatLong',
      timezone: 'Timezone',
      addresses: 'Addresses',
      travelClusterId: 'TravelClusterId',
      orientation: 'Orientation',
      faces: 'Faces',
      faceCount: 'FaceCount',
      labels: 'Labels',
      title: 'Title',
      imageWidth: 'ImageWidth',
      imageHeight: 'ImageHeight',
      EXIF: 'EXIF',
      imageScore: 'ImageScore',
      croppingSuggestions: 'CroppingSuggestions',
      OCRContents: 'OCRContents',
      imageEmbeddingsFloat32: 'ImageEmbeddingsFloat32',
      imageEmbeddingsInt8: 'ImageEmbeddingsInt8',
      videoWidth: 'VideoWidth',
      videoHeight: 'VideoHeight',
      videoTakenTime: 'VideoTakenTime',
      videoDuration: 'VideoDuration',
      videoBitrate: 'VideoBitrate',
      videoStartTime: 'VideoStartTime',
      videoStreams: 'VideoStreams',
      subtitles: 'Subtitles',
      videoEmbeddingsFloat32: 'VideoEmbeddingsFloat32',
      videoEmbeddingsInt8: 'VideoEmbeddingsInt8',
      audioTakenTime: 'AudioTakenTime',
      audioDuration: 'AudioDuration',
      audioBitrate: 'AudioBitrate',
      audioStreams: 'AudioStreams',
      artists: 'Artists',
      audioCovers: 'AudioCovers',
      composer: 'Composer',
      performer: 'Performer',
      audioLanguage: 'AudioLanguage',
      album: 'Album',
      albumArtist: 'AlbumArtist',
      audioEmbeddingsFloat32: 'AudioEmbeddingsFloat32',
      audioEmbeddingsInt8: 'AudioEmbeddingsInt8',
      documentLanguage: 'DocumentLanguage',
      pageCount: 'PageCount',
      documentContent: 'DocumentContent',
      documentEmbeddingsFloat32: 'DocumentEmbeddingsFloat32',
      documentEmbeddingsInt8: 'DocumentEmbeddingsInt8',
      ETag: 'ETag',
      cacheControl: 'CacheControl',
      contentDisposition: 'ContentDisposition',
      contentEncoding: 'ContentEncoding',
      contentLanguage: 'ContentLanguage',
      accessControlAllowOrigin: 'AccessControlAllowOrigin',
      accessControlRequestMethod: 'AccessControlRequestMethod',
      serverSideEncryptionCustomerAlgorithm: 'ServerSideEncryptionCustomerAlgorithm',
      serverSideEncryption: 'ServerSideEncryption',
      serverSideDataEncryption: 'ServerSideDataEncryption',
      serverSideEncryptionKeyId: 'ServerSideEncryptionKeyId',
      storageClass: 'StorageClass',
      objectACL: 'ObjectACL',
      contentMd5: 'ContentMd5',
      OSSUserMeta: 'OSSUserMeta',
      OSSTaggingCount: 'OSSTaggingCount',
      OSSTagging: 'OSSTagging',
      OSSExpiration: 'OSSExpiration',
      OSSVersionId: 'OSSVersionId',
      OSSDeleteMarker: 'OSSDeleteMarker',
      OSSObjectType: 'OSSObjectType',
      customId: 'CustomId',
      customLabels: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      projectName: 'string',
      datasetName: 'string',
      objectType: 'string',
      objectId: 'string',
      updateTime: 'string',
      createTime: 'string',
      URI: 'string',
      filename: 'string',
      mediaType: 'string',
      contentType: 'string',
      size: 'number',
      fileHash: 'string',
      fileModifiedTime: 'string',
      fileCreateTime: 'string',
      fileAccessTime: 'string',
      produceTime: 'string',
      latLong: 'string',
      timezone: 'string',
      addresses: { 'type': 'array', 'itemType': Address },
      travelClusterId: 'string',
      orientation: 'string',
      faces: { 'type': 'array', 'itemType': Face },
      faceCount: 'number',
      labels: { 'type': 'array', 'itemType': Label },
      title: 'string',
      imageWidth: 'number',
      imageHeight: 'number',
      EXIF: 'string',
      imageScore: ImageScore,
      croppingSuggestions: { 'type': 'array', 'itemType': CroppingSuggestion },
      OCRContents: { 'type': 'array', 'itemType': OCRContents },
      imageEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      imageEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      videoWidth: 'number',
      videoHeight: 'number',
      videoTakenTime: 'string',
      videoDuration: 'number',
      videoBitrate: 'number',
      videoStartTime: 'number',
      videoStreams: { 'type': 'array', 'itemType': VideoStream },
      subtitles: { 'type': 'array', 'itemType': SubtitleStream },
      videoEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      videoEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      audioTakenTime: 'string',
      audioDuration: 'number',
      audioBitrate: 'number',
      audioStreams: { 'type': 'array', 'itemType': AudioStream },
      artists: { 'type': 'array', 'itemType': 'string' },
      audioCovers: { 'type': 'array', 'itemType': Image },
      composer: 'string',
      performer: 'string',
      audioLanguage: 'string',
      album: 'string',
      albumArtist: 'string',
      audioEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      audioEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      documentLanguage: 'string',
      pageCount: 'number',
      documentContent: 'string',
      documentEmbeddingsFloat32: { 'type': 'array', 'itemType': 'number' },
      documentEmbeddingsInt8: { 'type': 'array', 'itemType': 'number' },
      ETag: 'string',
      cacheControl: 'string',
      contentDisposition: 'string',
      contentEncoding: 'string',
      contentLanguage: 'string',
      accessControlAllowOrigin: 'string',
      accessControlRequestMethod: 'string',
      serverSideEncryptionCustomerAlgorithm: 'string',
      serverSideEncryption: 'string',
      serverSideDataEncryption: 'string',
      serverSideEncryptionKeyId: 'string',
      storageClass: 'string',
      objectACL: 'string',
      contentMd5: 'string',
      OSSUserMeta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      OSSTaggingCount: 'number',
      OSSTagging: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      OSSExpiration: 'string',
      OSSVersionId: 'string',
      OSSDeleteMarker: 'string',
      OSSObjectType: 'string',
      customId: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebofficeUser extends $tea.Model {
  id?: string;
  name?: string;
  avatar?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      avatar: 'Avatar',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
      avatar: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleChain extends $tea.Model {
  policy?: string;
  chain?: AssumeRoleChainNode[];
  static names(): { [key: string]: string } {
    return {
      policy: 'Policy',
      chain: 'Chain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policy: 'string',
      chain: { 'type': 'array', 'itemType': AssumeRoleChainNode },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebofficeWatermark extends $tea.Model {
  type?: number;
  value?: string;
  rotate?: number;
  vertical?: number;
  horizontal?: number;
  font?: string;
  fillStyle?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
      rotate: 'Rotate',
      vertical: 'Vertical',
      horizontal: 'Horizontal',
      font: 'Font',
      fillStyle: 'FillStyle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'number',
      value: 'string',
      rotate: 'number',
      vertical: 'number',
      horizontal: 'number',
      font: 'string',
      fillStyle: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AssumeRoleChainNode extends $tea.Model {
  type?: string;
  ownerId?: string;
  role?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      ownerId: 'OwnerId',
      role: 'Role',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      ownerId: 'string',
      role: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class WebofficePermission extends $tea.Model {
  rename?: boolean;
  readonly?: boolean;
  history?: boolean;
  print?: boolean;
  export?: boolean;
  copy?: boolean;
  static names(): { [key: string]: string } {
    return {
      rename: 'Rename',
      readonly: 'Readonly',
      history: 'History',
      print: 'Print',
      export: 'Export',
      copy: 'Copy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rename: 'boolean',
      readonly: 'boolean',
      history: 'boolean',
      print: 'boolean',
      export: 'boolean',
      copy: 'boolean',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQuery extends $tea.Model {
  field?: string;
  value?: string;
  operation?: string;
  subQueries?: SimpleQuery[];
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      value: 'Value',
      operation: 'Operation',
      subQueries: 'SubQueries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      value: 'string',
      operation: 'string',
      subQueries: { 'type': 'array', 'itemType': SimpleQuery },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URIs?: string[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URIs: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URIs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchDeleteFileMetaShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URIsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URIsShrink: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
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
  projectName?: string;
  datasetName?: string;
  URIs?: string[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URIs: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URIs: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFileMetaShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URIsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URIsShrink: 'URIs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URIsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetFileMetaResponseBody extends $tea.Model {
  requestId?: string;
  files?: File[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      files: { 'type': 'array', 'itemType': File },
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
  projectName?: string;
  datasetName?: string;
  files?: BatchIndexFileMetaRequestFiles[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': BatchIndexFileMetaRequestFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  filesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      filesShrink: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      filesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchIndexFileMetaResponseBody extends $tea.Model {
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
  projectName?: string;
  datasetName?: string;
  files?: BatchUpdateFileMetaRequestFiles[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      files: { 'type': 'array', 'itemType': BatchUpdateFileMetaRequestFiles },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  filesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      filesShrink: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      filesShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaResponseBody extends $tea.Model {
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateBindingResponseBody extends $tea.Model {
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
  projectName?: string;
  datasetName?: string;
  description?: string;
  templateId?: string;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      description: 'Description',
      templateId: 'TemplateId',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      description: 'string',
      templateId: 'string',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDatasetResponseBody extends $tea.Model {
  requestId?: string;
  projectName?: string;
  datasetName?: string;
  createTime?: number;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      createTime: 'CreateTime',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectName: 'string',
      datasetName: 'string',
      createTime: 'number',
      description: 'string',
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

export class CreateProjectRequest extends $tea.Model {
  projectName?: string;
  description?: string;
  serviceRole?: string;
  templateId?: string;
  projectQPS?: number;
  projectTPS?: number;
  projectMaxDatasetCount?: number;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      description: 'Description',
      serviceRole: 'ServiceRole',
      templateId: 'TemplateId',
      projectQPS: 'ProjectQPS',
      projectTPS: 'ProjectTPS',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      description: 'string',
      serviceRole: 'string',
      templateId: 'string',
      projectQPS: 'number',
      projectTPS: 'number',
      projectMaxDatasetCount: 'number',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectResponseBody extends $tea.Model {
  projectName?: string;
  createTime?: number;
  requestId?: string;
  description?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      createTime: 'CreateTime',
      requestId: 'RequestId',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      createTime: 'number',
      requestId: 'string',
      description: 'string',
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
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
  projectName?: string;
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
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

export class FuzzyQueryRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  projectName?: string;
  datasetName?: string;
  query?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      query: 'Query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      projectName: 'string',
      datasetName: 'string',
      query: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FuzzyQueryResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  files?: File[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      files: { 'type': 'array', 'itemType': File },
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindingResponseBody extends $tea.Model {
  requestId?: string;
  binding?: GetBindingResponseBodyBinding;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      binding: 'Binding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      binding: GetBindingResponseBodyBinding,
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
  projectName?: string;
  datasetName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDatasetResponseBody extends $tea.Model {
  requestId?: string;
  projectName?: string;
  datasetName?: string;
  templateId?: string;
  createTime?: number;
  updateTime?: number;
  description?: string;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  bindCount?: number;
  fileCount?: number;
  totalFileSize?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      templateId: 'TemplateId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      description: 'Description',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      bindCount: 'BindCount',
      fileCount: 'FileCount',
      totalFileSize: 'TotalFileSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      projectName: 'string',
      datasetName: 'string',
      templateId: 'string',
      createTime: 'number',
      updateTime: 'number',
      description: 'string',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      bindCount: 'number',
      fileCount: 'number',
      totalFileSize: 'number',
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileMetaResponseBody extends $tea.Model {
  requestId?: string;
  files?: File[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      files: 'Files',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      files: { 'type': 'array', 'itemType': File },
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

export class GetProjectRequest extends $tea.Model {
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

export class GetProjectResponseBody extends $tea.Model {
  projectName?: string;
  description?: string;
  serviceRole?: string;
  templateId?: string;
  createTime?: number;
  updateTime?: number;
  projectQPS?: number;
  projectTPS?: number;
  projectMaxDatasetCount?: number;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  datasetCount?: number;
  fileCount?: number;
  totalFileSize?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      description: 'Description',
      serviceRole: 'ServiceRole',
      templateId: 'TemplateId',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      projectQPS: 'ProjectQPS',
      projectTPS: 'ProjectTPS',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetCount: 'DatasetCount',
      fileCount: 'FileCount',
      totalFileSize: 'TotalFileSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      description: 'string',
      serviceRole: 'string',
      templateId: 'string',
      createTime: 'number',
      updateTime: 'number',
      projectQPS: 'number',
      projectTPS: 'number',
      projectMaxDatasetCount: 'number',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetCount: 'number',
      fileCount: 'number',
      totalFileSize: 'number',
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

export class GetWebofficeUrlRequest extends $tea.Model {
  projectName?: string;
  sourceUri?: string;
  filename?: string;
  userData?: string;
  previewPages?: number;
  password?: string;
  externalUploaded?: boolean;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  hidecmb?: boolean;
  permission?: WebofficePermission;
  user?: WebofficeUser;
  watermark?: WebofficeWatermark;
  assumeRoleChain?: AssumeRoleChain;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      sourceUri: 'SourceUri',
      filename: 'Filename',
      userData: 'UserData',
      previewPages: 'PreviewPages',
      password: 'Password',
      externalUploaded: 'ExternalUploaded',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      hidecmb: 'Hidecmb',
      permission: 'Permission',
      user: 'User',
      watermark: 'Watermark',
      assumeRoleChain: 'AssumeRoleChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      sourceUri: 'string',
      filename: 'string',
      userData: 'string',
      previewPages: 'number',
      password: 'string',
      externalUploaded: 'boolean',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      hidecmb: 'boolean',
      permission: WebofficePermission,
      user: WebofficeUser,
      watermark: WebofficeWatermark,
      assumeRoleChain: AssumeRoleChain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeUrlShrinkRequest extends $tea.Model {
  projectName?: string;
  sourceUri?: string;
  filename?: string;
  userData?: string;
  previewPages?: number;
  password?: string;
  externalUploaded?: boolean;
  notifyEndpoint?: string;
  notifyTopicName?: string;
  hidecmb?: boolean;
  permissionShrink?: string;
  userShrink?: string;
  watermarkShrink?: string;
  assumeRoleChainShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      sourceUri: 'SourceUri',
      filename: 'Filename',
      userData: 'UserData',
      previewPages: 'PreviewPages',
      password: 'Password',
      externalUploaded: 'ExternalUploaded',
      notifyEndpoint: 'NotifyEndpoint',
      notifyTopicName: 'NotifyTopicName',
      hidecmb: 'Hidecmb',
      permissionShrink: 'Permission',
      userShrink: 'User',
      watermarkShrink: 'Watermark',
      assumeRoleChainShrink: 'AssumeRoleChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      sourceUri: 'string',
      filename: 'string',
      userData: 'string',
      previewPages: 'number',
      password: 'string',
      externalUploaded: 'boolean',
      notifyEndpoint: 'string',
      notifyTopicName: 'string',
      hidecmb: 'boolean',
      permissionShrink: 'string',
      userShrink: 'string',
      watermarkShrink: 'string',
      assumeRoleChainShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeUrlResponseBody extends $tea.Model {
  requestId?: string;
  webofficeUrl?: string;
  accessToken?: string;
  refreshToken?: string;
  accessTokenExpiredTime?: string;
  refreshTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webofficeUrl: 'WebofficeUrl',
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webofficeUrl: 'string',
      accessToken: 'string',
      refreshToken: 'string',
      accessTokenExpiredTime: 'string',
      refreshTokenExpiredTime: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWebofficeUrlResponse extends $tea.Model {
  headers: { [key: string]: string };
  body: GetWebofficeUrlResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      body: GetWebofficeUrlResponseBody,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URI?: string;
  customLabels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      customLabels: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URI?: string;
  customLabelsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      customLabelsShrink: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      customLabelsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IndexFileMetaResponseBody extends $tea.Model {
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
  projectName?: string;
  datasetName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBody extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  bindings?: ListBindingsResponseBodyBindings[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      bindings: 'Bindings',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      bindings: { 'type': 'array', 'itemType': ListBindingsResponseBodyBindings },
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
  projectName?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBody extends $tea.Model {
  requestId?: string;
  nextToken?: string;
  datasets?: ListDatasetsResponseBodyDatasets[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      nextToken: 'NextToken',
      datasets: 'Datasets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      nextToken: 'string',
      datasets: { 'type': 'array', 'itemType': ListDatasetsResponseBodyDatasets },
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

export class ListProjectsRequest extends $tea.Model {
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $tea.Model {
  nextToken?: string;
  projects?: ListProjectsResponseBodyProjects[];
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
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjects },
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
  projectName?: string;
  accessToken?: string;
  refreshToken?: string;
  assumeRoleChain?: AssumeRoleChain;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
      assumeRoleChain: 'AssumeRoleChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      accessToken: 'string',
      refreshToken: 'string',
      assumeRoleChain: AssumeRoleChain,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenShrinkRequest extends $tea.Model {
  projectName?: string;
  accessToken?: string;
  refreshToken?: string;
  assumeRoleChainShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      accessToken: 'AccessToken',
      refreshToken: 'RefreshToken',
      assumeRoleChainShrink: 'AssumeRoleChain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      accessToken: 'string',
      refreshToken: 'string',
      assumeRoleChainShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RefreshWebofficeTokenResponseBody extends $tea.Model {
  requestId?: string;
  refreshToken?: string;
  accessToken?: string;
  refreshTokenExpiredTime?: string;
  accessTokenExpiredTime?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      refreshToken: 'RefreshToken',
      accessToken: 'AccessToken',
      refreshTokenExpiredTime: 'RefreshTokenExpiredTime',
      accessTokenExpiredTime: 'AccessTokenExpiredTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      refreshToken: 'string',
      accessToken: 'string',
      refreshTokenExpiredTime: 'string',
      accessTokenExpiredTime: 'string',
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
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
  nextToken?: string;
  maxResults?: number;
  projectName?: string;
  datasetName?: string;
  query?: SimpleQuery;
  sort?: string;
  order?: string;
  aggregations?: SimpleQueryRequestAggregations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      query: 'Query',
      sort: 'Sort',
      order: 'Order',
      aggregations: 'Aggregations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      projectName: 'string',
      datasetName: 'string',
      query: SimpleQuery,
      sort: 'string',
      order: 'string',
      aggregations: { 'type': 'array', 'itemType': SimpleQueryRequestAggregations },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryShrinkRequest extends $tea.Model {
  nextToken?: string;
  maxResults?: number;
  projectName?: string;
  datasetName?: string;
  queryShrink?: string;
  sort?: string;
  order?: string;
  aggregationsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      maxResults: 'MaxResults',
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      queryShrink: 'Query',
      sort: 'Sort',
      order: 'Order',
      aggregationsShrink: 'Aggregations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      maxResults: 'number',
      projectName: 'string',
      datasetName: 'string',
      queryShrink: 'string',
      sort: 'string',
      order: 'string',
      aggregationsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SimpleQueryResponseBody extends $tea.Model {
  nextToken?: string;
  requestId?: string;
  files?: File[];
  aggregations?: SimpleQueryResponseBodyAggregations[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      files: 'Files',
      aggregations: 'Aggregations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      files: { 'type': 'array', 'itemType': File },
      aggregations: { 'type': 'array', 'itemType': SimpleQueryResponseBodyAggregations },
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      reason: 'string',
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
  projectName?: string;
  datasetName?: string;
  description?: string;
  templateId?: string;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  resetItems?: string[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      description: 'Description',
      templateId: 'TemplateId',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      resetItems: 'ResetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      description: 'string',
      templateId: 'string',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      resetItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  description?: string;
  templateId?: string;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  resetItemsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      description: 'Description',
      templateId: 'TemplateId',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      resetItemsShrink: 'ResetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      description: 'string',
      templateId: 'string',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      resetItemsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateDatasetResponseBody extends $tea.Model {
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
  projectName?: string;
  datasetName?: string;
  URI?: string;
  customLabels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      customLabels: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateFileMetaShrinkRequest extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URI?: string;
  customLabelsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      customLabelsShrink: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      customLabelsShrink: 'string',
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
  projectName?: string;
  serviceRole?: string;
  description?: string;
  templateId?: string;
  projectQPS?: number;
  projectTPS?: number;
  projectMaxDatasetCount?: number;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  resetItems?: string[];
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      description: 'Description',
      templateId: 'TemplateId',
      projectQPS: 'ProjectQPS',
      projectTPS: 'ProjectTPS',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      resetItems: 'ResetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      serviceRole: 'string',
      description: 'string',
      templateId: 'string',
      projectQPS: 'number',
      projectTPS: 'number',
      projectMaxDatasetCount: 'number',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      resetItems: { 'type': 'array', 'itemType': 'string' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectShrinkRequest extends $tea.Model {
  projectName?: string;
  serviceRole?: string;
  description?: string;
  templateId?: string;
  projectQPS?: number;
  projectTPS?: number;
  projectMaxDatasetCount?: number;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  resetItemsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      description: 'Description',
      templateId: 'TemplateId',
      projectQPS: 'ProjectQPS',
      projectTPS: 'ProjectTPS',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      resetItemsShrink: 'ResetItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      serviceRole: 'string',
      description: 'string',
      templateId: 'string',
      projectQPS: 'number',
      projectTPS: 'number',
      projectMaxDatasetCount: 'number',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      resetItemsShrink: 'string',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProjectResponseBody extends $tea.Model {
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

export class BatchIndexFileMetaRequestFiles extends $tea.Model {
  URI?: string;
  customLabels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
      customLabels: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchUpdateFileMetaRequestFiles extends $tea.Model {
  URI?: string;
  customLabels?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      URI: 'URI',
      customLabels: 'CustomLabels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URI: 'string',
      customLabels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBindingResponseBodyBinding extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URI?: string;
  state?: string;
  phase?: string;
  reason?: string;
  createTime?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      state: 'State',
      phase: 'Phase',
      reason: 'Reason',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      state: 'string',
      phase: 'string',
      reason: 'string',
      createTime: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBodyBindingsBinding extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  URI?: string;
  state?: string;
  phase?: string;
  reason?: string;
  createTime?: number;
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      URI: 'URI',
      state: 'State',
      phase: 'Phase',
      reason: 'Reason',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      URI: 'string',
      state: 'string',
      phase: 'string',
      reason: 'string',
      createTime: 'number',
      updateTime: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBindingsResponseBodyBindings extends $tea.Model {
  binding?: ListBindingsResponseBodyBindingsBinding;
  static names(): { [key: string]: string } {
    return {
      binding: 'Binding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      binding: ListBindingsResponseBodyBindingsBinding,
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetsResponseBodyDatasets extends $tea.Model {
  projectName?: string;
  datasetName?: string;
  workflow?: string;
  createTime?: number;
  updateTime?: number;
  description?: string;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  bindCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      datasetName: 'DatasetName',
      workflow: 'Workflow',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      description: 'Description',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      bindCount: 'BindCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      datasetName: 'string',
      workflow: 'string',
      createTime: 'number',
      updateTime: 'number',
      description: 'string',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      bindCount: 'number',
    };
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyProjects extends $tea.Model {
  projectName?: string;
  serviceRole?: string;
  workflow?: string;
  description?: string;
  createTime?: number;
  updateTime?: number;
  projectQPS?: number;
  projectTPS?: number;
  projectMaxDatasetCount?: number;
  datasetMaxOSSBindCount?: number;
  datasetMaxFileCount?: number;
  datasetMaxEntityCount?: number;
  datasetMaxRelationCount?: number;
  datasetMaxTotalFileSize?: number;
  datasetCount?: number;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
      serviceRole: 'ServiceRole',
      workflow: 'Workflow',
      description: 'Description',
      createTime: 'CreateTime',
      updateTime: 'UpdateTime',
      projectQPS: 'ProjectQPS',
      projectTPS: 'ProjectTPS',
      projectMaxDatasetCount: 'ProjectMaxDatasetCount',
      datasetMaxOSSBindCount: 'DatasetMaxOSSBindCount',
      datasetMaxFileCount: 'DatasetMaxFileCount',
      datasetMaxEntityCount: 'DatasetMaxEntityCount',
      datasetMaxRelationCount: 'DatasetMaxRelationCount',
      datasetMaxTotalFileSize: 'DatasetMaxTotalFileSize',
      datasetCount: 'DatasetCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
      serviceRole: 'string',
      workflow: 'string',
      description: 'string',
      createTime: 'number',
      updateTime: 'number',
      projectQPS: 'number',
      projectTPS: 'number',
      projectMaxDatasetCount: 'number',
      datasetMaxOSSBindCount: 'number',
      datasetMaxFileCount: 'number',
      datasetMaxEntityCount: 'number',
      datasetMaxRelationCount: 'number',
      datasetMaxTotalFileSize: 'number',
      datasetCount: 'number',
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchDeleteFileMetaResponse>(await this.doRPCRequest("BatchDeleteFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new BatchDeleteFileMetaResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchGetFileMetaResponse>(await this.doRPCRequest("BatchGetFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new BatchGetFileMetaResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchIndexFileMetaResponse>(await this.doRPCRequest("BatchIndexFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new BatchIndexFileMetaResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<BatchUpdateFileMetaResponse>(await this.doRPCRequest("BatchUpdateFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new BatchUpdateFileMetaResponse({}));
  }

  async batchUpdateFileMeta(request: BatchUpdateFileMetaRequest): Promise<BatchUpdateFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.batchUpdateFileMetaWithOptions(request, runtime);
  }

  async createBindingWithOptions(request: CreateBindingRequest, runtime: $Util.RuntimeOptions): Promise<CreateBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateBindingResponse>(await this.doRPCRequest("CreateBinding", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateBindingResponse({}));
  }

  async createBinding(request: CreateBindingRequest): Promise<CreateBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createBindingWithOptions(request, runtime);
  }

  async createDatasetWithOptions(request: CreateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<CreateDatasetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateDatasetResponse>(await this.doRPCRequest("CreateDataset", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateDatasetResponse({}));
  }

  async createDataset(request: CreateDatasetRequest): Promise<CreateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createDatasetWithOptions(request, runtime);
  }

  async createProjectWithOptions(request: CreateProjectRequest, runtime: $Util.RuntimeOptions): Promise<CreateProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<CreateProjectResponse>(await this.doRPCRequest("CreateProject", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new CreateProjectResponse({}));
  }

  async createProject(request: CreateProjectRequest): Promise<CreateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.createProjectWithOptions(request, runtime);
  }

  async deleteBindingWithOptions(request: DeleteBindingRequest, runtime: $Util.RuntimeOptions): Promise<DeleteBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteBindingResponse>(await this.doRPCRequest("DeleteBinding", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteBindingResponse({}));
  }

  async deleteBinding(request: DeleteBindingRequest): Promise<DeleteBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteBindingWithOptions(request, runtime);
  }

  async deleteDatasetWithOptions(request: DeleteDatasetRequest, runtime: $Util.RuntimeOptions): Promise<DeleteDatasetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteDatasetResponse>(await this.doRPCRequest("DeleteDataset", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteDatasetResponse({}));
  }

  async deleteDataset(request: DeleteDatasetRequest): Promise<DeleteDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteDatasetWithOptions(request, runtime);
  }

  async deleteFileMetaWithOptions(request: DeleteFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<DeleteFileMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteFileMetaResponse>(await this.doRPCRequest("DeleteFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteFileMetaResponse({}));
  }

  async deleteFileMeta(request: DeleteFileMetaRequest): Promise<DeleteFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteFileMetaWithOptions(request, runtime);
  }

  async deleteProjectWithOptions(request: DeleteProjectRequest, runtime: $Util.RuntimeOptions): Promise<DeleteProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<DeleteProjectResponse>(await this.doRPCRequest("DeleteProject", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new DeleteProjectResponse({}));
  }

  async deleteProject(request: DeleteProjectRequest): Promise<DeleteProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.deleteProjectWithOptions(request, runtime);
  }

  async fuzzyQueryWithOptions(request: FuzzyQueryRequest, runtime: $Util.RuntimeOptions): Promise<FuzzyQueryResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<FuzzyQueryResponse>(await this.doRPCRequest("FuzzyQuery", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new FuzzyQueryResponse({}));
  }

  async fuzzyQuery(request: FuzzyQueryRequest): Promise<FuzzyQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.fuzzyQueryWithOptions(request, runtime);
  }

  async getBindingWithOptions(request: GetBindingRequest, runtime: $Util.RuntimeOptions): Promise<GetBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetBindingResponse>(await this.doRPCRequest("GetBinding", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetBindingResponse({}));
  }

  async getBinding(request: GetBindingRequest): Promise<GetBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getBindingWithOptions(request, runtime);
  }

  async getDatasetWithOptions(request: GetDatasetRequest, runtime: $Util.RuntimeOptions): Promise<GetDatasetResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetDatasetResponse>(await this.doRPCRequest("GetDataset", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetDatasetResponse({}));
  }

  async getDataset(request: GetDatasetRequest): Promise<GetDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getDatasetWithOptions(request, runtime);
  }

  async getFileMetaWithOptions(request: GetFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<GetFileMetaResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFileMetaResponse>(await this.doRPCRequest("GetFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetFileMetaResponse({}));
  }

  async getFileMeta(request: GetFileMetaRequest): Promise<GetFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileMetaWithOptions(request, runtime);
  }

  async getFileSignedURIWithOptions(request: GetFileSignedURIRequest, runtime: $Util.RuntimeOptions): Promise<GetFileSignedURIResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetFileSignedURIResponse>(await this.doRPCRequest("GetFileSignedURI", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetFileSignedURIResponse({}));
  }

  async getFileSignedURI(request: GetFileSignedURIRequest): Promise<GetFileSignedURIResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getFileSignedURIWithOptions(request, runtime);
  }

  async getProjectWithOptions(request: GetProjectRequest, runtime: $Util.RuntimeOptions): Promise<GetProjectResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetProjectResponse>(await this.doRPCRequest("GetProject", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetProjectResponse({}));
  }

  async getProject(request: GetProjectRequest): Promise<GetProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getProjectWithOptions(request, runtime);
  }

  async getWebofficeUrlWithOptions(tmpReq: GetWebofficeUrlRequest, runtime: $Util.RuntimeOptions): Promise<GetWebofficeUrlResponse> {
    Util.validateModel(tmpReq);
    let request = new GetWebofficeUrlShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.permission))) {
      request.permissionShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.permission), "Permission", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.user))) {
      request.userShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.user), "User", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.watermark))) {
      request.watermarkShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.watermark), "Watermark", "json");
    }

    if (!Util.isUnset($tea.toMap(tmpReq.assumeRoleChain))) {
      request.assumeRoleChainShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.assumeRoleChain), "AssumeRoleChain", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<GetWebofficeUrlResponse>(await this.doRPCRequest("GetWebofficeUrl", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new GetWebofficeUrlResponse({}));
  }

  async getWebofficeUrl(request: GetWebofficeUrlRequest): Promise<GetWebofficeUrlResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.getWebofficeUrlWithOptions(request, runtime);
  }

  async indexFileMetaWithOptions(tmpReq: IndexFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<IndexFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new IndexFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<IndexFileMetaResponse>(await this.doRPCRequest("IndexFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new IndexFileMetaResponse({}));
  }

  async indexFileMeta(request: IndexFileMetaRequest): Promise<IndexFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.indexFileMetaWithOptions(request, runtime);
  }

  async listBindingsWithOptions(request: ListBindingsRequest, runtime: $Util.RuntimeOptions): Promise<ListBindingsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListBindingsResponse>(await this.doRPCRequest("ListBindings", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListBindingsResponse({}));
  }

  async listBindings(request: ListBindingsRequest): Promise<ListBindingsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listBindingsWithOptions(request, runtime);
  }

  async listDatasetsWithOptions(request: ListDatasetsRequest, runtime: $Util.RuntimeOptions): Promise<ListDatasetsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListDatasetsResponse>(await this.doRPCRequest("ListDatasets", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListDatasetsResponse({}));
  }

  async listDatasets(request: ListDatasetsRequest): Promise<ListDatasetsResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.listDatasetsWithOptions(request, runtime);
  }

  async listProjectsWithOptions(request: ListProjectsRequest, runtime: $Util.RuntimeOptions): Promise<ListProjectsResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ListProjectsResponse>(await this.doRPCRequest("ListProjects", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ListProjectsResponse({}));
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

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<RefreshWebofficeTokenResponse>(await this.doRPCRequest("RefreshWebofficeToken", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new RefreshWebofficeTokenResponse({}));
  }

  async refreshWebofficeToken(request: RefreshWebofficeTokenRequest): Promise<RefreshWebofficeTokenResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.refreshWebofficeTokenWithOptions(request, runtime);
  }

  async resumeBindingWithOptions(request: ResumeBindingRequest, runtime: $Util.RuntimeOptions): Promise<ResumeBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<ResumeBindingResponse>(await this.doRPCRequest("ResumeBinding", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new ResumeBindingResponse({}));
  }

  async resumeBinding(request: ResumeBindingRequest): Promise<ResumeBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.resumeBindingWithOptions(request, runtime);
  }

  async simpleQueryWithOptions(tmpReq: SimpleQueryRequest, runtime: $Util.RuntimeOptions): Promise<SimpleQueryResponse> {
    Util.validateModel(tmpReq);
    let request = new SimpleQueryShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset($tea.toMap(tmpReq.query))) {
      request.queryShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle($tea.toMap(tmpReq.query), "Query", "json");
    }

    if (!Util.isUnset(tmpReq.aggregations)) {
      request.aggregationsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.aggregations, "Aggregations", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<SimpleQueryResponse>(await this.doRPCRequest("SimpleQuery", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new SimpleQueryResponse({}));
  }

  async simpleQuery(request: SimpleQueryRequest): Promise<SimpleQueryResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.simpleQueryWithOptions(request, runtime);
  }

  async stopBindingWithOptions(request: StopBindingRequest, runtime: $Util.RuntimeOptions): Promise<StopBindingResponse> {
    Util.validateModel(request);
    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<StopBindingResponse>(await this.doRPCRequest("StopBinding", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new StopBindingResponse({}));
  }

  async stopBinding(request: StopBindingRequest): Promise<StopBindingResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.stopBindingWithOptions(request, runtime);
  }

  async updateDatasetWithOptions(tmpReq: UpdateDatasetRequest, runtime: $Util.RuntimeOptions): Promise<UpdateDatasetResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateDatasetShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resetItems)) {
      request.resetItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resetItems, "ResetItems", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateDatasetResponse>(await this.doRPCRequest("UpdateDataset", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateDatasetResponse({}));
  }

  async updateDataset(request: UpdateDatasetRequest): Promise<UpdateDatasetResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateDatasetWithOptions(request, runtime);
  }

  async updateFileMetaWithOptions(tmpReq: UpdateFileMetaRequest, runtime: $Util.RuntimeOptions): Promise<UpdateFileMetaResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateFileMetaShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.customLabels)) {
      request.customLabelsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.customLabels, "CustomLabels", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateFileMetaResponse>(await this.doRPCRequest("UpdateFileMeta", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateFileMetaResponse({}));
  }

  async updateFileMeta(request: UpdateFileMetaRequest): Promise<UpdateFileMetaResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateFileMetaWithOptions(request, runtime);
  }

  async updateProjectWithOptions(tmpReq: UpdateProjectRequest, runtime: $Util.RuntimeOptions): Promise<UpdateProjectResponse> {
    Util.validateModel(tmpReq);
    let request = new UpdateProjectShrinkRequest({ });
    OpenApiUtil.convert(tmpReq, request);
    if (!Util.isUnset(tmpReq.resetItems)) {
      request.resetItemsShrink = OpenApiUtil.arrayToStringWithSpecifiedStyle(tmpReq.resetItems, "ResetItems", "json");
    }

    let req = new $OpenApi.OpenApiRequest({
      body: Util.toMap(request),
    });
    return $tea.cast<UpdateProjectResponse>(await this.doRPCRequest("UpdateProject", "2020-09-30", "HTTPS", "POST", "AK", "json", req, runtime), new UpdateProjectResponse({}));
  }

  async updateProject(request: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    let runtime = new $Util.RuntimeOptions({ });
    return await this.updateProjectWithOptions(request, runtime);
  }

}
