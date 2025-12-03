// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaListAiDataAiLabelInfoOccurrences extends $dara.Model {
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
   * The score.
   * 
   * @example
   * 0.75287705
   */
  score?: number;
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
      from: 'From',
      score: 'Score',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      from: 'number',
      score: 'number',
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

export class SearchMediaResponseBodyMediaListAiDataAiLabelInfo extends $dara.Model {
  /**
   * @remarks
   * The category.
   * 
   * @example
   * Transportation
   */
  category?: string;
  /**
   * @remarks
   * The ID of the tag.
   * 
   * @example
   * 10310250338
   */
  labelId?: string;
  /**
   * @remarks
   * The name of the tag.
   * 
   * @example
   * Vehicles
   */
  labelName?: string;
  /**
   * @remarks
   * The clips.
   */
  occurrences?: SearchMediaResponseBodyMediaListAiDataAiLabelInfoOccurrences[];
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      labelId: 'LabelId',
      labelName: 'LabelName',
      occurrences: 'Occurrences',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      labelId: 'string',
      labelName: 'string',
      occurrences: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaListAiDataAiLabelInfoOccurrences },
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

export class SearchMediaResponseBodyMediaListAiDataOcrInfo extends $dara.Model {
  /**
   * @remarks
   * The text content.
   * 
   * @example
   * I\\"m Jane.
   */
  content?: string;
  /**
   * @remarks
   * The start time of the subtitle.
   * 
   * @example
   * 1.4
   */
  from?: number;
  /**
   * @remarks
   * The end time of the subtitle.
   * 
   * @example
   * 2.5
   */
  to?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      from: 'From',
      to: 'To',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      from: 'number',
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

export class SearchMediaResponseBodyMediaListAiData extends $dara.Model {
  /**
   * @remarks
   * The AI tags.
   */
  aiLabelInfo?: SearchMediaResponseBodyMediaListAiDataAiLabelInfo[];
  /**
   * @remarks
   * The information about subtitles.
   */
  ocrInfo?: SearchMediaResponseBodyMediaListAiDataOcrInfo[];
  static names(): { [key: string]: string } {
    return {
      aiLabelInfo: 'AiLabelInfo',
      ocrInfo: 'OcrInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiLabelInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaListAiDataAiLabelInfo },
      ocrInfo: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaListAiDataOcrInfo },
    };
  }

