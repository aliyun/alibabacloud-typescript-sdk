// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageAsyncModerationResponseBodyData } from "./ImageAsyncModerationResponseBodyData";


export class ImageAsyncModerationResponseBody extends $dara.Model {
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
  data?: ImageAsyncModerationResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 4A926AE2-4C96-573F-824F-0532960799F8
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
      data: ImageAsyncModerationResponseBodyData,
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

