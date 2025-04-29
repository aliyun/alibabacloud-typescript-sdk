// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeScalingActivityDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the scaling activity. The result of a scaling activity is either successful or failed. If the scaling activity is rejected, no scaling activity details are returned.
   * 
   * @example
   * new ECS instances \\"i-bp16t2cgmiiymeqv****\\" are created.
   */
  detail?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B13527BF-1FBD-4334-A512-20F5E9D3FB4D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the scaling activity.
   * 
   * @example
   * asa-bp1c9djwrgxjyk31****
   */
  scalingActivityId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      requestId: 'RequestId',
      scalingActivityId: 'ScalingActivityId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
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

