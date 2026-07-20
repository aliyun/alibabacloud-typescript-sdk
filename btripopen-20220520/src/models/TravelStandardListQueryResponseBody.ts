// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardListQueryResponseBodyModuleItemsMainReserveRule extends $dara.Model {
  /**
   * @remarks
   * The list of enabled service categories.
   */
  openServiceTypeList?: string[];
  /**
   * @remarks
   * The personnel rule code.
   * 
   * @example
   * 2006516571
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
   * The ID of the primary travel standard.
   * 
   * @example
   * 6516571
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

export class TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList extends $dara.Model {
  /**
   * @remarks
   * The travel standard description item.
   * 
   * @example
   * 舱等
   */
  key?: string;
  /**
   * @remarks
   * The value of the travel standard description item.
   * 
   * @example
   * 经济舱,超级经济舱,公务舱,头等舱
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc extends $dara.Model {
  /**
   * @remarks
   * The description of the travel standard.
   */
  dataList?: TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList[];
  /**
   * @remarks
   * The title of the travel standard detail.
   * 
   * @example
   * 普通员工规则
   */
  title?: string;
  /**
   * @remarks
   * The category of the travel standard detail.
   * 
   * @example
   * flight
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      dataList: 'data_list',
      title: 'title',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataList: { 'type': 'array', 'itemType': TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList },
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataList)) {
      $dara.Model.validateArray(this.dataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardListQueryResponseBodyModuleItems extends $dara.Model {
  /**
   * @remarks
   * The primary travel standard information.
   */
  mainReserveRule?: TravelStandardListQueryResponseBodyModuleItemsMainReserveRule;
  /**
   * @remarks
   * The description of the travel standard.
   */
  reserveRuleDesc?: TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc[];
  /**
   * @remarks
   * The applicable personnel scope of the travel standard.
   * 
   * @example
   * 1
   */
  scope?: number;
  static names(): { [key: string]: string } {
    return {
      mainReserveRule: 'main_reserve_rule',
      reserveRuleDesc: 'reserve_rule_desc',
      scope: 'scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mainReserveRule: TravelStandardListQueryResponseBodyModuleItemsMainReserveRule,
      reserveRuleDesc: { 'type': 'array', 'itemType': TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc },
      scope: 'number',
    };
  }

  validate() {
    if(this.mainReserveRule && typeof (this.mainReserveRule as any).validate === 'function') {
      (this.mainReserveRule as any).validate();
    }
    if(Array.isArray(this.reserveRuleDesc)) {
      $dara.Model.validateArray(this.reserveRuleDesc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardListQueryResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * The list of travel standards.
   */
  items?: TravelStandardListQueryResponseBodyModuleItems[];
  /**
   * @remarks
   * The total number of travel standards.
   * 
   * @example
   * 30
   */
  totalSize?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'items',
      totalSize: 'total_size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': TravelStandardListQueryResponseBodyModuleItems },
      totalSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TravelStandardListQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 0
   */
  code?: number;
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
   * The response data. Returned by the server. An empty value is returned if no results are found or an exception occurs.
   */
  module?: TravelStandardListQueryResponseBodyModule;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 05F9C201-1B53-5905-94AB-0D7444D8466A
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
   * 21041aa317070996148671005d0a0b
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
      code: 'number',
      message: 'string',
      module: TravelStandardListQueryResponseBodyModule,
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

