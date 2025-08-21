// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecommendResponseBodyResult extends $dara.Model {
  authors?: string[];
  /**
   * @example
   * http://img4.kuwo.cn/star/albumcover/120/78/77/1688821132.jpg
   */
  cover?: string;
  /**
   * @example
   * 550144364
   */
  rawId?: string;
  /**
   * @example
   * KG
   */
  source?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      authors: 'Authors',
      cover: 'Cover',
      rawId: 'RawId',
      source: 'Source',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authors: { 'type': 'array', 'itemType': 'string' },
      cover: 'string',
      rawId: 'string',
      source: 'string',
      title: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authors)) {
      $dara.Model.validateArray(this.authors);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MobileRecommendResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5C5809B4-F465-52E0-9A8B-61396F9E593B
   */
  requestId?: string;
  result?: MobileRecommendResponseBodyResult[];
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
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': MobileRecommendResponseBodyResult },
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

