// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType extends $dara.Model {
  /**
   * @remarks
   * The number of requests that match protection rules.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The type of rule that is matched. By default, this parameter is not returned. This indicates that all types of rules that are matched are returned.
   * 
   * *   **waf:** basic protection rules.
   * *   **blacklist:** IP address blacklist rules.
   * *   **custom:** custom rules.
   * *   **antiscan:** scan protection rules.
   * *   **cc_system:** HTTP flood protection rules.
   * *   **region_block:** region blacklist rules.
   * *   **scene:** bot management rules.
   * *   **dlp:** data leakage prevention rules.
   * 
   * @example
   * cc_system
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

