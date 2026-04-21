// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetYikeAssetMediaInfosResponseBodyMediaInfosBizData extends $dara.Model {
  /**
   * @example
   * Label
   */
  auditBlockedLabel?: string;
  /**
   * @example
   * pass
   */
  auditStatus?: string;
  /**
   * @example
   * ID
   */
  creationJobId?: string;
  /**
   * @example
   * pd_0617169475
   */
  folderId?: string;
  /**
   * @example
   * 1
   */
  isFavorite?: string;
  /**
   * @example
   * 1
   */
  isLogicalDeleted?: string;
  /**
   * @example
   * Image
   */
  mediaAssetSubType?: string;
  /**
   * @example
   * HistoricalUpload
   */
  mediaAssetType?: string;
  /**
   * @example
   * pd_0617169475
   */
  productionId?: string;
  /**
   * @example
   * f4a26390f02371f0a1f4e6e7c7586706
   */
  sourceId?: string;
  /**
   * @example
   * name
   */
  sourceName?: string;
  /**
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
   * @example
   * 30
   */
  bitrate?: string;
  /**
   * @example
   * 200
   */
  duration?: string;
  /**
   * @example
   * example.mp4
   */
  fileName?: string;
  /**
   * @example
   * 191
   */
  fileSize?: string;
  /**
   * @example
   * Normal
   */
  fileStatus?: string;
  /**
   * @example
   * source_file
   */
  fileType?: string;
  /**
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.mp4?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  fileUrl?: string;
  /**
   * @example
   * jpg
   */
  formatName?: string;
  /**
   * @example
   * 416
   */
  height?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
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
   * @example
   * ICE
   */
  biz?: string;
  /**
   * @example
   * general
   */
  businessType?: string;
  /**
   * @example
   * category
   */
  category?: string;
  /**
   * @example
   * https://dtlive-bj.oss-cn-beijing.aliyuncs.com/cover/01e1271d-ff4f-4689-9c20-e1df81486859_open_live_cover.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2020-12-26T04:11:08Z
   */
  createTime?: string;
  /**
   * @example
   * 2021-01-08T16:52:07Z
   */
  deletedTime?: string;
  /**
   * @example
   * sample_description
   */
  description?: string;
  /**
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
   * @example
   * tag1，tag2
   */
  mediaTags?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 2021-01-08T16:52:04Z
   */
  modifiedTime?: string;
  /**
   * @example
   * []
   */
  snapshots?: string;
  /**
   * @example
   * oss
   */
  source?: string;
  /**
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * Init
   */
  transcodeStatus?: string;
  /**
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
  ignoredList?: string[];
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

