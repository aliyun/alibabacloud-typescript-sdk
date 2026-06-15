// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the DNAT entry to delete.
   * 
   * This parameter is required.
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The ID of the DNAT table to which the DNAT entry belongs.
   * 
   * This parameter is required.
   */
  forwardTableId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the VPC is located.\\
   * \\
   * To obtain the latest list of regions, call the [DescribeRegions](~~DescribeRegions~~) operation.\\
   * \\
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      forwardEntryId: 'ForwardEntryId',
      forwardTableId: 'ForwardTableId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryId: 'string',
      forwardTableId: 'string',
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

