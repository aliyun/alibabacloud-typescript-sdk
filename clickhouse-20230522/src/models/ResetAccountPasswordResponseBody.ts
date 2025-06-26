// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResetAccountPasswordResponseBodyData } from "./ResetAccountPasswordResponseBodyData";


export class ResetAccountPasswordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned.
   */
  data?: ResetAccountPasswordResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A6A077A-577C-536E-AC13-8E715D7A34C8
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
      data: ResetAccountPasswordResponseBodyData,
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

