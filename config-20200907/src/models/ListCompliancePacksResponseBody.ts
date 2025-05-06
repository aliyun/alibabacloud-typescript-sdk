// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCompliancePacksResponseBodyCompliancePacksResult } from "./ListCompliancePacksResponseBodyCompliancePacksResult";


export class ListCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance packages returned.
   */
  compliancePacksResult?: ListCompliancePacksResponseBodyCompliancePacksResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePacksResult: 'CompliancePacksResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePacksResult: ListCompliancePacksResponseBodyCompliancePacksResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.compliancePacksResult && typeof (this.compliancePacksResult as any).validate === 'function') {
      (this.compliancePacksResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

