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
   * The description of the cluster.
   * 
   * *   The description cannot start with `http://` or `https://`.
   * *   The description must be 2 to 256 characters in length
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * If you do not specify this parameter, the information about all clusters that reside in the region is returned.
   * 
   * @example
   * amv-bp1r053byu48p****
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The status of the cluster. Valid values:
   * 
   * *   **Preparing**
   * *   **Creating**
   * *   **Running**
   * *   **Deleting**
   * *   **Restoring**
   * *   **ClassChanging**
   * *   **NetAddressCreating**
   * *   **NetAddressDeleting**
   * *   **NetAddressModifying**
   * 
   * @example
   * Running
   */
  DBClusterStatus?: string;
  /**
   * @remarks
   * The version number corresponding to the edition of the cluster. Valid values:
   * 
   * *   **3.0**: Data Warehouse Edition.
   * *   **5.0** (default): includes Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
   * *   **All**: all editions, including Data Warehouse Edition, Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
   * 
   * @example
   * 5.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The page number. Pages start from page 1. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30** (default)
   * *   **50**
   * *   **100**
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The edition of the cluster. Valid values:
   * 
   * *   **EnterpriseVersion**: Enterprise Edition.
   * *   **BasicVersion**: Basic Edition.
   * 
   * >  If you leave this parameter empty, the information about clusters of all editions is returned.
   * 
   * @example
   * BasicVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/454314.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource group ID. If you do not specify this parameter, the information about all resource groups in the cluster is returned.
   * 
   * @example
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
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

