// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCommodityListResponseBodyDataCommodityList extends $dara.Model {
  /**
   * @remarks
   * The payment type. Valid values: POSTPAY (pay-as-you-go) and PREPAY (subscription).
   * 
   * @example
   * POSTPAY
   */
  chargeType?: string;
  /**
   * @remarks
   * The code of the service, which is the same as that on the Billing Management page.
   * 
   * @example
   * ecs
   */
  commodityCode?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * ECS (Pay-As-You-Go)
   */
  commodityName?: string;
  static names(): { [key: string]: string } {
    return {
      chargeType: 'ChargeType',
      commodityCode: 'CommodityCode',
      commodityName: 'CommodityName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chargeType: 'string',
      commodityCode: 'string',
      commodityName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The information about the service.
   */
  commodityList?: QueryCommodityListResponseBodyDataCommodityList[];
  static names(): { [key: string]: string } {
    return {
      commodityList: 'CommodityList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityList: { 'type': 'array', 'itemType': QueryCommodityListResponseBodyDataCommodityList },
    };
  }

  validate() {
    if(Array.isArray(this.commodityList)) {
      $dara.Model.validateArray(this.commodityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCommodityListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * NotApplicable
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: QueryCommodityListResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * CC706AAC-75A6-55B5-9AB7-7D171C6C7655
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the information about the service was queried.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryCommodityListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

