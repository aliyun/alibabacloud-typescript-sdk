// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunCTRegistrationResponseBodyData } from "./RunCtregistrationResponseBodyData";


export class RunCTRegistrationResponseBody extends $dara.Model {
  data?: RunCTRegistrationResponseBodyData;
  message?: string;
  /**
   * @example
   * EB3ACFE6-EA75-49E1-83C0-953580F74D88
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
      data: RunCTRegistrationResponseBodyData,
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

