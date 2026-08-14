// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticDailyPlanResponseBodyElasticDailyPlanList extends $dara.Model {
  /**
   * @remarks
   * The start date of the daily scaling plan. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  day?: string;
  /**
   * @remarks
   * The number of nodes for the scaling plan.
   * 
   * - If ElasticPlanType is set to **worker**, this parameter is not returned or the returned value is 0.
   * 
   * - If ElasticPlanType is set to **executorcombineworker** or **executor**, a value greater than 0 is returned.
   * 
   * @example
   * 0
   */
  elasticNodeNum?: number;
  /**
   * @remarks
   * The resource type for the scaling plan. Valid values:
   * 
   * - **worker**: scales only elastic I/O resources.
   * 
   * - **executor**: scales only computing resources.
   * 
   * - **executorcombineworker** (default): scales both computing resources and elastic I/O resources based on the default ratio.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The resource specifications that are supported for scaling. Valid values:
   * 
   * - 8 Core 64 GB (default)
   * 
   * - 16 Core 64 GB
   * 
   * - 32 Core 64 GB
   * 
   * - 64 Core 128 GB
   * 
   * - 12 Core 96 GB
   * 
   * - 24 Core 96 GB
   * 
   * - 52 Core 86 GB
   * 
   * @example
   * 16 Core 64 GB
   */
  elasticPlanWorkerSpec?: string;
  /**
   * @remarks
   * The actual time when the scaled-out resources were reverted. The time is in the yyyy-MM-dd hh:mm:ss format and is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  endTs?: string;
  /**
   * @remarks
   * The scheduled time to revert the scaled-out resources. The time is in the yyyy-MM-dd hh:mm:ss format and is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  planEndTs?: string;
  /**
   * @remarks
   * The name of the scaling plan.
   * 
   * @example
   * realtimeplan
   */
  planName?: string;
  /**
   * @remarks
   * The scheduled scale-out time. The time is in the yyyy-MM-dd hh:mm:ss format and is displayed in UTC.
   * 
   * @example
   * 2022-12-02 15:00:00
   */
  planStartTs?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The actual scale-out time. The time is in the yyyy-MM-dd hh:mm:ss format and is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  startTs?: string;
  /**
   * @remarks
   * The execution status of the daily scaling plan. Valid values:
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
  status?: number;
  static names(): { [key: string]: string } {
    return {
      day: 'Day',
      elasticNodeNum: 'ElasticNodeNum',
      elasticPlanType: 'ElasticPlanType',
      elasticPlanWorkerSpec: 'ElasticPlanWorkerSpec',
      endTs: 'EndTs',
      planEndTs: 'PlanEndTs',
      planName: 'PlanName',
      planStartTs: 'PlanStartTs',
      resourcePoolName: 'ResourcePoolName',
      startTs: 'StartTs',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      day: 'string',
      elasticNodeNum: 'number',
      elasticPlanType: 'string',
      elasticPlanWorkerSpec: 'string',
      endTs: 'string',
      planEndTs: 'string',
      planName: 'string',
      planStartTs: 'string',
      resourcePoolName: 'string',
      startTs: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeElasticDailyPlanResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of daily scaling plans.
   */
  elasticDailyPlanList?: DescribeElasticDailyPlanResponseBodyElasticDailyPlanList[];
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
      elasticDailyPlanList: 'ElasticDailyPlanList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticDailyPlanList: { 'type': 'array', 'itemType': DescribeElasticDailyPlanResponseBodyElasticDailyPlanList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.elasticDailyPlanList)) {
      $dara.Model.validateArray(this.elasticDailyPlanList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

