// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEdgeRoutinePlansResponseBodyPlanInfo extends $dara.Model {
  billingMode?: string;
  erRoutineCodeVersionQuota?: string;
  erRoutineQuota?: string;
  erRoutineRouteSiteCountQuota?: string;
  paymentMethod?: string;
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
  pageNumber?: number;
  pageSize?: number;
  planInfo?: ListEdgeRoutinePlansResponseBodyPlanInfo[];
  requestId?: string;
  totalCount?: number;
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

