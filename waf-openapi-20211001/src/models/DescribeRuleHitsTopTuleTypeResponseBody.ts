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

export class DescribeRuleHitsTopTuleTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 45E377CE-0B04-578E-B653-EEA63CFE****
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 protection modules that are matched.
   */
  ruleHitsTopTuleType?: DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleHitsTopTuleType: 'RuleHitsTopTuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleHitsTopTuleType: { 'type': 'array', 'itemType': DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType },
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitsTopTuleType)) {
      $dara.Model.validateArray(this.ruleHitsTopTuleType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

