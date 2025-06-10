// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CalcBMDResponseBodyData } from "./CalcBmdresponseBodyData";


export class CalcBMDResponseBody extends $dara.Model {
  data?: CalcBMDResponseBodyData;
  message?: string;
  /**
   * @example
   * B48DECE6-29FE-1967-92F1-2E072873851A
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
      data: CalcBMDResponseBodyData,
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

