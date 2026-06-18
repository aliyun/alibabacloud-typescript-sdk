// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchUpdateWafRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of configurations for individual rules.
   */
  configsShrink?: string;
  /**
   * @remarks
   * The WAF rule runtime phase.
   * 
   * - `http_whitelist`: whitelist rule
   * 
   * - `http_custom`: custom rule
   * 
   * - `http_managed`: managed rule
   * 
   * - `http_anti_scan`: scan protection rule
   * 
   * - `http_ratelimit`: rate limiting rule
   * 
   * - `ip_access_rule`: IP access rule
   * 
   * - `http_bot`: advanced bot rule
   * 
   * - `http_security_level_rule`: security rule
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * The ID of the WAF ruleset. You can call the [ListWafRulesets](https://help.aliyun.com/document_detail/2878359.html) operation to obtain this ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * The configuration properties that are shared by all rules in this batch update.
   */
  sharedShrink?: string;
  /**
   * @remarks
   * The ID of the site. You can call the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation to obtain this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * The version of the site configuration. For sites that have configuration version management enabled, this parameter specifies the version to which the configuration applies. The default value is 0.
   * 
   * @example
   * 0
   */
  siteVersion?: number;
  static names(): { [key: string]: string } {
    return {
      configsShrink: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      sharedShrink: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configsShrink: 'string',
      phase: 'string',
      rulesetId: 'number',
      sharedShrink: 'string',
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

