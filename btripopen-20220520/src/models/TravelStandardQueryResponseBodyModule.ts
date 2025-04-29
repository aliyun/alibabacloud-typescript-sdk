// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { TravelStandardQueryResponseBodyModuleReserveRule } from "./TravelStandardQueryResponseBodyModuleReserveRule";


export class TravelStandardQueryResponseBodyModule extends $dara.Model {
  activatedServiceTypeList?: string[];
  reserveRule?: TravelStandardQueryResponseBodyModuleReserveRule;
  static names(): { [key: string]: string } {
    return {
      activatedServiceTypeList: 'activated_service_type_list',
      reserveRule: 'reserve_rule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activatedServiceTypeList: { 'type': 'array', 'itemType': 'string' },
      reserveRule: TravelStandardQueryResponseBodyModuleReserveRule,
    };
  }

  validate() {
    if(Array.isArray(this.activatedServiceTypeList)) {
      $dara.Model.validateArray(this.activatedServiceTypeList);
    }
    if(this.reserveRule && typeof (this.reserveRule as any).validate === 'function') {
      (this.reserveRule as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

