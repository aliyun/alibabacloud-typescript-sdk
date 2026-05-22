// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateWafRulesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of configurations for each rule, specifying detailed configurations for each rule.
   */
  configsShrink?: string;
  /**
   * @remarks
   * WAF rule type, with values:
   * 
   * - **http_anti_scan**: Scan protection.
   * - **http_bot**: Bots.
   * 
   * @example
   * http_anti_scan
   */
  phase?: string;
  /**
   * @remarks
   * Ruleset ID.
   * 
   * @example
   * 10000001
   */
  rulesetId?: number;
  /**
   * @remarks
   * Shared configuration for multiple rules, specifying common attributes of multiple rules.
   */
  sharedShrink?: string;
  /**
   * @remarks
   * Site ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) interface.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
  /**
   * @remarks
   * Site version.
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

