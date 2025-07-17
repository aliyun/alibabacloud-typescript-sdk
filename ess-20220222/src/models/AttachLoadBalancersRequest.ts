// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachLoadBalancersRequestLoadBalancerConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * 147b46d767c-cn-qingdao-cm5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The weight of an Elastic Compute Service (ECS) instance or elastic container instance as a backend sever of the CLB instance. If an instance has a higher weight, more access traffic is routed to the instance. If an instance has zero weight, no access traffic is routed to the instance.
   * 
   * Valid values: 0 to 100.
   * 
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachLoadBalancersRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to attach the CLB instance to the scaling group in an asynchronous manner. If you attach the CLB instance from the scaling group in an asynchronous manner, the call is successful only after all operations are successful. If a specific operation fails, the call fails. We recommend that you set this parameter to true. Valid values:
   * 
   * *   true: attaches the CLB instance to the scaling group in an asynchronous manner. In this case, the ID of the scaling activity is returned.
   * *   false: does not attach the CLB instance to the scaling group in an asynchronous manner.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  async?: boolean;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to add the existing instances in the scaling group as backend servers of the load balancer. Valid values:
   * 
   * *   true: If you set this parameter to `true`, the attachment of the load balancer entails the addition of the existing instances in the scaling group to the backend server groups of the load balancer.
   * 
   *     **
   * 
   *     **Note** If a load balancer is currently attached to your scaling group, and you only want to add the instances in your scaling group to the backend server groups of the load balancer, you can call this operation again and set ForceAttach request to true.
   * 
   * *   false: If you set this parameter to false, the attachment of the load balancer does not entail the addition of the existing instances in the scaling group to the backend server groups of the load balancer.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceAttach?: boolean;
  /**
   * @remarks
   * The configurations of the classic load balancer (CLB, formerly known as SLB) instance.
   */
  loadBalancerConfigs?: AttachLoadBalancersRequestLoadBalancerConfigs[];
  /**
   * @remarks
   * The IDs of the load balancers that you want to attach to the scaling group.
   */
  loadBalancers?: string[];
  ownerId?: number;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1avr6ensitts3w****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      async: 'Async',
      clientToken: 'ClientToken',
      forceAttach: 'ForceAttach',
      loadBalancerConfigs: 'LoadBalancerConfigs',
      loadBalancers: 'LoadBalancers',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      async: 'boolean',
      clientToken: 'string',
      forceAttach: 'boolean',
      loadBalancerConfigs: { 'type': 'array', 'itemType': AttachLoadBalancersRequestLoadBalancerConfigs },
      loadBalancers: { 'type': 'array', 'itemType': 'string' },
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerConfigs)) {
      $dara.Model.validateArray(this.loadBalancerConfigs);
    }
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

