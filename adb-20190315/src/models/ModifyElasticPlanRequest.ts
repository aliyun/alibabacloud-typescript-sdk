// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticPlanRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1rqvm70uh2v****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  elasticPlanEnable?: boolean;
  /**
   * @remarks
   * The end date of the scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-09
   */
  elasticPlanEndDay?: string;
  /**
   * @remarks
   * The dates of the month when you want to execute the scaling plan. A number specifies a date of the month. Separate multiple values with commas (,).
   * 
   * @example
   * 1,15,25
   */
  elasticPlanMonthlyRepeat?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * *   The name must be 2 to 30 characters in length.
   * *   The name can contain letters, digits, and underscores (_).
   * 
   * > You can call the [DescribeElasticPlan](https://help.aliyun.com/document_detail/190596.html) operation to query the information about all scaling plans of a cluster, including the scaling plan names.
   * 
   * This parameter is required.
   * 
   * @example
   * realtime
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The number of nodes that are involved in the scaling plan.
   * 
   * *   If ElasticPlanType is set to **worker**, you can set this parameter to 0 or leave this parameter empty.
   * *   If ElasticPlanType is set to **executorcombineworker** or **executor**, you must set this parameter to a value that is greater than 0.
   * 
   * @example
   * 0
   */
  elasticPlanNodeNum?: number;
  /**
   * @remarks
   * The start date of the scaling plan. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  elasticPlanStartDay?: string;
  /**
   * @remarks
   * The restoration time of the scaling plan. Specify the time on the hour in the HH:mm:ss format. The interval between the scale-up time and the restoration time cannot be more than 24 hours.
   * 
   * @example
   * 10:00:00
   */
  elasticPlanTimeEnd?: string;
  /**
   * @remarks
   * The scale-up time of the scaling plan. Specify the time on the hour in the HH:mm:ss format.
   * 
   * @example
   * 8:00:00
   */
  elasticPlanTimeStart?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker** (default): scales both elastic I/O resources and computing resources by proportion.
   * 
   * > 
   * 
   * *   If you want to set this parameter to **executorcombineworker**, make sure that the cluster runs a minor version of 3.1.3.2 or later.
   * 
   * *   If you want to set this parameter to **worker** or **executor**, make sure that the cluster runs a minor version of 3.1.6.1 or later and a ticket is submitted. After your request is approved, you can set this parameter to **worker** or **executor**.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The days of the week when you want to execute the scaling plan. Valid values: 0 to 6, which indicate Sunday to Saturday. Separate multiple values with commas (,).
   * 
   * @example
   * 1,2,3,4,5
   */
  elasticPlanWeeklyRepeat?: string;
  /**
   * @remarks
   * The resource specifications that can be scaled up by the scaling plan. Valid values:
   * 
   * *   8 Core 64 GB (default)
   * *   16 Core 64 GB
   * *   32 Core 64 GB
   * *   64 Core 128 GB
   * *   12 Core 96 GB
   * *   24 Core 96 GB
   * *   52 Core 86 GB
   * 
   * @example
   * 16 Core 64 GB
   */
  elasticPlanWorkerSpec?: string;
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
      elasticPlanEnable: 'ElasticPlanEnable',
      elasticPlanEndDay: 'ElasticPlanEndDay',
      elasticPlanMonthlyRepeat: 'ElasticPlanMonthlyRepeat',
      elasticPlanName: 'ElasticPlanName',
      elasticPlanNodeNum: 'ElasticPlanNodeNum',
      elasticPlanStartDay: 'ElasticPlanStartDay',
      elasticPlanTimeEnd: 'ElasticPlanTimeEnd',
      elasticPlanTimeStart: 'ElasticPlanTimeStart',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWeeklyRepeat: 'ElasticPlanWeeklyRepeat',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
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
      elasticPlanEnable: 'boolean',
      elasticPlanEndDay: 'string',
      elasticPlanMonthlyRepeat: 'string',
      elasticPlanName: 'string',
      elasticPlanNodeNum: 'number',
      elasticPlanStartDay: 'string',
      elasticPlanTimeEnd: 'string',
      elasticPlanTimeStart: 'string',
      elasticPlanType: 'string',
      elasticPlanWeeklyRepeat: 'string',
      elasticPlanWorkerSpec: 'string',
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

