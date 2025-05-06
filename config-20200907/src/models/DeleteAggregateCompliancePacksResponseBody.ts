// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult } from "./DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult";


export class DeleteAggregateCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The results of the delete operations.
   */
  operateCompliancePacksResult?: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCompliancePacksResult: 'OperateCompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCompliancePacksResult: DeleteAggregateCompliancePacksResponseBodyOperateCompliancePacksResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.operateCompliancePacksResult && typeof (this.operateCompliancePacksResult as any).validate === 'function') {
      (this.operateCompliancePacksResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

