// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue extends $dara.Model {
  moduleMaxValue?: string;
  moduleMinValue?: string;
  moduleValue?: string[];
  static names(): { [key: string]: string } {
    return {
      moduleMaxValue: 'ModuleMaxValue',
      moduleMinValue: 'ModuleMinValue',
      moduleValue: 'ModuleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMaxValue: 'string',
      moduleMinValue: 'string',
      moduleValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moduleValue)) {
      $dara.Model.validateArray(this.moduleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl extends $dara.Model {
  description?: string;
  moduleValue?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      moduleValue: 'ModuleValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      moduleValue: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControlModuleValue,
      operator: 'string',
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

export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl extends $dara.Model {
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

export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue extends $dara.Model {
  moduleMaxValue?: string;
  moduleMinValue?: string;
  moduleValue?: string[];
  static names(): { [key: string]: string } {
    return {
      moduleMaxValue: 'ModuleMaxValue',
      moduleMinValue: 'ModuleMinValue',
      moduleValue: 'ModuleValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleMaxValue: 'string',
      moduleMinValue: 'string',
      moduleValue: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moduleValue)) {
      $dara.Model.validateArray(this.moduleValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl extends $dara.Model {
  conditionControl?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl;
  description?: string;
  moduleValue?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue;
  operator?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControl: 'ConditionControl',
      description: 'Description',
      moduleValue: 'ModuleValue',
      operator: 'Operator',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControl: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlConditionControl,
      description: 'string',
      moduleValue: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControlModuleValue,
      operator: 'string',
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

export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItem extends $dara.Model {
  basicSaleControl?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl;
  conditionSaleControl?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl[];
  static names(): { [key: string]: string } {
    return {
      basicSaleControl: 'BasicSaleControl',
      conditionSaleControl: 'ConditionSaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicSaleControl: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemBasicSaleControl,
      conditionSaleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItemConditionSaleControl },
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

export class DescribeEnsSaleControlResponseBodySaleControlSaleControlItems extends $dara.Model {
  moduleCode?: string;
  saleControlItem?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItem;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      saleControlItem: 'SaleControlItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      saleControlItem: DescribeEnsSaleControlResponseBodySaleControlSaleControlItemsSaleControlItem,
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

export class DescribeEnsSaleControlResponseBodySaleControl extends $dara.Model {
  commodityCode?: string;
  orderType?: string;
  saleControlItems?: DescribeEnsSaleControlResponseBodySaleControlSaleControlItems[];
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
      saleControlItems: { 'type': 'array', 'itemType': DescribeEnsSaleControlResponseBodySaleControlSaleControlItems },
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

export class DescribeEnsSaleControlResponseBody extends $dara.Model {
  requestId?: string;
  saleControl?: DescribeEnsSaleControlResponseBodySaleControl[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saleControl: 'SaleControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saleControl: { 'type': 'array', 'itemType': DescribeEnsSaleControlResponseBodySaleControl },
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

