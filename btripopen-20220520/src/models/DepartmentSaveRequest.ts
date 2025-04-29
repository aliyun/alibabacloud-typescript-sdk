// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DepartmentSaveRequestDepartList } from "./DepartmentSaveRequestDepartList";


export class DepartmentSaveRequest extends $dara.Model {
  departList?: DepartmentSaveRequestDepartList[];
  static names(): { [key: string]: string } {
    return {
      departList: 'depart_list',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departList: { 'type': 'array', 'itemType': DepartmentSaveRequestDepartList },
    };
  }

  validate() {
    if(Array.isArray(this.departList)) {
      $dara.Model.validateArray(this.departList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

