// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticPlansResponseBodyElasticPlans } from "./DescribeElasticPlansResponseBodyElasticPlans";


export class DescribeElasticPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried scaling plans.
   */
  elasticPlans?: DescribeElasticPlansResponseBodyElasticPlans[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5C433C2-001F-58E3-99F5-3274C14DF8BD
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      elasticPlans: 'ElasticPlans',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticPlans: { 'type': 'array', 'itemType': DescribeElasticPlansResponseBodyElasticPlans },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.elasticPlans)) {
      $dara.Model.validateArray(this.elasticPlans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

