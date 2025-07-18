// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OpenStructSaseUserSimpleDepartments extends $dara.Model {
  departmentId?: string;
  name?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
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

export class OpenStructSaseUserSimple extends $dara.Model {
  departments?: OpenStructSaseUserSimpleDepartments[];
  email?: string;
  idpConfigId?: string;
  saseUserId?: string;
  telephone?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      departments: 'Departments',
      email: 'Email',
      idpConfigId: 'IdpConfigId',
      saseUserId: 'SaseUserId',
      telephone: 'Telephone',
      username: 'Username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departments: { 'type': 'array', 'itemType': OpenStructSaseUserSimpleDepartments },
      email: 'string',
      idpConfigId: 'string',
      saseUserId: 'string',
      telephone: 'string',
      username: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.departments)) {
      $dara.Model.validateArray(this.departments);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

