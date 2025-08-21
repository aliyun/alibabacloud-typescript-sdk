// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCateContentResponseBodyResultOpenDataItemListAuthorsCover extends $dara.Model {
  /**
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @example
   * https://a.jpg
   */
  img?: string;
  /**
   * @example
   * https://a.jpg
   */
  large?: string;
  /**
   * @example
   * https://a.jpg
   */
  mediam?: string;
  /**
   * @example
   * https://a.jpg
   */
  medium?: string;
  /**
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
  authorTypes?: string[];
  cover?: ListCateContentResponseBodyResultOpenDataItemListAuthorsCover;
  description?: string;
  /**
   * @example
   * MALE
   */
  gender?: string;
  /**
   * @example
   * 13597709
   */
  id?: number;
  /**
   * @example
   * true
   */
  online?: boolean;
  /**
   * @example
   * 123123
   */
  rawId?: string;
  /**
   * @example
   * qingting
   */
  source?: string;
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
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  img?: string;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718275.jpg
   */
  large?: string;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718275.jpg
   */
  mediam?: string;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/20170207175.jpg
   */
  medium?: string;
  /**
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020675.jpg
   */
  small?: string;
  /**
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
  alias?: string[];
  /**
   * @example
   * true
   */
  audition?: boolean;
  authors?: ListCateContentResponseBodyResultOpenDataItemListAuthors[];
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
  commCateId?: string;
  cover?: ListCateContentResponseBodyResultOpenDataItemListCover;
  description?: string;
  /**
   * @example
   * 0
   */
  hotScore?: number;
  /**
   * @example
   * ALBUM
   */
  itemType?: string;
  /**
   * @example
   * 206775
   */
  rawId?: string;
  /**
   * @example
   * qingting
   */
  source?: string;
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
  /**
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
   * @example
   * 1
   */
  currentPageNum?: number;
  openDataItemList?: ListCateContentResponseBodyResultOpenDataItemList[];
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
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
   * @example
   * 200
   */
  code?: number;
  /**
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

