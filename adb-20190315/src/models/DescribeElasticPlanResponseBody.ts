// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticPlanResponseBodyElasticPlanList } from "./DescribeElasticPlanResponseBodyElasticPlanList";


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

