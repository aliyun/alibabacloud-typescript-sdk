// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScgSearchResponseBodyResultCover extends $dara.Model {
  /**
   * @remarks
   * Thumbnail image (Img, Large, Medium, and Small may not appear simultaneously; only one of them may be present)
   * 
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  img?: string;
  /**
   * @remarks
   * Large graph
   * 
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  large?: string;
  /**
   * @remarks
   * Medium image
   * 
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  medium?: string;
  /**
   * @remarks
   * Small image
   * 
   * @example
   * http://img.xiami.net/images/album/img59/56/58da2153e3133_2826959_1490690387.jpg
   */
  small?: string;
  /**
   * @remarks
   * Whether scaling is supported
   * 
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
   * @remarks
   * Whether it is an album
   * 
   * @example
   * false
   */
  album?: boolean;
  /**
   * @remarks
   * Album ID
   * 
   * @example
   * 1795716629
   */
  albumRawId?: string;
  /**
   * @remarks
   * Album type
   * 
   * @example
   * 0
   */
  albumType?: number;
  /**
   * @remarks
   * Alias
   */
  alias?: string[];
  /**
   * @remarks
   * Author ID
   */
  authorIds?: number[];
  /**
   * @remarks
   * Author names
   */
  authorNames?: string[];
  /**
   * @remarks
   * Category
   * 
   * @example
   * audio
   */
  category?: string;
  /**
   * @remarks
   * Content type
   * 
   * @example
   * MUSIC_CONTENT
   */
  contentType?: string;
  /**
   * @remarks
   * Thumbnail
   */
  cover?: ScgSearchResponseBodyResultCover;
  /**
   * @remarks
   * Whether audition is available
   * 
   * @example
   * false
   */
  isAudition?: boolean;
  /**
   * @remarks
   * Is charged
   * 
   * @example
   * false
   */
  isCharge?: string;
  /**
   * @remarks
   * Whether charging is required
   * 
   * @example
   * false
   */
  needCharge?: boolean;
  /**
   * @remarks
   * Third-party content ID
   * 
   * @example
   * 1795716629
   */
  rawId?: string;
  /**
   * @remarks
   * Singer name
   * 
   * @example
   * 黎偌天
   */
  singers?: string;
  /**
   * @remarks
   * Content source
   * 
   * @example
   * xiami
   */
  source?: string;
  /**
   * @remarks
   * Whether audition is supported
   * 
   * @example
   * false
   */
  supportAudition?: boolean;
  /**
   * @remarks
   * Content title
   * 
   * @example
   * 那个人
   */
  title?: string;
  /**
   * @remarks
   * Content type
   * 
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
   * @remarks
   * Status code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 73C67BD9-175A-1324-8202-9FAABBB3E6FA
   */
  requestId?: string;
  /**
   * @remarks
   * Detailed returned information.
   * 
   * @example
   * {"sourceId":0,"copyright":0,"releaseTime":1196438400000,"hotScore":0.9546929544543479,"tppExtendInfo":"{\\"userEvent\\":\\"前台投放\\",\\"scgTopicName\\":\\"inside民族中国风曲风音乐库\\",\\"scgTopicId\\":\\"MC201132\\"}","source":"xiami","title":"题帕三绝","type":"music","x1Pv30d":10307,"valid":10,"cover":{"img":"http://img.xiami.net/qianxun/07d8ec1a38a5462c3afbfac41413b8af/47244c25fcf3a8f67442d02e3127d023-500x432.jpg","canResize":false},"duration":0,"rawId":"1771626071","albumType":0,"alias":["题帕三绝"],"id":268033175,"supportAudition":false,"contentType":"MUSIC_CONTENT","authorIds":[],"singers":"陈力","albumRawId":"1771626071","album":false,"x1PvTotal":14676,"commCateId":80021001,"finished":0,"isAudition":false,"appIds":[],"authorNames":["陈力","王立平","曹雪芹"],"needCharge":false,"isCharge":false,"category":"audio"}
   */
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

