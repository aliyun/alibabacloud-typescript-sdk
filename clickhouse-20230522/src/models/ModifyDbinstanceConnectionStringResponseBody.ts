// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDBInstanceConnectionStringResponseBodyData } from "./ModifyDbinstanceConnectionStringResponseBodyData";


export class ModifyDBInstanceConnectionStringResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ModifyDBInstanceConnectionStringResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx-xxx-xxx
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
      data: ModifyDBInstanceConnectionStringResponseBodyData,
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

