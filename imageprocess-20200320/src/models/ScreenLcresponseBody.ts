// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenLCResponseBodyData } from "./ScreenLcresponseBodyData";


export class ScreenLCResponseBody extends $dara.Model {
  data?: ScreenLCResponseBodyData;
  message?: string;
  /**
   * @example
   * 473dbfb0-9cb7-e18e-450b-e4d0e4ce6c1c
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ScreenLCResponseBodyData,
      message: 'string',
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

