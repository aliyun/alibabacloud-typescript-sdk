// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks extends $dara.Model {
  /**
   * @remarks
   * The coordinates of the bounding box.
   * 
   * @example
   * 468.0;67.0;615.0;267.0
   */
  position?: string;
  /**
   * @remarks
   * The size of the bounding box.
   * 
   * @example
   * 50.2
   */
  size?: number;
  /**
   * @remarks
   * The timestamp of the track.
   * 
   * @example
   * 1.4
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      position: 'Position',
      size: 'Size',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      position: 'string',
      size: 'number',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences extends $dara.Model {
  /**
   * @remarks
   * The text content.
   */
  content?: string;
  /**
   * @remarks
   * The fine-grained ID of the entity.
   * 
   * @example
   * 10310250338
   */
  finegrainId?: string;
  /**
   * @remarks
   * The fine-grained name of the entity.
   */
  finegrainName?: string;
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 1.4
   */
  from?: number;
  /**
   * @remarks
   * The optimal face image encoded in Base64.
   * 
   * @example
   * 99C64F6287
   */
  image?: string;
  /**
   * @remarks
   * The score.
   * 
   * @example
   * 0.75287705
   */
  score?: number;
  /**
   * @remarks
   * The sequence ID of the vector table.
   * 
   * @example
   * 85010D1
   */
  tableBatchSeqId?: string;
  /**
   * @remarks
   * The end time of the clip.
   * 
   * @example
   * 2.5
   */
  to?: number;
  /**
   * @remarks
   * The track sequence.
   */
  tracks?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks[];
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  clipId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      finegrainId: 'FinegrainId',
      finegrainName: 'FinegrainName',
      from: 'From',
      image: 'Image',
      score: 'Score',
      tableBatchSeqId: 'TableBatchSeqId',
      to: 'To',
      tracks: 'Tracks',
      clipId: 'clipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      finegrainId: 'string',
      finegrainName: 'string',
      from: 'number',
      image: 'string',
      score: 'number',
      tableBatchSeqId: 'string',
      to: 'number',
      tracks: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks },
      clipId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tracks)) {
      $dara.Model.validateArray(this.tracks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo extends $dara.Model {
  /**
   * @remarks
   * The category.
   */
  category?: string;
  /**
   * @remarks
   * The face ID.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  faceId?: string;
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * 10310250338
   */
  labelId?: string;
  /**
   * @remarks
   * The name of the entity.
   */
  labelName?: string;
  /**
   * @remarks
   * The type of the tag.
   */
  labelType?: string;
  /**
   * @remarks
   * The clips.
   */
  occurrences?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences[];
  /**
   * @remarks
   * The source.
   * 
   * @example
   * vision
   */
  source?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      faceId: 'FaceId',
      labelId: 'LabelId',
      labelName: 'LabelName',
      labelType: 'LabelType',
      occurrences: 'Occurrences',
      source: 'Source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      faceId: 'string',
      labelId: 'string',
      labelName: 'string',
      labelType: 'string',
      occurrences: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences },
      source: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.occurrences)) {
      $dara.Model.validateArray(this.occurrences);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataAsrInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  clipId?: string;
  /**
   * @remarks
   * The text content.
   */
  content?: string;
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 1.4
   */
  from?: number;
  /**
   * @remarks
   * The timestamp of the clip.
   * 
   * @example
   * 1.4
   */
  timestamp?: number;
  /**
   * @remarks
   * The end time of the clip.
   * 
   * @example
   * 2.5
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      from: 'From',
      timestamp: 'Timestamp',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      from: 'number',
      timestamp: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiDataOcrInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB2B9F
   */
  clipId?: string;
  /**
   * @remarks
   * The text content.
   */
  content?: string;
  /**
   * @remarks
   * The start time of the clip.
   * 
   * @example
   * 1.4
   */
  from?: number;
  /**
   * @remarks
   * The timestamp of the clip.
   * 
   * @example
   * 1.4
   */
  timestamp?: number;
  /**
   * @remarks
   * The end time of the clip.
   * 
   * @example
   * 2.5
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      from: 'From',
      timestamp: 'Timestamp',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      from: 'number',
      timestamp: 'number',
      to: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiData extends $dara.Model {
  /**
   * @remarks
   * The tags of the intelligent AI job.
   */
  aiLabelInfo?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo[];
  /**
   * @remarks
   * The information about audio files.
   */
  asrInfo?: SearchMediaResponseBodyMediaInfoListAiDataAsrInfo[];
  /**
   * @remarks
   * The subtitles.
   */
  ocrInfo?: SearchMediaResponseBodyMediaInfoListAiDataOcrInfo[];
  static names(): { [key: string]: string } {
    return {
      aiLabelInfo: 'AiLabelInfo',
      asrInfo: 'AsrInfo',
      ocrInfo: 'OcrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiLabelInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo },
      asrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataAsrInfo },
      ocrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListAiDataOcrInfo },
    };
  }

  validate() {
    if(Array.isArray(this.aiLabelInfo)) {
      $dara.Model.validateArray(this.aiLabelInfo);
    }
    if(Array.isArray(this.asrInfo)) {
      $dara.Model.validateArray(this.asrInfo);
    }
    if(Array.isArray(this.ocrInfo)) {
      $dara.Model.validateArray(this.ocrInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListAiRoughData extends $dara.Model {
  /**
   * @remarks
   * TV Series
   * 
   * @example
   * TV series
   */
  aiCategory?: string;
  /**
   * @remarks
   * The ID of the AI job.
   * 
   * @example
   * cd35b0b0025f71edbfcb472190a9xxxx
   */
  aiJobId?: string;
  /**
   * @remarks
   * The results of the AI job.
   * 
   * @example
   * http://xxxx.json
   */
  result?: string;
  /**
   * @remarks
   * The save type.
   * 
   * @example
   * TEXT
   */
  saveType?: string;
  /**
   * @remarks
   * The data status.
   * 
   * @example
   * SaveSuccess
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      aiCategory: 'AiCategory',
      aiJobId: 'AiJobId',
      result: 'Result',
      saveType: 'SaveType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCategory: 'string',
      aiJobId: 'string',
      result: 'string',
      saveType: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The bitrate of the file.
   * 
   * @example
   * 1912.13
   */
  bitrate?: string;
  /**
   * @remarks
   * The time when the file was created.
   * 
   * @example
   * 2022-05-30T02:02:17Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration of the file.
   * 
   * @example
   * 60.00000
   */
  duration?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * 164265080291300080527050.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file in bytes.
   * 
   * @example
   * 324784
   */
  fileSize?: string;
  /**
   * @remarks
   * The status of the file.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The type of the file.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) URL of the file.
   * 
   * @example
   * https://outin-d3f4681ddfd911ec99a600163e1403e7.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-18180984899.mp4
   */
  fileUrl?: string;
  /**
   * @remarks
   * The encapsulation format of the file.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the file.
   * 
   * @example
   * 480
   */
  height?: string;
  imagesInput?: string;
  /**
   * @remarks
   * The time when the file was last modified.
   * 
   * @example
   * 2021-12-10T12:19Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The region in which the file is stored.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The width of the file.
   * 
   * @example
   * 1920
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      createTime: 'CreateTime',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      imagesInput: 'ImagesInput',
      modifiedTime: 'ModifiedTime',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      createTime: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
      imagesInput: 'string',
      modifiedTime: 'string',
      region: 'string',
      width: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The basic information about the file, such as the duration and size.
   */
  fileBasicInfo?: SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo,
    };
  }

  validate() {
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListIndexStatusList extends $dara.Model {
  /**
   * @example
   * Success
   */
  indexStatus?: string;
  /**
   * @example
   * mm
   */
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexStatus: 'string',
      indexType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListMediaBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The business to which the media asset belongs.
   * 
   * @example
   * IMS
   */
  biz?: string;
  /**
   * @remarks
   * The business type of the media asset.
   * 
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 44
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   */
  cateName?: string;
  /**
   * @remarks
   * The category of the media asset.
   * 
   * @example
   * image
   */
  category?: string;
  /**
   * @remarks
   * The thumbnail URL of the media asset.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/e694372e-4f5b-4821-ae09-efd064f27b63_large_cover_url.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2020-12-01T19:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the media asset was deleted.
   * 
   * @example
   * 2020-12-01T19:48Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   */
  description?: string;
  /**
   * @remarks
   * The address of the media asset that is waiting to be registered.
   * 
   * @example
   * oss://clipres/longvideo/material/voice/prod/20220418/07d7c799f6054dc3bbef250854cf84981650248140427
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 132bd600fc3c71ec99476732a78f6402
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags of the media asset.
   * 
   * @example
   * tags,tags2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The type of the media asset.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * The time when the media asset was modified.
   * 
   * @example
   * 2020-12-01T19:48Z
   */
  modifiedTime?: string;
  namespace?: string;
  /**
   * @remarks
   * The custom ID of the media asset. The ID is a string that contains 6 to 64 characters. Only letters, digits, hyphens (-), and underscores (_) are supported. Each custom ID is unique.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The snapshots of the media asset.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"3","iceJobId":"******f48f0e4154976b2b8c45******","location":"oss-cn-beijing","snapshotRegular":"example.jpg","templateId":"******e6a6440b29eb60bd7c******"}]
   */
  snapshots?: string;
  /**
   * @remarks
   * The source of the media asset.
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The image sprite of the media asset
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The state of the media asset.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title of the media asset.
   */
  title?: string;
  /**
   * @remarks
   * The transcoding status of the media asset.
   * 
   * @example
   * Init
   */
  transcodeStatus?: string;
  /**
   * @remarks
   * The upload source of the media asset.
   * 
   * @example
   * general
   */
  uploadSource?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * userData
   */
  userData?: string;
  visionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      businessType: 'BusinessType',
      cateId: 'CateId',
      cateName: 'CateName',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      inputURL: 'InputURL',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      namespace: 'Namespace',
      referenceId: 'ReferenceId',
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      uploadSource: 'UploadSource',
      userData: 'UserData',
      visionDescription: 'VisionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
      cateId: 'number',
      cateName: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      inputURL: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      namespace: 'string',
      referenceId: 'string',
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      uploadSource: 'string',
      userData: 'string',
      visionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoList extends $dara.Model {
  /**
   * @remarks
   * The details of the intelligent AI job.
   */
  aiData?: SearchMediaResponseBodyMediaInfoListAiData;
  /**
   * @remarks
   * The description of the AI job.
   */
  aiRoughData?: SearchMediaResponseBodyMediaInfoListAiRoughData;
  /**
   * @remarks
   * The information about the files.
   */
  fileInfoList?: SearchMediaResponseBodyMediaInfoListFileInfoList[];
  indexStatusList?: SearchMediaResponseBodyMediaInfoListIndexStatusList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: SearchMediaResponseBodyMediaInfoListMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c3ce6
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      aiRoughData: 'AiRoughData',
      fileInfoList: 'FileInfoList',
      indexStatusList: 'IndexStatusList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiData: SearchMediaResponseBodyMediaInfoListAiData,
      aiRoughData: SearchMediaResponseBodyMediaInfoListAiRoughData,
      fileInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListFileInfoList },
      indexStatusList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListIndexStatusList },
      mediaBasicInfo: SearchMediaResponseBodyMediaInfoListMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.aiData && typeof (this.aiData as any).validate === 'function') {
      (this.aiData as any).validate();
    }
    if(this.aiRoughData && typeof (this.aiRoughData as any).validate === 'function') {
      (this.aiRoughData as any).validate();
    }
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    if(Array.isArray(this.indexStatusList)) {
      $dara.Model.validateArray(this.indexStatusList);
    }
    if(this.mediaBasicInfo && typeof (this.mediaBasicInfo as any).validate === 'function') {
      (this.mediaBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The media assets that meet the requirements.
   */
  mediaInfoList?: SearchMediaResponseBodyMediaInfoList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6F61C357-ACC0-57FB-876E-D58795335E59
   */
  requestId?: string;
  /**
   * @remarks
   * The pagination identifier.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The total number of media assets that meet the conditions.
   * 
   * @example
   * 163
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaInfoList: 'MediaInfoList',
      requestId: 'RequestId',
      scrollToken: 'ScrollToken',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoList },
      requestId: 'string',
      scrollToken: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaInfoList)) {
      $dara.Model.validateArray(this.mediaInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

