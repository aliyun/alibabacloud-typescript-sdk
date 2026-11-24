// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecordLifecycleActionHeartbeatRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the scaling group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The wait time configured in the lifecycle hook for the scaling activity. If the wait state times out, the default execution policy is executed. Valid values: 30 to 21600. Unit: seconds.
   * 
   * After you create a lifecycle hook, you can call this operation to extend the wait time of the ECS instance, or call the [CompleteLifecycleAction](https://help.aliyun.com/document_detail/459335.html) operation to end the wait state of the scaling activity in advance.
   * 
   * Default value: 600.
   * 
   * @example
   * 600
   */
  heartbeatTimeout?: number;
  /**
   * @remarks
   * The wait state token of the scaling activity. When the instance is suspended, you can obtain this token from the details page of the message received from the MNS queue specified by the lifecycle hook.
   * 
   * You can also call the [DescribeLifecycleActions](https://help.aliyun.com/document_detail/459333.html) operation to obtain this token.
   * 
   * Alternatively, you can obtain this value from the MNS topic specified by the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * F324B880-900E-4968-85DD-81691113****
   */
  lifecycleActionToken?: string;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * ash-bp1fxuqyi98w0aib****
   */
  lifecycleHookId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      heartbeatTimeout: 'heartbeatTimeout',
      lifecycleActionToken: 'lifecycleActionToken',
      lifecycleHookId: 'lifecycleHookId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      heartbeatTimeout: 'number',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

