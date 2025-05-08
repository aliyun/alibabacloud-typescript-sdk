// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWafRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the WAF rule, which can be obtained by calling the [ListWafRules](https://help.aliyun.com/document_detail/2878257.html) API.
   * 
   * @example
   * 20000001
   */
  id?: number;
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
      id: 'Id',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      requestId: 'string',
      rulesetId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

