// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEbsRequest } from "./GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEbsRequest";
import { GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEcsRequest } from "./GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEcsRequest";


export class GetUrgentDemandItemListResponseBodyDataRecords extends $dara.Model {
  zone?: string;
  accountId?: string;
  commodityCode?: string;
  commodityNum?: number;
  commodityTypeCode?: string;
  creator?: string;
  creatorName?: string;
  effectTime?: string;
  gmtModified?: string;
  id?: number;
  modifier?: string;
  modifierName?: string;
  networkType?: string;
  payDuration?: number;
  payDurationUnit?: string;
  payType?: string;
  planId?: number;
  region?: string;
  urgentDemandEbsRequest?: GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEbsRequest;
  urgentDemandEcsRequest?: GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEcsRequest;
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
      accountId: 'accountId',
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      creator: 'creator',
      creatorName: 'creatorName',
      effectTime: 'effectTime',
      gmtModified: 'gmtModified',
      id: 'id',
      modifier: 'modifier',
      modifierName: 'modifierName',
      networkType: 'networkType',
      payDuration: 'payDuration',
      payDurationUnit: 'payDurationUnit',
      payType: 'payType',
      planId: 'planId',
      region: 'region',
      urgentDemandEbsRequest: 'urgentDemandEbsRequest',
      urgentDemandEcsRequest: 'urgentDemandEcsRequest',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: 'string',
      accountId: 'string',
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      creator: 'string',
      creatorName: 'string',
      effectTime: 'string',
      gmtModified: 'string',
      id: 'number',
      modifier: 'string',
      modifierName: 'string',
      networkType: 'string',
      payDuration: 'number',
      payDurationUnit: 'string',
      payType: 'string',
      planId: 'number',
      region: 'string',
      urgentDemandEbsRequest: GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEbsRequest,
      urgentDemandEcsRequest: GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEcsRequest,
    };
  }

  validate() {
    if(this.urgentDemandEbsRequest && typeof (this.urgentDemandEbsRequest as any).validate === 'function') {
      (this.urgentDemandEbsRequest as any).validate();
    }
    if(this.urgentDemandEcsRequest && typeof (this.urgentDemandEcsRequest as any).validate === 'function') {
      (this.urgentDemandEcsRequest as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

