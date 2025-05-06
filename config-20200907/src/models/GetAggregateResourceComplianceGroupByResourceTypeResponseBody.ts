// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult } from "./GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult";


export class GetAggregateResourceComplianceGroupByResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  complianceResult?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CE6AEE1-B3D8-530A-9302-6606B20503BB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.complianceResult && typeof (this.complianceResult as any).validate === 'function') {
      (this.complianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

