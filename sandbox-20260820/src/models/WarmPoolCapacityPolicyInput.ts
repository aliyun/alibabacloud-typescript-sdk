// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WarmPoolScheduledPolicyInput } from "./WarmPoolScheduledPolicyInput";


export class WarmPoolCapacityPolicyInput extends $dara.Model {
  /**
   * @remarks
   * The base target number of ready sandboxes, which is required and can be set to 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  minReadySandboxes?: number;
  /**
   * @remarks
   * The list of scheduled capacity rules, which is optional.
   */
  scheduledPolicies?: WarmPoolScheduledPolicyInput[];
  static names(): { [key: string]: string } {
    return {
      minReadySandboxes: 'minReadySandboxes',
      scheduledPolicies: 'scheduledPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minReadySandboxes: 'number',
      scheduledPolicies: { 'type': 'array', 'itemType': WarmPoolScheduledPolicyInput },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledPolicies)) {
      $dara.Model.validateArray(this.scheduledPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

