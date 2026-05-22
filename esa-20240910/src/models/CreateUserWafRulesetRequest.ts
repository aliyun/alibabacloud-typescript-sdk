// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class CreateUserWafRulesetRequest extends $dara.Model {
  /**
   * @example
   * this is a test ruleset.
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-site-ads11w
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * http_custom
   */
  phase?: string;
  rules?: WafRuleConfig[];
  shared?: WafBatchRuleShared;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      instanceId: 'InstanceId',
      name: 'Name',
      phase: 'Phase',
      rules: 'Rules',
      shared: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      instanceId: 'string',
      name: 'string',
      phase: 'string',
      rules: { 'type': 'array', 'itemType': WafRuleConfig },
      shared: WafBatchRuleShared,
      status: 'string',
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

