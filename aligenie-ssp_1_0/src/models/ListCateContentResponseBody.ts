// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCateContentResponseBodyResultOpenDataItemListAuthorsCover extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the image can be cropped using OSS rules.
   * 
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @remarks
   * default image
   * 
   * @example
   * https://a.jpg
   */
  img?: string;
  /**
   * @remarks
   * Large image
   * 
   * @example
   * https://a.jpg
   */
  large?: string;
  /**
   * @remarks
   * Medium image (Deprecated)
   * 
   * @example
   * https://a.jpg
   */
  mediam?: string;
  /**
   * @remarks
   * medium image
   * 
   * @example
   * https://a.jpg
   */
  medium?: string;
  /**
   * @remarks
   * small image
   * 
   * @example
   * https://a.jpg
   */
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemListAuthors extends $dara.Model {
  /**
   * @remarks
   * Author type
   */
  authorTypes?: string[];
  /**
   * @remarks
   * profile picture
   */
  cover?: ListCateContentResponseBodyResultOpenDataItemListAuthorsCover;
  /**
   * @remarks
   * Author description
   * 
   * @example
   * 播音呆瓜小贼
   */
  description?: string;
  /**
   * @remarks
   * Gender
   * 
   * @example
   * MALE
   */
  gender?: string;
  /**
   * @remarks
   * Primary key ID of the author information
   * 
   * @example
   * 13597709
   */
  id?: number;
  /**
   * @remarks
   * Whether it is online
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * third-party author ID
   * 
   * @example
   * 123123
   */
  rawId?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * qingting
   */
  source?: string;
  /**
   * @remarks
   * Author title
   * 
   * @example
   * 播音呆瓜小贼
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authorTypes: 'AuthorTypes',
      cover: 'Cover',
      description: 'Description',
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      cover: ListCateContentResponseBodyResultOpenDataItemListAuthorsCover,
      description: 'string',
      gender: 'string',
      id: 'number',
      online: 'boolean',
      rawId: 'string',
      source: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorTypes)) {
      $dara.Model.validateArray(this.authorTypes);
    }
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemListCover extends $dara.Model {
  /**
   * @remarks
   * Default image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  img?: string;
  /**
   * @remarks
   * Large image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718275.jpg
   */
  large?: string;
  /**
   * @remarks
   * Medium image (Deprecated)
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718275.jpg
   */
  mediam?: string;
  /**
   * @remarks
   * Medium image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/20170207175.jpg
   */
  medium?: string;
  /**
   * @remarks
   * Small image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020675.jpg
   */
  small?: string;
  /**
   * @remarks
   * Indicates whether cropping can be performed using OSS rules.
   * 
   * @example
   * false
   */
  canResize?: boolean;
  static names(): { [key: string]: string } {
    return {
      img: 'Img',
      large: 'Large',
      mediam: 'Mediam',
      medium: 'Medium',
      small: 'Small',
      canResize: 'canResize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      img: 'string',
      large: 'string',
      mediam: 'string',
      medium: 'string',
      small: 'string',
      canResize: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResultOpenDataItemList extends $dara.Model {
  /**
   * @remarks
   * Alias
   */
  alias?: string[];
  /**
   * @remarks
   * Is audition available
   * 
   * @example
   * true
   */
  audition?: boolean;
  /**
   * @remarks
   * author information
   */
  authors?: ListCateContentResponseBodyResultOpenDataItemListAuthors[];
  /**
   * @remarks
   * Transform controlType based on the assigned public category
   * 
   * @example
   * audio
   */
  category?: string;
  /**
   * @remarks
   * Whether it is charged
   * 
   * @example
   * false
   */
  charge?: boolean;
  /**
   * @remarks
   * Category ID
   * 
   * @example
   * 80012017
   */
  commCateId?: string;
  /**
   * @remarks
   * Album thumbnail image
   */
  cover?: ListCateContentResponseBodyResultOpenDataItemListCover;
  /**
   * @remarks
   * Content description
   * 
   * @example
   * 作者：月不醉 简介：啥，假冒你男友？退役兵王回归都市后做了一名小保安，机缘巧合下却被冷艳女总拉去客串男友，从此之后，他与冷艳老总开始纠缠不清···拳打恶一代，脚踩高富帅，哥哥我专治各种不服。面对各类的阴谋阳谋，面对各种黑恶势力，且看哥如何称霸都市，踏上巅峰！
   */
  description?: string;
  /**
   * @remarks
   * Popularity score
   * 
   * @example
   * 0
   */
  hotScore?: number;
  /**
   * @remarks
   * Type of content, such as music, audio, radio, jokes, etc.
   * 
   * @example
   * ALBUM
   */
  itemType?: string;
  /**
   * @remarks
   * Third-party ID of the album
   * 
   * @example
   * 206775
   */
  rawId?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * qingting
   */
  source?: string;
  /**
   * @remarks
   * Title
   * 
   * @example
   * 超能狂少在都市
   */
  title?: string;
  /**
   * @remarks
   * Transform favoriteType based on the associated public category.
   * 
   * @example
   * program
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the content is playable.
   * 
   * @example
   * VALID
   */
  valid?: string;
  /**
   * @remarks
   * Primary key ID
   * 
   * @example
   * 26152778
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      audition: 'Audition',
      authors: 'Authors',
      category: 'Category',
      charge: 'Charge',
      commCateId: 'CommCateId',
      cover: 'Cover',
      description: 'Description',
      hotScore: 'HotScore',
      itemType: 'ItemType',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
      id: 'id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListCateContentResponseBodyResultOpenDataItemListAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'string',
      cover: ListCateContentResponseBodyResultOpenDataItemListCover,
      description: 'string',
      hotScore: 'number',
      itemType: 'string',
      rawId: 'string',
      source: 'string',
      title: 'string',
      type: 'string',
      valid: 'string',
      id: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alias)) {
      $dara.Model.validateArray(this.alias);
    }
    if(Array.isArray(this.authors)) {
      $dara.Model.validateArray(this.authors);
    }
    if(this.cover && typeof (this.cover as any).validate === 'function') {
      (this.cover as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 1
   */
  currentPageNum?: number;
  /**
   * @remarks
   * Data information
   */
  openDataItemList?: ListCateContentResponseBodyResultOpenDataItemList[];
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 12002
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPageNum: 'CurrentPageNum',
      openDataItemList: 'OpenDataItemList',
      pageSize: 'PageSize',
      totalSize: 'TotalSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPageNum: 'number',
      openDataItemList: { 'type': 'array', 'itemType': ListCateContentResponseBodyResultOpenDataItemList },
      pageSize: 'number',
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.openDataItemList)) {
      $dara.Model.validateArray(this.openDataItemList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCateContentResponseBody extends $dara.Model {
  /**
   * @remarks
   * code encoding
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * message information
   * 
   * @example
   * sucess
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result
   */
  result?: ListCateContentResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListCateContentResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

