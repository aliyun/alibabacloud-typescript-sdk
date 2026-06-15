// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHaVipsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter key. Valid values:
   * 
   * `HaVipId`: The ID of the high-availability virtual IP (HAVIP).
   * 
   * `HaVipName`: The name of the HAVIP.
   * 
   * `VpcId`: The ID of the VPC to which the HAVIP belongs.
   * 
   * `VSwitchId`: The ID of the vSwitch to which the HAVIP belongs.
   * 
   * `IpAddress`: The IP address of the HAVIP.
   * 
   * `AssociatedInstanceType`: The type of instance associated with the HAVIP. The value must be `EcsInstance`.
   * 
   * `AssociatedInstanceId`: The ID of the instance associated with the HAVIP.
   */
  key?: string;
  /**
   * @remarks
   * A list of 1 to 20 values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHaVipsRequest extends $dara.Model {
  /**
   * @remarks
   * The query filters. You can specify 1 to 20 filters.
   * 
   * This parameter is required.
   */
  filter?: DescribeHaVipsRequestFilter[];
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 50. Default value: 10.
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': DescribeHaVipsRequestFilter },
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
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

