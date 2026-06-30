// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetYikeAssetMediaInfosResponseBodyMediaInfosBizData extends $dara.Model {
  /**
   * @remarks
   * The audit label.
   * 
   * @example
   * Label
   */
  auditBlockedLabel?: string;
  /**
   * @remarks
   * The audit status.
   * 
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @remarks
   * The ID of the creation task.
   * 
   * @example
   * ID
   */
  creationJobId?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * pd_0617169475
   */
  folderId?: string;
  /**
   * @remarks
   * Indicates whether the media asset is marked as a favorite.
   * 
   * @example
   * 1
   */
  isFavorite?: string;
  /**
   * @remarks
   * Indicates whether the media asset is logically deleted.
   * 
   * @example
   * 1
   */
  isLogicalDeleted?: string;
  /**
   * @remarks
   * The media asset subtype.
   * 
   * @example
   * Image
   */
  mediaAssetSubType?: string;
  /**
   * @remarks
   * The media asset type.
   * 
   * @example
   * HistoricalUpload
   */
  mediaAssetType?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_0617169475
   */
  productionId?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * f4a26390f02371f0a1f4e6e7c7586706
   */
  sourceId?: string;
  /**
   * @remarks
   * The source name.
   * 
   * @example
   * name
   */
  sourceName?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * MainBody
   */
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      auditBlockedLabel: 'AuditBlockedLabel',
      auditStatus: 'AuditStatus',
      creationJobId: 'CreationJobId',
      folderId: 'FolderId',
      isFavorite: 'IsFavorite',
      isLogicalDeleted: 'IsLogicalDeleted',
      mediaAssetSubType: 'MediaAssetSubType',
      mediaAssetType: 'MediaAssetType',
      productionId: 'ProductionId',
      sourceId: 'SourceId',
      sourceName: 'SourceName',
      sourceType: 'SourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditBlockedLabel: 'string',
      auditStatus: 'string',
      creationJobId: 'string',
      folderId: 'string',
      isFavorite: 'string',
      isLogicalDeleted: 'string',
      mediaAssetSubType: 'string',
      mediaAssetType: 'string',
      productionId: 'string',
      sourceId: 'string',
      sourceName: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 30
   */
  bitrate?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 200
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 191
   */
  fileSize?: string;
  /**
   * @remarks
   * The file status.
   * 
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @remarks
   * The file type.
   * 
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @remarks
   * The OSS URL of the file.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  fileUrl?: string;
  /**
   * @remarks
   * The container format.
   * 
   * @example
   * jpg
   */
  formatName?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 416
   */
  height?: string;
  /**
   * @remarks
   * The storage region of the file.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The width.
   * 
   * @example
   * 640
   */
  width?: string;
  static names(): { [key: string]: string } {
    return {
      bitrate: 'Bitrate',
      duration: 'Duration',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileStatus: 'FileStatus',
      fileType: 'FileType',
      fileUrl: 'FileUrl',
      formatName: 'FormatName',
      height: 'Height',
      region: 'Region',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bitrate: 'string',
      duration: 'string',
      fileName: 'string',
      fileSize: 'string',
      fileStatus: 'string',
      fileType: 'string',
      fileUrl: 'string',
      formatName: 'string',
      height: 'string',
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

export class BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The basic file information, including the duration and size.
   */
  fileBasicInfo?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoListFileBasicInfo,
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

export class BatchGetYikeAssetMediaInfosResponseBodyMediaInfosMediaBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The business to which the media asset belongs.
   * 
   * @example
   * ICE
   */
  biz?: string;
  /**
   * @remarks
   * The business type of the media asset.
   * 
   * @example
   * general
   */
  businessType?: string;
  /**
   * @remarks
   * The category.
   * 
   * @example
   * category
   */
  category?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the media asset was deleted.
   * 
   * @example
   * 2021-01-08T16:52:07Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The content description.
   * 
   * @example
   * sample_description
   */
  description?: string;
  /**
   * @remarks
   * The address of the media asset to be registered in the corresponding system.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * MediaId
   * 
   * @example
   * *****64623a94eca8516569c8f*****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * tag1，tag2
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type of the media asset.
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
   * 2021-01-08T16:52:04Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The snapshots.
   * 
   * @example
   * []
   */
  snapshots?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * The sprite images.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The resource status.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * The transcoding status.
   * 
   * @example
   * Init
   */
  transcodeStatus?: string;
  /**
   * @remarks
   * The user data.
   * 
   * @example
   * UserData
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      biz: 'Biz',
      businessType: 'BusinessType',
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
      snapshots: 'Snapshots',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      transcodeStatus: 'TranscodeStatus',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      biz: 'string',
      businessType: 'string',
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
      snapshots: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
      transcodeStatus: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchGetYikeAssetMediaInfosResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * The business information.
   */
  bizData?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosBizData;
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * ******c48fb37407365d4f2cd8******
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosBizData,
      fileInfoList: { 'type': 'array', 'itemType': BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.bizData && typeof (this.bizData as any).validate === 'function') {
      (this.bizData as any).validate();
    }
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
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

export class BatchGetYikeAssetMediaInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs that failed to be retrieved.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * The collection of media assets that meet the requirements.
   */
  mediaInfos?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ignoredList: 'IgnoredList',
      mediaInfos: 'MediaInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ignoredList: { 'type': 'array', 'itemType': 'string' },
      mediaInfos: { 'type': 'array', 'itemType': BatchGetYikeAssetMediaInfosResponseBodyMediaInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ignoredList)) {
      $dara.Model.validateArray(this.ignoredList);
    }
    if(Array.isArray(this.mediaInfos)) {
      $dara.Model.validateArray(this.mediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

