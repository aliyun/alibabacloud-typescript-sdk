// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticPlanRequest extends $dara.Model {
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
   * >  You can call the [DescribeElasticPlans](https://help.aliyun.com/document_detail/601334.html) operation to query the names of scaling plans.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
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
  static names(): { [key: string]: string } {
    return {
      cronExpression: 'CronExpression',
      DBClusterId: 'DBClusterId',
      elasticPlanName: 'ElasticPlanName',
      endTime: 'EndTime',
      startTime: 'StartTime',
      targetSize: 'TargetSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cronExpression: 'string',
      DBClusterId: 'string',
      elasticPlanName: 'string',
      endTime: 'string',
      startTime: 'string',
      targetSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

