// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList extends $dara.Model {
  /**
   * @remarks
   * The code of the pricing factor.
   * 
   * @example
   * 212fbd27866307fc79ecf06934a88b2c
   */
  factorCode?: string;
  /**
   * @remarks
   * The maximum value.
   * 
   * @example
   * 10
   */
  max?: string;
  /**
   * @remarks
   * The minimum value.
   * 
   * @example
   * 1
   */
  min?: string;
  /**
   * @remarks
   * The closure type of the interval.
   * 
   * @example
   * LORC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      factorCode: 'FactorCode',
      max: 'Max',
      min: 'Min',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      factorCode: 'string',
      max: 'string',
      min: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList extends $dara.Model {
  /**
   * @remarks
   * The unique code of the SKU price.
   * 
   * @example
   * ac74dd7b52ae6389ddef099283fb8275
   */
  cskuCode?: string;
  /**
   * @remarks
   * The currency.
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The price.
   * 
   * @example
   * 100
   */
  price?: string;
  /**
   * @remarks
   * The pricing mode.
   * 
   * @example
   * STEP_ARRIVE
   */
  priceMode?: string;
  /**
   * @remarks
   * The pricing type.
   * 
   * @example
   * hourPrice
   */
  priceType?: string;
  /**
   * @remarks
   * The unit of the price.
   * 
   * @example
   * USD (per unit)
   */
  priceUnit?: string;
  /**
   * @remarks
   * If the PriceMode parameter is set to STEP_ACCUMULATION or STEP_ARRIVE, the value of this field exists and specifies the range. If the PriceMode parameter is set to NORMAL_PRICE, the value of this field is null.
   */
  rangeList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList[];
  /**
   * @remarks
   * The usage unit.
   * 
   * @example
   * Count
   */
  usageUnit?: string;
  static names(): { [key: string]: string } {
    return {
      cskuCode: 'CskuCode',
      currency: 'Currency',
      price: 'Price',
      priceMode: 'PriceMode',
      priceType: 'PriceType',
      priceUnit: 'PriceUnit',
      rangeList: 'RangeList',
      usageUnit: 'UsageUnit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cskuCode: 'string',
      currency: 'string',
      price: 'string',
      priceMode: 'string',
      priceType: 'string',
      priceUnit: 'string',
      rangeList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceListRangeList },
      usageUnit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.rangeList)) {
      $dara.Model.validateArray(this.rangeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList extends $dara.Model {
  /**
   * @remarks
   * The prices of the SKUs.
   */
  cskuPriceList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList[];
  /**
   * @remarks
   * The code of the SKU.
   * 
   * @example
   * 017c15a31507bc6de22aa93777461adc
   */
  skuCode?: string;
  /**
   * @remarks
   * The values of the pricing factors.
   */
  skuFactorMap?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      cskuPriceList: 'CskuPriceList',
      skuCode: 'SkuCode',
      skuFactorMap: 'SkuFactorMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cskuPriceList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceListCskuPriceList },
      skuCode: 'string',
      skuFactorMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.cskuPriceList)) {
      $dara.Model.validateArray(this.cskuPriceList);
    }
    if(this.skuFactorMap) {
      $dara.Model.validateMap(this.skuFactorMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyDataSkuPricePage extends $dara.Model {
  /**
   * @remarks
   * The token that is used to query the next page.
   * 
   * @example
   * 080112060a0422020800180022490a470342000000315333303332363436363336333433393636333136333338333733373333333133373336363336323634363336363337333836333636333636313336363433363332
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The SKUs.
   */
  skuPriceList?: QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList[];
  /**
   * @remarks
   * The total number of SKUs.
   * 
   * @example
   * 18732
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextPageToken: 'NextPageToken',
      skuPriceList: 'SkuPriceList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextPageToken: 'string',
      skuPriceList: { 'type': 'array', 'itemType': QuerySkuPriceListResponseBodyDataSkuPricePageSkuPriceList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skuPriceList)) {
      $dara.Model.validateArray(this.skuPriceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The SKUs of the pricing object.
   */
  skuPricePage?: QuerySkuPriceListResponseBodyDataSkuPricePage;
  static names(): { [key: string]: string } {
    return {
      skuPricePage: 'SkuPricePage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      skuPricePage: QuerySkuPriceListResponseBodyDataSkuPricePage,
    };
  }

  validate() {
    if(this.skuPricePage && typeof (this.skuPricePage as any).validate === 'function') {
      (this.skuPricePage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySkuPriceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: QuerySkuPriceListResponseBodyData;
  /**
   * @remarks
   * The message that is returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5B803CF-94D8-43AF-ADB3-D819AAD30E27
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
      data: QuerySkuPriceListResponseBodyData,
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

