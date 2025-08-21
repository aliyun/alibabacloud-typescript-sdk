// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlbumResponseBodyResultAuthors extends $dara.Model {
  authorTypes?: string[];
  /**
   * @example
   * MALE
   */
  gender?: string;
  /**
   * @example
   * 13123
   */
  id?: number;
  /**
   * @example
   * false
   */
  online?: boolean;
  /**
   * @example
   * qignting
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

export class GetAlbumResponseBodyResultCover extends $dara.Model {
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

export class GetAlbumResponseBodyResult extends $dara.Model {
  alias?: string[];
  /**
   * @example
   * false
   */
  audition?: boolean;
  authors?: GetAlbumResponseBodyResultAuthors[];
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
  cover?: GetAlbumResponseBodyResultCover;
  description?: string;
  /**
   * @example
   * FINISHED
   */
  finished?: string;
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
   * 23242
   */
  rawId?: string;
  /**
   * @example
   * qignting
   */
  source?: string;
  title?: string;
  /**
   * @example
   * 12
   */
  totalEpisode?: number;
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
      finished: 'Finished',
      hotScore: 'HotScore',
      id: 'Id',
      itemType: 'ItemType',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
      totalEpisode: 'TotalEpisode',
      type: 'Type',
      valid: 'Valid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: { 'type': 'array', 'itemType': 'string' },
      audition: 'boolean',
      authors: { 'type': 'array', 'itemType': GetAlbumResponseBodyResultAuthors },
      category: 'string',
      charge: 'boolean',
      commCateId: 'number',
      cover: GetAlbumResponseBodyResultCover,
      description: 'string',
      finished: 'string',
      hotScore: 'number',
      id: 'number',
      itemType: 'string',
      rawId: 'string',
      source: 'string',
      title: 'string',
      totalEpisode: 'number',
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

export class GetAlbumResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  result?: GetAlbumResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      requestId: 'string',
      result: GetAlbumResponseBodyResult,
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

