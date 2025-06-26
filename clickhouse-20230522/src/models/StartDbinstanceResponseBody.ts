// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartDBInstanceResponseBodyData } from "./StartDbinstanceResponseBodyData";


export class StartDBInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: StartDBInstanceResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F5178C10-1407-4987-9133-DE4DC9119F76
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
      data: StartDBInstanceResponseBodyData,
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

