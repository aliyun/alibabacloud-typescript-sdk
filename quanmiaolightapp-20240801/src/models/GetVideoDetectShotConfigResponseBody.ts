// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoDetectShotConfigResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2
   */
  asyncConcurrency?: number;
  static names(): { [key: string]: string } {
    return {
      asyncConcurrency: 'asyncConcurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asyncConcurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVideoDetectShotConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 200
   */
  code?: string;
  data?: GetVideoDetectShotConfigResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * msg
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * xxx
   */
  requestId?: string;
  /**
   * @remarks
   * success
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetVideoDetectShotConfigResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

