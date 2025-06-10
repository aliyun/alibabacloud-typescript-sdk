// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScreenECResponseBodyData } from "./ScreenEcresponseBodyData";


export class ScreenECResponseBody extends $dara.Model {
  data?: ScreenECResponseBodyData;
  message?: string;
  /**
   * @example
   * 9B65AC8E-311A-1ED1-BBE6-6AA6D35D31A6
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
      data: ScreenECResponseBodyData,
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

