// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecommendResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Author information
   */
  authors?: string[];
  /**
   * @remarks
   * Album thumbnail image
   * 
   * @example
   * http://img4.kuwo.cn/star/albumcover/120/78/77/1688821132.jpg
   */
  cover?: string;
  /**
   * @remarks
   * Third-party ID of the content
   * 
   * @example
   * 550144364
   */
  rawId?: string;
  /**
   * @remarks
   * Source of the content
   * 
   * @example
   * KG
   */
  source?: string;
  /**
   * @remarks
   * Content title
   * 
   * @example
   * 稻香
   */
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
   * @remarks
   * Return code of the invocation
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * If an error occurs, the error message will be output.
   * 
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
  /**
   * @remarks
   * Request result.
   */
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

