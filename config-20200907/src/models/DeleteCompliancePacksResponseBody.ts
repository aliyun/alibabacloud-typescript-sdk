// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteCompliancePacksResponseBodyOperateCompliancePacksResult } from "./DeleteCompliancePacksResponseBodyOperateCompliancePacksResult";


export class DeleteCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  operateCompliancePacksResult?: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult;
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
      operateCompliancePacksResult: DeleteCompliancePacksResponseBodyOperateCompliancePacksResult,
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

