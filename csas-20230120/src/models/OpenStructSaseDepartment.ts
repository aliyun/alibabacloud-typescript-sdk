// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructSaseDepartment extends $dara.Model {
  departmentId?: string;
  fullDn?: string;
  name?: string;
  parentDepartmentId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      fullDn: 'FullDn',
      name: 'Name',
      parentDepartmentId: 'ParentDepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      fullDn: 'string',
      name: 'string',
      parentDepartmentId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

