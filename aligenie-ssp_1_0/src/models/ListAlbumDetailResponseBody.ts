// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlbumDetailResponseBodyResultOpenDataItemListAuthors extends $dara.Model {
  /**
   * @remarks
   * Author type
   */
  authorTypes?: string[];
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
   * Primary key ID of the author
   * 
   * @example
   * 12314
   */
  id?: number;
  /**
   * @remarks
   * Whether the author is online
   * 
   * @example
   * false
   */
  online?: boolean;
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
      gender: 'Gender',
      id: 'Id',
      online: 'Online',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorTypes: { 'type': 'array', 'itemType': 'string' },
      gender: 'string',
      id: 'number',
      online: 'boolean',
      source: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorTypes)) {
      $dara.Model.validateArray(this.authorTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBodyResultOpenDataItemListCover extends $dara.Model {
  /**
   * @remarks
   * Indicates whether OSS rules can be used for cropping
   * 
   * @example
   * false
   */
  canResize?: boolean;
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
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  large?: string;
  /**
   * @remarks
   * Medium image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  medium?: string;
  /**
   * @remarks
   * Small image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  small?: string;
  static names(): { [key: string]: string } {
    return {
      canResize: 'CanResize',
      img: 'Img',
      large: 'Large',
      medium: 'Medium',
      small: 'Small',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canResize: 'boolean',
      img: 'string',
      large: 'string',
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

export class ListAlbumDetailResponseBodyResultOpenDataItemList extends $dara.Model {
  /**
   * @remarks
   * Alias
   */
  alias?: string[];
  /**
   * @remarks
   * Indicates whether the content is available for audition
   * 
   * @example
   * false
   */
  audition?: boolean;
  /**
   * @remarks
   * Author of the content
   */
  authors?: ListAlbumDetailResponseBodyResultOpenDataItemListAuthors[];
  /**
   * @remarks
   * Transform controlType based on the associated public category
   * 
   * @example
   * audio
   */
  category?: string;
  /**
   * @remarks
   * Is charged
   * 
   * @example
   * false
   */
  charge?: boolean;
  /**
   * @remarks
   * category ID
   * 
   * @example
   * 80012017
   */
  commCateId?: number;
  /**
   * @remarks
   * Content thumbnail
   */
  cover?: ListAlbumDetailResponseBodyResultOpenDataItemListCover;
  /**
   * @remarks
   * Content description
   * 
   * @example
   * 内容描述
   */
  description?: string;
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 180
   */
  duration?: number;
  /**
   * @remarks
   * popularity score
   * 
   * @example
   * 10
   */
  hotScore?: number;
  /**
   * @remarks
   * content ID
   * 
   * @example
   * 1231231
   */
  id?: number;
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
   * OrderIndex sequence
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * Third-party ID
   * 
   * @example
   * 12323423
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
   * style
   */
  styles?: string[];
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
   * Transform favoriteType based on the associated public category
   * 
   * @example
   * program
   */
  type?: string;
  /**
   * @remarks
   * Indicates whether the content is playable
   * 
   * @example
   * VALID
   */
  valid?: string;
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
      duration: 'Duration',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      orderIndex: 'OrderIndex',
      rawId: 'RawId',
      source: 'Source',
      styles: 'Styles',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListAlbumDetailResponseBodyResultOpenDataItemListAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: ListAlbumDetailResponseBodyResultOpenDataItemListCover,
      description: 'string',
      duration: 'number',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      orderIndex: 'number',
      rawId: 'string',
      source: 'string',
      styles: { 'type': 'array', 'itemType': 'string' },
      title: 'string',
      type: 'string',
      valid: 'string',
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
    if(Array.isArray(this.styles)) {
      $dara.Model.validateArray(this.styles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAlbumDetailResponseBodyResult extends $dara.Model {
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
  openDataItemList?: ListAlbumDetailResponseBodyResultOpenDataItemList[];
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
   * total number of records
   * 
   * @example
   * 21421
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
      openDataItemList: { 'type': 'array', 'itemType': ListAlbumDetailResponseBodyResultOpenDataItemList },
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

export class ListAlbumDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Code encoding
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Message information
   * 
   * @example
   * success
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
  result?: ListAlbumDetailResponseBodyResult;
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
      result: ListAlbumDetailResponseBodyResult,
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

