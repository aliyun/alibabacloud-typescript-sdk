// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BindProduceAuthorizationResponseBodyData } from "./BindProduceAuthorizationResponseBodyData";


export class BindProduceAuthorizationResponseBody extends $dara.Model {
  data?: BindProduceAuthorizationResponseBodyData;
  /**
   * @example
   * 200
   */
  errorCode?: string;
  errorMsg?: string;
  /**
   * @example
   * AC492C5D-29D0-5103-9271-2C3A9D99F5CA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: BindProduceAuthorizationResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
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

