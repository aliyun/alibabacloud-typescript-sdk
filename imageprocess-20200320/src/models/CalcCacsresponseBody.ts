// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CalcCACSResponseBodyData } from "./CalcCacsresponseBodyData";


export class CalcCACSResponseBody extends $dara.Model {
  data?: CalcCACSResponseBodyData;
  message?: string;
  /**
   * @example
   * 6797D285-9290-4FBB-9742-AA1E286EF3B9
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
      data: CalcCACSResponseBodyData,
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

