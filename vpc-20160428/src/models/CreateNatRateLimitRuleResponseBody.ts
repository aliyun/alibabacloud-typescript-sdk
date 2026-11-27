// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatRateLimitRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2315DEB7-5E92-423A-91F7-4C1EC9AD****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the rate limiting rule.
   * 
   * @example
   * rule-****
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

