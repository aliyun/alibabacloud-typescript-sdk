// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAggregateCompliancePacksResponseBodyCompliancePacksResult } from "./ListAggregateCompliancePacksResponseBodyCompliancePacksResult";


export class ListAggregateCompliancePacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance packages returned.
   */
  compliancePacksResult?: ListAggregateCompliancePacksResponseBodyCompliancePacksResult;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B5806142-3090-4F86-A84E-12B3FE52C1C4
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
      compliancePacksResult: ListAggregateCompliancePacksResponseBodyCompliancePacksResult,
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

