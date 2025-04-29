// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachInstancesRequest extends $dara.Model {
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
   * Specifies whether to adjust the expected number of instances in the scaling group. Valid values:
   * 
   * *   true: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
   * *   false: After a specific number of instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  decreaseDesiredCapacity?: boolean;
  /**
   * @remarks
   * Specifies whether to detach the ECS instances or elastic container instances that are marked for removal from the associated load balancers, and whether to remove the private IP addresses of these instances from the IP address whitelists of the associated ApsaraDB RDS instances.
   * 
   * Both: detaches the ECS instances or elastic container instances that are marked for removal from the associated load balancers and removes the private IP addresses of these instances from the IP address whitelists of the associated ApsaraDB RDS instances.
   * 
   * >  This parameter is not supported if you want to remove Alibaba Cloud-hosted third-party instances from a scaling group.
   * 
   * @example
   * both
   */
  detachOption?: string;
  /**
   * @remarks
   * Specifies whether to ignore invalid instances when you remove a batch of instances from the scaling group. Valid values:
   * 
   * *   true: ignores invalid instances. If invalid instances exist and valid instances are removed from the scaling group, the corresponding scaling activity enters the Warning state. You can check the scaling activity details to view the invalid instances that are ignored.
   * *   false: does not ignore invalid instances. If invalid instances exist in the batch of instances that you want to remove from the scaling group, an error is reported.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  ignoreInvalidInstance?: boolean;
  /**
   * @remarks
   * The IDs of the ECS instances, elastic container instances, or Aliababa Cloud-managed third-party instances that you want to remove from a scaling group.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to trigger a lifecycle hook for scale-in purposes when ECS instances or elastic container instances are removed from the scaling group. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  This parameter is not supported if you want to remove Alibaba Cloud-hosted third-party instances from a scaling group.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  lifecycleHook?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the scaling group.
   * 
   * This parameter is required.
   * 
   * @example
   * asg-bp1igpak5ft1flyp****
   */
  scalingGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      decreaseDesiredCapacity: 'DecreaseDesiredCapacity',
      detachOption: 'DetachOption',
      ignoreInvalidInstance: 'IgnoreInvalidInstance',
      instanceIds: 'InstanceIds',
      lifecycleHook: 'LifecycleHook',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scalingGroupId: 'ScalingGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      decreaseDesiredCapacity: 'boolean',
      detachOption: 'string',
      ignoreInvalidInstance: 'boolean',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      lifecycleHook: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scalingGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

