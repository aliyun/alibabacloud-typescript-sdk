// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanJobsResponseBodyJobs extends $dara.Model {
  /**
   * @remarks
   * The amount of elastic resources.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, ElasticAcu indicates the amount of elastic resources in the current resource group.
   * 
   * *   If Type is set to WORKER, ElasticAcu indicates the total amount of elastic storage resources in the current cluster.
   * 
   * @example
   * 16ACU
   */
  elasticAcu?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * The end time of the scaling plan job.
   * 
   * >  The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The number of compute nodes or storage replica sets.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, InstanceSize indicates the number of compute nodes in the cluster.
   * 
   * *   If Type is set to EXECUTOR, InstanceSize indicates the number of storage replica sets in the cluster.
   * 
   * @example
   * 1
   */
  instanceSize?: number;
  /**
   * @remarks
   * The amount of reserved resources.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, ReserveAcu indicates the amount of reserved resources in the current resource group.
   * 
   * *   If Type is set to WORKER, ReserveAcu indicates the total amount of reserved storage resources in the current cluster.
   * 
   * @example
   * 16ACU
   */
  reserveAcu?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time of the scaling plan job.
   * 
   * >  The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-01T11:01:00Z
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
   * @example
   * SUCCESSFUL
   */
  status?: string;
  /**
   * @remarks
   * The desired specifications of elastic resources after scaling.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The total amount of resources.
   * 
   * > 
   * 
   * *   If Type is set to EXECUTOR, TotalAcu indicates the total amount of computing resources in the current resource group.
   * 
   * *   If Type is set to WORKER, TotalAcu indicates the total amount of storage resources in the cluster.
   * 
   * @example
   * 32ACU
   */
  totalAcu?: string;
  /**
   * @remarks
   * The type of the scaling plan job. Valid values:
   * 
   * *   EXECUTOR: the interactive resource group type, which indicates the computing resource type.
   * *   WORKER: the EIU type.
   * 
   * @example
   * EXECUTOR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      elasticAcu: 'ElasticAcu',
      elasticPlanName: 'ElasticPlanName',
      endTime: 'EndTime',
      instanceSize: 'InstanceSize',
      reserveAcu: 'ReserveAcu',
      resourceGroupName: 'ResourceGroupName',
      startTime: 'StartTime',
      status: 'Status',
      targetSize: 'TargetSize',
      totalAcu: 'TotalAcu',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticAcu: 'string',
      elasticPlanName: 'string',
      endTime: 'string',
      instanceSize: 'number',
      reserveAcu: 'string',
      resourceGroupName: 'string',
      startTime: 'string',
      status: 'string',
      targetSize: 'string',
      totalAcu: 'string',
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

