// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class BatchUpdateWafRulesRequest extends $dara.Model {
  configs?: WafRuleConfig[];
  /**
   * @example
   * http_custom
   */
  phase?: string;
  /**
   * @example
   * 10000001
   */
  rulesetId?: number;
  shared?: WafBatchRuleShared;
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
      configs: 'Configs',
      phase: 'Phase',
      rulesetId: 'RulesetId',
      shared: 'Shared',
      siteId: 'SiteId',
      siteVersion: 'SiteVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': WafRuleConfig },
      phase: 'string',
      rulesetId: 'number',
      shared: WafBatchRuleShared,
      siteId: 'number',
      siteVersion: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    if(this.shared && typeof (this.shared as any).validate === 'function') {
      (this.shared as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

