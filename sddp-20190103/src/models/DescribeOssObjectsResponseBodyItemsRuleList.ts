// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOssObjectsResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * The number of times that the rule is hit.
   * 
   * @example
   * 100
   */
  count?: number;
  /**
   * @remarks
   * The search keyword. Fuzzy match is supported.
   * 
   * @example
   * ID card
   */
  name?: string;
  /**
   * @remarks
   * The ID of the sensitivity level of the OSS object. Valid values:
   * 
   * *   **1**: N/A, which indicates that no sensitive data is detected.
   * *   **2**: S1, which indicates the low sensitivity level.
   * *   **3**: S2, which indicates the medium sensitivity level.
   * *   **4**: S3, which indicates the high sensitivity level.
   * *   **5**: S4, which indicates the highest sensitivity level.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      name: 'Name',
      riskLevelId: 'RiskLevelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      name: 'string',
      riskLevelId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

