// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateComplianceSummaryResponseBodyComplianceSummaryComplianceSummaryByResource extends $dara.Model {
  /**
   * @remarks
   * The time when the compliance statistics were collected. Unit: milliseconds.
   * 
   * @example
   * 1589853822103
   */
  complianceSummaryTimestamp?: number;
  /**
   * @remarks
   * The number of compliant resources.
   * 
   * @example
   * 20
   */
  compliantCount?: number;
  /**
   * @remarks
   * The number of non-compliant resources.
   * 
   * @example
   * 11
   */
  nonCompliantCount?: number;
  /**
   * @remarks
   * The total number of resources.
   * 
   * @example
   * 31
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

