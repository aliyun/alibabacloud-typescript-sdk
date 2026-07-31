// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStorageCapacityUnitsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the SCU.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the SCU.
   * 
   * @example
   * TestValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStorageCapacityUnitsRequest extends $dara.Model {
  /**
   * @remarks
   * The allocate type. Valid values:
   * 
   * - Normal: queries SCUs that belong to the current Alibaba Cloud account.
   * - Shared: queries SCUs that are shared between the Alibaba Cloud account and a Resource Access Management (RAM) user.
   * 
   * Default value: Normal.
   * 
   * @example
   * Normal
   */
  allocationType?: string;
  /**
   * @remarks
   * The capacity of the SCU. Unit: GiB. Valid values: {20, 40, 100, 200, 500, 1024, 2048, 5120, 10240, 20480, 51200}.
   * 
   * @example
   * 20
   */
  capacity?: number;
  /**
   * @remarks
   * The name of the SCU. The name must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.
   * 
   * @example
   * testScuName
   */
  name?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the SCU list.
   * 
   * Minimum value: 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page for a paged query.
   * 
   * Maximum value: 100.
   * 
   * Default value: 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the SCU. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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
   * The statuses of SCUs. Array length: 1 to 4.
   * 
   * @example
   * Active
   */
  status?: string[];
  /**
   * @remarks
   * The IDs of SCUs. Array length: 1 to 100.
   * 
   * @example
   * scu-bp67acfmxazb4p****
   */
  storageCapacityUnitId?: string[];
  /**
   * @remarks
   * The tags. Array length: 0 to 20.
   */
  tag?: DescribeStorageCapacityUnitsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      allocationType: 'AllocationType',
      capacity: 'Capacity',
      name: 'Name',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      storageCapacityUnitId: 'StorageCapacityUnitId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocationType: 'string',
      capacity: 'number',
      name: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: { 'type': 'array', 'itemType': 'string' },
      storageCapacityUnitId: { 'type': 'array', 'itemType': 'string' },
      tag: { 'type': 'array', 'itemType': DescribeStorageCapacityUnitsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.storageCapacityUnitId)) {
      $dara.Model.validateArray(this.storageCapacityUnitId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

