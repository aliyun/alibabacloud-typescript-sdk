// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageDemandPlanWithDemandInfoResponseBodyDataData extends $dara.Model {
  accountId?: string;
  accountName?: string;
  approvalNodeStatus?: string;
  approvalStatus?: string;
  creator?: string;
  deliveryPlanId?: string;
  deliveryStatus?: string;
  demandDesc?: string;
  demandId?: number;
  demandName?: string;
  demandPlanId?: number;
  gmtCreate?: string;
  gmtModified?: string;
  modifier?: string;
  requirementObjectCode?: string;
  uid?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      accountName: 'accountName',
      approvalNodeStatus: 'approvalNodeStatus',
      approvalStatus: 'approvalStatus',
      creator: 'creator',
      deliveryPlanId: 'deliveryPlanId',
      deliveryStatus: 'deliveryStatus',
      demandDesc: 'demandDesc',
      demandId: 'demandId',
      demandName: 'demandName',
      demandPlanId: 'demandPlanId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      modifier: 'modifier',
      requirementObjectCode: 'requirementObjectCode',
      uid: 'uid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      accountName: 'string',
      approvalNodeStatus: 'string',
      approvalStatus: 'string',
      creator: 'string',
      deliveryPlanId: 'string',
      deliveryStatus: 'string',
      demandDesc: 'string',
      demandId: 'number',
      demandName: 'string',
      demandPlanId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      modifier: 'string',
      requirementObjectCode: 'string',
      uid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageDemandPlanWithDemandInfoResponseBodyData extends $dara.Model {
  data?: PageDemandPlanWithDemandInfoResponseBodyDataData[];
  pageNum?: number;
  pageSize?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': PageDemandPlanWithDemandInfoResponseBodyDataData },
      pageNum: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PageDemandPlanWithDemandInfoResponseBody extends $dara.Model {
  data?: PageDemandPlanWithDemandInfoResponseBodyData;
  requestId?: string;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: PageDemandPlanWithDemandInfoResponseBodyData,
      requestId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

