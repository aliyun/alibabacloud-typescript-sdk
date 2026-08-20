// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TicketQueryPriceStockResponseBodyDataCalendarPriceStocksDistributionPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataCalendarPriceStocksMarketPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataCalendarPriceStocksSuggestedPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataCalendarPriceStocks extends $dara.Model {
  /**
   * @example
   * 2026-10-01
   */
  date?: string;
  distributionPrice?: TicketQueryPriceStockResponseBodyDataCalendarPriceStocksDistributionPrice;
  marketPrice?: TicketQueryPriceStockResponseBodyDataCalendarPriceStocksMarketPrice;
  /**
   * @example
   * 100
   */
  stock?: number;
  suggestedPrice?: TicketQueryPriceStockResponseBodyDataCalendarPriceStocksSuggestedPrice;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      distributionPrice: 'DistributionPrice',
      marketPrice: 'MarketPrice',
      stock: 'Stock',
      suggestedPrice: 'SuggestedPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      distributionPrice: TicketQueryPriceStockResponseBodyDataCalendarPriceStocksDistributionPrice,
      marketPrice: TicketQueryPriceStockResponseBodyDataCalendarPriceStocksMarketPrice,
      stock: 'number',
      suggestedPrice: TicketQueryPriceStockResponseBodyDataCalendarPriceStocksSuggestedPrice,
    };
  }

  validate() {
    if(this.distributionPrice && typeof (this.distributionPrice as any).validate === 'function') {
      (this.distributionPrice as any).validate();
    }
    if(this.marketPrice && typeof (this.marketPrice as any).validate === 'function') {
      (this.marketPrice as any).validate();
    }
    if(this.suggestedPrice && typeof (this.suggestedPrice as any).validate === 'function') {
      (this.suggestedPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataNormalPriceStockDistributionPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataNormalPriceStockMarketPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataNormalPriceStockSuggestedPrice extends $dara.Model {
  /**
   * @example
   * 10000
   */
  amount?: number;
  /**
   * @example
   * USD
   */
  currencyCode?: string;
  static names(): { [key: string]: string } {
    return {
      amount: 'Amount',
      currencyCode: 'CurrencyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      amount: 'number',
      currencyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyDataNormalPriceStock extends $dara.Model {
  distributionPrice?: TicketQueryPriceStockResponseBodyDataNormalPriceStockDistributionPrice;
  marketPrice?: TicketQueryPriceStockResponseBodyDataNormalPriceStockMarketPrice;
  /**
   * @example
   * 100
   */
  stock?: number;
  suggestedPrice?: TicketQueryPriceStockResponseBodyDataNormalPriceStockSuggestedPrice;
  static names(): { [key: string]: string } {
    return {
      distributionPrice: 'DistributionPrice',
      marketPrice: 'MarketPrice',
      stock: 'Stock',
      suggestedPrice: 'SuggestedPrice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributionPrice: TicketQueryPriceStockResponseBodyDataNormalPriceStockDistributionPrice,
      marketPrice: TicketQueryPriceStockResponseBodyDataNormalPriceStockMarketPrice,
      stock: 'number',
      suggestedPrice: TicketQueryPriceStockResponseBodyDataNormalPriceStockSuggestedPrice,
    };
  }

  validate() {
    if(this.distributionPrice && typeof (this.distributionPrice as any).validate === 'function') {
      (this.distributionPrice as any).validate();
    }
    if(this.marketPrice && typeof (this.marketPrice as any).validate === 'function') {
      (this.marketPrice as any).validate();
    }
    if(this.suggestedPrice && typeof (this.suggestedPrice as any).validate === 'function') {
      (this.suggestedPrice as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBodyData extends $dara.Model {
  calendarPriceStocks?: TicketQueryPriceStockResponseBodyDataCalendarPriceStocks[];
  normalPriceStock?: TicketQueryPriceStockResponseBodyDataNormalPriceStock;
  /**
   * @example
   * 123456
   */
  productId?: string;
  /**
   * @example
   * 1
   */
  stockType?: number;
  static names(): { [key: string]: string } {
    return {
      calendarPriceStocks: 'CalendarPriceStocks',
      normalPriceStock: 'NormalPriceStock',
      productId: 'ProductId',
      stockType: 'StockType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      calendarPriceStocks: { 'type': 'array', 'itemType': TicketQueryPriceStockResponseBodyDataCalendarPriceStocks },
      normalPriceStock: TicketQueryPriceStockResponseBodyDataNormalPriceStock,
      productId: 'string',
      stockType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.calendarPriceStocks)) {
      $dara.Model.validateArray(this.calendarPriceStocks);
    }
    if(this.normalPriceStock && typeof (this.normalPriceStock as any).validate === 'function') {
      (this.normalPriceStock as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TicketQueryPriceStockResponseBody extends $dara.Model {
  data?: TicketQueryPriceStockResponseBodyData;
  /**
   * @example
   * ScenicIdInvalid
   */
  errorCode?: string;
  /**
   * @example
   * ScenicId不合法
   */
  errorMsg?: string;
  /**
   * @example
   * 51593418-8C73-5E47-8BA8-3F1D4A00CC0B
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMsg: 'ErrorMsg',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: TicketQueryPriceStockResponseBodyData,
      errorCode: 'string',
      errorMsg: 'string',
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

