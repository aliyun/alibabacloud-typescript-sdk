// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructSaseDepartment extends $dara.Model {
  departmentId?: string;
  fullDepartmentIdPath?: string;
  fullDn?: string;
  idpId?: number;
  name?: string;
  parentDepartmentId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      fullDepartmentIdPath: 'FullDepartmentIdPath',
      fullDn: 'FullDn',
      idpId: 'IdpId',
      name: 'Name',
      parentDepartmentId: 'ParentDepartmentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      fullDepartmentIdPath: 'string',
      fullDn: 'string',
      idpId: 'number',
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

