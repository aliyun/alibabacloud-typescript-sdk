// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DataModuleMapListSpnTypeMapListValueFilterModules extends $dara.Model {
  moduleId?: number;
  moduleCode?: string;
  moduleName?: string;
  static names(): { [key: string]: string } {
    return {
      moduleId: 'ModuleId',
      moduleCode: 'ModuleCode',
      moduleName: 'ModuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moduleId: 'number',
      moduleCode: 'string',
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

