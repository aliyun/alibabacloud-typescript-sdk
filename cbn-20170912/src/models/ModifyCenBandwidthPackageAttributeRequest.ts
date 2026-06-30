// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCenBandwidthPackageAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the bandwidth plan.
   * 
   * This parameter is required.
   * 
   * @example
   * cenbwp-4c2zaavbvh5fx****
   */
  cenBandwidthPackageId?: string;
  /**
   * @remarks
   * The new description for the bandwidth plan.
   * 
   * The description can be empty or 1 to 256 characters long. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * Bandwidth package
   */
  description?: string;
  /**
   * @remarks
   * The new name for the bandwidth plan.
   * 
   * The name can be empty or 1 to 128 characters long. It cannot start with http\\:// or https\\://.
   * 
   * @example
   * test
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      cenBandwidthPackageId: 'CenBandwidthPackageId',
      description: 'Description',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenBandwidthPackageId: 'string',
      description: 'string',
      name: 'string',
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

