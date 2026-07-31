// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVRoutersRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  VRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      VRouterId: 'VRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      VRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

