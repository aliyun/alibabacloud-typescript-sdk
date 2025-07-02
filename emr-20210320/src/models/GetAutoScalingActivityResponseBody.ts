// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoScalingActivityResponseBodyScalingActivity } from "./GetAutoScalingActivityResponseBodyScalingActivity";


export class GetAutoScalingActivityResponseBody extends $dara.Model {
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
   * The information about the scaling activity.
   */
  scalingActivity?: GetAutoScalingActivityResponseBodyScalingActivity;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivity: 'ScalingActivity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivity: GetAutoScalingActivityResponseBodyScalingActivity,
    };
  }

  validate() {
    if(this.scalingActivity && typeof (this.scalingActivity as any).validate === 'function') {
      (this.scalingActivity as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

