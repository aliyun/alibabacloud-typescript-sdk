// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCartoonResponseBodyResult extends $dara.Model {
  /**
   * @example
   * https://ai***.mp4
   */
  startVideoMd5?: string;
  /**
   * @example
   * 40c8***97
   */
  startVideoUrl?: string;
  static names(): { [key: string]: string } {
    return {
      startVideoMd5: 'StartVideoMd5',
      startVideoUrl: 'StartVideoUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startVideoMd5: 'string',
      startVideoUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCartoonResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * 0EC7*726E
   */
  requestId?: string;
  result?: GetCartoonResponseBodyResult;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      requestId: 'string',
      result: GetCartoonResponseBodyResult,
      statusCode: 'number',
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

