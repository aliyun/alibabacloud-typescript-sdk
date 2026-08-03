// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContentResponseBodyResultAuthors extends $dara.Model {
  /**
   * @remarks
   * author type
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
   * Author primary key ID
   * 
   * @example
   * 123123
   */
  id?: number;
  /**
   * @remarks
   * Is online
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

export class GetContentResponseBodyResultCover extends $dara.Model {
  /**
   * @remarks
   * Indicates whether OSS rules can be used to crop the image.
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

export class GetContentResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * ID of the corresponding album
   * 
   * @example
   * 1231
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
   * Content authors
   */
  authors?: GetContentResponseBodyResultAuthors[];
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
   * is charged
   * 
   * @example
   * false
   */
  charge?: boolean;
  /**
   * @remarks
   * ID of the corresponding category
   * 
   * @example
   * 80012017
   */
  commCateId?: number;
  /**
   * @remarks
   * album thumbnail image
   */
  cover?: GetContentResponseBodyResultCover;
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
   * duration information
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
   * 内容描述
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
   * http://1231.lrc
   */
  lyric?: string;
  /**
   * @remarks
   * third-party ID of the content
   * 
   * @example
   * 1231231
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
   * Genre
   */
  styles?: string[];
  /**
   * @remarks
   * title
   * 
   * @example
   * 超能狂少在都市
   */
  title?: string;
  /**
   * @remarks
   * Transform to favoriteType based on the associated public category
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
      albumId: 'string',
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': GetContentResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: GetContentResponseBodyResultCover,
      description: 'string',
      duration: 'number',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      lyric: 'string',
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

export class GetContentResponseBody extends $dara.Model {
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
   * Request RequestId
   * 
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result
   */
  result?: GetContentResponseBodyResult;
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
      result: GetContentResponseBodyResult,
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

