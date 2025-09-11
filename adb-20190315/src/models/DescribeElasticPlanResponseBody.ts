// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticPlanResponseBodyElasticPlanList extends $dara.Model {
  /**
   * @remarks
   * The number of nodes that are involved in the scaling plan.
   * 
   * *   If ElasticPlanType is set to **worker**, a value of 0 or null is returned.
   * *   If ElasticPlanType is set to **executorcombineworker** or **executor**, a value greater than 0 is returned.
   * 
   * @example
   * 0
   */
  elasticNodeNum?: number;
  /**
   * @remarks
   * The type of the scaling plan. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker** (default): scales both elastic I/O resources and computing resources by proportion.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
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
  /**
   * @remarks
   * Indicates whether the scaling plan takes effect. Valid values:
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The end date of the scaling plan. This parameter is returned only if the end date of the scaling plan is set. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-09
   */
  endDay?: string;
  /**
   * @remarks
   * The restoration time of the scaling plan. The interval between the scale-up time and the restoration time cannot be more than 24 hours. The time is in the HH:mm:ss format.
   * 
   * @example
   * 10:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The days of the month when the scaling plan was executed. A value indicates a day of the month. Multiple values are separated by commas (,).
   * 
   * @example
   * 1,15,25
   */
  monthlyRepeat?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * realtime
   */
  planName?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * USER_DEFAULT
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The start date of the scaling plan. This parameter is returned only if the start date of the scaling plan is set. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  startDay?: string;
  /**
   * @remarks
   * The scale-up time of the scaling plan. The time is in the HH:mm:ss format.
   * 
   * @example
   * 08:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The days of the week when the scaling plan was executed. Valid values: 0 to 6, which indicate Sunday to Saturday. Multiple values are separated by commas (,).
   * 
   * @example
   * 3,4,5,6
   */
  weeklyRepeat?: string;
  static names(): { [key: string]: string } {
    return {
      elasticNodeNum: 'ElasticNodeNum',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
      enable: 'Enable',
      endDay: 'EndDay',
      endTime: 'EndTime',
      monthlyRepeat: 'MonthlyRepeat',
      planName: 'PlanName',
      resourcePoolName: 'ResourcePoolName',
      startDay: 'StartDay',
      startTime: 'StartTime',
      weeklyRepeat: 'WeeklyRepeat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticNodeNum: 'number',
      elasticPlanType: 'string',
      elasticPlanWorkerSpec: 'string',
      enable: 'boolean',
      endDay: 'string',
      endTime: 'string',
      monthlyRepeat: 'string',
      planName: 'string',
      resourcePoolName: 'string',
      startDay: 'string',
      startTime: 'string',
      weeklyRepeat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried scaling plans.
   */
  elasticPlanList?: DescribeElasticPlanResponseBodyElasticPlanList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticPlanList: 'ElasticPlanList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPlanList: { 'type': 'array', 'itemType': DescribeElasticPlanResponseBodyElasticPlanList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticPlanList)) {
      $dara.Model.validateArray(this.elasticPlanList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

