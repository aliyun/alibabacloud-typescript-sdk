// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CompleteLifecycleActionRequest extends $dara.Model {
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
   * The action that you want Auto Scaling to perform after the lifecycle hook times out. Valid values:
   * 
   * *   CONTINUE: Auto Scaling continues to respond to a scale-in or scale-out request.
   * *   ABANDON: Auto Scaling releases Elastic Compute Service (ECS) instances that are created during scale-out activities or removes ECS instances from the scaling group during scale-in activities.
   * *   ROLLBACK: For scale-in activities, Auto Scaling rejects the requests to release ECS instances but rolls back ECS instances. For scale-out activities, the ROLLBACK setting has the same effect as the ABANDON setting.
   * 
   * If you do not specify this parameter, Auto Scaling performs the action that is specified by the `DefaultResult` parameter after the lifecycle hook times out.
   * 
   * If multiple lifecycle hooks exist in a scaling group and the lifecycle hooks are triggered at the same time, the following rules apply:
   * 
   * *   For scale-in activities, when lifecycle hooks whose LifecycleActionResult parameter is set to ABANDON or ROLLBACK time out, other lifecycle hooks time out ahead of schedule.
   * *   For scale-in and scale-out activities, if you set the LifecycleActionResult parameter for all lifecycle hooks to CONTINUE, Auto Scaling performs the next action only after the last lifecycle hook times out. The action that Auto Scaling performs varies based on the value that you specify for the LifecycleActionResult parameter of the lifecycle hook that last times out.
   * 
   * @example
   * CONTINUE
   */
  lifecycleActionResult?: string;
  /**
   * @remarks
   * The token of the lifecycle action. You can obtain the token from the Simple Message Queue (SMQ, formerly MNS) queue or topic that is specified for the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * aaaa-bbbbb-cccc-ddddd
   */
  lifecycleActionToken?: string;
  /**
   * @remarks
   * The ID of the lifecycle hook.
   * 
   * This parameter is required.
   * 
   * @example
   * ash-bp14g3ee6bt3sc98****
   */
  lifecycleHookId?: string;
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
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      lifecycleActionResult: 'LifecycleActionResult',
      lifecycleActionToken: 'LifecycleActionToken',
      lifecycleHookId: 'LifecycleHookId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      lifecycleActionResult: 'string',
      lifecycleActionToken: 'string',
      lifecycleHookId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

