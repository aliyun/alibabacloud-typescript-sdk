// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult } from "./GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult";


export class GetAggregateAccountComplianceByPackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance evaluation results of member accounts for which the compliance package takes effect in an account group.
   */
  accountComplianceResult?: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult;
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
      accountComplianceResult: 'AccountComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountComplianceResult: GetAggregateAccountComplianceByPackResponseBodyAccountComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accountComplianceResult && typeof (this.accountComplianceResult as any).validate === 'function') {
      (this.accountComplianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

