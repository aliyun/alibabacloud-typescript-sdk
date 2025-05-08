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

