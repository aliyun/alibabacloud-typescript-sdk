// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchContentResponseBodyResultAuthorsCover extends $dara.Model {
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
   * Medium image
   * 
   * @example
   * https://a.jpg
   */
  medium?: string;
  /**
   * @remarks
   * Small image
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
  /**
   * @remarks
   * Author type
   */
  authorTypes?: string[];
  /**
   * @remarks
   * Profile picture
   */
  cover?: SearchContentResponseBodyResultAuthorsCover;
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
   * Author primary key ID
   * 
   * @example
   * 13597709
   */
  id?: number;
  /**
   * @remarks
   * Is online
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * Third-party author ID
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
   * @remarks
   * Indicates whether OSS rules can be used to crop the image
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
   * Medium image (Deprecated)
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  mediam?: string;
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
   * @remarks
   * The corresponding album ID
   * 
   * @example
   * 13123
   */
  albumId?: string;
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
   * false
   */
  audition?: boolean;
  /**
   * @remarks
   * Authors of the content
   */
  authors?: SearchContentResponseBodyResultAuthors[];
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
   * fasle
   */
  charge?: boolean;
  /**
   * @remarks
   * The corresponding category ID
   * 
   * @example
   * 80012017
   */
  commCateId?: number;
  /**
   * @remarks
   * Album thumbnail image
   */
  cover?: SearchContentResponseBodyResultCover;
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
   * Duration information
   * 
   * @example
   * 180
   */
  duration?: number;
  /**
   * @remarks
   * Popularity score
   * 
   * @example
   * 10
   */
  hotScore?: number;
  /**
   * @remarks
   * Content ID
   * 
   * @example
   * 13597709
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
   * Lyric information
   * 
   * @example
   * http://a1231.lrc
   */
  lyric?: string;
  /**
   * @remarks
   * Content sorting value
   * 
   * @example
   * 1
   */
  orderIndex?: string;
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
   * Music styles
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
   * Indicates whether the item is playable
   * 
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
   * return information
   */
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

