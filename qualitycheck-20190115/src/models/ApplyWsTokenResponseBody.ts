// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ApplyWsTokenResponseBodyData } from "./ApplyWsTokenResponseBodyData";


export class ApplyWsTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: ApplyWsTokenResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 6987D326-83D9-4A42-B9A5-0B27F9B40539
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ApplyWsTokenResponseBodyData,
      httpStatusCode: 'number',
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

