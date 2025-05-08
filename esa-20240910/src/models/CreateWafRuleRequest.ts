// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class CreateWafRuleRequest extends $dara.Model {
  /**
   * @remarks
   * Rule configuration, specifying the detailed configuration for creating a rule.
   */
  config?: WafRuleConfig;
  /**
   * @remarks
   * WAF operation phase.
   * 
   * This parameter is required.
   * 
   * @example
   * http_custom
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

