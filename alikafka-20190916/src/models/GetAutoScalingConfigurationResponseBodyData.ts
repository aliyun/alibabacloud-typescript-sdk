// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules } from "./GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules";


export class GetAutoScalingConfigurationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The scheduled scaling rules.
   */
  scheduledScalingRules?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules;
  static names(): { [key: string]: string } {
    return {
      scheduledScalingRules: 'ScheduledScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledScalingRules: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules,
    };
  }

  validate() {
    if(this.scheduledScalingRules && typeof (this.scheduledScalingRules as any).validate === 'function') {
      (this.scheduledScalingRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

