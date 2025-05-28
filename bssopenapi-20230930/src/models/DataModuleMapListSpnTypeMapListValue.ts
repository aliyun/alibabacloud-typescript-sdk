// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataModuleMapListSpnTypeMapListValueFilterModules } from "./DataModuleMapListSpnTypeMapListValueFilterModules";
import { DataModuleMapListSpnTypeMapListValueShowModules } from "./DataModuleMapListSpnTypeMapListValueShowModules";


export class DataModuleMapListSpnTypeMapListValue extends $dara.Model {
  filterModules?: DataModuleMapListSpnTypeMapListValueFilterModules[];
  showModules?: DataModuleMapListSpnTypeMapListValueShowModules[];
  static names(): { [key: string]: string } {
    return {
      filterModules: 'FilterModules',
      showModules: 'ShowModules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterModules: { 'type': 'array', 'itemType': DataModuleMapListSpnTypeMapListValueFilterModules },
      showModules: { 'type': 'array', 'itemType': DataModuleMapListSpnTypeMapListValueShowModules },
    };
  }

  validate() {
    if(Array.isArray(this.filterModules)) {
      $dara.Model.validateArray(this.filterModules);
    }
    if(Array.isArray(this.showModules)) {
      $dara.Model.validateArray(this.showModules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

