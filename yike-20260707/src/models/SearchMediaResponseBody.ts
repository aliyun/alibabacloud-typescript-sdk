// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo extends $dara.Model {
  /**
   * @remarks
   * The bitrate.
   * 
   * @example
   * 1912.13
   */
  bitrate?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-05-01T19:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The duration.
   * 
   * @example
   * 60.00000
   */
  duration?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * 1642650802***0527050.wav
   */
  fileName?: string;
  /**
   * @remarks
   * The file size, in bytes.
   * 
   * @example
   * 48524
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
   * https://test-bucket-***.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-1818098****.mp4
   */
  fileUrl?: string;
  /**
   * @remarks
   * The container format.
   * 
   * @example
   * mov,mp4,m4a,3gp,3g2,mj2
   */
  formatName?: string;
  /**
   * @remarks
   * The height.
   * 
   * @example
   * 480
   */
  height?: string;
  /**
   * @remarks
   * The image set information.
   * 
   * @example
   * {}
   */
  imagesInput?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2026-05-01T19:48Z
   */
  modifiedTime?: string;
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
   * The basic file information, including duration and size.
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

export class SearchMediaResponseBodyMediaInfoListMediaBasicInfo extends $dara.Model {
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
   * 10
   */
  categoryId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * @example
   * test-category-01
   */
  categoryName?: string;
  /**
   * @remarks
   * The cover URL.
   * 
   * @example
   * https://test-bucket-***.oss-cn-shanghai.aliyuncs.com/cover/e694372e-4f5b-4821-ae09-efd064f2****_large_cover_url.jpg
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2026-05-01T19:48Z
   */
  createTime?: string;
  /**
   * @remarks
   * The content description.
   * 
   * @example
   * This is a test video.
   */
  description?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * BaseMedia
   */
  entityId?: string;
  /**
   * @remarks
   * The media asset URL.
   * 
   * @example
   * https://test-bucket-***.oss-cn-shanghai.aliyuncs.com/sv/23d5cdd1-18180984899/23d5cdd1-1818098****.mp4
   */
  inputURL?: string;
  /**
   * @remarks
   * The media asset ID.
   * 
   * @example
   * 3b187b3620c8490886cfc2a9578c****
   */
  mediaId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * tags,tags2
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
   * The time when the media asset was last modified.
   * 
   * @example
   * 2026-05-01T20:48Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The snapshots.
   * 
   * @example
   * [{"bucket":"test-bucket-***","count":"3","location":"oss-cn-shanghai","snapshotRegular":"example.jpg","templateId":"******e6a6440b29eb60bd7c******"}]
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
   * [{"bucket":"test-bucket-***","count":"32","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
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
   * test-title
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
   * The upload source of the media asset.
   * 
   * @example
   * oss
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
   * @remarks
   * The dynamic metadata content.
   * 
   * @example
   * "{\\"ThirdPartyAssetStatus\\":\\"Success\\"}"
   */
  data?: string;
  /**
   * @remarks
   * The entity ID.
   * 
   * @example
   * BaseMedia
   */
  entityId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      entityId: 'EntityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      entityId: 'string',
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
  /**
   * @remarks
   * The dynamic metadata.
   */
  dynamicMetaData?: SearchMediaResponseBodyMediaInfoListMediaDynamicInfoDynamicMetaData;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: SearchMediaResponseBodyMediaInfoListMediaDynamicInfoDynamicMetaData,
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchMediaResponseBodyMediaInfoList extends $dara.Model {
  /**
   * @remarks
   * The list of media files.
   */
  fileInfoList?: SearchMediaResponseBodyMediaInfoListFileInfoList[];
  /**
   * @remarks
   * The basic information of the media asset.
   */
  mediaBasicInfo?: SearchMediaResponseBodyMediaInfoListMediaBasicInfo;
  /**
   * @remarks
   * The dynamic data of the media asset.
   */
  mediaDynamicInfo?: SearchMediaResponseBodyMediaInfoListMediaDynamicInfo;
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
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaDynamicInfo: 'MediaDynamicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The collection of media assets that meet the specified criteria.
   */
  mediaInfoList?: SearchMediaResponseBodyMediaInfoList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * F8C4F642184DBDA5D93907A70AAE****
   */
  scrollToken?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * True
   */
  success?: string;
  /**
   * @remarks
   * The total number of media assets that meet the specified criteria.
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

