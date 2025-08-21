// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlayHistoryResponseBodyResultAuthorsCover extends $dara.Model {
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

export class ListPlayHistoryResponseBodyResultAuthors extends $dara.Model {
  authorTypes?: string[];
  cover?: ListPlayHistoryResponseBodyResultAuthorsCover;
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
   * false
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

export class ListPlayHistoryResponseBodyResult extends $dara.Model {
  alias?: string[];
  /**
   * @example
   * false
   */
  audition?: boolean;
  authors?: ListPlayHistoryResponseBodyResultAuthors[];
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
  cover?: ListPlayHistoryResponseBodyResultCover;
  description?: string;
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
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * success
   */
  message?: string;
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

