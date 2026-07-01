// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter will be deprecated soon and is retained only for compatibility purposes. Ignore this parameter when you call this operation.
   * 
   * @example
   * true
   */
  confirmStop?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: performs only a dry run. The instance is not stopped. The system checks whether required parameters are specified, whether the request format is valid, whether business restrictions are met, and whether ECS inventory is sufficient. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - false: performs a dry run and sends the request. The instance is stopped after the check succeeds.
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
   * - true: forcefully stops the instance. This is equivalent to a power-off operation. All cached data that is not written to storage devices is lost.
   * - false: normally stops the instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not available for use.
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
   * The stop mode for the pay-as-you-go ECS instance. Valid values:
   * 
   *   - StopCharging: economical mode. After the economical mode is enabled:
   *     - Billing is suspended for compute resources (vCPUs, memory, and GPUs), image license fees, and fixed bandwidth of static public IP addresses.
   *     - Billing continues for system disks, data disks, and fixed bandwidth of Elastic IP Addresses (EIPs).
   *     - Because compute resources are released, the instance may fail to restart due to insufficient inventory. Try again later or change the instance type.
   *     - If the instance is associated with an EIP before it is stopped, the IP address remains unchanged after the instance is restarted. Otherwise, the static public IP address may change, but the private IP address remains unchanged. 
   * 
   *     For more information, see [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   *     >Notice: 
   * If the instance does not support the economical mode, no error is returned on the API side. Stopping the instance takes priority. Instance types that do not support the economical mode include instances with local disks and subscription instances.
   *     
   * 
   *   - KeepCharging: standard stop mode. The instance continues to be billed after it is stopped.
   * 
   * Default value: If you enable the economical mode for VPC-connected instances in the ECS console (for more information, see [Enable the economical mode by default](~~63353#default~~)) and the conditions are met, the default value is `StopCharging`. Otherwise, the default value is `KeepCharging`.
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

