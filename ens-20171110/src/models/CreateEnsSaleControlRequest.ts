// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnsSaleControlRequestSaleControlsConditionControls extends $dara.Model {
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

export class CreateEnsSaleControlRequestSaleControlsModuleValue extends $dara.Model {
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

export class CreateEnsSaleControlRequestSaleControls extends $dara.Model {
  conditionControls?: CreateEnsSaleControlRequestSaleControlsConditionControls[];
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  moduleCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  moduleValue?: CreateEnsSaleControlRequestSaleControlsModuleValue;
  /**
   * @remarks
   * This parameter is required.
   */
  operator?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControls: 'ConditionControls',
      description: 'Description',
      moduleCode: 'ModuleCode',
      moduleValue: 'ModuleValue',
      operator: 'Operator',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControls: { 'type': 'array', 'itemType': CreateEnsSaleControlRequestSaleControlsConditionControls },
      description: 'string',
      moduleCode: 'string',
      moduleValue: CreateEnsSaleControlRequestSaleControlsModuleValue,
      operator: 'string',
      orderType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionControls)) {
      $dara.Model.validateArray(this.conditionControls);
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

export class CreateEnsSaleControlRequest extends $dara.Model {
  aliUidAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  commodityCode?: string;
  customAccount?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  saleControls?: CreateEnsSaleControlRequestSaleControls[];
  static names(): { [key: string]: string } {
    return {
      aliUidAccount: 'AliUidAccount',
      commodityCode: 'CommodityCode',
      customAccount: 'CustomAccount',
      saleControls: 'SaleControls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUidAccount: 'string',
      commodityCode: 'string',
      customAccount: 'string',
      saleControls: { 'type': 'array', 'itemType': CreateEnsSaleControlRequestSaleControls },
    };
  }

  validate() {
    if(Array.isArray(this.saleControls)) {
      $dara.Model.validateArray(this.saleControls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

