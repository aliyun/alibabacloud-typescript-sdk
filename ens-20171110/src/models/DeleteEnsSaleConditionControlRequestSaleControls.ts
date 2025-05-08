// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteEnsSaleConditionControlRequestSaleControlsConditionControls } from "./DeleteEnsSaleConditionControlRequestSaleControlsConditionControls";


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

