// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeRoutinePlansResponseBodyPlanInfo extends $dara.Model {
  /**
   * @remarks
   * The billing method. Valid values:
   * 
   * *   PREPAY: subscription.
   * *   POSTPAY: pay-as-you-go.
   * 
   * @example
   * POSTPAY
   */
  billingMode?: string;
  /**
   * @remarks
   * The maximum number of versions that each routine supports.
   * 
   * @example
   * 20
   */
  erRoutineCodeVersionQuota?: string;
  /**
   * @remarks
   * The maximum of routines that can be created.
   * 
   * @example
   * 100
   */
  erRoutineQuota?: string;
  /**
   * @remarks
   * The maximum number of websites with which each routine can be associated.
   * 
   * @example
   * 100
   */
  erRoutineRouteSiteCountQuota?: string;
  /**
   * @remarks
   * The payment method. Valid values:
   * 
   * *   er_free
   * *   er_pay
   * 
   * @example
   * er_free
   */
  paymentMethod?: string;
  /**
   * @remarks
   * The plan name.
   * 
   * @example
   * test_plan
   */
  planName?: string;
  static names(): { [key: string]: string } {
    return {
      billingMode: 'BillingMode',
      erRoutineCodeVersionQuota: 'ErRoutineCodeVersionQuota',
      erRoutineQuota: 'ErRoutineQuota',
      erRoutineRouteSiteCountQuota: 'ErRoutineRouteSiteCountQuota',
      paymentMethod: 'PaymentMethod',
      planName: 'PlanName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      billingMode: 'string',
      erRoutineCodeVersionQuota: 'string',
      erRoutineQuota: 'string',
      erRoutineRouteSiteCountQuota: 'string',
      paymentMethod: 'string',
      planName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEdgeRoutinePlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1 to 500.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The plans.
   */
  planInfo?: ListEdgeRoutinePlansResponseBodyPlanInfo[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages returned.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      planInfo: 'PlanInfo',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      planInfo: { 'type': 'array', 'itemType': ListEdgeRoutinePlansResponseBodyPlanInfo },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.planInfo)) {
      $dara.Model.validateArray(this.planInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

