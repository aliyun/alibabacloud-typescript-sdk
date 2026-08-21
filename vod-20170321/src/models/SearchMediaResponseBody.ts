// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaListAiDataAiLabelInfoOccurrences extends $dara.Model {
  from?: number;
  score?: number;
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
  category?: string;
  labelId?: string;
  labelName?: string;
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
  content?: string;
  from?: number;
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
  aiLabelInfo?: SearchMediaResponseBodyMediaListAiDataAiLabelInfo[];
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
  aiCategory?: string;
  aiJobId?: string;
  saveType?: string;
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
   * The category ID.
   * 
   * @example
   * 10027394
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The category level.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The parent node ID.
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
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The business type. Valid values:
   * 
   * - **watermark**: watermark.
   * - **subtitle**: subtitle.
   * - **material**: material.
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
   * The creation time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Alibaba Cloud VOD-assisted media asset description
   */
  description?: string;
  /**
   * @remarks
   * The auxiliary media asset ID.
   * 
   * @example
   * a82a2cd7d4e147ba0ed6c1ee372****
   */
  mediaId?: string;
  /**
   * @remarks
   * The last modification time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **Uploading** (uploading): the initial state. The auxiliary media asset is being uploaded.
   * - **Normal** (normal): the auxiliary media asset is uploaded.
   * - **UploadFail** (failed): the auxiliary media asset failed to be uploaded.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * outin-bfefbb90a47c11*****7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * tag1
   */
  tags?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Alibaba Cloud VOD-assisted media asset Title
   */
  title?: string;
  /**
   * @remarks
   * The auxiliary media asset URL.
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
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The audio ID.
   * 
   * @example
   * a82a2cd7d4e147bbed6c1ee372****
   */
  audioId?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 10000123
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * http://example.com/image04.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The creation time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Alibaba Cloud VOD Audio Description
   */
  description?: string;
  /**
   * @remarks
   * The download switch. Offline download is allowed only when the switch is enabled. Valid values:
   * 
   * - **on** (enabled): the initial state. Offline download is allowed.
   * - **off** (disabled): offline download is disabled.
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * The source. Valid values:
   * 
   * - **general** (ApsaraVideo VOD upload): standard upload.
   * - **short_video** (the short video SDK): files uploaded to ApsaraVideo VOD by using the short video SDK. For more information, see [Short video SDK](https://help.aliyun.com/document_detail/53407.html).
   * - **editing** (online editing): files uploaded to ApsaraVideo VOD by using online editing. For more information, see [Produce videos](https://help.aliyun.com/document_detail/68536.html).
   * - **live** (live recording): files uploaded to ApsaraVideo VOD through live recording.
   * 
   * @example
   * general
   */
  mediaSource?: string;
  /**
   * @remarks
   * The last modification time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The preprocessing status. Only preprocessed videos can be used for live streaming. Valid values:
   * 
   * - **UnPreprocess**: not preprocessed.
   * - **Preprocessing**: preprocessing.
   * - **PreprocessSucceed**: preprocessing complete.
   * - **PreprocessFailed**: preprocessing failed.
   * 
   * @example
   * UnPreprocess
   */
  preprocessStatus?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The value must be 6 to 64 characters in length and is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The expiration time of the media asset restoration.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The media asset restoration status. Valid values:
   * - **Processing**: restoring.
   * - **Success**: restoration successful.
   * - **Failed**: restoration failed.
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The size.
   * 
   * @example
   * 123
   */
  size?: number;
  /**
   * @remarks
   * The list of automatic snapshots.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The list of sprites.
   */
  spriteSnapshots?: string[];
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **Uploading**: uploading.
   * - **Normal**: normal.	
   * - **UploadFail**: upload failed.
   * - **Deleted**: deleted.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the media asset. Valid values:
   * - **Standard**: standard.
   * - **IA**: Infrequent Access (media asset).
   * - **Archive**: Archive (media asset).
   * - **ColdArchive**: Cold Archive (media asset).
   * - **SourceIA**: Infrequent Access (source file).
   * - **SourceArchive**: Archive (source file).
   * - **SourceColdArchive**: Cold Archive (source file).
   * - **Changing**: the storage class is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * outin-aaa*****aa.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * tag1,tag2
   */
  tags?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Alibaba Cloud VOD Audio Title
   */
  title?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * - **FastTranscode** (standard transcoding, default): transcoding starts after the upload is complete, and the audio can be played only after transcoding is complete.
   * - **NoTranscode** (distribution without transcoding): the audio can be played immediately after the upload is complete without transcoding.
   * - **AsyncTranscode** (distribution and transcoding upon upload): the audio can be played immediately after the upload is complete, and transcoding is performed asynchronously.
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
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 1000123
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * cate1
   */
  cateName?: string;
  /**
   * @remarks
   * The creation time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Alibaba Cloud VOD Image Description
   */
  description?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * 11130843741se99wqmoes****
   */
  imageId?: string;
  /**
   * @remarks
   * The last modification time. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The image status. Valid values:
   * 
   * - **Uploading** (uploading): the initial state. The image is being uploaded.
   * - **Normal** (normal): the image is uploaded.
   * - **UploadFail** (failed): the image failed to be uploaded.
   * 
   * @example
   * Uploading
   */
  status?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * tag1
   */
  tags?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * Alibaba Cloud VOD Image Title
   */
  title?: string;
  /**
   * @remarks
   * The image URL.
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
   * The application ID.
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 10000123
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * video1
   */
  cateName?: string;
  /**
   * @remarks
   * The thumbnail URL.
   * 
   * @example
   * https://example.aliyundoc.com/image01.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the video information was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The video description.
   * 
   * @example
   * Alibaba Cloud VOD video description
   */
  description?: string;
  /**
   * @remarks
   * The download switch. Offline download is allowed only when the switch is enabled. Valid values:
   * 
   * - **on** (enabled): the initial state. Offline download is allowed.
   * - **off** (disabled): offline download is disabled.
   * 
   * @example
   * on
   */
  downloadSwitch?: string;
  /**
   * @remarks
   * The video duration. Unit: seconds.
   * 
   * @example
   * 123
   */
  duration?: number;
  /**
   * @remarks
   * The source. Valid values:
   * 
   * - **general**: ApsaraVideo VOD upload.
   * - **short_video**: the short video SDK.
   * - **editing**: online editing.
   * - **live**: live recording.
   * 
   * @example
   * general
   */
  mediaSource?: string;
  /**
   * @remarks
   * The time when the video information was last modified. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:48:25Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The preprocessing status. Valid values:
   * 
   * - **UnPreprocess**: not preprocessed.
   * - **Preprocessing**: preprocessing.
   * - **PreprocessSucceed**: preprocessing complete.
   * - **PreprocessFailed**: preprocessing failed.
   * 
   * @example
   * Preprocessing
   */
  preprocessStatus?: string;
  /**
   * @remarks
   * The custom ID. Only lowercase letters, uppercase letters, digits, hyphens, and underscores are supported. The value must be 6 to 64 characters in length and is unique at the user level.
   * 
   * @example
   * 123-123
   */
  referenceId?: string;
  /**
   * @remarks
   * The expiration time of the media asset restoration.
   * 
   * @example
   * 2023-03-30T10:14:14Z
   */
  restoreExpiration?: string;
  /**
   * @remarks
   * The media asset restoration status. Valid values:
   * - **Processing**: restoring.
   * - **Success**: restoration successful.
   * - **Failed**: restoration failed.
   * 
   * @example
   * Success
   */
  restoreStatus?: string;
  /**
   * @remarks
   * The video size.
   * 
   * @example
   * 123
   */
  size?: number;
  /**
   * @remarks
   * The list of automatic snapshots.
   */
  snapshots?: string[];
  /**
   * @remarks
   * The list of sprites.
   */
  spriteSnapshots?: string[];
  /**
   * @remarks
   * The status. Valid values:
   * 
   * - **Uploading**: uploading.
   * - **UploadFail**: upload failed.
   * - **UploadSucc**: upload complete.
   * - **Transcoding**: transcoding.
   * - **TranscodeFail**: transcoding failed.
   * - **Blocked**: blocked.
   * - **Normal**: normal.
   * 
   * @example
   * UploadSucc
   */
  status?: string;
  /**
   * @remarks
   * The storage class of the media asset. Valid values:
   * - **Standard**: standard.
   * - **IA**: Infrequent Access (media asset).
   * - **Archive**: Archive (media asset).
   * - **ColdArchive**: Cold Archive (media asset).
   * - **SourceIA**: Infrequent Access (source file).
   * - **SourceArchive**: Archive (source file).
   * - **SourceColdArchive**: Cold Archive (source file).
   * - **Changing**: the storage class of the media asset is being changed.
   * - **SourceChanging**: the storage class of the source file is being changed.
   * 
   * @example
   * Standard
   */
  storageClass?: string;
  /**
   * @remarks
   * The storage region.
   * 
   * @example
   * outin-bfefbb90a47c******163e1c7426.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  /**
   * @remarks
   * The video tags.
   * 
   * @example
   * tag1
   */
  tags?: string;
  /**
   * @remarks
   * The video title.
   * 
   * @example
   * Alibaba Cloud VOD Video Title
   */
  title?: string;
  /**
   * @remarks
   * The transcoding mode. Valid values:
   * 
   * - **FastTranscode** (standard transcoding): the default mode. Transcoding starts after the upload is complete, and the video can be played only after transcoding is complete.
   * - **NoTranscode** (distribution without transcoding): the video can be played immediately after the upload is complete without transcoding.
   * - **AsyncTranscode** (distribution and transcoding upon upload): the video can be played immediately after the upload is complete, and transcoding is performed asynchronously.
   * 
   * @example
   * FastTranscode
   */
  transcodeMode?: string;
  /**
   * @remarks
   * The video ID.
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
  aiData?: SearchMediaResponseBodyMediaListAiData;
  aiRoughData?: SearchMediaResponseBodyMediaListAiRoughData;
  /**
   * @remarks
   * [Auxiliary media asset information](https://help.aliyun.com/document_detail/86991.html).
   */
  attachedMedia?: SearchMediaResponseBodyMediaListAttachedMedia;
  /**
   * @remarks
   * [Audio information](https://help.aliyun.com/document_detail/86991.html).
   */
  audio?: SearchMediaResponseBodyMediaListAudio;
  /**
   * @remarks
   * The time when the media asset was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-07-19T03:45:25Z
   */
  creationTime?: string;
  /**
   * @remarks
   * [Image information](https://help.aliyun.com/document_detail/86991.html).
   */
  image?: SearchMediaResponseBodyMediaListImage;
  /**
   * @remarks
   * The media ID.
   * 
   * @example
   * a82a2cd7d4e147bbed6c1ee372****
   */
  mediaId?: string;
  /**
   * @remarks
   * The media type. Valid values:
   * 
   * - **video**: video.
   * - **audio**: audio.
   * - **image**: image.
   * - **attached**: auxiliary media asset.
   * 
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @remarks
   * [Video information](https://help.aliyun.com/document_detail/86991.html).
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
   * The list of media asset information.
   */
  mediaList?: SearchMediaResponseBodyMediaList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3E0CEF83-FB09-4E34-BA1451814B03****
   */
  requestId?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 24e0fba7188fae707e146esa54****
   */
  scrollToken?: string;
  /**
   * @remarks
   * The total number of media assets that match the search conditions.
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

