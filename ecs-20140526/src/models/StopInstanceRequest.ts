// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter will be removed in the future and is retained only to ensure compatibility. We recommend that you ignore this parameter.
   * 
   * @example
   * true
   */
  confirmStop?: boolean;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * *   true: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and available ECS resources. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
   * *   false: performs a dry run and performs the actual request.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully stop the ECS instance. Valid values:
   * 
   * *   true: forcefully stops the ECS instance. If you set ForceStop to true, this operation is equivalent to a power-off operation. Cache data that is not written to storage devices on the instance is lost.
   * *   false: normally stops the ECS instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * > This parameter is in invitational preview and is not publicly available.
   * 
   * @example
   * hide
   */
  hibernate?: boolean;
  /**
   * @remarks
   * The ID of the instance.
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
   * The stop mode of the pay-as-you-go instance. Valid values:
   * 
   * *   StopCharging: economical mode. For information about how `StopCharging` takes effect, see the "Conditions for enabling economical mode" section in [Economical mode](https://help.aliyun.com/document_detail/63353.html).
   * *   KeepCharging: standard mode. You continue to be charged for instances that are stopped in standard mode.
   * 
   * Default value: If the conditions for enabling the economical mode are met and you have enabled this mode in the ECS console, the default value is [StopCharging](~~63353#default~~). For more information, see the "Enable economical mode" section in `Economical mode`. Otherwise, the default value is `KeepCharging`.
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

