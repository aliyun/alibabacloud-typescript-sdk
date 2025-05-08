// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateWafRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the WAF rule, which can be obtained by calling the [ListWafRules](https://help.aliyun.com/document_detail/2878257.html) interface.
   */
  ids?: number[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * ID of the WAF ruleset, which can be obtained by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) interface.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      requestId: 'string',
      rulesetId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

