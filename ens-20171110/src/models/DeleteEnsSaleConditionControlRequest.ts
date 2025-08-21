// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEnsSaleConditionControlRequestSaleControlsConditionControls extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  conditionControlModuleCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
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

export class DeleteEnsSaleConditionControlRequestSaleControls extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  conditionControls?: DeleteEnsSaleConditionControlRequestSaleControlsConditionControls[];
  /**
   * @remarks
   * This parameter is required.
   */
  moduleCode?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  orderType?: string;
  static names(): { [key: string]: string } {
    return {
      conditionControls: 'ConditionControls',
      moduleCode: 'ModuleCode',
      orderType: 'OrderType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditionControls: { 'type': 'array', 'itemType': DeleteEnsSaleConditionControlRequestSaleControlsConditionControls },
      moduleCode: 'string',
      orderType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditionControls)) {
      $dara.Model.validateArray(this.conditionControls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteEnsSaleConditionControlRequest extends $dara.Model {
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
  saleControls?: DeleteEnsSaleConditionControlRequestSaleControls[];
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
      saleControls: { 'type': 'array', 'itemType': DeleteEnsSaleConditionControlRequestSaleControls },
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

