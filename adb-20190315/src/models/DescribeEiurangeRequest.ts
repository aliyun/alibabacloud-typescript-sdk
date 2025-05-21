// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEIURangeRequest extends $dara.Model {
  /**
   * @remarks
   * The specifications of computing resources.
   * 
   * >  You can call the [DescribeComputeResource](https://help.aliyun.com/document_detail/469002.html) operation to query the specifications of computing resources.
   * 
   * @example
   * {
   *       "RealValue": "32Core128GBNEW",
   *       "DisplayValue": "32Core128GB"
   *     }
   */
  computeResource?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * *   This parameter can be left empty when **Operation** is set to **Buy**.
   * *   This parameter must be specified when **Operation** is set to **Upgrade** or **Downgrade**.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * @example
   * am-bp16t5ci7r74s****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The version of the AnalyticDB for MySQL Data Warehouse Edition cluster. Set the value to **3.0**.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The type of the operation. Valid values:
   * 
   * *   **Buy**: purchases a cluster.
   * *   **Modify**: changes configurations of a cluster.
   * 
   * @example
   * Buy
   */
  operation?: string;
  ownerAccount?: string;
  ownerId?: number;
  productVersion?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
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
   * rg-4690g37929****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The specifications of storage resources. Default value: **8ACU**. Valid values:
   * 
   * *   **8ACU**
   * *   **12ACU**
   * *   **16ACU**
   * 
   * @example
   * 8ACU
   */
  storageSize?: string;
  /**
   * @remarks
   * The type of the sub-operation. Valid values:
   * 
   * *   **Upgrade**: upgrades a cluster.
   * *   **Downgrade**: downgrades a cluster.
   * 
   * @example
   * Upgrade
   */
  subOperation?: string;
  /**
   * @remarks
   * The zone ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/612293.html) operation to query the most recent zone list.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      computeResource: 'ComputeResource',
      DBClusterId: 'DBClusterId',
      DBClusterVersion: 'DBClusterVersion',
      operation: 'Operation',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      productVersion: 'ProductVersion',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageSize: 'StorageSize',
      subOperation: 'SubOperation',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResource: 'string',
      DBClusterId: 'string',
      DBClusterVersion: 'string',
      operation: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      productVersion: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageSize: 'string',
      subOperation: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

