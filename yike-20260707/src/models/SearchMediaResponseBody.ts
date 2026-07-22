// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @example
   * 1912.13
   */
  bitrate?: string;
  /**
   * @example
   * 2026-05-01T19:48Z
   */
  createTime?: string;
  /**
   * @example
   * 60.00000
   */
  duration?: string;
  /**
   * @example
   * 1642650802***0527050.wav
   */
  fileName?: string;
  /**
   * @example
   * 48524
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
   * https://test-bucket-***.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-1818098****.mp4
   */
  fileUrl?: string;
  /**
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @example
   * 480
   */
  height?: string;
  /**
   * @example
   * {}
   */
  imagesInput?: string;
  /**
   * @example
   * 2026-05-01T19:48Z
   */
  modifiedTime?: string;
  /**
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
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

export class SearchMediaResponseBodyMediaInfoListMediaBasicInfo extends $dara.Model {
  /**
   * @example
   * opening
   */
  businessType?: string;
  /**
   * @example
   * 10
   */
  categoryId?: number;
  /**
   * @example
   * test-category-01
   */
  categoryName?: string;
  /**
   * @example
   * https://test-bucket-***.oss-cn-shanghai.aliyuncs.com/cover/e694372e-4f5b-4821-ae09-efd064f2****_large_cover_url.jpg
   */
  coverURL?: string;
  /**
   * @example
   * 2026-05-01T19:48Z
   */
  createTime?: string;
  /**
   * @example
   * This is a test video.
   */
  description?: string;
  /**
   * @example
   * BaseMedia
   */
  entityId?: string;
  /**
   * @example
   * https://test-bucket-***.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-1818098****.mp4
   */
  inputURL?: string;
  /**
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
  /**
   * @example
   * tags,tags2
   */
  mediaTags?: string;
  /**
   * @example
   * video
   */
  mediaType?: string;
  /**
   * @example
   * 2026-05-01T20:48Z
   */
  modifiedTime?: string;
  /**
   * @example
   * [{"bucket":"test-bucket-***","count":"3","location":"oss-cn-shanghai","snapshotRegular":"example.jpg","templateId":"******e6a6440b29eb60bd7c******"}]
   */
  snapshots?: string;
  /**
   * @example
   * oss
   */
  source?: string;
  /**
   * @example
   * [{"bucket":"test-bucket-***","count":"32","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @example
   * Normal
   */
  status?: string;
  /**
   * @example
   * test-title
   */
  title?: string;
  /**
   * @example
   * Init
   */
  transcodeStatus?: string;
  /**
   * @example
   * oss
   */
  uploadSource?: string;
  /**
   * @example
   * userData
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      description: 'Description',
      entityId: 'EntityId',
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
      uploadSource: 'UploadSource',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      categoryId: 'number',
      categoryName: 'string',
      coverURL: 'string',
      createTime: 'string',
      description: 'string',
      entityId: 'string',
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
      uploadSource: 'string',
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

export class SearchMediaResponseBodyMediaInfoListMediaDynamicInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * "{\\"ThirdPartyAssetStatus\\":\\"Success\\"}"
   */
  data?: string;
  /**
   * @example
   * BaseMedia
   */
  entityId?: string;
  /**
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      entityId: 'EntityId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      entityId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListMediaDynamicInfoMediaExtraInfo extends $dara.Model {
  /**
   * @example
   * ***cd4754a89b6****
   */
  aiAuditJobId?: string;
  /**
   * @example
   * normal
   */
  aiAuditLabel?: string;
  /**
   * @example
   * Passed
   */
  aiAuditResult?: string;
  /**
   * @example
   * Success
   */
  aiAuditStatus?: string;
  /**
   * @example
   * ****aed4739c394b38c***
   */
  aiAuditTemplate?: string;
  /**
   * @example
   * Init
   */
  manualAuditResult?: string;
  /**
   * @example
   * Init
   */
  manualAuditStatus?: string;
  static names(): { [key: string]: string } {
    return {
      aiAuditJobId: 'AiAuditJobId',
      aiAuditLabel: 'AiAuditLabel',
      aiAuditResult: 'AiAuditResult',
      aiAuditStatus: 'AiAuditStatus',
      aiAuditTemplate: 'AiAuditTemplate',
      manualAuditResult: 'ManualAuditResult',
      manualAuditStatus: 'ManualAuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiAuditJobId: 'string',
      aiAuditLabel: 'string',
      aiAuditResult: 'string',
      aiAuditStatus: 'string',
      aiAuditTemplate: 'string',
      manualAuditResult: 'string',
      manualAuditStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoListMediaDynamicInfo extends $dara.Model {
  dynamicMetaData?: SearchMediaResponseBodyMediaInfoListMediaDynamicInfoDynamicMetaData;
  mediaExtraInfo?: SearchMediaResponseBodyMediaInfoListMediaDynamicInfoMediaExtraInfo;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      mediaExtraInfo: 'MediaExtraInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: SearchMediaResponseBodyMediaInfoListMediaDynamicInfoDynamicMetaData,
      mediaExtraInfo: SearchMediaResponseBodyMediaInfoListMediaDynamicInfoMediaExtraInfo,
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
    }
    if(this.mediaExtraInfo && typeof (this.mediaExtraInfo as any).validate === 'function') {
      (this.mediaExtraInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoList extends $dara.Model {
  /**
   * @example
   * {\\"intField1\\":12,\\"strField1\\":\\"abc\\"}
   */
  customFields?: string;
  fileInfoList?: SearchMediaResponseBodyMediaInfoListFileInfoList[];
  mediaBasicInfo?: SearchMediaResponseBodyMediaInfoListMediaBasicInfo;
  mediaDynamicInfo?: SearchMediaResponseBodyMediaInfoListMediaDynamicInfo;
  /**
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      customFields: 'CustomFields',
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaDynamicInfo: 'MediaDynamicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customFields: 'string',
      fileInfoList: { 'type': 'array', 'itemType': SearchMediaResponseBodyMediaInfoListFileInfoList },
      mediaBasicInfo: SearchMediaResponseBodyMediaInfoListMediaBasicInfo,
      mediaDynamicInfo: SearchMediaResponseBodyMediaInfoListMediaDynamicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    if(this.mediaBasicInfo && typeof (this.mediaBasicInfo as any).validate === 'function') {
      (this.mediaBasicInfo as any).validate();
    }
    if(this.mediaDynamicInfo && typeof (this.mediaDynamicInfo as any).validate === 'function') {
      (this.mediaDynamicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  mediaInfoList?: SearchMediaResponseBodyMediaInfoList[];
  /**
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @example
   * True
   */
  success?: string;
  /**
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

