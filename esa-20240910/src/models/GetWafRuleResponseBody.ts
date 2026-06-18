// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class GetWafRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The rule configuration.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * The ID of the WAF rule. You can get this ID by calling the [ListWafRules](https://help.aliyun.com/document_detail/2878257.html) operation.
   * 
   * @example
   * 2000001
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * The execution phase of the WAF rule.
   * 
   * - `http_whitelist`: A whitelist rule
   * 
   * - `http_custom`: A custom rule
   * 
   * - `http_managed`: A managed rule
   * 
   * - `http_anti_scan`: A scan protection rule
   * 
   * - `http_ratelimit`: A rate limiting rule
   * 
   * - `ip_access_rule`: An IP access rule
   * 
   * - `http_bot`: A bot management rule
   * 
   * - `http_security_level_rule`: A security rule
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The position of the rule in the ruleset.
   * 
   * @example
   * 1
   */
  position?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 36af3fcc-43d0-441c-86b1-428951dc8225
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the WAF ruleset. You can get this ID by calling the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation.
   */
  rulesetId?: number;
  /**
   * @remarks
   * The status of the rule.
   * 
   * @example
   * on
   */
  status?: string;
  /**
   * @remarks
   * The time the rule was last updated.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      id: 'Id',
      name: 'Name',
      phase: 'Phase',
      position: 'Position',
      requestId: 'RequestId',
      rulesetId: 'RulesetId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      id: 'number',
      name: 'string',
      phase: 'string',
      position: 'number',
      requestId: 'string',
      rulesetId: 'number',
      status: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

