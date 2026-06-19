// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](https://help.aliyun.com/document_detail/25693.html).
   * 
   * @example
   * 123e4567-e89b-12d3-a456-426655440000
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * - true: sends a check request without querying resource status. The check items include whether your AccessKey pair is valid, whether Resource Access Management (RAM) user authorization is granted, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DRYRUN.SUCCESS error code is returned.
   * - false: sends a Normal request. After the check succeeds, a 2xx HTTP status code is returned and the resource status is queried directly.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully release an instance that is in the **Running** (`Running`) state.
   * 
   * - true: forcefully releases ECS instance that is in the **Running** (`Running`) state.
   * - false: releases ECS instance only when it is in the **Stopped** (`Stopped`) state.
   * 
   * Default value: false.
   * >Warning: Forceful release is equivalent to powering off ECS instance. All in-memory data and temporary data in the storage are erased and cannot be recovered..
   * 
   * @example
   * false
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully shut down the instance before release when the instance is in the **Running** (`Running`) state. This parameter takes effect only when `Force=true`. Valid values:
   * 
   * - true: forcefully shuts down and releases the instance. This is equivalent to a power-off operation. The instance directly enters the resource release process.
   * >Warning: Forceful release is equivalent to powering off the instance. All in-memory data and temporary data in the storage are erased and cannot be recovered.
   * - false: performs a standard shutdown before releasing the instance. This mode causes the release process to take several minutes. You can configure service draining actions during the operating system shutdown to reduce noise in your business systems.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance ID array. Array length: 1 to 100.
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
   * The region ID of the instances. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * Specifies whether to release an expired subscription instance.
   * 
   * - true: releases the instance.
   * - false: does not release the instance.
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

