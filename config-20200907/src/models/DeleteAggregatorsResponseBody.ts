// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAggregatorsResponseBodyOperateAggregatorsResult } from "./DeleteAggregatorsResponseBodyOperateAggregatorsResult";


export class DeleteAggregatorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  operateAggregatorsResult?: DeleteAggregatorsResponseBodyOperateAggregatorsResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8195B664-9565-4685-89AC-8B5F04B44B92
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateAggregatorsResult: 'OperateAggregatorsResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateAggregatorsResult: DeleteAggregatorsResponseBodyOperateAggregatorsResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateAggregatorsResult && typeof (this.operateAggregatorsResult as any).validate === 'function') {
      (this.operateAggregatorsResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

