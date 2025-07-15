// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendLikeResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The number of likes.
   * 
   * @example
   * 10
   */
  likeCount?: number;
  static names(): { [key: string]: string } {
    return {
      likeCount: 'LikeCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      likeCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendLikeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 16A96B9A-****-CB92E68F4CD8
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: SendLikeResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: SendLikeResponseBodyResult,
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

