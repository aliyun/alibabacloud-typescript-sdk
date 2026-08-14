// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEIURangeRequest extends $dara.Model {
  /**
   * @remarks
   * The specifications of the compute resources.
   * 
   * > Call the [DescribeComputeResource](https://help.aliyun.com/document_detail/469002.html) operation to query the specifications of compute resources.
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
   * The ID of the Data Lakehouse Edition cluster.
   * 
   * - This parameter can be left empty when **Operation** is set to **Buy**.
   * 
   * - This parameter is required when **Operation** is set to **Upgrade** or **Downgrade**.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the ID of the Data Lakehouse Edition cluster.
   * 
   * @example
   * am-bp16t5ci7r74s****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The cluster version. Valid values:
   * 
   * - **3.0** (default): Data Lakehouse Edition.
   * 
   * - **5.0**: includes Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
   * 
   * @example
   * 3.0
   */
  DBClusterVersion?: string;
  /**
   * @remarks
   * The operation type. Valid values:
   * 
   * - **Buy**: Purchase a cluster.
   * 
   * - **Modify**: Change the specifications of a cluster.
   * 
   * @example
   * Buy
   */
  operation?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The edition. Valid values:
   * 
   * - **EnterpriseVersion**: Enterprise Edition.
   * 
   * - **BasicVersion**: Basic Edition.
   * 
   * @example
   * EnterpriseVersion
   */
  productVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * > Call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region ID of the cluster.
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
   * The specifications of the storage resources. The default value is **8ACU**. Valid values:
   * 
   * - **8ACU**
   * 
   * - **12ACU**
   * 
   * - **16ACU**
   * 
   * @example
   * 8ACU
   */
  storageSize?: string;
  /**
   * @remarks
   * The sub-operation type. Valid values:
   * 
   * - **Upgrade**: Upgrade a cluster.
   * 
   * - **Downgrade**: Downgrade a cluster.
   * 
   * @example
   * Upgrade
   */
  subOperation?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * > Call the [DescribeDBClusters](https://help.aliyun.com/document_detail/612293.html) operation to query the zone ID of the cluster.
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

