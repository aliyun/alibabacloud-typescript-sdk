// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AutoScalingPolicyConstraints } from "./AutoScalingPolicyConstraints";
import { ScalingRule } from "./ScalingRule";


export class AutoScalingPolicy extends $dara.Model {
  constraints?: AutoScalingPolicyConstraints;
  scalingRules?: ScalingRule[];
  static names(): { [key: string]: string } {
    return {
      constraints: 'Constraints',
      scalingRules: 'ScalingRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      constraints: AutoScalingPolicyConstraints,
      scalingRules: { 'type': 'array', 'itemType': ScalingRule },
    };
  }

  validate() {
    if(this.constraints && typeof (this.constraints as any).validate === 'function') {
      (this.constraints as any).validate();
    }
    if(Array.isArray(this.scalingRules)) {
      $dara.Model.validateArray(this.scalingRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

