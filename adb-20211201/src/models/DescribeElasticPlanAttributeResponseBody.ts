// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanAttributeResponseBodyElasticPlan extends $dara.Model {
  /**
   * @remarks
   * Indicates whether **proportional default elastic scaling for the storage acceleration service (EIU)** is enabled.
   * Valid values:
   * - true: Enabled. After this feature is enabled, storage resources scale in or out along with the elastic scaling of compute resources.
   * - false: Disabled.
   * > Only one storage elastic plan with proportional default elastic scaling for the storage acceleration service (EIU) can be enabled for the entire cluster. After this type of elastic plan is enabled, no other storage elastic plans can be enabled.
   * 
   * @example
   * false
   */
  autoScale?: boolean;
  /**
   * @remarks
   * The cron expression, which indicates the scaling cycle and scaling time of the elastic plan.
   * 
   * @example
   * 0 20 14 * * ?
   */
  cronExpression?: string;
  /**
   * @remarks
   * The name of the elastic plan.
   * 
   * @example
   * test
   */
  elasticPlanName?: string;
  /**
   * @remarks
   * Indicates whether the elastic plan is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The end time.
   * 
   * > The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2025-01-01T12:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the resource group to which the elastic plan belongs.
   * 
   * @example
   * test
   */
  resourceGroupName?: string;
  /**
   * @remarks
   * The start time.
   * 
   * > The time is in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2022-01-01T12:01:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The target specifications.
   * 
   * @example
   * 32ACU
   */
  targetSize?: string;
  /**
   * @remarks
   * The type of the elastic plan.
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
   * The elastic plan.
   */
  elasticPlan?: DescribeElasticPlanAttributeResponseBodyElasticPlan;
  /**
   * @remarks
   * The ID of the request.
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

