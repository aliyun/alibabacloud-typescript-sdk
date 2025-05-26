// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanJobsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-wz9509beptiz****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, all scaling plans of the cluster are queried.
   * 
   * *   You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The page number.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > 
   * 
   * *   If you do not specify this parameter, the scaling plans of all resource groups are queried, including the interactive resource group and elastic I/O unit (EIU) types.
   * 
   * *   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name for a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the scaling plan job. Valid values:
   * 
   * *   RUNNING
   * *   SUCCESSFUL
   * *   FAILED
   * 
   * >  If you do not specify this parameter, the scaling plans in all states are queried.
   * 
   * @example
   * SUCCESSFUL
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      elasticPlanName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupName: 'string',
      startTime: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

