// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachServerGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6EF9BFEE-FE07-4627-B8FB-14326FB9****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scaling activity. During the scaling activity, the server group is detached from the scaling group and the existing servers, which are the ECS instances or elastic container instances in the scaling group, are removed from the server group.
   * 
   * >  This parameter is returned only if you set `ForceDetach` to `true`.
   * 
   * @example
   * asa-bp1gbswjhjrw8tko****
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

