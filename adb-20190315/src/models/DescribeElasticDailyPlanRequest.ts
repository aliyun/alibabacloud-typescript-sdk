// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticDailyPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The start date of the current-day scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  elasticDailyPlanDay?: string;
  /**
   * @remarks
   * The execution state of the current-day scaling plan. Separate multiple values with commas (,). Valid values:
   * 
   * *   **1**: The scaling plan is not executed.
   * *   **2**: The scaling plan is being executed.
   * *   **3**: The scaling plan is executed.
   * *   **4**: The scaling plan fails to be executed.
   * 
   * @example
   * 3
   */
  elasticDailyPlanStatusList?: string;
  /**
   * @remarks
   * The name of the scaling plan. Valid values:
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * @example
   * realtimeplan
   */
  elasticPlanName?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * >  You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) operation to query the resource group name.
   * 
   * @example
   * test
   */
  resourcePoolName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticDailyPlanDay: 'ElasticDailyPlanDay',
      elasticDailyPlanStatusList: 'ElasticDailyPlanStatusList',
      elasticPlanName: 'ElasticPlanName',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourcePoolName: 'ResourcePoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticDailyPlanDay: 'string',
      elasticDailyPlanStatusList: 'string',
      elasticPlanName: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourcePoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

