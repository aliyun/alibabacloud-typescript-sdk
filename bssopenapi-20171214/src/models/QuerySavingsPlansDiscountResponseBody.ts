// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySavingsPlansDiscountResponseBodyDataItems extends $dara.Model {
  /**
   * @remarks
   * The details of the service.
   * 
   * @example
   * Pay-as-you-go Elastic Compute Service (ECS) instance
   */
  commodityName?: string;
  /**
   * @remarks
   * The contracted discount.
   * 
   * @example
   * 0.85
   */
  contractDiscountRate?: string;
  /**
   * @remarks
   * The cycle based on which queries were performed.
   * 
   * @example
   * 1:Year
   */
  cycle?: string;
  /**
   * @remarks
   * The discount provided by the official website.
   * 
   * @example
   * 0.85
   */
  discountRate?: string;
  /**
   * @remarks
   * The name of the pricing module.
   * 
   * @example
   * Instance
   */
  moduleName?: string;
  /**
   * @remarks
   * The payment mode. Valid values:
   * 
   * *   total: all upfront
   * *   half: half upfront
   * *   zero: no upfront
   * 
   * @example
   * total
   */
  payMode?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-zhangjiakou-na62-a01
   */
  region?: string;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeDBInstanceAttribute](https://help.aliyun.com/document_detail/26231.html) operation to query the region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionCode?: string;
  /**
   * @remarks
   * The type of the resource.
   * 
   * @example
   * ecs.g6
   */
  spec?: string;
  /**
   * @remarks
   * The type of the savings plan.
   * 
   * @example
   * universal
   */
  spnType?: string;
  static names(): { [key: string]: string } {
    return {
      commodityName: 'CommodityName',
      contractDiscountRate: 'ContractDiscountRate',
      cycle: 'Cycle',
      discountRate: 'DiscountRate',
      moduleName: 'ModuleName',
      payMode: 'PayMode',
      region: 'Region',
      regionCode: 'RegionCode',
      spec: 'Spec',
      spnType: 'SpnType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityName: 'string',
      contractDiscountRate: 'string',
      cycle: 'string',
      discountRate: 'string',
      moduleName: 'string',
      payMode: 'string',
      region: 'string',
      regionCode: 'string',
      spec: 'string',
      spnType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the request.
   * 
   * @example
   * 100.104.180.109
   */
  hostId?: string;
  /**
   * @remarks
   * The information about the discounts on saving plans.
   */
  items?: QuerySavingsPlansDiscountResponseBodyDataItems[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      items: 'Items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      items: { 'type': 'array', 'itemType': QuerySavingsPlansDiscountResponseBodyDataItems },
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySavingsPlansDiscountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned.
   * 
   * @example
   * PARAM_ERROR
   */
  code?: string;
  /**
   * @remarks
   * data
   */
  data?: QuerySavingsPlansDiscountResponseBodyData;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * This API is not applicable for caller.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
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
      data: QuerySavingsPlansDiscountResponseBodyData,
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

