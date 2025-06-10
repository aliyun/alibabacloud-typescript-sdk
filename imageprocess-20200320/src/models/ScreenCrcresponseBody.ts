// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenCRCResponseBodyData } from "./ScreenCrcresponseBodyData";


export class ScreenCRCResponseBody extends $dara.Model {
  data?: ScreenCRCResponseBodyData;
  message?: string;
  /**
   * @example
   * 39C848F7-D814-1A06-AE0D-AFC706B9700F
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
      data: ScreenCRCResponseBodyData,
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

