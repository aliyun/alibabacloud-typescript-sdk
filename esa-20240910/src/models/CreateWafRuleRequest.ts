// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class CreateWafRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The specific configuration of the WAF rule (`WafRuleConfig` data structure). The required fields vary depending on the Phase value:
   * 
   * - `http_custom`: `Expression` (match expression) and `Action` (action upon match) are required. Setting `Name` is recommended for easier identification.
   * - `http_whitelist`: `Expression` is required. Matched requests are allowed directly (no Action).
   * - `http_ratelimit`: `Expression` and `RateLimit` (rate limiting parameters) are required.
   * - `ip_access_rule`: `Expression` (containing IP match) and `Action` are required.
   * 
   * > The complete field definitions are based on the `WafRuleConfig` data structure. If required fields are missing, the service returns `InvalidParameter(400)` / `Rule.Config.Malformed`.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * The WAF rule execution phase. This **single-creation operation** supports the following phases (it does not support `http_anti_scan` or `http_bot`. For these two phases, use the batch operation `BatchCreateWafRules`):
   * - `http_whitelist`: whitelist rule
   * - `http_custom`: custom rule
   * - `http_managed`: managed rule
   * - `http_ratelimit`: rate limiting rule
   * - `ip_access_rule`: IP access rule
   * - `http_security_level_rule`: security rule
   * 
   * > Note: `http_anti_scan` and `http_bot` can only be created through the batch operation. Passing these two values to this operation returns an error.
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the WAF ruleset. You can call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation to obtain the ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The site ID. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain the site ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version number of the site configuration. For sites with version management enabled, you can use this parameter to specify the site version on which the configuration takes effect. The default value is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: WafRuleConfig,
      phase: 'string',
      rulesetId: 'number',
      siteId: 'number',
      siteVersion: 'number',
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

