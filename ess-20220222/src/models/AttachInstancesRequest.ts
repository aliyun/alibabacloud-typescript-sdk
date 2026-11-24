// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Ensures the idempotence of the request.
   * 
   * You can generate a parameter value from your client to ensure that the value is unique among different requests. The value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25965.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-42665544****
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to entrust the lifecycle of an existing instance to the scaling group when the instance is manually added to the scaling group. Valid values:
   * 
   * - true: Entrusted. The lifecycle of the instance is managed by Auto Scaling, which is the same as that of instances automatically created by the scaling group. The instance is automatically released when it is removed from the scaling group (excluding instances removed when you invoke the DetachInstances operation).
   * - false: Not entrusted. The instance is not released when it is removed from the scaling group.
   * 
   * > This parameter is not supported for subscription instances, managed instances, and instances in the Economical Mode in the scaling group.
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
   * - true: Invalid instances are ignored when a batch of instances is added to the scaling group. If invalid instances exist and valid instances are successfully added, the execution status of the scaling activity is displayed as Warning. You can view the invalid instances in the scaling activity details.
   * 
   * - false: Invalid instances are not ignored when a batch of instances is added to the scaling group. If invalid instances exist in the batch, an error is reported.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  ignoreInvalidInstance?: boolean;
  /**
   * @remarks
   * The IDs of the ECS instances, ECI instances, managed instances, or instances in the Economical Mode in the scaling group to be added.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to trigger the scale-out lifecycle hook when instances are added to the scaling group. Valid values:
   * 
   * - true: Triggered.
   * - false: Not triggered.
   * > This parameter is not supported for managed instances and instances in the Economical Mode in the scaling group.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  lifecycleHook?: boolean;
  /**
   * @remarks
   * The weight of the ECS instance or ECI instance as a backend server of the load balancing instance.
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

