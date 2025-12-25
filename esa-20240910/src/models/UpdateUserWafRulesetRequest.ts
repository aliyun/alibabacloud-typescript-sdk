// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WafRuleConfig } from "./WafRuleConfig";
import { WafBatchRuleShared } from "./WafBatchRuleShared";


export class UpdateUserWafRulesetRequest extends $dara.Model {
  /**
   * @example
   * example
   */
  description?: string;
  /**
   * @example
   * ip.src == 1.1.1.1
   */
  expression?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * esa-xxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * example
   */
  name?: string;
  /**
   * @example
   * 1
   */
  position?: number;
  /**
   * @example
   * [
   *   {
   *     "Id": 20000001,
   *     "Name": "rule1",
   *     "Expression": "ip.src eq 1.1.1.1",
   *     "Action": "deny"
   *   }
   */
  rules?: WafRuleConfig[];
  shared?: WafBatchRuleShared;
  /**
   * @example
   * on
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      expression: 'Expression',
      id: 'Id',
      instanceId: 'InstanceId',
      name: 'Name',
      position: 'Position',
      rules: 'Rules',
      shared: 'Shared',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expression: 'string',
      id: 'number',
      instanceId: 'string',
      name: 'string',
      position: 'number',
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

