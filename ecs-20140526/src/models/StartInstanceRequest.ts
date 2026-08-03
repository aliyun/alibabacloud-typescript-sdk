// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. Valid values:
   * 
   * - true: performs only a dry run. The instance is not started. The system checks whether the request parameters are valid, whether the Resource Access Management (RAM) user has the required authorization, and whether the required parameters are specified. If the check fails, the corresponding error is returned. If the check succeeds, the DryRunOperation error code is returned.
   * - false: sends a normal request. If the check succeeds, a 2XX HTTP status code is returned and the instance is started.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * Specifies whether to recover the instance to its initial health state when a local disk fails. This parameter is applicable to instance families that use local disks, such as the d1, i1, and i2 instance families. Valid values:
   * 
   * - true: Recovers the instance to its initial health state.
   * >Warning: All data stored on the local disks of the instance will be lost.
   * 
   * - false: Does not perform any action and maintains the current state.
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  initLocalDisk?: boolean;
  /**
   * @remarks
   * The instance ID of the instance that you want to start.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      initLocalDisk: 'InitLocalDisk',
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
      initLocalDisk: 'boolean',
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

