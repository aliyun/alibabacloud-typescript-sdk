// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyNodePoolAmountResponseBodyData } from "./ModifyNodePoolAmountResponseBodyData";


export class ModifyNodePoolAmountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ModifyNodePoolAmountResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
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
      data: ModifyNodePoolAmountResponseBodyData,
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

