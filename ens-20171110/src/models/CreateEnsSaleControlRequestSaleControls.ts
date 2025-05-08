// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateEnsSaleControlRequestSaleControlsConditionControls } from "./CreateEnsSaleControlRequestSaleControlsConditionControls";
import { CreateEnsSaleControlRequestSaleControlsModuleValue } from "./CreateEnsSaleControlRequestSaleControlsModuleValue";


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

