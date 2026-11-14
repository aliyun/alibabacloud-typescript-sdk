// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { WarmPoolScheduledPolicy } from "./WarmPoolScheduledPolicy";


export class WarmPoolCapacityPolicy extends $dara.Model {
  /**
   * @remarks
   * The base target number of ready sandboxes. This parameter is required and can be set to 0.
   * 
   * @example
   * 0
   */
  minReadySandboxes?: number;
  /**
   * @remarks
   * The list of scheduled capacity rules. This parameter is optional.
   */
  scheduledPolicies?: WarmPoolScheduledPolicy[];
  static names(): { [key: string]: string } {
    return {
      minReadySandboxes: 'minReadySandboxes',
      scheduledPolicies: 'scheduledPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minReadySandboxes: 'number',
      scheduledPolicies: { 'type': 'array', 'itemType': WarmPoolScheduledPolicy },
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

