// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SwitchoverInstanceResponseBodyData } from "./SwitchoverInstanceResponseBodyData";


export class SwitchoverInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data for the switchover.
   */
  data?: SwitchoverInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469**-AA6F-4D**-B3DB-A***********
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
      data: SwitchoverInstanceResponseBodyData,
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

