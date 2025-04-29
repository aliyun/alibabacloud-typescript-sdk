// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDepartmentShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  managerEmployeeIdListShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dept123
   */
  outDeptId?: string;
  /**
   * @example
   * dept456
   */
  outDeptPid?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'dept_name',
      managerEmployeeIdListShrink: 'manager_employee_id_list',
      outDeptId: 'out_dept_id',
      outDeptPid: 'out_dept_pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      managerEmployeeIdListShrink: 'string',
      outDeptId: 'string',
      outDeptPid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

