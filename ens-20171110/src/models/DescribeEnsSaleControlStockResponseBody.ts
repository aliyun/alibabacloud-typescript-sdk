// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue extends $dara.Model {
  moduleMaxValue?: string;
  moduleMinValue?: string;
  static names(): { [key: string]: string } {
    return {
      moduleMaxValue: 'ModuleMaxValue',
      moduleMinValue: 'ModuleMinValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMaxValue: 'string',
      moduleMinValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl extends $dara.Model {
  moduleValue?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue;
  stockValue?: string;
  static names(): { [key: string]: string } {
    return {
      moduleValue: 'ModuleValue',
      stockValue: 'StockValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleValue: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue,
      stockValue: 'string',
    };
  }

  validate() {
    if(this.moduleValue && typeof (this.moduleValue as any).validate === 'function') {
      (this.moduleValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl extends $dara.Model {
  conditionControlModuleCode?: string;
  conditionControlModuleValue?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControlModuleCode: 'ConditionControlModuleCode',
      conditionControlModuleValue: 'ConditionControlModuleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControlModuleCode: 'string',
      conditionControlModuleValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue extends $dara.Model {
  moduleMaxValue?: string;
  moduleMinValue?: string;
  static names(): { [key: string]: string } {
    return {
      moduleMaxValue: 'ModuleMaxValue',
      moduleMinValue: 'ModuleMinValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMaxValue: 'string',
      moduleMinValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl extends $dara.Model {
  conditionControl?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl;
  moduleValue?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue;
  stockValue?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControl: 'ConditionControl',
      moduleValue: 'ModuleValue',
      stockValue: 'StockValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControl: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl,
      moduleValue: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue,
      stockValue: 'string',
    };
  }

  validate() {
    if(this.conditionControl && typeof (this.conditionControl as any).validate === 'function') {
      (this.conditionControl as any).validate();
    }
    if(this.moduleValue && typeof (this.moduleValue as any).validate === 'function') {
      (this.moduleValue as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem extends $dara.Model {
  basicSaleControl?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl;
  conditionSaleControl?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl[];
  static names(): { [key: string]: string } {
    return {
      basicSaleControl: 'BasicSaleControl',
      conditionSaleControl: 'ConditionSaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicSaleControl: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl,
      conditionSaleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl },
    };
  }

  validate() {
    if(this.basicSaleControl && typeof (this.basicSaleControl as any).validate === 'function') {
      (this.basicSaleControl as any).validate();
    }
    if(Array.isArray(this.conditionSaleControl)) {
      $dara.Model.validateArray(this.conditionSaleControl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItems extends $dara.Model {
  moduleCode?: string;
  saleControlItem?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      saleControlItem: 'SaleControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      saleControlItem: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItemsSaleControlItem,
    };
  }

  validate() {
    if(this.saleControlItem && typeof (this.saleControlItem as any).validate === 'function') {
      (this.saleControlItem as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBodySaleControl extends $dara.Model {
  commodityCode?: string;
  orderType?: string;
  saleControlItems?: DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItems[];
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      orderType: 'OrderType',
      saleControlItems: 'SaleControlItems',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      orderType: 'string',
      saleControlItems: { 'type': 'array', 'itemType': DescribeEnsSaleControlStockResponseBodySaleControlSaleControlItems },
    };
  }

  validate() {
    if(Array.isArray(this.saleControlItems)) {
      $dara.Model.validateArray(this.saleControlItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlStockResponseBody extends $dara.Model {
  requestId?: string;
  saleControl?: DescribeEnsSaleControlStockResponseBodySaleControl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saleControl: 'SaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlStockResponseBodySaleControl },
    };
  }

  validate() {
    if(Array.isArray(this.saleControl)) {
      $dara.Model.validateArray(this.saleControl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

