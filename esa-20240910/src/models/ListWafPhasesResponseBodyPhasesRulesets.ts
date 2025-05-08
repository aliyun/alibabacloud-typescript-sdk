// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class ListWafPhasesResponseBodyPhasesRulesets extends $dara.Model {
  /**
   * @remarks
   * ID of the WAF ruleset.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * Name of the WAF ruleset.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * List of rule configurations in the WAF ruleset.
   */
  rules?: WafRuleConfig[];
  /**
   * @remarks
   * Shared configuration for rules in the WAF ruleset.
   */
  shared?: WafBatchRuleShared;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
      rules: 'Rules',
      shared: 'Shared',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
      rules: { 'type': 'array', 'itemType': WafRuleConfig },
      shared: WafBatchRuleShared,
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
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

