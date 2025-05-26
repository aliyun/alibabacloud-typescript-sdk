// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlansResponseBodyElasticPlans extends $dara.Model {
  /**
   * @remarks
   * Indicates whether **Proportional Default Scaling for EIUs** is enabled. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  autoScale?: boolean;
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
   * Indicates whether the scaling plan is immediately enabled after the plan is created. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The time when the next scheduling is performed.
   * 
   * > The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  nextScheduleTime?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * > You can call the [DescribeDBResourceGroup](https://help.aliyun.com/document_detail/459446.html) operation to query the name of a resource group within a cluster.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The amount of elastic resources after scaling.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **EXECUTOR**: the interactive resource group type, which specifies the computing resource type.
   * *   **WORKER**: the EIU type.
   * 
   * @example
   * EXECUTOR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      elasticPlanName: 'ElasticPlanName',
      enabled: 'Enabled',
      nextScheduleTime: 'NextScheduleTime',
      resourceGroupName: 'ResourceGroupName',
      targetSize: 'TargetSize',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScale: 'boolean',
      elasticPlanName: 'string',
      enabled: 'boolean',
      nextScheduleTime: 'string',
      resourceGroupName: 'string',
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

