// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNisInspectionReportCheckItemsResponseBodyCheckItemListCheckResultList extends $dara.Model {
  /**
   * @example
   * 0
   */
  count?: number;
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

