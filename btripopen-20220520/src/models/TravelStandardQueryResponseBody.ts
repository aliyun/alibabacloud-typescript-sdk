// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule extends $dara.Model {
  openServiceTypeList?: string[];
  ruleCode?: number;
  ruleDesc?: string;
  ruleId?: number;
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      openServiceTypeList: 'open_service_type_list',
      ruleCode: 'rule_code',
      ruleDesc: 'rule_desc',
      ruleId: 'rule_id',
      ruleName: 'rule_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openServiceTypeList: { 'type': 'array', 'itemType': 'string' },
      ruleCode: 'number',
      ruleDesc: 'string',
      ruleId: 'number',
      ruleName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.openServiceTypeList)) {
      $dara.Model.validateArray(this.openServiceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardQueryResponseBodyModuleReserveRuleModuleConfigList extends $dara.Model {
  code?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class TravelStandardQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TravelStandardQueryResponseBodyModule;
  requestId?: string;
  success?: boolean;
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: TravelStandardQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

