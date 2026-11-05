// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Valid values:
   * 
   * - AllTogether: all operations must succeed for the entire batch operation to be considered successful. If any operation fails, the entire batch operation is considered failed, and all executed operations are rolled back to their original state.
   * 
   * - SuccessFirst: each operation in the batch is executed independently. If an operation fails, other operations can still continue and succeed. In this mode, successful operations are committed, and failed operations are marked as failed without affecting the results of other operations.
   * 
   * Default value: AllTogether.
   * 
   * @example
   * AllTogether
   */
  batchOptimization?: string;
  /**
   * @remarks
   * Specifies whether to send a dry run request. Valid values:
   * 
   * - true: sends a dry run request without stopping the instances. The system checks whether required parameters are specified, the request format is valid, and the instance status is valid. If the request fails the check, an error is returned. If the request passes the check, `DRYRUN.SUCCESS` is returned.
   * > If the `BatchOptimization` parameter is set to `SuccessFirst`, the dry run result for `DryRun=true` only returns `DRYRUN.SUCCESS`.
   * 
   * - false: sends a regular request and stops the instances directly after the request passes the check.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to force stop the instances. Valid values:
   * 
   * - true: force stops the instances.
   *   >Warning: Force stopping an instance is equivalent to a power outage and may cause data in the operating system that is not written to the disk to be lost. Proceed with caution.
   * - false: normally stops the instances.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * The instance IDs. Array length: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
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
   * The stop mode. Valid values:
   *   - StopCharging: economical mode. After you enable economical mode:
   *     - Billing is suspended for computing resources (vCPUs, memory, and GPUs), image licenses, and static public IP addresses that use the pay-by-bandwidth billing method.
   *     - Billing continues for system cloud disks, data cloud disks, and Elastic IP Addresses (EIPs) that use the pay-by-bandwidth billing method.
   *     - Because computing resources are released, the instance may fail to start due to insufficient resource inventory. If this occurs, try again later or change the instance type.
   *     - If an EIP was associated with the instance before it was stopped, the IP address remains unchanged after the instance is restarted. Otherwise, the static public IP address may change, but the private IP address remains unchanged. 
   * 
   *     For more information, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   *     >Notice: 
   * If the instance does not support economical mode, the API does not return an error and prioritizes stopping the instance. Instance types that do not support economical mode include instances with local disks and subscription instances.
   *     
   * 
   *   - KeepCharging: standard stop mode. After the instance is stopped, its resources are retained and continue to be billed. The ECS instance type inventory and public IP address are also reserved for you. Select this mode if you stop the instance to perform operations such as replacing the operating system, reinitializing cloud disks, changing the instance type, or modifying the private IP address. This prevents startup failures.
   * 
   * Default value: If you [enable economical mode for instances in a VPC](~~63353#default~~) and the instance meets the requirements, the default value is `StopCharging`. Otherwise, the default value is `KeepCharging`.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      batchOptimization: 'BatchOptimization',
      dryRun: 'DryRun',
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchOptimization: 'string',
      dryRun: 'boolean',
      forceStop: 'boolean',
      instanceId: { 'type': 'array', 'itemType': 'string' },
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stoppedMode: 'string',
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

