// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScgSearchResponseBodyResultCover extends $dara.Model {
  /**
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  img?: string;
  /**
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  large?: string;
  /**
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  medium?: string;
  /**
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
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
      medium: 'Medium',
      small: 'Small',
      canResize: 'canResize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      img: 'string',
      large: 'string',
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

export class ScgSearchResponseBodyResult extends $dara.Model {
  /**
   * @example
   * false
   */
  album?: boolean;
  /**
   * @example
   * 1795716629
   */
  albumRawId?: string;
  /**
   * @example
   * 0
   */
  albumType?: number;
  alias?: string[];
  authorIds?: number[];
  authorNames?: string[];
  /**
   * @example
   * audio
   */
  category?: string;
  /**
   * @example
   * MUSIC_CONTENT
   */
  contentType?: string;
  cover?: ScgSearchResponseBodyResultCover;
  /**
   * @example
   * false
   */
  isAudition?: boolean;
  /**
   * @example
   * false
   */
  isCharge?: string;
  /**
   * @example
   * false
   */
  needCharge?: boolean;
  /**
   * @example
   * 1795716629
   */
  rawId?: string;
  singers?: string;
  /**
   * @example
   * xiami
   */
  source?: string;
  /**
   * @example
   * false
   */
  supportAudition?: boolean;
  title?: string;
  /**
   * @example
   * music
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      album: 'Album',
      albumRawId: 'AlbumRawId',
      albumType: 'AlbumType',
      alias: 'Alias',
      authorIds: 'AuthorIds',
      authorNames: 'AuthorNames',
      category: 'Category',
      contentType: 'ContentType',
      cover: 'Cover',
      isAudition: 'IsAudition',
      isCharge: 'IsCharge',
      needCharge: 'NeedCharge',
      rawId: 'RawId',
      singers: 'Singers',
      source: 'Source',
      supportAudition: 'SupportAudition',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      album: 'boolean',
      albumRawId: 'string',
      albumType: 'number',
      alias: { 'type': 'array', 'itemType': 'string' },
      authorIds: { 'type': 'array', 'itemType': 'number' },
      authorNames: { 'type': 'array', 'itemType': 'string' },
      category: 'string',
      contentType: 'string',
      cover: ScgSearchResponseBodyResultCover,
      isAudition: 'boolean',
      isCharge: 'string',
      needCharge: 'boolean',
      rawId: 'string',
      singers: 'string',
      source: 'string',
      supportAudition: 'boolean',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.alias)) {
      $dara.Model.validateArray(this.alias);
    }
    if(Array.isArray(this.authorIds)) {
      $dara.Model.validateArray(this.authorIds);
    }
    if(Array.isArray(this.authorNames)) {
      $dara.Model.validateArray(this.authorNames);
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

export class ScgSearchResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  result?: ScgSearchResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNum: 'number',
      pageSize: 'number',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ScgSearchResponseBodyResult },
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

