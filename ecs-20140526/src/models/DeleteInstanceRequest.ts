// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: Sends a check request without releasing the instance. The system checks whether the required parameters are specified, the request format is valid, business requirements are met, and ECS resources are sufficient. If the check fails, the corresponding error is returned. If the check succeeds, the error code `DryRunOperation` is returned.
   * - false (default): Sends a normal request. After the request passes the check, the instance is directly deleted.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully release a **running** (`Running`) instance.
   * 
   * - true: Forcefully releases a **running** (`Running`) instance.
   * - false: Releases the instance in the normal way. The instance must be in the **Stopped** (`Stopped`) state.
   * 
   * Default value: false.
   * >Warning: A forceful release is equivalent to a power-off. Temporary data in the instance memory and storage is erased and cannot be recovered..
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether to use the forced shutdown policy when releasing a **running** (`Running`) instance. This parameter takes effect only when `Force=true`. Valid values:
   * 
   * - true: Forcefully shuts down and releases the instance. This is equivalent to a typical power-off operation. The instance directly enters the resource release process.
   * >Warning: A forceful release is equivalent to a power-off. Temporary data in the instance memory and storage is erased and cannot be recovered.
   * - false: Before the instance is released, the system preferentially performs a standard shutdown process. This mode causes the instance release to take several minutes. You can configure service draining actions during the operating system shutdown to reduce noise in your business systems.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance ID.
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
   * Specifies whether to release an expired subscription instance.
   * 
   * - true: Releases the instance.
   * - false: Does not release the instance.
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

