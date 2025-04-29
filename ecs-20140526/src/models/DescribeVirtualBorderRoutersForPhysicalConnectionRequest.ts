// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter } from "./DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter";


export class DescribeVirtualBorderRoutersForPhysicalConnectionRequest extends $dara.Model {
  filter?: DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter[];
  ownerId?: number;
  pageNumber?: number;
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  physicalConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      physicalConnectionId: 'PhysicalConnectionId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeVirtualBorderRoutersForPhysicalConnectionRequestFilter },
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      physicalConnectionId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

