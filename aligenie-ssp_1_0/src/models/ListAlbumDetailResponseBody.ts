// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlbumDetailResponseBodyResultOpenDataItemListAuthors extends $dara.Model {
  authorTypes?: string[];
  /**
   * @example
   * MALE
   */
  gender?: string;
  /**
   * @example
   * 12314
   */
  id?: number;
  /**
   * @example
   * false
   */
  online?: boolean;
  /**
   * @example
   * qingting
   */
  source?: string;
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
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  img?: string;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  large?: string;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  medium?: string;
  /**
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
  alias?: string[];
  /**
   * @example
   * false
   */
  audition?: boolean;
  authors?: ListAlbumDetailResponseBodyResultOpenDataItemListAuthors[];
  /**
   * @example
   * audio
   */
  category?: string;
  /**
   * @example
   * false
   */
  charge?: boolean;
  /**
   * @example
   * 80012017
   */
  commCateId?: number;
  cover?: ListAlbumDetailResponseBodyResultOpenDataItemListCover;
  description?: string;
  /**
   * @example
   * 180
   */
  duration?: number;
  /**
   * @example
   * 10
   */
  hotScore?: number;
  /**
   * @example
   * 1231231
   */
  id?: number;
  /**
   * @example
   * ALBUM
   */
  itemType?: string;
  /**
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @example
   * 12323423
   */
  rawId?: string;
  /**
   * @example
   * qingting
   */
  source?: string;
  styles?: string[];
  title?: string;
  /**
   * @example
   * program
   */
  type?: string;
  /**
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
   * @example
   * 1
   */
  currentPageNum?: number;
  openDataItemList?: ListAlbumDetailResponseBodyResultOpenDataItemList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
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

