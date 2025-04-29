// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including invalid AccessKey pairs, unauthorized Resource Access Management (RAM) users, and missing parameter values. If the request fails the dry run, an error message is returned. If the request passes the dry run, the DRYRUN.SUCCESS error code is returned.
   * *   false: performs a dry run and performs the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.
   * 
   * Default value: false.
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
   * The IDs of ECS instances. You can specify 1 to 100 ECS instances.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1g6zv0ce8oghu7****
   */
  instanceId?: string[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * Specifies whether to release the expired subscription instance.
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
      clientToken: 'ClientToken',
      dryRun: 'DryRun',
      force: 'Force',
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      terminateSubscription: 'TerminateSubscription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      dryRun: 'boolean',
      force: 'boolean',
      forceStop: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      terminateSubscription: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceId)) {
      $dara.Model.validateArray(this.instanceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

