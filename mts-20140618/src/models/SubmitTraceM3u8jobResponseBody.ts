// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitTraceM3u8JobResponseBodyData } from "./SubmitTraceM3u8jobResponseBodyData";


export class SubmitTraceM3u8JobResponseBody extends $dara.Model {
  data?: SubmitTraceM3u8JobResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * DEB915C5-D001-5C17-AF65-FF8A65DFE432
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
      data: SubmitTraceM3u8JobResponseBodyData,
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

