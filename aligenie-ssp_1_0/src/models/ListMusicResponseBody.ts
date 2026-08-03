// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMusicResponseBodyResultModel extends $dara.Model {
  /**
   * @remarks
   * Ringtone ID
   * 
   * @example
   * 1
   */
  musicId?: number;
  /**
   * @remarks
   * Ringtone name
   * 
   * @example
   * xx
   */
  musicName?: string;
  /**
   * @remarks
   * Ringtone category ID
   * 
   * @example
   * 1
   */
  musicType?: number;
  /**
   * @remarks
   * Ringtone category name
   * 
   * @example
   * xx
   */
  musicTypeName?: string;
  /**
   * @remarks
   * Ringtone URL
   * 
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
   * @remarks
   * Current page
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of ringtones
   */
  model?: ListMusicResponseBodyResultModel[];
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 10
   */
  pageCount?: number;
  /**
   * @remarks
   * Number of entries per page: maximum value is 100; values exceeding 100 are treated as 100
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Total number of entries
   * 
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
   * @remarks
   * Status code returned by the alarm service
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * error message
   * 
   * @example
   * 音乐类型名称为空
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 43***28C-A810-5***-8747-EC226A086881
   */
  requestId?: string;
  /**
   * @remarks
   * collection of ringtone query results
   */
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

