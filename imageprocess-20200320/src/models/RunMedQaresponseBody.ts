// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMedQAResponseBodyData } from "./RunMedQaresponseBodyData";


export class RunMedQAResponseBody extends $dara.Model {
  data?: RunMedQAResponseBodyData;
  /**
   * @example
   * BFF7EEC3-F6B5-4387-AC1D-BB095A1A02E4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RunMedQAResponseBodyData,
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

