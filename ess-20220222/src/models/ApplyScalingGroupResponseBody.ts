// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyScalingGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC107349-57B7-4405-B1BF-9BF5AF7F****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the enabled scaling group.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

