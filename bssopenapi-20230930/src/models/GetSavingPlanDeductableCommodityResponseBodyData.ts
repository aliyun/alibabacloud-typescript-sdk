// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanDeductableCommodityResponseBodyDataCycleList } from "./GetSavingPlanDeductableCommodityResponseBodyDataCycleList";
import { GetSavingPlanDeductableCommodityResponseBodyDataFilterModules } from "./GetSavingPlanDeductableCommodityResponseBodyDataFilterModules";
import { GetSavingPlanDeductableCommodityResponseBodyDataModuleMapList } from "./GetSavingPlanDeductableCommodityResponseBodyDataModuleMapList";
import { GetSavingPlanDeductableCommodityResponseBodyDataPayModeList } from "./GetSavingPlanDeductableCommodityResponseBodyDataPayModeList";
import { GetSavingPlanDeductableCommodityResponseBodyDataPricingModules } from "./GetSavingPlanDeductableCommodityResponseBodyDataPricingModules";
import { DataStepPriceMapValue } from "./DataStepPriceMapValue";


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

