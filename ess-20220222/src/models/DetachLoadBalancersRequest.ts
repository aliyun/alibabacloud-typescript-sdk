// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to detach the CLB instance from the scaling group in an asynchronous manner. If you detach the CLB instance from the scaling group in an asynchronous manner, the call is successful only after all operations are successful. If a specific operation fails, the call fails. We recommend that you set this parameter to true.
   * 
   * Valid values:
   * 
   * *   true: detaches the CLB instance from the scaling group in an asynchronous manner. In this case, the ID of the scaling activity is returned.
   * *   false: does not detach the CLB instance from the scaling group in an asynchronous manner.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the value, but you must ensure that the value is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to remove Elastic Compute Service (ECS) instances in the scaling group from the backend server groups of the load balancer. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceDetach?: boolean;
  /**
   * @remarks
   * The IDs of the CLB instances. You can specify up to five instance IDs.
   * 
   * This parameter is required.
   */
  loadBalancers?: string[];
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1ffogfdauy0jw0****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clientToken: 'ClientToken',
      forceDetach: 'ForceDetach',
      loadBalancers: 'LoadBalancers',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clientToken: 'string',
      forceDetach: 'boolean',
      loadBalancers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

