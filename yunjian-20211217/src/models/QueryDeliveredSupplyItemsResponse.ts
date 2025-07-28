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

export class QueryDeliveredSupplyItemsResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryDeliveredSupplyItemsResponseBody[];
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: { 'type': 'array', 'itemType': QueryDeliveredSupplyItemsResponseBody },
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(Array.isArray(this.body)) {
      $dara.Model.validateArray(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

