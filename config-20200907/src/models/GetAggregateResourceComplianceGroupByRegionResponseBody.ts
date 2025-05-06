// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult } from "./GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult";


export class GetAggregateResourceComplianceGroupByRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  complianceResult?: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5E3A847A-5D40-54A1-A2CE-77A87823ED07
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
      complianceResult: GetAggregateResourceComplianceGroupByRegionResponseBodyComplianceResult,
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

