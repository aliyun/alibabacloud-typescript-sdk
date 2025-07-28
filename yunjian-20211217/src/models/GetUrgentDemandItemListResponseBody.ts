// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEbsRequest extends $dara.Model {
  /**
   * @example
   * cloud_essd
   */
  commodityCode?: string;
  /**
   * @example
   * 1
   */
  commodityNum?: number;
  /**
   * @example
   * yundisk
   */
  commodityTypeCode?: string;
  /**
   * @example
   * 1
   */
  dataDiskSize?: number;
  /**
   * @example
   * 111222
   */
  itemId?: number;
  /**
   * @example
   * 1
   */
  performanceLevel?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      dataDiskSize: 'dataDiskSize',
      itemId: 'itemId',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      dataDiskSize: 'number',
      itemId: 'number',
      performanceLevel: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUrgentDemandItemListResponseBodyDataRecordsUrgentDemandEcsRequest extends $dara.Model {
  commodityCode?: string;
  commodityNum?: number;
  commodityTypeCode?: string;
  itemId?: number;
  vcpuCount?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      itemId: 'itemId',
      vcpuCount: 'vcpuCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      itemId: 'number',
      vcpuCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetUrgentDemandItemListResponseBodyData extends $dara.Model {
  current?: number;
  pages?: number;
  records?: GetUrgentDemandItemListResponseBodyDataRecords[];
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      current: 'current',
      pages: 'pages',
      records: 'records',
      size: 'size',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      current: 'number',
      pages: 'number',
      records: { 'type': 'array', 'itemType': GetUrgentDemandItemListResponseBodyDataRecords },
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.records)) {
      $dara.Model.validateArray(this.records);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetUrgentDemandItemListResponseBody extends $dara.Model {
  code?: number;
  data?: GetUrgentDemandItemListResponseBodyData;
  message?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUrgentDemandItemListResponseBodyData,
      message: 'string',
      success: 'boolean',
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

