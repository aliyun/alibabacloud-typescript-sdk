// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyEipAddressAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zeerraiwb7uj6i0d****
   */
  allocationId?: string;
  /**
   * @remarks
   * The maximum bandwidth of the EIP. Unit: Mbit/s.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  bandwidth?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the EIP.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      allocationId: 'AllocationId',
      bandwidth: 'Bandwidth',
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
      bandwidth: 'string',
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

