// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataStepPriceMapValue } from "./DataStepPriceMapValue";
import { DataModuleMapListSpnTypeMapListValue } from "./DataModuleMapListSpnTypeMapListValue";


export class GetSavingPlanDeductableCommodityResponseBodyDataCycleList extends $dara.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataFilterModules extends $dara.Model {
  moduleCode?: string;
  moduleId?: number;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListFilterModules extends $dara.Model {
  moduleCode?: string;
  moduleId?: number;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListShowModules extends $dara.Model {
  moduleCode?: string;
  moduleId?: number;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListSpnTypeNameList extends $dara.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataModuleMapList extends $dara.Model {
  filterModules?: GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListFilterModules[];
  moduleCode?: string;
  moduleId?: number;
  moduleName?: string;
  showModules?: GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListShowModules[];
  spnTypeList?: string[];
  spnTypeMapList?: { [key: string]: DataModuleMapListSpnTypeMapListValue }[];
  spnTypeNameList?: GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListSpnTypeNameList[];
  static names(): { [key: string]: string } {
    return {
      filterModules: 'FilterModules',
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
      showModules: 'ShowModules',
      spnTypeList: 'SpnTypeList',
      spnTypeMapList: 'SpnTypeMapList',
      spnTypeNameList: 'SpnTypeNameList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterModules: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListFilterModules },
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
      showModules: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListShowModules },
      spnTypeList: { 'type': 'array', 'itemType': 'string' },
      spnTypeMapList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': DataModuleMapListSpnTypeMapListValue } },
      spnTypeNameList: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListSpnTypeNameList },
    };
  }

  validate() {
    if(Array.isArray(this.filterModules)) {
      $dara.Model.validateArray(this.filterModules);
    }
    if(Array.isArray(this.showModules)) {
      $dara.Model.validateArray(this.showModules);
    }
    if(Array.isArray(this.spnTypeList)) {
      $dara.Model.validateArray(this.spnTypeList);
    }
    if(Array.isArray(this.spnTypeMapList)) {
      $dara.Model.validateArray(this.spnTypeMapList);
    }
    if(Array.isArray(this.spnTypeNameList)) {
      $dara.Model.validateArray(this.spnTypeNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataPayModeList extends $dara.Model {
  code?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyDataPricingModules extends $dara.Model {
  moduleCode?: string;
  moduleId?: number;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleCode: 'ModuleCode',
      moduleId: 'ModuleId',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleCode: 'string',
      moduleId: 'number',
      moduleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBodyData extends $dara.Model {
  activityId?: number;
  commodityCode?: string;
  commodityId?: number;
  commodityName?: string;
  cycleList?: GetSavingPlanDeductableCommodityResponseBodyDataCycleList[];
  filterModules?: GetSavingPlanDeductableCommodityResponseBodyDataFilterModules[];
  itemCode?: string;
  itemId?: number;
  itemName?: string;
  moduleMapList?: GetSavingPlanDeductableCommodityResponseBodyDataModuleMapList[];
  payModeList?: GetSavingPlanDeductableCommodityResponseBodyDataPayModeList[];
  pricingModules?: GetSavingPlanDeductableCommodityResponseBodyDataPricingModules[];
  spnCommodityCode?: string;
  spnCommodityName?: string;
  spnDiscountConfigType?: string;
  stepPriceMap?: { [key: string]: DataStepPriceMapValue[] };
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      commodityCode: 'CommodityCode',
      commodityId: 'CommodityId',
      commodityName: 'CommodityName',
      cycleList: 'CycleList',
      filterModules: 'FilterModules',
      itemCode: 'ItemCode',
      itemId: 'ItemId',
      itemName: 'ItemName',
      moduleMapList: 'ModuleMapList',
      payModeList: 'PayModeList',
      pricingModules: 'PricingModules',
      spnCommodityCode: 'SpnCommodityCode',
      spnCommodityName: 'SpnCommodityName',
      spnDiscountConfigType: 'SpnDiscountConfigType',
      stepPriceMap: 'StepPriceMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      commodityCode: 'string',
      commodityId: 'number',
      commodityName: 'string',
      cycleList: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataCycleList },
      filterModules: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataFilterModules },
      itemCode: 'string',
      itemId: 'number',
      itemName: 'string',
      moduleMapList: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataModuleMapList },
      payModeList: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataPayModeList },
      pricingModules: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyDataPricingModules },
      spnCommodityCode: 'string',
      spnCommodityName: 'string',
      spnDiscountConfigType: 'string',
      stepPriceMap: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataStepPriceMapValue } },
    };
  }

  validate() {
    if(Array.isArray(this.cycleList)) {
      $dara.Model.validateArray(this.cycleList);
    }
    if(Array.isArray(this.filterModules)) {
      $dara.Model.validateArray(this.filterModules);
    }
    if(Array.isArray(this.moduleMapList)) {
      $dara.Model.validateArray(this.moduleMapList);
    }
    if(Array.isArray(this.payModeList)) {
      $dara.Model.validateArray(this.payModeList);
    }
    if(Array.isArray(this.pricingModules)) {
      $dara.Model.validateArray(this.pricingModules);
    }
    if(this.stepPriceMap) {
      $dara.Model.validateMap(this.stepPriceMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetSavingPlanDeductableCommodityResponseBody extends $dara.Model {
  data?: GetSavingPlanDeductableCommodityResponseBodyData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetSavingPlanDeductableCommodityResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

