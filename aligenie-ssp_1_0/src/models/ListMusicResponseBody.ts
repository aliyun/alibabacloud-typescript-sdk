// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMusicResponseBodyResultModel extends $dara.Model {
  /**
   * @example
   * 1
   */
  musicId?: number;
  /**
   * @example
   * xx
   */
  musicName?: string;
  /**
   * @example
   * 1
   */
  musicType?: number;
  /**
   * @example
   * xx
   */
  musicTypeName?: string;
  /**
   * @example
   * http://xx
   */
  musicUrl?: string;
  static names(): { [key: string]: string } {
    return {
      musicId: 'MusicId',
      musicName: 'MusicName',
      musicType: 'MusicType',
      musicTypeName: 'MusicTypeName',
      musicUrl: 'MusicUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      musicId: 'number',
      musicName: 'string',
      musicType: 'number',
      musicTypeName: 'string',
      musicUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  model?: ListMusicResponseBodyResultModel[];
  /**
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      model: 'Model',
      pageCount: 'PageCount',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      model: { 'type': 'array', 'itemType': ListMusicResponseBodyResultModel },
      pageCount: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.model)) {
      $dara.Model.validateArray(this.model);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMusicResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  /**
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  result?: ListMusicResponseBodyResult;
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
      result: ListMusicResponseBodyResult,
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

