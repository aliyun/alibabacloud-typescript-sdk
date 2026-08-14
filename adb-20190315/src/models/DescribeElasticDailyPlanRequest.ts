// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticDailyPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Data Warehouse Edition cluster.
   * 
   * > Call [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) to query the IDs of all Data Warehouse Edition clusters in the destination region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The start date of the daily scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  elasticDailyPlanDay?: string;
  /**
   * @remarks
   * The execution status of the daily scaling plan. To query multiple statuses, separate them with commas (,). Valid values:
   * 
   * - **1**: Not executed.
   * 
   * - **2**: Executing.
   * 
   * - **3**: Succeeded.
   * 
   * - **4**: Failed.
   * 
   * @example
   * 3
   */
  elasticDailyPlanStatusList?: string;
  /**
   * @remarks
   * The name of the scaling plan. The name must meet the following requirements:
   * 
   * - It must be 2 to 30 characters in length.
   * 
   * - It must consist of uppercase letters, lowercase letters, digits, and underscores (_).
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
   * > Call [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/466685.html) to query the name of the resource group.
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

