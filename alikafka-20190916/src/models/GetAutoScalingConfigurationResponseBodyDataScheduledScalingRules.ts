// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules } from "./GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules";


export class GetAutoScalingConfigurationResponseBodyDataScheduledScalingRules extends $dara.Model {
  scheduledScalingRules?: GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules[];
  static names(): { [key: string]: string } {
    return {
      scheduledScalingRules: 'ScheduledScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scheduledScalingRules: { 'type': 'array', 'itemType': GetAutoScalingConfigurationResponseBodyDataScheduledScalingRulesScheduledScalingRules },
    };
  }

  validate() {
    if(Array.isArray(this.scheduledScalingRules)) {
      $dara.Model.validateArray(this.scheduledScalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

