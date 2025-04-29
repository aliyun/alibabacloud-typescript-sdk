// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule } from "./TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule";
import { TravelStandardQueryResponseBodyModuleReserveRuleModuleConfigList } from "./TravelStandardQueryResponseBodyModuleReserveRuleModuleConfigList";


export class TravelStandardQueryResponseBodyModuleReserveRule extends $dara.Model {
  mainReserveRule?: TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule;
  moduleConfigList?: TravelStandardQueryResponseBodyModuleReserveRuleModuleConfigList[];
  static names(): { [key: string]: string } {
    return {
      mainReserveRule: 'main_reserve_rule',
      moduleConfigList: 'module_config_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainReserveRule: TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule,
      moduleConfigList: { 'type': 'array', 'itemType': TravelStandardQueryResponseBodyModuleReserveRuleModuleConfigList },
    };
  }

  validate() {
    if(this.mainReserveRule && typeof (this.mainReserveRule as any).validate === 'function') {
      (this.mainReserveRule as any).validate();
    }
    if(Array.isArray(this.moduleConfigList)) {
      $dara.Model.validateArray(this.moduleConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

