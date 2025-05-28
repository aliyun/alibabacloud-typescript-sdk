// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


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

