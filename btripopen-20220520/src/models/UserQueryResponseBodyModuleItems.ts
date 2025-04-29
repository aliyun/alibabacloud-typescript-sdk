// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UserQueryResponseBodyModuleItems extends $dara.Model {
  employeeNick?: string;
  /**
   * @example
   * 0
   */
  leaveStatus?: number;
  /**
   * @example
   * 123
   */
  thirdPartEmployeeId?: string;
  /**
   * @example
   * 001
   */
  thirdPartJobNo?: string;
  static names(): { [key: string]: string } {
    return {
      employeeNick: 'employee_nick',
      leaveStatus: 'leave_status',
      thirdPartEmployeeId: 'third_part_employee_id',
      thirdPartJobNo: 'third_part_job_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      employeeNick: 'string',
      leaveStatus: 'number',
      thirdPartEmployeeId: 'string',
      thirdPartJobNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

