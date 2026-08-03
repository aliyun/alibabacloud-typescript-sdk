// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlbumResponseBodyResultAuthors extends $dara.Model {
  /**
   * @remarks
   * Author types
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
   * 13123
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
   * qignting
   */
  source?: string;
  /**
   * @remarks
   * Author title
   * 
   * @example
   * 超能狂少在都市
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

export class GetAlbumResponseBodyResultCover extends $dara.Model {
  /**
   * @remarks
   * Indicates whether OSS rules can be used for cropping.
   * 
   * @example
   * false
   */
  canResize?: boolean;
  /**
   * @remarks
   * Default Image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  img?: string;
  /**
   * @remarks
   * Large Image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  large?: string;
  /**
   * @remarks
   * Medium Image
   * 
   * @example
   * http://pic.qtfm.cn/2017/0207/2017020718285.jpg
   */
  medium?: string;
  /**
   * @remarks
   * Small Image
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

export class GetAlbumResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Alias
   */
  alias?: string[];
  /**
   * @remarks
   * Is auditionable
   * 
   * @example
   * false
   */
  audition?: boolean;
  /**
   * @remarks
   * Author information
   */
  authors?: GetAlbumResponseBodyResultAuthors[];
  /**
   * @remarks
   * Transform controlType based on the public category it belongs to
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
  cover?: GetAlbumResponseBodyResultCover;
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
   * Is finished
   * 
   * @example
   * FINISHED
   */
  finished?: string;
  /**
   * @remarks
   * Popularity Score
   * 
   * @example
   * 10
   */
  hotScore?: number;
  /**
   * @remarks
   * Album ID
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
   * Third-party ID
   * 
   * @example
   * 23242
   */
  rawId?: string;
  /**
   * @remarks
   * Source
   * 
   * @example
   * qignting
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
   * Total number of episodes
   * 
   * @example
   * 12
   */
  totalEpisode?: number;
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
   * Indicates whether the album is playable.
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
   * @remarks
   * Code encoding
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * F12B6147-5925-19E5-A3AD-E1EE1360F34E
   */
  requestId?: string;
  /**
   * @remarks
   * Return Result
   */
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

