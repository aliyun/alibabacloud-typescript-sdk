// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfigManagedRulesetsManagedRules } from "./WafRuleConfigManagedRulesetsManagedRules";


export class WafRuleConfigManagedRulesets extends $dara.Model {
  action?: string;
  attackType?: number;
  managedRules?: WafRuleConfigManagedRulesetsManagedRules[];
  numberEnabled?: number;
  numberTotal?: number;
  protectionLevel?: number;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      attackType: 'AttackType',
      managedRules: 'ManagedRules',
      numberEnabled: 'NumberEnabled',
      numberTotal: 'NumberTotal',
      protectionLevel: 'ProtectionLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      attackType: 'number',
      managedRules: { 'type': 'array', 'itemType': WafRuleConfigManagedRulesetsManagedRules },
      numberEnabled: 'number',
      numberTotal: 'number',
      protectionLevel: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.managedRules)) {
      $dara.Model.validateArray(this.managedRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

