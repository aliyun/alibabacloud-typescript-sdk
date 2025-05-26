// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StartSparkReplSessionResponseBodyData } from "./StartSparkReplSessionResponseBodyData";


export class StartSparkReplSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: StartSparkReplSessionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1797FEA-B7D6-5ED6-A24B-2C8C5F4D7361
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
      data: StartSparkReplSessionResponseBodyData,
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

