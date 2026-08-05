// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @remarks
   * The metadata JSON string.
   * 
   * @example
   * "{\\"AuditionUrl\\": \\"http://xxx\\", \\"AuditionCount\\": 3...}"
   */
  data?: string;
  /**
   * @remarks
   * The type. Valid values:
   * 
   * - "ai": AI data that is generated after unified processing of AI raw results.
   * - "user-defined": user-defined metadata.
   * - "system": system built-in metadata.
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
   * The business type of the media asset.
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
   * The cover URL of the media asset.
   * 
   * @example
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @remarks
   * The time when the media asset was created.
   * 
   * @example
   * 2020-12-26T06:04:49Z
   */
  createTime?: string;
  /**
   * @remarks
   * The time when the media asset was deleted.
   * 
   * @example
   * 2020-12-29T06:04:49Z
   */
  deletedTime?: string;
  /**
   * @remarks
   * The content description of the media asset.
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
   * The tags of the media asset.
   * 
   * @example
   * tag1
   */
  mediaTags?: string;
  /**
   * @remarks
   * The media type of the media asset.
   * 
   * @example
   * audio
   */
  mediaType?: string;
  /**
   * @remarks
   * The time when the media asset was last modified.
   * 
   * @example
   * 2020-12-26T06:04:50Z
   */
  modifiedTime?: string;
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
   * The sprite images of the media asset.
   * 
   * @example
   * [{"bucket":"example-bucket","count":"32","iceJobId":"******83ec44d58b2069def2e******","location":"oss-cn-shanghai","snapshotRegular":"example/example-{Count}.jpg","spriteRegular":"example/example-{TileCount}.jpg","templateId":"******e438b14ff39293eaec25******","tileCount":"1"}]
   */
  spriteImages?: string;
  /**
   * @remarks
   * The status of the resource.
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
   * The user data of the media asset.
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
   * The dynamic metadata.
   */
  dynamicMetaData?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData;
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo;
  /**
   * @remarks
   * The media asset ID.
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
   * Indicates whether a resource plan that includes this media asset has been purchased.
   * 
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @remarks
   * Indicates whether the media asset has been added to favorites.
   * 
   * @example
   * true
   */
  favorite?: boolean;
  /**
   * @remarks
   * The media asset information.
   */
  mediaInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo;
  /**
   * @remarks
   * The remaining validity period of the resource plan, in days.
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
   * The public copyright media asset information.
   */
  publicMediaInfos?: SearchPublicMediaInfoResponseBodyPublicMediaInfos[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ****3CFB-2767-54FD-B311-BD15A4C1****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that match the request conditions.
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

