// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateElasticPlanRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable **Default Proportional Scaling for EIUs**. Valid values:
   * 
   * *   true. In this case, storage resources are scaled along with computing resources, and the TargetSize and CronExpression parameters are not supported.
   * *   false
   * 
   * > 
   * 
   * *   This parameter must be specified when Type is set to WORKER. This parameter is not required when Type is set to EXECUTOR.
   * 
   * *   You can enable Default Proportional Scaling for EIUs for only a single scaling plan of a cluster.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * A CORN expression that specifies the scaling cycle and time for the scaling plan.
   * 
   * @example
   * 0 20 14 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
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
   * >  The name must be 2 to 30 characters in length and can contain letters, digits, and underscores (_). The name must start with a letter.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Specifies whether to immediately enable the scaling plan after the plan is created. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The end time of the scaling plan.
   * 
   * >  Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2025-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > 
   * 
   * *   If you want to create a scaling plan that uses interactive resource groups, you must specify this parameter. If you want to create a scaling plan that uses elastic I/O units (EIUs), you do not need to specify this parameter.
   * 
   * *   You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the resource group name for a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time of the scaling plan.
   * 
   * >  Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The desired specifications of elastic resources after scaling.
   * 
   * > 
   * 
   * *   If the scaling plan uses **EIUs** and **Default Proportional Scaling for EIUs** is enabled, you do not need to specify this parameter. In other cases, you must specify this parameter.
   * 
   * *   You can call the [DescribeElasticPlanSpecifications](https://help.aliyun.com/document_detail/601278.html) operation to query the specifications that are supported for scaling plans.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   EXECUTOR: the interactive resource group type, which indicates the computing resource type.
   * *   WORKER: the EIU type.
   * 
   * This parameter is required.
   * 
   * @example
   * EXECUTOR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      endTime: 'EndTime',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      targetSize: 'TargetSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      cronExpression: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      enabled: 'boolean',
      endTime: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
      targetSize: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

