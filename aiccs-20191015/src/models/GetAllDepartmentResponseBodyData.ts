// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllDepartmentResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  departmentId?: number;
  departmentName?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      departmentName: 'DepartmentName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      departmentName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

