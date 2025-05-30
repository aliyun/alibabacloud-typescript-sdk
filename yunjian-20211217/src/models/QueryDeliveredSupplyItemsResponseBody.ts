// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDeliveredSupplyItemsResponseBody extends $dara.Model {
  accountId?: string;
  commodityTypeCode?: string;
  demandPlanId?: number;
  planTitle?: string;
  region?: string;
  zone?: string;
  commodityCode?: string;
  demandCount?: number;
  deliveredAmount?: number;
  openCount?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      commodityTypeCode: 'commodityTypeCode',
      demandPlanId: 'demandPlanId',
      planTitle: 'planTitle',
      region: 'region',
      zone: 'zone',
      commodityCode: 'commodityCode',
      demandCount: 'demandCount',
      deliveredAmount: 'deliveredAmount',
      openCount: 'openCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      commodityTypeCode: 'string',
      demandPlanId: 'number',
      planTitle: 'string',
      region: 'string',
      zone: 'string',
      commodityCode: 'string',
      demandCount: 'number',
      deliveredAmount: 'number',
      openCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

