// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticPlanAttributeResponseBodyElasticPlan } from "./DescribeElasticPlanAttributeResponseBodyElasticPlan";


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

