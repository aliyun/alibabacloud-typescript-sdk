// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
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

