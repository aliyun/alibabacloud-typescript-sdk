// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPolicy } from "./ScheduledPolicy";


export class ScalingConfig extends $dara.Model {
  /**
   * @example
   * 2
   */
  minInstances?: number;
  scheduledPolicies?: ScheduledPolicy[];
  static names(): { [key: string]: string } {
    return {
      minInstances: 'minInstances',
      scheduledPolicies: 'scheduledPolicies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      minInstances: 'number',
      scheduledPolicies: { 'type': 'array', 'itemType': ScheduledPolicy },
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

