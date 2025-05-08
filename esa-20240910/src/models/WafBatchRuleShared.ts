// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafBatchRuleSharedActions } from "./WafBatchRuleSharedActions";
import { WafRuleMatch2 } from "./WafRuleMatch2";


export class WafBatchRuleShared extends $dara.Model {
  action?: string;
  actions?: WafBatchRuleSharedActions;
  crossSiteId?: number;
  expression?: string;
  match?: WafRuleMatch2;
  mode?: string;
  name?: string;
  target?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'Action',
      actions: 'Actions',
      crossSiteId: 'CrossSiteId',
      expression: 'Expression',
      match: 'Match',
      mode: 'Mode',
      name: 'Name',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      actions: WafBatchRuleSharedActions,
      crossSiteId: 'number',
      expression: 'string',
      match: WafRuleMatch2,
      mode: 'string',
      name: 'string',
      target: 'string',
    };
  }

  validate() {
    if(this.actions && typeof (this.actions as any).validate === 'function') {
      (this.actions as any).validate();
    }
    if(this.match && typeof (this.match as any).validate === 'function') {
      (this.match as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

