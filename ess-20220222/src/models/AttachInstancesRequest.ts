// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesRequest extends $dara.Model {
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
   * Specifies whether to use the scaling group to manage the lifecycles of manually added instances. Valid values:
   * 
   * *   true: The scaling group manages the lifecycles of manually added instances and automatically created instances in the same manner. In this case, Auto Scaling releases the instances when they are removed from the scaling group. This rule does not apply to instances that are removed by calling the DetachInstances operation.
   * *   false: The scaling group does not manage the lifecycles of manually added instances. In this case, Auto Scaling does not release the instances when they are removed from the scaling group.
   * 
   * >  You cannot specify this parameter for subscription instances, non-Alibaba Cloud instances, and instances in Economical Mode.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  entrusted?: boolean;
  /**
   * @remarks
   * Specifies whether to ignore invalid instances when a batch of instances is added to the scaling group. Valid values:
   * 
   * *   true: ignores invalid instances. If invalid instances exist and valid instances are added, the corresponding scaling activity enters the Warning state. You can check the scaling activity details to view the invalid instances that are ignored.
   * *   false: does not ignore invalid instances. If invalid instances exist in the batch of instances that you want to add to the scaling group, an error is reported.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  ignoreInvalidInstance?: boolean;
  /**
   * @remarks
   * The IDs of the ECS instances, elastic container instances, non-Alibaba Cloud instances, or instances in Economical Mode.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to trigger the lifecycle hook for scale-outs when you call this operation. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  You cannot specify this parameter for subscription instances and instances in Economical Mode.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  lifecycleHook?: boolean;
  /**
   * @remarks
   * The weight of an ECS instance or elastic container instance as a backend server. You can use this parameter to specify weights for multiple instances at the same time.
   */
  loadBalancerWeights?: number[];
  ownerAccount?: string;
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
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp18p2yfxow2dloq****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      entrusted: 'Entrusted',
      ignoreInvalidInstance: 'IgnoreInvalidInstance',
      instanceIds: 'InstanceIds',
      lifecycleHook: 'LifecycleHook',
      loadBalancerWeights: 'LoadBalancerWeights',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      entrusted: 'boolean',
      ignoreInvalidInstance: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHook: 'boolean',
      loadBalancerWeights: { 'type': 'array', 'itemType': 'number' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    if(Array.isArray(this.loadBalancerWeights)) {
      $dara.Model.validateArray(this.loadBalancerWeights);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

