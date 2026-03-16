// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ScheduledPolicy } from "./ScheduledPolicy";


export class ScalingStatus extends $dara.Model {
  /**
   * @example
   * error
   */
  currentError?: string;
  /**
   * @example
   * 2
   */
  currentInstances?: number;
  /**
   * @example
   * 1
   */
  minInstances?: number;
  scheduledPolicies?: ScheduledPolicy[];
  /**
   * @example
   * 2
   */
  targetInstances?: number;
  static names(): { [key: string]: string } {
    return {
      currentError: 'currentError',
      currentInstances: 'currentInstances',
      minInstances: 'minInstances',
      scheduledPolicies: 'scheduledPolicies',
      targetInstances: 'targetInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentError: 'string',
      currentInstances: 'number',
      minInstances: 'number',
      scheduledPolicies: { 'type': 'array', 'itemType': ScheduledPolicy },
      targetInstances: 'number',
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

