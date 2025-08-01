// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveUrgentDemandItemRequestUrgentDemandEbsRequest extends $dara.Model {
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
      itemId: 'itemId',
      performanceLevel: 'performanceLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
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

export class SaveUrgentDemandItemRequestUrgentDemandEcsRequest extends $dara.Model {
  /**
   * @example
   * ecs.sn2ne.6xlarge
   */
  commodityCode?: string;
  /**
   * @example
   * 2
   */
  commodityNum?: number;
  /**
   * @example
   * ecs
   */
  commodityTypeCode?: string;
  /**
   * @example
   * 111222
   */
  itemId?: number;
  /**
   * @example
   * 2
   */
  vCpuCount?: number;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'commodityCode',
      commodityNum: 'commodityNum',
      commodityTypeCode: 'commodityTypeCode',
      itemId: 'itemId',
      vCpuCount: 'vCpuCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      commodityNum: 'number',
      commodityTypeCode: 'string',
      itemId: 'number',
      vCpuCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveUrgentDemandItemRequest extends $dara.Model {
  /**
   * @example
   * 12321312
   */
  accountId?: string;
  /**
   * @example
   * 111222
   */
  creator?: string;
  /**
   * @example
   * 2021-12-27 00:00:00
   */
  effectTime?: string;
  /**
   * @example
   * 111222
   */
  modifier?: string;
  /**
   * @example
   * 网络类型 vpc（私有网络）/classic（经典网络）
   */
  networkType?: string;
  /**
   * @example
   * 10
   */
  payDuration?: string;
  /**
   * @example
   * 购买时长单位(month(月)，week(周)，day(天))
   */
  payDurationUnit?: string;
  /**
   * @example
   * 付费类型 prepay(预付费)/postpay（后付费）
   */
  payType?: string;
  /**
   * @example
   * 111222
   */
  planId?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  urgentDemandEbsRequest?: SaveUrgentDemandItemRequestUrgentDemandEbsRequest;
  urgentDemandEcsRequest?: SaveUrgentDemandItemRequestUrgentDemandEcsRequest;
  /**
   * @example
   * cn-beijing-a
   */
  zone?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'accountId',
      creator: 'creator',
      effectTime: 'effectTime',
      modifier: 'modifier',
      networkType: 'networkType',
      payDuration: 'payDuration',
      payDurationUnit: 'payDurationUnit',
      payType: 'payType',
      planId: 'planId',
      region: 'region',
      urgentDemandEbsRequest: 'urgentDemandEbsRequest',
      urgentDemandEcsRequest: 'urgentDemandEcsRequest',
      zone: 'zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      creator: 'string',
      effectTime: 'string',
      modifier: 'string',
      networkType: 'string',
      payDuration: 'string',
      payDurationUnit: 'string',
      payType: 'string',
      planId: 'number',
      region: 'string',
      urgentDemandEbsRequest: SaveUrgentDemandItemRequestUrgentDemandEbsRequest,
      urgentDemandEcsRequest: SaveUrgentDemandItemRequestUrgentDemandEcsRequest,
      zone: 'string',
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

