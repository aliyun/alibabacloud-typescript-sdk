// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSettingConditions } from "./FilterSettingConditions";


export class FilterSetting extends $dara.Model {
  conditions?: FilterSettingConditions[];
  expression?: string;
  relation?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'conditions',
      expression: 'expression',
      relation: 'relation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': FilterSettingConditions },
      expression: 'string',
      relation: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

