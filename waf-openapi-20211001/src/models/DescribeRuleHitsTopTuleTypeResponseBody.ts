// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType } from "./DescribeRuleHitsTopTuleTypeResponseBodyRuleHitsTopTuleType";


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

