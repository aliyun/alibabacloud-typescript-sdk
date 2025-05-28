// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSavingPlanUserDeductRuleRequestUserDeductRules extends $dara.Model {
  commodityCode?: string;
  moduleCode?: string;
  skipDeduct?: boolean;
  static names(): { [key: string]: string } {
    return {
      commodityCode: 'CommodityCode',
      moduleCode: 'ModuleCode',
      skipDeduct: 'SkipDeduct',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commodityCode: 'string',
      moduleCode: 'string',
      skipDeduct: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

