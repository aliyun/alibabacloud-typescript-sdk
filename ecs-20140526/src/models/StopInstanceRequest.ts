// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is being deprecated and is retained only for compatibility purposes. Ignore this parameter when you call this operation.
   * 
   * @example
   * true
   */
  confirmStop?: boolean;
  /**
   * @remarks
   * Specifies whether to perform a dry run. Valid values:
   * 
   * - true: Performs a dry run without stopping the instance. The system checks whether the required parameters are specified, the request format is valid, service limits are met, and ECS inventory is sufficient. If the check fails, the corresponding error is returned. If the check passes, the error code `DryRunOperation` is returned.
   * - false: Performs a normal request. After the check passes, the instance is stopped.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully stop the instance. Valid values:
   * 
   * - true: Forcefully stops the instance. This is equivalent to a typical power-off operation. All cached data that is not written to the storage device is lost.
   * - false: Normally stops the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * >This parameter is in invitational preview and is not available for use.
   * 
   * @example
   * hide
   */
  hibernate?: boolean;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4ph****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The stop mode for a pay-as-you-go ECS instance. Valid values:
   * 
   *   - StopCharging: Economical mode. After economical mode is enabled:
   *     - Billing is suspended for compute resources (vCPUs, memory, and GPUs), image license fees, and the pay-by-bandwidth mode for static public IP addresses.
   *     - Billing continues for system disks, data disks, and the pay-by-bandwidth mode for elastic IP addresses (EIPs).
   *     - Because compute resources are reclaimed, the instance may fail to start due to insufficient inventory. In this case, try again later or change the instance type.
   *     - If an EIP is associated with the instance before the instance is stopped, the IP address remains unchanged after the instance is restarted. Otherwise, the static public IP address may change, but the private IP address remains unchanged. 
   * 
   *     For more information, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   *     >Notice: 
   * If the instance does not support economical mode, the API does not return an error. The instance is stopped as a priority. Instance types that do not support economical mode include instances with local disks and subscription instances.
   *     
   * 
   *   - KeepCharging: Standard stop mode. Billing continues after the instance is stopped.
   * 
   * Default value: If you enable the economical mode for instances in a VPC in the ECS console (for more information, see [Enable economical mode by default](~~63353#default~~)) and the conditions are met, the default value is `StopCharging`. Otherwise, the default value is `KeepCharging`.
   * 
   * @example
   * KeepCharging
   */
  stoppedMode?: string;
  static names(): { [key: string]: string } {
    return {
      confirmStop: 'ConfirmStop',
      dryRun: 'DryRun',
      forceStop: 'ForceStop',
      hibernate: 'Hibernate',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      stoppedMode: 'StoppedMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confirmStop: 'boolean',
      dryRun: 'boolean',
      forceStop: 'boolean',
      hibernate: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      stoppedMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

