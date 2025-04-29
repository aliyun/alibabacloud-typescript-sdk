// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAutoProvisioningGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the auto provisioning group.
   * 
   * This parameter is required.
   * 
   * @example
   * apg-bpuf6jel2bbl62wh13****
   */
  autoProvisioningGroupId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the auto provisioning group.
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
   * Specifies whether to release instances in the auto provisioning group. Valid values:
   * 
   * *   true
   * *   false
   * 
   * >  By default, this parameter inherits the value of `TerminateInstances` that you specified when you call the `CreateAutoProvisioningGroup` operation to create an auto provisioning group. You can also change the value of `TerminateInstances` when you call the DeleteAutoProvisioningGroup operation to delete the auto provisioning group.
   * 
   * @example
   * true
   */
  terminateInstances?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoProvisioningGroupId: 'AutoProvisioningGroupId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      terminateInstances: 'TerminateInstances',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoProvisioningGroupId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      terminateInstances: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

