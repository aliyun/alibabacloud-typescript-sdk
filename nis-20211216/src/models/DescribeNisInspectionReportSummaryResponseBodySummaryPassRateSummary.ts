// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportSummaryResponseBodySummaryPassRateSummary extends $dara.Model {
  /**
   * @example
   * 0.98
   */
  passRate?: number;
  /**
   * @example
   * Stability
   */
  passRateScope?: string;
  static names(): { [key: string]: string } {
    return {
      passRate: 'PassRate',
      passRateScope: 'PassRateScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      passRate: 'number',
      passRateScope: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

