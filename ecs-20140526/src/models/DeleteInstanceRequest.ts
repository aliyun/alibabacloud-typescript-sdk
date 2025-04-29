// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and unavailable ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false (default): performs a dry run and performs the actual request. If the request passes the dry run, the instance is released.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully release the ECS instance in the **Running** (`Running`) state. Valid values:
   * 
   * *   true: forcefully releases the ECS instance in the **Running** (`Running`) state.
   * *   false: normally releases the ECS instance. This value is valid only if the instance is in the **Stopped** (`Stopped`) state.
   * 
   * Default value: false.
   * 
   * **
   * 
   * **Warning** When Force is set to true, this operation is equivalent to a power-off operation. Temporary data in the memory and storage of the instance is erased and cannot be restored.
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully stop the ECS instance in the **Running** (`Running`) state before the instance is released. This parameter takes effect only when `Force` is set to true. Valid values:
   * 
   * *   true: forcefully stops and releases the ECS instance. In this case, this operation is equivalent to a power-off operation. The instance directly enters the resource release process.
   * 
   *     **
   * 
   *     **Warning** A forceful stop and release is equivalent to a power-off operation. Temporary data in the memory and storage of the instance is erased and cannot be restored.
   * 
   * *   false: stops the ECS instance in the normal stop process and then releases the instance. In this case, the release process takes several minutes to complete. You can configure business drainage actions to reduce the noise of the business system on operating system shutdown.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to release the expired subscription instance. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  terminateSubscription?: boolean;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      force: 'Force',
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      terminateSubscription: 'TerminateSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      force: 'boolean',
      forceStop: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      terminateSubscription: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

