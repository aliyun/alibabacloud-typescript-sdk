// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipAddressesRequestFilter } from "./DescribeEipAddressesRequestFilter";


export class DescribeEipAddressesRequest extends $dara.Model {
  filter?: DescribeEipAddressesRequestFilter[];
  allocationId?: string;
  associatedInstanceId?: string;
  associatedInstanceType?: string;
  chargeType?: string;
  eipAddress?: string;
  ISP?: string;
  lockReason?: string;
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
  status?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      allocationId: 'AllocationId',
      associatedInstanceId: 'AssociatedInstanceId',
      associatedInstanceType: 'AssociatedInstanceType',
      chargeType: 'ChargeType',
      eipAddress: 'EipAddress',
      ISP: 'ISP',
      lockReason: 'LockReason',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeEipAddressesRequestFilter },
      allocationId: 'string',
      associatedInstanceId: 'string',
      associatedInstanceType: 'string',
      chargeType: 'string',
      eipAddress: 'string',
      ISP: 'string',
      lockReason: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
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

