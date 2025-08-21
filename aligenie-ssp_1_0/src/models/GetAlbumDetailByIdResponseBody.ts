// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlbumDetailByIdResponseBodyResultAlbumContentList extends $dara.Model {
  /**
   * @example
   * 3分24秒
   */
  duration?: string;
  /**
   * @example
   * 468009044
   */
  id?: string;
  /**
   * @example
   * 1000
   */
  orderIndex?: string;
  /**
   * @example
   * 001为什么肚子饿时会咕咕叫
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      id: 'Id',
      orderIndex: 'OrderIndex',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'string',
      id: 'string',
      orderIndex: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdResponseBodyResult extends $dara.Model {
  albumContentList?: GetAlbumDetailByIdResponseBodyResultAlbumContentList[];
  /**
   * @example
   * https://ailabs.alibabausercontent.com/images/8838/1600839452498.jpg
   */
  albumCoverUrl?: string;
  /**
   * @example
   * 每次一个百科知识或者故事\n丰富孩子的视野，拓展眼界和知识面，培养和孩子的探究能力和好奇心\n\n
   */
  albumDescription?: string;
  /**
   * @example
   * 51999575
   */
  albumId?: string;
  /**
   * @example
   * 小科学家探索
   */
  albumTitle?: string;
  static names(): { [key: string]: string } {
    return {
      albumContentList: 'AlbumContentList',
      albumCoverUrl: 'AlbumCoverUrl',
      albumDescription: 'AlbumDescription',
      albumId: 'AlbumId',
      albumTitle: 'AlbumTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      albumContentList: { 'type': 'array', 'itemType': GetAlbumDetailByIdResponseBodyResultAlbumContentList },
      albumCoverUrl: 'string',
      albumDescription: 'string',
      albumId: 'string',
      albumTitle: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.albumContentList)) {
      $dara.Model.validateArray(this.albumContentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAlbumDetailByIdResponseBody extends $dara.Model {
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
   * @example
   * A0B7CACD-485B-14E2-854F-39EACB09E45B
   */
  requestId?: string;
  result?: GetAlbumDetailByIdResponseBodyResult;
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
      result: GetAlbumDetailByIdResponseBodyResult,
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

