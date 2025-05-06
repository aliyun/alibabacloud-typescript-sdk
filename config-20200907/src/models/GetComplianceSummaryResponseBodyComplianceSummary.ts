// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule } from "./GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule";
import { GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource } from "./GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource";


export class GetComplianceSummaryResponseBodyComplianceSummary extends $dara.Model {
  /**
   * @remarks
   * The summary of compliance statistics from the rule dimension.
   */
  complianceSummaryByConfigRule?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule;
  /**
   * @remarks
   * The summary of compliance statistics from the resource dimension.
   */
  complianceSummaryByResource?: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryByConfigRule: 'ComplianceSummaryByConfigRule',
      complianceSummaryByResource: 'ComplianceSummaryByResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryByConfigRule: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule,
      complianceSummaryByResource: GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource,
    };
  }

  validate() {
    if(this.complianceSummaryByConfigRule && typeof (this.complianceSummaryByConfigRule as any).validate === 'function') {
      (this.complianceSummaryByConfigRule as any).validate();
    }
    if(this.complianceSummaryByResource && typeof (this.complianceSummaryByResource as any).validate === 'function') {
      (this.complianceSummaryByResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

