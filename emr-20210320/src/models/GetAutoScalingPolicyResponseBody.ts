// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoScalingPolicyResponseBodyScalingPolicy } from "./GetAutoScalingPolicyResponseBodyScalingPolicy";


export class GetAutoScalingPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The auto scaling policy.
   */
  scalingPolicy?: GetAutoScalingPolicyResponseBodyScalingPolicy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingPolicy: 'ScalingPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingPolicy: GetAutoScalingPolicyResponseBodyScalingPolicy,
    };
  }

  validate() {
    if(this.scalingPolicy && typeof (this.scalingPolicy as any).validate === 'function') {
      (this.scalingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

