// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks extends $dara.Model {
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
   * 50
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

export class SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrences extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 158730355E4B82257D8AA1583A58****
   */
  clipId?: string;
  /**
   * @remarks
   * The content of the text.
   */
  content?: string;
  /**
   * @remarks
   * The fine-grained ID of the entity.
   * 
   * @example
   * 103102503**
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
   * The image that contains the most face information.
   * 
   * @example
   * https://service-****-public.oss-cn-hangzhou.aliyuncs.com/1563457****438522/service-image/f788974f-9595-43b2-a478-7c7a1afb****.jpg
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
   * 85010D1**
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
   * The tracks.
   */
  tracks?: SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks[];
  static names(): { [key: string]: string } {
    return {
      clipId: 'ClipId',
      content: 'Content',
      finegrainId: 'FinegrainId',
      finegrainName: 'FinegrainName',
      from: 'From',
      image: 'Image',
      score: 'Score',
      tableBatchSeqId: 'TableBatchSeqId',
      to: 'To',
      tracks: 'Tracks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clipId: 'string',
      content: 'string',
      finegrainId: 'string',
      finegrainName: 'string',
      from: 'number',
      image: 'string',
      score: 'number',
      tableBatchSeqId: 'string',
      to: 'number',
      tracks: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrencesTracks },
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

export class SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfo extends $dara.Model {
  /**
   * @remarks
   * The category.
   */
  category?: string;
  /**
   * @remarks
   * The ID of the face.
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
   * 103102503**
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
   * The information about the clips.
   */
  occurrences?: SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrences[];
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
      occurrences: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfoOccurrences },
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

export class SearchMediaByAILabelResponseBodyMediaListAiDataAsrInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB****
   */
  clipId?: string;
  /**
   * @remarks
   * The content of the audio.
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

export class SearchMediaByAILabelResponseBodyMediaListAiDataOcrInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the clip.
   * 
   * @example
   * 5FE19530C7A422197535FE74F5DB****
   */
  clipId?: string;
  /**
   * @remarks
   * The content of the text.
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

export class SearchMediaByAILabelResponseBodyMediaListAiData extends $dara.Model {
  /**
   * @remarks
   * The tags of the AI job.
   */
  aiLabelInfo?: SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfo[];
  /**
   * @remarks
   * The information about audio files.
   */
  asrInfo?: SearchMediaByAILabelResponseBodyMediaListAiDataAsrInfo[];
  /**
   * @remarks
   * The information about subtitle files.
   */
  ocrInfo?: SearchMediaByAILabelResponseBodyMediaListAiDataOcrInfo[];
  static names(): { [key: string]: string } {
    return {
      aiLabelInfo: 'AiLabelInfo',
      asrInfo: 'AsrInfo',
      ocrInfo: 'OcrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiLabelInfo: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAiLabelInfo },
      asrInfo: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataAsrInfo },
      ocrInfo: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaListAiDataOcrInfo },
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

export class SearchMediaByAILabelResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * The details of the AI job.
   */
  aiData?: SearchMediaByAILabelResponseBodyMediaListAiData;
  /**
   * @remarks
   * The ID of the application. Default value: app-1000000.
   * 
   * @example
   * app-1000000
   */
  appId?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * http://example.aliyundoc.com/snapshot/****.jpg?auth_key=1498476426-0-0-f00b9455c49a423ce69cf4e27333****
   */
  coverUrl?: string;
  /**
   * @remarks
   * The time when the media asset was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the media asset.
   */
  description?: string;
  /**
   * @remarks
   * The duration. Unit: seconds.
   * 
   * @example
   * 12.2
   */
  duration?: number;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * 1c6ce34007d571ed94667630a6bc****
   */
  mediaId?: string;
  /**
   * @remarks
   * The time when the media asset was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2017-11-14T09:15:50Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The size of the source file. Unit: bytes.
   * 
   * @example
   * 10897890
   */
  size?: number;
  /**
   * @remarks
   * The array of video snapshot URLs.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The status of the video.
   * 
   * Valid values:
   * 
   * *   PrepareFail
   * *   UploadFail
   * *   Init
   * *   UploadSucc
   * *   Transcoding
   * *   TranscodeFail
   * *   Deleted
   * *   Normal
   * *   Uploading
   * *   Preparing
   * *   Blocked
   * *   Checking
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage address.
   * 
   * @example
   * out-****.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the media asset.
   */
  tags?: string;
  /**
   * @remarks
   * The title of the media asset.
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      appId: 'AppId',
      coverUrl: 'CoverUrl',
      creationTime: 'CreationTime',
      description: 'Description',
      duration: 'Duration',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      size: 'Size',
      snapshots: 'Snapshots',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiData: SearchMediaByAILabelResponseBodyMediaListAiData,
      appId: 'string',
      coverUrl: 'string',
      creationTime: 'string',
      description: 'string',
      duration: 'number',
      mediaId: 'string',
      modificationTime: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.aiData && typeof (this.aiData as any).validate === 'function') {
      (this.aiData as any).validate();
    }
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaByAILabelResponseBody extends $dara.Model {
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
   * The media assets that contain the specified content.
   */
  mediaList?: SearchMediaByAILabelResponseBodyMediaList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The total number of audio and video files that meet the conditions.
   * 
   * @example
   * 30
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      mediaList: 'MediaList',
      requestId: 'RequestId',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      mediaList: { 'type': 'array', 'itemType': SearchMediaByAILabelResponseBodyMediaList },
      requestId: 'string',
      success: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mediaList)) {
      $dara.Model.validateArray(this.mediaList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

