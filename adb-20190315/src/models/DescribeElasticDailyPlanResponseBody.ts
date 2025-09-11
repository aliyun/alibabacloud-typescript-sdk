// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticDailyPlanResponseBodyElasticDailyPlanList extends $dara.Model {
  /**
   * @remarks
   * The start date of the current-day scaling plan. The date is in the yyyy-MM-dd format.
   * 
   * @example
   * 2022-12-02
   */
  day?: string;
  /**
   * @remarks
   * The number of nodes involved in the scaling plan.
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
   * The type of the scaling plan. Default value: executorcombineworker. Valid values:
   * 
   * *   **worker**: scales only elastic I/O resources.
   * *   **executor**: scales only computing resources.
   * *   **executorcombineworker**: scales both elastic I/O resources and computing resources by proportion.
   * 
   * @example
   * worker
   */
  elasticPlanType?: string;
  /**
   * @remarks
   * The resource specifications that can be scaled up by the scaling plan. Default value: 8 Core 64 GB. Valid values:
   * 
   * *   8 Core 64 GB
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
   * The actual restoration time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  endTs?: string;
  /**
   * @remarks
   * The scheduled restoration time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
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
   * The scheduled scale-up time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
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
   * The actual scale-up time. The time is in the yyyy-MM-dd hh:mm:ss format. The time is displayed in UTC.
   * 
   * @example
   * 2022-12-02 16:00:00
   */
  startTs?: string;
  /**
   * @remarks
   * The execution state of the current-day scaling plan. Multiple values are separated by commas (,). Valid values:
   * 
   * *   **1**: The scaling plan is not executed.
   * *   **2**: The scaling plan is being executed.
   * *   **3**: The scaling plan is executed.
   * *   **4**: The scaling plan fails to be executed.
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
   * Details of the current-day scaling plans.
   */
  elasticDailyPlanList?: DescribeElasticDailyPlanResponseBodyElasticDailyPlanList[];
  /**
   * @remarks
   * The ID of the request.
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

