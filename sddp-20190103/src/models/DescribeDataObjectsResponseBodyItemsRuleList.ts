// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataObjectsResponseBodyItemsRuleList extends $dara.Model {
  /**
   * @remarks
   * Risk level ID for sensitive data identification rules. Values:
   * - **1**: N/A: No sensitive data identified.
   * - **2**: S1: Level 1 sensitive data.
   * - **3**: S2: Level 2 sensitive data.
   * - **4**: S3: Level 3 sensitive data.
   * - **5**: S4: Level 4 sensitive data.
   * 
   * @example
   * 2
   */
  riskLevelId?: number;
  /**
   * @remarks
   * Risk level name for the data asset table. Values:
   * - **N/A**: No sensitive data identified.
   * - **S1**: Level 1 sensitive data.
   * - **S2**: Level 2 sensitive data.
   * - **S3**: Level 3 sensitive data.
   * - **S4**: Level 4 sensitive data.
   * 
   * @example
   * S1
   */
  riskLevelName?: string;
  /**
   * @remarks
   * Number of matched identification models.
   * 
   * @example
   * 590
   */
  ruleCount?: number;
  /**
   * @remarks
   * Identification model ID.
   * 
   * @example
   * 1080
   */
  ruleId?: number;
  /**
   * @remarks
   * Identification model name.
   * 
   * @example
   * name
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      riskLevelId: 'RiskLevelId',
      riskLevelName: 'RiskLevelName',
      ruleCount: 'RuleCount',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      riskLevelId: 'number',
      riskLevelName: 'string',
      ruleCount: 'number',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

