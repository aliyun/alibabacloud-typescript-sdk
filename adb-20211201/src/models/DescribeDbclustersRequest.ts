// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * tag1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
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
   * - Cannot start with `http://` or `https://`.
   * 
   * - The description must be 2 to 256 characters long.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * If you omit this parameter, the operation returns information about all clusters in the specified region.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The cluster status. Valid values:
   * 
   * - **Preparing**: The cluster is preparing.
   * 
   * - **Creating**: The cluster is being created.
   * 
   * - **Running**: The cluster is running.
   * 
   * - **Deleting**: The cluster is being deleted.
   * 
   * - **Restoring**: The cluster is being restored from a backup.
   * 
   * - **ClassChanging**: The cluster specifications are changing.
   * 
   * - **NetAddressCreating**: A network connection is being created for the cluster.
   * 
   * - **NetAddressDeleting**: The network connection of the cluster is being deleted.
   * 
   * - **NetAddressModifying**: The network connection of the cluster is being modified.
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The cluster version. Valid values:
   * 
   * - **3.0**: Data Warehouse edition.
   * 
   * - **5.0** (default): Includes the Lakehouse, Enterprise, and Basic editions.
   * 
   * - **All**: All editions, including the Data Warehouse, Lakehouse, Enterprise, and Basic editions.
   * 
   * @example
   * 5.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The page number. The value must be a positive integer. Default value: **1**.
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
   * The product version. Valid values:
   * 
   * - **EnterpriseVersion**: Enterprise edition.
   * 
   * - **BasicVersion**: Basic edition.
   * 
   * > If you omit this parameter, the operation returns clusters of all product versions.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the IDs of available regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. If you omit this parameter, the operation returns information about clusters in all resource groups.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags to filter clusters by.
   */
  tag?: DescribeDBClustersRequestTag[];
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBClusterStatus: 'DBClusterStatus',
      DBClusterVersion: 'DBClusterVersion',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBClusterStatus: 'string',
      DBClusterVersion: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
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

