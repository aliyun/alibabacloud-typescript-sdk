// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContentResponseBodyResultAuthorsCover extends $dara.Model {
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

export class SearchContentResponseBodyResultAuthors extends $dara.Model {
  authorTypes?: string[];
  cover?: SearchContentResponseBodyResultAuthorsCover;
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
      cover: SearchContentResponseBodyResultAuthorsCover,
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

export class SearchContentResponseBodyResultCover extends $dara.Model {
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
  mediam?: string;
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

export class SearchContentResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 13123
   */
  albumId?: string;
  alias?: string[];
  /**
   * @example
   * false
   */
  audition?: boolean;
  authors?: SearchContentResponseBodyResultAuthors[];
  /**
   * @example
   * audio
   */
  category?: string;
  /**
   * @example
   * fasle
   */
  charge?: boolean;
  /**
   * @example
   * 80012017
   */
  commCateId?: number;
  cover?: SearchContentResponseBodyResultCover;
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
   * 13597709
   */
  id?: number;
  /**
   * @example
   * ALBUM
   */
  itemType?: string;
  /**
   * @example
   * http://a1231.lrc
   */
  lyric?: string;
  /**
   * @example
   * 1
   */
  orderIndex?: string;
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
      albumId: 'AlbumId',
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
      lyric: 'Lyric',
      orderIndex: 'OrderIndex',
      source: 'Source',
      styles: 'Styles',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumId: 'string',
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': SearchContentResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: SearchContentResponseBodyResultCover,
      description: 'string',
      duration: 'number',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      lyric: 'string',
      orderIndex: 'string',
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

export class SearchContentResponseBody extends $dara.Model {
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
  result?: SearchContentResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': SearchContentResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

