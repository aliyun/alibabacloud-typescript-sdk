// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanAttributeResponseBodyElasticPlan extends $dara.Model {
  /**
   * @remarks
   * Indicates whether **Default Proportional Scaling for EIUs** is enabled. Valid values: true: Default Proportional Scaling for EIUs is enabled. If you set this parameter to true, storage resources are scaled along with computing resources. false: Default Proportional Scaling for EIUs is not enabled.
   * 
   * >  You can enable Default Proportional Scaling for EIUs for only a single scaling plan of a cluster. After you enable a scaling plan of the Default Proportional Scaling for EIUs type, you cannot enable scaling plans of other types.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * A CORN expression that indicates the scaling cycle and time for the scaling plan.
   * 
   * @example
   * 0 20 14 * * ?
   */
  cronExpression?: string;
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
   * Indicates whether the scaling plan is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The end time of the scaling plan.
   * 
   * >  The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group used by the scaling plan.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time of the scaling plan.
   * 
   * >  The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
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
   * The type of the scaling plan.
   * 
   * @example
   * EXECUTOR
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      autoScale: 'AutoScale',
      cronExpression: 'CronExpression',
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

export class DescribeElasticPlanAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried scaling plan.
   */
  elasticPlan?: DescribeElasticPlanAttributeResponseBodyElasticPlan;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticPlan: 'ElasticPlan',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPlan: DescribeElasticPlanAttributeResponseBodyElasticPlan,
      requestId: 'string',
    };
  }

  validate() {
    if(this.elasticPlan && typeof (this.elasticPlan as any).validate === 'function') {
      (this.elasticPlan as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

