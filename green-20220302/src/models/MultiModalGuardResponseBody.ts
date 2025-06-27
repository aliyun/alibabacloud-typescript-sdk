// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MultiModalGuardResponseBodyData } from "./MultiModalGuardResponseBodyData";


export class MultiModalGuardResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  data?: MultiModalGuardResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: MultiModalGuardResponseBodyData,
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

