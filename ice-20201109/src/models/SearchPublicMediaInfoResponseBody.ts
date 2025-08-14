// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData extends $dara.Model {
  /**
   * @example
   * "{\\"AuditionUrl\\": \\"http://xxx\\", \\"AuditionCount\\": 3...}"
   */
  data?: string;
  /**
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
   * http://example-bucket.oss-cn-shanghai.aliyuncs.com/example.png?Expires=<ExpireTime>&OSSAccessKeyId=<OSSAccessKeyId>&Signature=<Signature>&security-token=<SecurityToken>
   */
  coverURL?: string;
  /**
   * @example
   * 2020-12-26T06:04:49Z
   */
  createTime?: string;
  /**
   * @example
   * 2020-12-29T06:04:49Z
   */
  deletedTime?: string;
  /**
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
  mediaTags?: string;
  /**
   * @example
   * audio
   */
  mediaType?: string;
  /**
   * @example
   * 2020-12-26T06:04:50Z
   */
  modifiedTime?: string;
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
  dynamicMetaData?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoDynamicMetaData;
  /**
   * @remarks
   * BasicInfo
   */
  mediaBasicInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfoMediaBasicInfo;
  /**
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
   * @example
   * true
   */
  authorized?: boolean;
  /**
   * @example
   * true
   */
  favorite?: boolean;
  mediaInfo?: SearchPublicMediaInfoResponseBodyPublicMediaInfosMediaInfo;
  /**
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
  publicMediaInfos?: SearchPublicMediaInfoResponseBodyPublicMediaInfos[];
  /**
   * @example
   * ****3CFB-2767-54FD-B311-BD15A4C1****
   */
  requestId?: string;
  /**
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

