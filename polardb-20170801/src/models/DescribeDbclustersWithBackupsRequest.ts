// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClustersWithBackupsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster name. The cluster name must meet the following requirements:
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
   * The ID of the cluster. You can specify multiple cluster IDs. Separate the IDs with a comma (,).
   * 
   * @example
   * pc-**************
   */
  DBClusterIds?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * - Valid values for MySQL:
   * 
   *   - **5.6**
   * 
   *   - **5.7**
   * 
   *   - **8.0**
   * 
   * - Valid values for PostgreSQL:
   * 
   *   - **11**
   * 
   *   - **14**
   * 
   * - Valid values for Oracle:
   * 
   *   - **11**
   * 
   *   - **14**
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Specifies whether the cluster is deleted. Valid values:
   * 
   * - **0**: The cluster is not deleted.
   * 
   * - **1**: The cluster is deleted.
   * 
   * @example
   * 0
   */
  isDeleted?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. The value must be an integer that is greater than 0 and does not exceed the maximum value of the Integer data type. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on each page. Valid values:
   * 
   * - **30**
   * 
   * - **50**
   * 
   * - **100**
   * 
   * Default value: 30.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/98041.html) operation to view details about regions.
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

