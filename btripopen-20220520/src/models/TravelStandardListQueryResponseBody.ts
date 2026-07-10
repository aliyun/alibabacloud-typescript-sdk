// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TravelStandardListQueryResponseBodyModuleItemsMainReserveRule extends $dara.Model {
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

export class TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList extends $dara.Model {
  key?: string;
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
  dataList?: TravelStandardListQueryResponseBodyModuleItemsReserveRuleDescDataList[];
  title?: string;
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
  mainReserveRule?: TravelStandardListQueryResponseBodyModuleItemsMainReserveRule;
  reserveRuleDesc?: TravelStandardListQueryResponseBodyModuleItemsReserveRuleDesc[];
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
  items?: TravelStandardListQueryResponseBodyModuleItems[];
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
  code?: number;
  message?: string;
  module?: TravelStandardListQueryResponseBodyModule;
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

