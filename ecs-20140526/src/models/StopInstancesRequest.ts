// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The batch operation mode. Valid values:
   * 
   * - AllTogether: All operations must succeed for the entire batch operation to be considered successful. If any operation fails, the entire batch operation fails and all completed operations are rolled back to the previous state.
   * 
   * - SuccessFirst: Each operation in the batch is executed independently. If an operation fails, other operations can still be executed and confirmed as successful. Successful operations are committed, and failed operations are marked as failed without affecting the results of other operations.
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
   * - true: sends a dry run request without stopping the instances. The system checks the required parameters, request format, and instance status. If the check fails, the corresponding error is returned. If the check succeeds, `DRYRUN.SUCCESS` is returned.
   * > If the BatchOptimization parameter is set to `SuccessFirst`, the dry run result for `DryRun=true` returns only `DRYRUN.SUCCESS`.
   * 
   * - false: sends a normal request. After the request passes the check, the instances are stopped.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully stop the instances. Valid values:
   * 
   * - true: forcefully stops the instances.
   *   >Warning: A forced stop is equivalent to a power-off. Data that is not written to disks in the instance operating system may be lost. Proceed with caution.
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
   * The stop mode. Valid values:
   *   - StopCharging: economical mode. After economical mode is enabled:
   *     - Billing for compute resources (vCPUs, memory, and GPUs), image license fees, and fixed bandwidth of static public IP addresses is suspended.
   *     - Billing for system disks, data disks, and fixed bandwidth of Elastic IP Addresses (EIPs) continues.
   *     - Because compute resources are released, the instance may fail to start due to insufficient resources. Try again later or change the instance type.
   *     - If an EIP is associated with the instance before it is stopped, the IP address remains unchanged after the instance is restarted. Otherwise, the static public IP address may change, but the private IP address remains unchanged. 
   * 
   *     For more information, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   *     >Notice: 
   * If the instance does not support economical mode, the API does not return an error. Stopping the instance takes priority. Instance types that do not support economical mode include instances with local SSDs and subscription instances.
   *     
   * 
   *   - KeepCharging: standard stop mode. After the instance is stopped, resources are retained and billing continues. The instance type inventory and public IP address are also retained. If you stop the instance to replace the operating system, reinitialize a disk, change the instance type, or modify the private IP address, select this mode to avoid startup failures.
   * 
   * Default value: If you [enable economical mode for VPC-connected instances](~~63353#default~~) and the conditions are met, the default value is `StopCharging`. Otherwise, the default value is `KeepCharging`.
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

