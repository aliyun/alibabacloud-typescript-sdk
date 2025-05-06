// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersWithBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the cluster. The name must meet the following requirements:
   * 
   * *   It cannot start with `http://` or `https://`.
   * *   It must be 2 to 256 characters in length.
   * 
   * @example
   * test
   */
  DBClusterDescription?: string;
  /**
   * @remarks
   * The ID of the cluster. If you need to specify multiple cluster IDs, separate the cluster IDs with commas (,).
   * 
   * @example
   * pc-**************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The type of the database engine. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * *   Valid values for the MySQL database engine:
   * 
   *     *   **5.6**
   *     *   **5.7**
   *     *   **8.0**
   * 
   * *   Valid values for the PostgreSQL database engine:
   * 
   *     *   **11**
   *     *   **14**
   * 
   * *   Valid value for the Oracle database engine: **11**
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Specifies whether the cluster is deleted. Valid values:
   * 
   * *   **0**: not deleted
   * *   **1**: deleted
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return. The value must be a positive integer that does not exceed the maximum value of the INTEGER data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values:
   * 
   * *   **30**
   * *   **50**
   * *   **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to query information about regions.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-************
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      DBClusterDescription: 'DBClusterDescription',
      DBClusterIds: 'DBClusterIds',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      isDeleted: 'IsDeleted',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterDescription: 'string',
      DBClusterIds: 'string',
      DBType: 'string',
      DBVersion: 'string',
      isDeleted: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
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

