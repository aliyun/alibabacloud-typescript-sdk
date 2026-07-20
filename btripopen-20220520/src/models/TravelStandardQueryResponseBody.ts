// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule extends $dara.Model {
  /**
   * @remarks
   * The enabled service categories.
   */
  openServiceTypeList?: string[];
  /**
   * @remarks
   * The travel standard code.
   * 
   * @example
   * 2006517149
   */
  ruleCode?: number;
  /**
   * @remarks
   * The description of the travel standard.
   * 
   * @example
   * 普通员工规则的描述
   */
  ruleDesc?: string;
  /**
   * @remarks
   * The ID of the main travel standard.
   * 
   * @example
   * 6517149
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the travel standard.
   * 
   * @example
   * 普通员工规则
   */
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
  /**
   * @remarks
   * The code of the control item.
   * 
   * @example
   * FLIGHT_ADVANCE_BUY_DAY
   */
  code?: string;
  /**
   * @remarks
   * The value selected by the user.
   * 
   * @example
   * 3
   */
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
  /**
   * @remarks
   * The main travel standard information.
   */
  mainReserveRule?: TravelStandardQueryResponseBodyModuleReserveRuleMainReserveRule;
  /**
   * @remarks
   * The module configuration information.
   */
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
  /**
   * @remarks
   * The service categories activated for the enterprise.
   */
  activatedServiceTypeList?: string[];
  /**
   * @remarks
   * The travel standard information, which consists of the main travel standard information and module configuration information.
   */
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
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 0
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 系统异常
   */
  message?: string;
  /**
   * @remarks
   * The response data.
   */
  module?: TravelStandardQueryResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 210bcc3a16583004579056128d33d7
   */
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