  validate() {
    if(Array.isArray(this.aiLabelInfo)) {
      $dara.Model.validateArray(this.aiLabelInfo);
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

export class SearchMediaResponseBodyMediaListAiRoughData extends $dara.Model {
  /**
   * @remarks
   * The AI category.
   * 
   * @example
   * TV series
   */
  aiCategory?: string;
  /**
   * @remarks
   * The ID of the AI task.
   * 
   * @example
   * cd35b0b0025f71edbfcb472190a9xxxx
   */
  aiJobId?: string;
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
      saveType: 'SaveType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiCategory: 'string',
      aiJobId: 'string',
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

export class SearchMediaResponseBodyMediaListAttachedMediaCategories extends $dara.Model {
  /**
   * @remarks
   * The category ID of the auxiliary media asset.
   * 
   * @example
   * 10027394
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * test1
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent node.
   * 
   * @example
   * -1
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAttachedMedia extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The type of the auxiliary media asset. Valid values:
   * 
   * *   **watermark**
   * *   **subtitle**
   * *   **material**
   * 
   * @example
   * watermark
   */
  businessType?: string;
  /**
   * @remarks
   * The list of category IDs.
   */
  categories?: SearchMediaResponseBodyMediaListAttachedMediaCategories[];
  /**
   * @remarks
   * The time when the auxiliary media asset was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the auxiliary media asset.
   * 
   * @example
   * test3
   */
  description?: string;
  /**
   * @remarks
   * The ID of the auxiliary media asset.
   * 
   * @example
   * a82a2cd7d4e147ba0ed6c1ee372****
   */
  mediaId?: string;
  /**
   * @remarks
   * The time when the auxiliary media asset was updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The status of the auxiliary media asset. Valid values:
   * 
   * *   **Uploading**
   * *   **Normal**
   * *   **UploadFail**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The region in which the auxiliary media asset is stored.
   * 
   * @example
   * outin-bfefbb90a47c11*****7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the auxiliary media asset.
   * 
   * @example
   * test2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the auxiliary media asset.
   * 
   * @example
   * test
   */
  title?: string;
  /**
   * @remarks
   * The URL of the auxiliary media asset.
   * 
   * @example
   * https://example.com/****.png
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      businessType: 'BusinessType',
      categories: 'Categories',
      creationTime: 'CreationTime',
      description: 'Description',
      mediaId: 'MediaId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      businessType: 'string',
      categories: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaListAttachedMediaCategories },
      creationTime: 'string',
      description: 'string',
      mediaId: 'string',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.categories)) {
      $dara.Model.validateArray(this.categories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListAudio extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the audio file.
   * 
   * @example
   * a82a2cd7d4e147bbed6c1ee372****
   */
  audioId?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 10000123
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * ceshi
   */
  cateName?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * http://example.com/image04.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the audio stream was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the audio file.
   * 
   * @example
   * audio description
   */
  description?: string;
  /**
   * @remarks
   * The download switch. The audio file can be downloaded offline only when the download switch is turned on. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The duration of the audio file.
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * The source of the audio file. Valid values:
   * 
   * *   **general**: The audio file is uploaded by using ApsaraVideo VOD.
   * *   **short_video**: The audio file is uploaded to ApsaraVideo VOD by using the short video SDK. For more information, see [Introduction](https://help.aliyun.com/document_detail/53407.html).
   * *   **editing**: The audio file is uploaded to ApsaraVideo VOD after online editing and production. For more information, see [ProduceEditingProjectVideo](https://help.aliyun.com/document_detail/68536.html).
   * *   **live**: The audio file is recorded and uploaded as a file to ApsaraVideo VOD.
   * 
   * @example
   * general
   */
  mediaSource?: string;
  /**
   * @remarks
   * The time when the audio file was updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The preprocessing status. Only preprocessed videos can be used for live streaming in the production studio. Valid values:
   * 
   * *   **UnPreprocess**
   * *   **Preprocessing**
   * *   **PreprocessSucceed**
   * *   **PreprocessFailed**
   * 
   * @example
   * UnPreprocess
   */
  preprocessStatus?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The period of time in which the audio file remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the audio file. Valid values:
   * 
   * *   **Processing**
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The size of the audio file.
   * 
   * @example
   * 123
   */
  size?: number;
  /**
   * @remarks
   * The automatic snapshots.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The sprite snapshots.
   */
  spriteSnapshots?: string[];
  /**
   * @remarks
   * The status of the audio file. Valid values:
   * 
   * *   **Uploading**
   * *   **Normal**
   * *   **UploadFail**
   * *   **Deleted**
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the audio file. Valid values:
   * 
   * *   **Standard**: All media resources are stored as Standard objects.
   * *   **IA**: All media resources are stored as IA objects.
   * *   **Archive**: All media resources are stored as Archive objects.
   * *   **ColdArchive**: All media resources are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source file is stored as an IA object.
   * *   **SourceArchive**: Only the source file is stored as an Archive object.
   * *   **SourceColdArchive**: Only the source file is stored as a Cold Archive object.
   * *   **Changing**: The storage class is being modified.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The region in which the audio is stored.
   * 
   * @example
   * outin-aaa*****aa.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the audio file.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title of the audio file
   * 
   * @example
   * audio
   */
  title?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * *   **FastTranscode**: The audio file is immediately transcoded after it is uploaded. You cannot play the file before it is transcoded.
   * *   **NoTranscode**: The audio file can be played without being transcoded. You can immediately play the file after it is uploaded.
   * *   **AsyncTranscode**: The audio file can be immediately played and asynchronously transcoded after it is uploaded.
   * 
   * @example
   * FastTranscode
   */
  transcodeMode?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      audioId: 'AudioId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      duration: 'Duration',
      mediaSource: 'MediaSource',
      modificationTime: 'ModificationTime',
      preprocessStatus: 'PreprocessStatus',
      referenceId: 'ReferenceId',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      spriteSnapshots: 'SpriteSnapshots',
      status: 'Status',
      storageClass: 'StorageClass',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      transcodeMode: 'TranscodeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      audioId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      downloadSwitch: 'string',
      duration: 'number',
      mediaSource: 'string',
      modificationTime: 'string',
      preprocessStatus: 'string',
      referenceId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      spriteSnapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageClass: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      transcodeMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    if(Array.isArray(this.spriteSnapshots)) {
      $dara.Model.validateArray(this.spriteSnapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListImage extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 1000123
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * beauty
   */
  cateName?: string;
  /**
   * @remarks
   * The time when the image was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the image file.
   * 
   * @example
   * image test
   */
  description?: string;
  /**
   * @remarks
   * The ID of the image file.
   * 
   * @example
   * 11130843741se99wqmoes****
   */
  imageId?: string;
  /**
   * @remarks
   * The time when the image file was updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The status of the image file.
   * 
   * *   **Uploading**
   * *   **Normal**
   * *   **UploadFail**
   * 
   * @example
   * Uploading
   */
  status?: string;
  /**
   * @remarks
   * The region in which the image is stored.
   * 
   * @example
   * outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the image file.
   * 
   * @example
   * tag1
   */
  tags?: string;
  /**
   * @remarks
   * The title of the image file.
   * 
   * @example
   * image1
   */
  title?: string;
  /**
   * @remarks
   * The URL of the image file.
   * 
   * @example
   * https://example.com/****.png
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      creationTime: 'CreationTime',
      description: 'Description',
      imageId: 'ImageId',
      modificationTime: 'ModificationTime',
      status: 'Status',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      creationTime: 'string',
      description: 'string',
      imageId: 'string',
      modificationTime: 'string',
      status: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaListVideo extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the category.
   * 
   * @example
   * 10000123
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * video1
   */
  cateName?: string;
  /**
   * @remarks
   * The URL of the thumbnail.
   * 
   * @example
   * https://example.aliyundoc.com/image01.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the video file was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the video file.
   * 
   * @example
   * Video test
   */
  description?: string;
  /**
   * @remarks
   * The download switch. The video file can be downloaded offline only when the download switch is turned on. Valid values:
   * 
   * *   **on**
   * *   **off**
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The duration of the video file. Unit: seconds.
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * The source of the video file. Valid values:
   * 
   * *   **general**: The video file is uploaded by using ApsaraVideo VOD.
   * *   **short_video**: The video file is uploaded by using the short video SDK.
   * *   **editing**: The video file is produced after online editing.
   * *   **live**: The video stream is recorded and uploaded as a file.
   * 
   * @example
   * general
   */
  mediaSource?: string;
  /**
   * @remarks
   * The time when the video file was updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The preprocessing status. Valid values:
   * 
   * *   **UnPreprocess**
   * *   **Preprocessing**
   * *   **PreprocessSucceed**
   * *   **PreprocessFailed**
   * 
   * @example
   * Preprocessing
   */
  preprocessStatus?: string;
  /**
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The period of time in which the video file remains in the restored state.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The restoration status of the video file. Valid values:
   * 
   * *   **Processing**
   * *   **Success**
   * *   **Failed**
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The size of the video file.
   * 
   * @example
   * 123
   */
  size?: number;
  /**
   * @remarks
   * The automatic snapshots.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The sprite snapshots.
   */
  spriteSnapshots?: string[];
  /**
   * @remarks
   * The status of the file. Valid values:
   * 
   * *   **Uploading**
   * *   **UploadFail**
   * *   **UploadSucc**
   * *   **Transcoding**
   * *   **TranscodeFail**
   * *   **Blocked**
   * *   **Normal**
   * 
   * @example
   * UploadSucc
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the video file. Valid values:
   * 
   * *   **Standard**: All media resources are stored as Standard objects.
   * *   **IA**: All media resources are stored as IA objects.
   * *   **Archive**: All media resources are stored as Archive objects.
   * *   **ColdArchive**: All media resources are stored as Cold Archive objects.
   * *   **SourceIA**: Only the source file is stored as an IA object.
   * *   **SourceArchive**: Only the source file is stored as an Archive object.
   * *   **SourceColdArchive**: Only the source file is stored as a Cold Archive object.
   * *   **Changing**: The storage class of the video file is being changed.
   * *   **SourceChanging**: The storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The region in which the video is stored.
   * 
   * @example
   * outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags of the video file.
   * 
   * @example
   * tag1
   */
  tags?: string;
  /**
   * @remarks
   * The title of the video.
   * 
   * @example
   * ceshi
   */
  title?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * *   **FastTranscode**: The video file is immediately transcoded after it is uploaded. You cannot play the file before it is transcoded.
   * *   **NoTranscode**: The video file can be played without being transcoded. You can immediately play the file after it is uploaded.
   * *   **AsyncTranscode**: The video file can be immediately played and asynchronously transcoded after it is uploaded.
   * 
   * @example
   * FastTranscode
   */
  transcodeMode?: string;
  /**
   * @remarks
   * The ID of the video file.
   * 
   * @example
   * a82a2asdasqadaf3faa0ed6c1ee372****
   */
  videoId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      cateId: 'CateId',
      cateName: 'CateName',
      coverURL: 'CoverURL',
      creationTime: 'CreationTime',
      description: 'Description',
      downloadSwitch: 'DownloadSwitch',
      duration: 'Duration',
      mediaSource: 'MediaSource',
      modificationTime: 'ModificationTime',
      preprocessStatus: 'PreprocessStatus',
      referenceId: 'ReferenceId',
      restoreExpiration: 'RestoreExpiration',
      restoreStatus: 'RestoreStatus',
      size: 'Size',
      snapshots: 'Snapshots',
      spriteSnapshots: 'SpriteSnapshots',
      status: 'Status',
      storageClass: 'StorageClass',
      storageLocation: 'StorageLocation',
      tags: 'Tags',
      title: 'Title',
      transcodeMode: 'TranscodeMode',
      videoId: 'VideoId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      cateId: 'number',
      cateName: 'string',
      coverURL: 'string',
      creationTime: 'string',
      description: 'string',
      downloadSwitch: 'string',
      duration: 'number',
      mediaSource: 'string',
      modificationTime: 'string',
      preprocessStatus: 'string',
      referenceId: 'string',
      restoreExpiration: 'string',
      restoreStatus: 'string',
      size: 'number',
      snapshots: { 'type': 'array', 'itemType': 'string' },
      spriteSnapshots: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
      storageClass: 'string',
      storageLocation: 'string',
      tags: 'string',
      title: 'string',
      transcodeMode: 'string',
      videoId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.snapshots)) {
      $dara.Model.validateArray(this.snapshots);
    }
    if(Array.isArray(this.spriteSnapshots)) {
      $dara.Model.validateArray(this.spriteSnapshots);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaList extends $dara.Model {
  /**
   * @remarks
   * Details about AI data.
   */
  aiData?: SearchMediaResponseBodyMediaListAiData;
  /**
   * @remarks
   * The basic information about AI data.
   */
  aiRoughData?: SearchMediaResponseBodyMediaListAiRoughData;
  /**
   * @remarks
   * [The information about the auxiliary media asset](https://help.aliyun.com/document_detail/86991.html).
   */
  attachedMedia?: SearchMediaResponseBodyMediaListAttachedMedia;
  /**
   * @remarks
   * [The information about the audio](https://help.aliyun.com/document_detail/86991.html).
   */
  audio?: SearchMediaResponseBodyMediaListAudio;
  /**
   * @remarks
   * The time when the media asset was created. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*hh:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * [The information about the image](https://help.aliyun.com/document_detail/86991.html).
   */
  image?: SearchMediaResponseBodyMediaListImage;
  /**
   * @remarks
   * The ID of the file.
   * 
   * @example
   * a82a2cd7d4e147bbed6c1ee372****
   */
  mediaId?: string;
  /**
   * @remarks
   * The type of the media asset. Valid values:
   * 
   * *   **video**
   * *   **audio**
   * *   **image**
   * *   **attached**
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * [The information about the video](https://help.aliyun.com/document_detail/86991.html).
   */
  video?: SearchMediaResponseBodyMediaListVideo;
  static names(): { [key: string]: string } {
    return {
      aiData: 'AiData',
      aiRoughData: 'AiRoughData',
      attachedMedia: 'AttachedMedia',
      audio: 'Audio',
      creationTime: 'CreationTime',
      image: 'Image',
      mediaId: 'MediaId',
      mediaType: 'MediaType',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiData: SearchMediaResponseBodyMediaListAiData,
      aiRoughData: SearchMediaResponseBodyMediaListAiRoughData,
      attachedMedia: SearchMediaResponseBodyMediaListAttachedMedia,
      audio: SearchMediaResponseBodyMediaListAudio,
      creationTime: 'string',
      image: SearchMediaResponseBodyMediaListImage,
      mediaId: 'string',
      mediaType: 'string',
      video: SearchMediaResponseBodyMediaListVideo,
    };
  }

  validate() {
    if(this.aiData && typeof (this.aiData as any).validate === 'function') {
      (this.aiData as any).validate();
    }
    if(this.aiRoughData && typeof (this.aiRoughData as any).validate === 'function') {
      (this.aiRoughData as any).validate();
    }
    if(this.attachedMedia && typeof (this.attachedMedia as any).validate === 'function') {
      (this.attachedMedia as any).validate();
    }
    if(this.audio && typeof (this.audio as any).validate === 'function') {
      (this.audio as any).validate();
    }
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
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
   * The information about the media assets.
   */
  mediaList?: SearchMediaResponseBodyMediaList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3E0CEF83-FB09-4E34-BA1451814B03****
   */
  requestId?: string;
  /**
   * @remarks
   * The pagination identifier.
   * 
   * @example
   * 24e0fba7188fae707e146esa54****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The total number of data records that meet the specified filter criteria.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      mediaList: 'MediaList',
      requestId: 'RequestId',
      scrollToken: 'ScrollToken',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaList },
      requestId: 'string',
      scrollToken: 'string',
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

