// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run. Valid values:
   * 
   * - true: Performs only a dry run without restarting the instance. The system checks the required parameters, request syntax, business restrictions, and ECS inventory. If the check fails, the corresponding error is returned. If the check succeeds, the `DryRunOperation` error code is returned.
   * - false: Performs a dry run and sends the request. If the check succeeds, the instance is restarted.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to forcefully stop ECS instance before restarting it. Valid values:
   * 
   * -   true: Forcefully stops ECS instance. This is equivalent to a power-off operation. Cached data that has not been written to storage devices is lost.
   * 
   * -   false: Normally stops ECS instance.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
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
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      forceStop: 'ForceStop',
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      forceStop: 'boolean',
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

