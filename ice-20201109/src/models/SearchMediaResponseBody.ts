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
   * The timestamp of the track data point.
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
   * 
   * @example
   * Pipi
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
   * 
   * @example
   * Car
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
   * The optimal image of the recognized face, encoded in Base64.
   * 
   * @example
   * 99C64F6287
   */
  image?: string;
  /**
   * @remarks
   * The confidence score for the recognition result.
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
   * A sequence of tracks that represent the entity within the clip.
   */
  tracks?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrencesTracks[];
  /**
   * @remarks
   * The clip ID.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB****
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
   * The category of the label.
   * 
   * @example
   * Vehicle
   */
  category?: string;
  /**
   * @remarks
   * The ID of the recognized face.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB****
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
   * 
   * @example
   * Car
   */
  labelName?: string;
  /**
   * @remarks
   * The type of the label.
   * 
   * @example
   * Object
   */
  labelType?: string;
  /**
   * @remarks
   * A list of clips where the entity appears.
   */
  occurrences?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfoOccurrences[];
  /**
   * @remarks
   * The source of the AI data.
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
   * The clip ID.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB****
   */
  clipId?: string;
  /**
   * @remarks
   * The transcribed text content.
   * 
   * @example
   * I am Pipi.
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
   * The clip ID.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB****
   */
  clipId?: string;
  /**
   * @remarks
   * The recognized text content.
   * 
   * @example
   * 我是皮皮
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
   * A list of AI label information.
   */
  aiLabelInfo?: SearchMediaResponseBodyMediaInfoListAiDataAiLabelInfo[];
  /**
   * @remarks
   * A list of Automatic Speech Recognition (ASR) results.
   */
  asrInfo?: SearchMediaResponseBodyMediaInfoListAiDataAsrInfo[];
  /**
   * @remarks
   * A list of Optical Character Recognition (OCR) results.
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
   * The AI category applied to the media asset.
   * 
   * @example
   * 视频AI分类
   */
  aiCategory?: string;
  /**
   * @remarks
   * The ID of the AI job.
   * 
   * @example
   * cd35b0b0025f71edbfcb472190a9****
   */
  aiJobId?: string;
  /**
   * @remarks
   * The URL of the raw AI result file.
   * 
   * @example
   * http://xxxx.json
   */
  result?: string;
  /**
   * @remarks
   * The save type of the AI data.
   * 
   * @example
   * TEXT
   */
  saveType?: string;
  /**
   * @remarks
   * The save status of the AI data.
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
   * The file size in bytes.
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
   * https://outin-d3f4681ddfd911ec99a600163e1403e7.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-1818098****.mp4
   */
  fileUrl?: string;
  /**
   * @remarks
   * The container format of the file.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The height of the video in pixels.
   * 
   * @example
   * 480
   */
  height?: string;
  /**
   * @remarks
   * Information about the image set.
   * 
   * @example
   * {}
   */
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
   * The region where the file is stored.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The width of the video in pixels.
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
   * Basic information about the file, such as its duration and size.
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
   * @remarks
   * The status of the index. Valid values:
   * 
   * - `Running`: The index is being created.
   * 
   * - `Fail`: The index creation failed.
   * 
   * - `Success`: The index was created.
   * 
   * @example
   * Success
   */
  indexStatus?: string;
  /**
   * @remarks
   * The type of the index. Valid values:
   * 
   * - `mm`: Large Language Model (LLM).
   * 
   * - `face`: Face.
   * 
   * - `aiLabel`: Smart tagging.
   * 
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
   * The category ID.
   * 
   * @example
   * 44
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * Subcategory 1
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
   * The URL of the cover image.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/e694372e-4f5b-4821-ae09-efd064f2****_large_cover_url.jpg
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
   * 
   * @example
   * 对这个视频进行转码处理了
   */
  description?: string;
  /**
   * @remarks
   * The source URL of the media asset.
   * 
   * @example
   * oss://clipres/longvideo/material/voice/prod/20220418/07d7c799f6054dc3bbef250854cf8498165024814****
   */
  inputURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 132bd600fc3c71ec99476732a78f****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags assigned to the media asset. Multiple tags are separated by commas.
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
   * The time when the media asset was last modified.
   * 
   * @example
   * 2020-12-01T19:48Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * name-1
   */
  namespace?: string;
  /**
   * @remarks
   * A unique, custom ID for the user. It must be 6 to 64 characters long and can contain letters, digits, hyphens (-), and underscores (_).
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * Snapshot information in JSON format.
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
   * Sprite Image information in JSON format.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The status of the media asset.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The stream status.
   * 
   * @example
   * Active
   */
  streamStatus?: string;
  /**
   * @remarks
   * The title of the media asset.
   * 
   * @example
   * Smart landscape-to-portrait conversion
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
   * The upload source.
   * 
   * @example
   * general
   */
  uploadSource?: string;
  /**
   * @remarks
   * The custom user data.
   * 
   * @example
   * userData
   */
  userData?: string;
  /**
   * @remarks
   * A computer-vision-generated description of the media content.
   * 
   * @example
   * 足球进球
   */
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
      streamStatus: 'StreamStatus',
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
      streamStatus: 'string',
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
   * The detailed AI data.
   */
  aiData?: SearchMediaResponseBodyMediaInfoListAiData;
  /**
   * @remarks
   * A summary of the AI processing data.
   */
  aiRoughData?: SearchMediaResponseBodyMediaInfoListAiRoughData;
  /**
   * @remarks
   * Custom fields for filtering, provided as a JSON string.
   * 
   * @example
   * {\\"intField1\\":12,\\"strField1\\":\\"abc\\"}
   */
  customFields?: string;
  /**
   * @remarks
   * A list of file information.
   */
  fileInfoList?: SearchMediaResponseBodyMediaInfoListFileInfoList[];
  /**
   * @remarks
   * A list of indexing statuses for different index types.
   */
  indexStatusList?: SearchMediaResponseBodyMediaInfoListIndexStatusList[];
  /**
   * @remarks
   * Basic information about the media asset.
   */
  mediaBasicInfo?: SearchMediaResponseBodyMediaInfoListMediaBasicInfo;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      aiRoughData: 'AiRoughData',
      customFields: 'CustomFields',
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
      customFields: 'string',
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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * A collection of media assets that match the criteria.
   */
  mediaInfoList?: SearchMediaResponseBodyMediaInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6F61C357-ACC0-57FB-876E-D5879533****
   */
  requestId?: string;
  /**
   * @remarks
   * The token used to retrieve the next page of results.
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
   * The total number of media assets matching the search criteria.
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

