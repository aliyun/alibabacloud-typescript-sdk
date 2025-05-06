// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByConfigRule extends $dara.Model {
  /**
   * @remarks
   * The time when the compliance summary was generated. Unit: milliseconds.
   * 
   * @example
   * 1589853712165
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of rules evaluated as compliant.
   * 
   * @example
   * 5
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of rules evaluated as non-compliant.
   * 
   * @example
   * 11
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      complianceSummaryTimestamp: 'ComplianceSummaryTimestamp',
      compliantCount: 'CompliantCount',
      nonCompliantCount: 'NonCompliantCount',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceSummaryTimestamp: 'number',
      compliantCount: 'number',
      nonCompliantCount: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

