// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";


export class CreateWafRuleRequest extends $dara.Model {
  config?: WafRuleConfig;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  rulesetId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  siteId?: number;
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

