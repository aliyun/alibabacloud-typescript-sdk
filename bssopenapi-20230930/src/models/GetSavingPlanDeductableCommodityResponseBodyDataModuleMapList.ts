// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListFilterModules } from "./GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListFilterModules";
import { GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListShowModules } from "./GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListShowModules";
import { DataModuleMapListSpnTypeMapListValue } from "./DataModuleMapListSpnTypeMapListValue";
import { GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListSpnTypeNameList } from "./GetSavingPlanDeductableCommodityResponseBodyDataModuleMapListSpnTypeNameList";


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

