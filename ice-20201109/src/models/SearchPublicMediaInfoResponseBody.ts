// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @remarks
   * Metadata JSON string
   * 
   * @example
   * "{\\"AuditionUrl\\": \\"http://xxx\\", \\"AuditionCount\\": 3...}"
   */
  data?: string;
  /**
   * @remarks
   * Type. Valid values:
   * 
   * - "ai": AI data processed and normalized from original AI results
   * 
   * - "user-defined": User-defined metadata
   * 
   * - "system": System-provided
   * 
   * @example
   * system
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo extends $dara.Model {
  /**
   * @remarks
   * Media Asset Business Type
   * 
   * @example
   * general
   */
  businessType?: string;
  /**
   * @remarks
   * Categorization
   * 
   * @example
   * category
   */
  category?: string;
  /**
   * @remarks
   * Thumbnail URL
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * Media Asset Creation Time
   * 
   * @example
   * 2020-12-26T06:04:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * Media Asset Deletion Time
   * 
   * @example
   * 2020-12-29T06:04:49Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * Content description
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * MediaId
   * 
   * @example
   * icepublic-****87b921bb4a55908a72a0537e****
   */
  mediaId?: string;
  /**
   * @remarks
   * Label
   * 
   * @example
   * tag1
   */
  mediaTags?: string;
  /**
   * @remarks
   * Media asset media type
   * 
   * @example
   * audio
   */
  mediaType?: string;
  /**
   * @remarks
   * Updated At
   * 
   * @example
   * 2020-12-26T06:04:50Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * oss
   */
  source?: string;
  /**
   * @remarks
   * sprite
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * Resource status
   * 
   * @example
   * Normal
   */
  status?: string;
  /**
   * @remarks
   * title
   * 
   * @example
   * title
   */
  title?: string;
  /**
   * @remarks
   * User Data
   * 
   * @example
   * userDataTest
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      category: 'Category',
      coverURL: 'CoverURL',
      createTime: 'CreateTime',
      deletedTime: 'DeletedTime',
      description: 'Description',
      mediaId: 'MediaId',
      mediaTags: 'MediaTags',
      mediaType: 'MediaType',
      modifiedTime: 'ModifiedTime',
      source: 'Source',
      spriteImages: 'SpriteImages',
      status: 'Status',
      title: 'Title',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      category: 'string',
      coverURL: 'string',
      createTime: 'string',
      deletedTime: 'string',
      description: 'string',
      mediaId: 'string',
      mediaTags: 'string',
      mediaType: 'string',
      modifiedTime: 'string',
      source: 'string',
      spriteImages: 'string',
      status: 'string',
      title: 'string',
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

export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo extends $dara.Model {
  /**
   * @remarks
   * Dynamic metadata
   */
  dynamicMetaData?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData;
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo;
  /**
   * @remarks
   * Media asset ID
   * 
   * @example
   * icepublic-****87b921bb4a55908a72a0537e****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      dynamicMetaData: 'DynamicMetaData',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicMetaData: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData,
      mediaBasicInfo: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(this.dynamicMetaData && typeof (this.dynamicMetaData as any).validate === 'function') {
      (this.dynamicMetaData as any).validate();
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

export class SearchPublicMediaInfoResponseBodyPublicMediaInfos extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you have purchased a resource plan that includes this media asset.
   * 
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @remarks
   * Whether the media asset is collected.
   * 
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @remarks
   * Media asset information
   */
  mediaInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo;
  /**
   * @remarks
   * Remaining validity period of the resource plan (Day)
   * 
   * @example
   * 100
   */
  remainingAuthTime?: string;
  static names(): { [key: string]: string } {
    return {
      authorized: 'Authorized',
      favorite: 'Favorite',
      mediaInfo: 'MediaInfo',
      remainingAuthTime: 'RemainingAuthTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorized: 'boolean',
      favorite: 'boolean',
      mediaInfo: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo,
      remainingAuthTime: 'string',
    };
  }

  validate() {
    if(this.mediaInfo && typeof (this.mediaInfo as any).validate === 'function') {
      (this.mediaInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchPublicMediaInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * Public copyright media asset information
   */
  publicMediaInfos?: SearchPublicMediaInfoResponseBodyPublicMediaInfos[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * ****3CFB-2767-54FD-B311-BD15A4C1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total amount of Data under the current request conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      publicMediaInfos: 'PublicMediaInfos',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicMediaInfos: { 'type': 'array', 'itemType': SearchPublicMediaInfoResponseBodyPublicMediaInfos },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicMediaInfos)) {
      $dara.Model.validateArray(this.publicMediaInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

