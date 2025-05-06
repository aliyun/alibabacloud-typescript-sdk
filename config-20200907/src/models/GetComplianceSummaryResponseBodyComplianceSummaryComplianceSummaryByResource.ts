// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $dara.Model {
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
   * The number of resources evaluated as compliant.
   * 
   * @example
   * 1
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of resources evaluated as non-compliant.
   * 
   * @example
   * 12
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 13
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

