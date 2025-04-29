// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDepartmentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  managerEmployeeIdList?: string[];
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
      managerEmployeeIdList: 'manager_employee_id_list',
      outDeptId: 'out_dept_id',
      outDeptPid: 'out_dept_pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      managerEmployeeIdList: { 'type': 'array', 'itemType': 'string' },
      outDeptId: 'string',
      outDeptPid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managerEmployeeIdList)) {
      $dara.Model.validateArray(this.managerEmployeeIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

