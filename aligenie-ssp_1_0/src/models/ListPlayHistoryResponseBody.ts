// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlayHistoryResponseBodyResultAuthorsCover extends $dara.Model {
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

export class ListPlayHistoryResponseBodyResultAuthors extends $dara.Model {
  /**
   * @remarks
   * Author types
   */
  authorTypes?: string[];
  /**
   * @remarks
   * Profile picture
   */
  cover?: ListPlayHistoryResponseBodyResultAuthorsCover;
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
   * false
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
      cover: ListPlayHistoryResponseBodyResultAuthorsCover,
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

export class ListPlayHistoryResponseBodyResultCover extends $dara.Model {
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

export class ListPlayHistoryResponseBodyResult extends $dara.Model {
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
  authors?: ListPlayHistoryResponseBodyResultAuthors[];
  /**
   * @remarks
   * Transform controlType based on the category
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
   * Category ID
   * 
   * @example
   * 80012017
   */
  commCateId?: number;
  /**
   * @remarks
   * Album cover image
   */
  cover?: ListPlayHistoryResponseBodyResultCover;
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
   * Hot Score
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
   * Convert to favoriteType based on the associated public category
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
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      source: 'Source',
      title: 'Title',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': ListPlayHistoryResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: ListPlayHistoryResponseBodyResultCover,
      description: 'string',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      source: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlayHistoryResponseBody extends $dara.Model {
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
   * Return Result
   */
  result?: ListPlayHistoryResponseBodyResult[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      result: 'Result',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      result: { 'type': 'array', 'itemType': ListPlayHistoryResponseBodyResult },
      requestId: 'string',
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

