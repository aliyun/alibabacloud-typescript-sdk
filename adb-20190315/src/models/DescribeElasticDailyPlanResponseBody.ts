// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticDailyPlanResponseBodyElasticDailyPlanList } from "./DescribeElasticDailyPlanResponseBodyElasticDailyPlanList";


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

