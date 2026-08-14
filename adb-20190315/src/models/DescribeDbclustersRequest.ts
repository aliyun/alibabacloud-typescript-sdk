// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. You can filter clusters by tag keys. You can specify up to 20 key-value pairs. The numbers n in `Tag.N.Key` and `Tag.N.Value` must be unique and consecutive integers starting from 1.
   * 
   * > A tag key can be up to 64 characters in length. It cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value. You can filter clusters by tag values. You can specify up to 20 key-value pairs. The numbers n in `Tag.N.Key` and `Tag.N.Value` must be unique and consecutive integers starting from 1.
   * 
   * > A tag value can be up to 64 characters in length. It cannot start with `aliyun`, `acs:`, `http://`, or `https://`.
   * 
   * @example
   * test1
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

export class DescribeDBClustersRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster description.
   * 
   * - It cannot start with `http://` or `https://`.
   * 
   * - It must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can specify any cluster ID in the specified region.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - **Preparing**: Preparing.
   * 
   * - **Creating**: Creating.
   * 
   * - **Restoring**: Restoring from a backup.
   * 
   * - **Running**: Running.
   * 
   * - **Deleting**: Deleting.
   * 
   * - **ClassChanging**: Upgrading or downgrading specifications.
   * 
   * - **NetAddressCreating**: Creating a network endpoint.
   * 
   * - **NetAddressDeleting**: Deleting a network endpoint.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * Cluster version
   * 
   * - **3.0**: Data Warehouse Edition.
   * 
   * - **5.0** (default): Includes the Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
   * 
   * - **All**: All versions, including the Data Warehouse Edition, Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The database version. Valid value: **3.0**.
   * 
   * @example
   * 3.0
   */
  DBVersion?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Valid values are integers greater than 0 and less than or equal to the maximum value of the integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values:
   * 
   * - **30** (default)
   * 
   * - **50**
   * 
   * - **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to view available region IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-4690g37929XXXX
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterVersion: 'DBClusterVersion',
      DBVersion: 'DBVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBClusterVersion: 'string',
      DBVersion: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDBClustersRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

