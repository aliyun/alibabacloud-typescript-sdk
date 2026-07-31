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
   * The ID of the region where the auto provisioning group resides.
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
   * Specifies whether to release the instances in the auto-provisioning group when the group is deleted. Valid values:
   * 
   * - true: Releases the instances auto provisioning group.
   * - false: The instances auto provisioning group continue to run.
   * 
   * >The default value of this parameter is inherited from the TerminateInstances parameter that you specified when you called the CreateAutoProvisioningGroup operation to create the auto-provisioning group. You can also set the TerminateInstances parameter to a new value when you call this operation to delete the auto-provisioning group.
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

