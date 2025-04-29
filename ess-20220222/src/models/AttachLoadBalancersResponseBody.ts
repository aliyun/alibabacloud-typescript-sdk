// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachLoadBalancersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scaling activity.
   * 
   * This parameter is returned only if you set `Async` to `true`. You can call the DescribeScalingActivities operation to query the scaling activity IDs and status.
   * 
   * @example
   * asa-bp140qd7mak8k63f****
   */
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      scalingActivityId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

