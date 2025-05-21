// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsAnalysisResourceQuotasRequest extends $dara.Model {
  /**
   * @remarks
   * The edition of the MySQL analytic instance.
   * 
   * @example
   * mixed_storage
   */
  clusterCategory?: string;
  /**
   * @remarks
   * The mode of the MySQL analytic instance.
   * 
   * @example
   * flexible
   */
  clusterMode?: string;
  /**
   * @remarks
   * The instance type of the MySQL analytic instance.
   * 
   * @example
   * E32
   */
  nodeClass?: string;
  /**
   * @remarks
   * The number of nodes in the MySQL analytic instance.
   * 
   * @example
   * 5
   */
  nodeCount?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the ApsaraDB RDS instance from which data is synchronized to the MySQL analytic instance.
   * 
   * @example
   * rm-2ze09tofcv39h7165
   */
  rdsInstanceId?: string;
  /**
   * @remarks
   * The region ID.
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
   * The storage type of the MySQL analytic instance.
   * 
   * @example
   * cloud_essd
   */
  storageType?: string;
  static names(): { [key: string]: string } {
    return {
      clusterCategory: 'ClusterCategory',
      clusterMode: 'ClusterMode',
      nodeClass: 'NodeClass',
      nodeCount: 'NodeCount',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      rdsInstanceId: 'RdsInstanceId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      storageType: 'StorageType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterCategory: 'string',
      clusterMode: 'string',
      nodeClass: 'string',
      nodeCount: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      rdsInstanceId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      storageType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

