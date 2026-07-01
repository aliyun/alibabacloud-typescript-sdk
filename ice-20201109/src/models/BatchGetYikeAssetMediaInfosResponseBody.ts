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
   * The ID of the creation job.
   * 
   * @example
   * ID
   */
  creationJobId?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * pd_0617169475
   */
  folderId?: string;
  /**
   * @remarks
   * Indicates whether the media asset is a favorite.
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
   * The sub-type of the media asset.
   * 
   * @example
   * Image
   */
  mediaAssetSubType?: string;
  /**
   * @remarks
   * The type of the media asset.
   * 
   * @example
   * HistoricalUpload
   */
  mediaAssetType?: string;
  /**
   * @remarks
   * The ID of the production.
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
   * The duration of the file.
   * 
   * @example
   * 200
   */
  duration?: string;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @remarks
   * The size of the file, in bytes.
   * 
   * @example
   * 191
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
   * The OSS URL of the file.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  fileUrl?: string;
  /**
   * @remarks
   * The container format of the file.
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
   * The region where the file is stored.
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
   * The basic information about the file, including the duration and size.
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
   * The business type.
   * 
   * @example
   * general
   */
  businessType?: string;
  /**
   * @remarks
   * The category of the media asset.
   * 
   * @example
   * category
   */
  category?: string;
  /**
   * @remarks
   * The URL of the cover image.
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
   * The description of the media asset.
   * 
   * @example
   * sample_description
   */
  description?: string;
  /**
   * @remarks
   * The source URL of the media asset.
   * 
   * @example
   * https://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * *****64623a94eca8516569c8f*****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags of the media asset.
   * 
   * @example
   * tag1，tag2
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
   * The source of the media asset.
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
   * The status of the media asset.
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * The title of the media asset.
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
   * The custom user data.
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
   * The business data.
   */
  bizData?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosBizData;
  /**
   * @remarks
   * The list of file information.
   */
  fileInfoList?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information about the media asset.
   */
  mediaBasicInfo?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
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
   * The list of IDs of media assets that failed to be obtained.
   */
  ignoredList?: string[];
  /**
   * @remarks
   * The list of matched media assets.
   */
  mediaInfos?: BatchGetYikeAssetMediaInfosResponseBodyMediaInfos[];
  /**
   * @remarks
   * The request ID.
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

