// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnassociateEipAddressRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  allocationId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  instanceType?: string;
  ownerAccount?: string;
  ownerId?: number;
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      instanceId: 'InstanceId',
      instanceType: 'InstanceType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationId: 'string',
      instanceId: 'string',
      instanceType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
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

