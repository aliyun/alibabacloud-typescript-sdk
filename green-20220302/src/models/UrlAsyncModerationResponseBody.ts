// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UrlAsyncModerationResponseBodyData } from "./UrlAsyncModerationResponseBodyData";


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

