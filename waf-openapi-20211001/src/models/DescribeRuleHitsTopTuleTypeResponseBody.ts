// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType extends $dara.Model {
  /**
   * @remarks
   * The number of requests that hit the rule.
   * 
   * @example
   * 698455
   */
  count?: number;
  /**
   * @remarks
   * The type of the rule hit by the protected object. By default, this parameter is not returned, which indicates that all rules are displayed. Valid values:
   * 
   * - **waf**: basic protection rule.
   * 
   * - **blacklist**: IP blacklist.
   * 
   * - **custom**: custom rule.
   * 
   * - **antiscan**: scan protection rule.
   * 
   * - **cc_system**: HTTP flood protection rule.
   * 
   * - **region_block**: area blocking.
   * 
   * - **scene**: bot management.
   * 
   * - **dlp**: data leak prevention.
   * 
   * @example
   * blacklist
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
   * The request ID.
   * 
   * @example
   * 45E377CE-0B04-578E-B653-EEA63CFE****
   */
  requestId?: string;
  /**
   * @remarks
   * The top 10 protection types with the most rule hits.
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

