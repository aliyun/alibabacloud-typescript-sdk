// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceGroupByRegionResponseBodyComplianceResult } from "./GetResourceComplianceGroupByRegionResponseBodyComplianceResult";


export class GetResourceComplianceGroupByRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  complianceResult?: GetResourceComplianceGroupByRegionResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FDF8006-34A0-5334-8C79-48F64EAB34F1
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
      complianceResult: GetResourceComplianceGroupByRegionResponseBodyComplianceResult,
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

