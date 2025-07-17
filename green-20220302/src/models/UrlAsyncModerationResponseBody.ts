// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UrlAsyncModerationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the moderated object.
   * 
   * @example
   * 26769ada6e264e7ba9aa048241e12be9
   */
  dataId?: string;
  /**
   * @remarks
   * The reqId field returned by the Url Async Moderation API.
   * 
   * @example
   * A07B3DB9-D762-5C56-95B1-8EC55CF176D2
   */
  reqId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      reqId: 'ReqId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      reqId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UrlAsyncModerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   */
  data?: UrlAsyncModerationResponseBodyData;
  /**
   * @remarks
   * The message that is returned in response to the request.
   * 
   * @example
   * success
   */
  msg?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6CF2815C-****-****-B52E-FF6E2****492
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      msg: 'Msg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: UrlAsyncModerationResponseBodyData,
      msg: 'string',
      requestId: 'string',
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

