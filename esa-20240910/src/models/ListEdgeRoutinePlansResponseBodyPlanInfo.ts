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

