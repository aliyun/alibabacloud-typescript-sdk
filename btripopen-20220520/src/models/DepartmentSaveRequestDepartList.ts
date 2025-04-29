// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DepartmentSaveRequestDepartList extends $dara.Model {
  /**
   * @example
   * 10
   */
  departId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  departName?: string;
  /**
   * @example
   * 10
   */
  departPid?: number;
  /**
   * @example
   * 001|002|003
   */
  managerIds?: string;
  /**
   * @example
   * 1
   */
  status?: number;
  /**
   * @example
   * testdepartid001
   */
  thirdDepartId?: string;
  /**
   * @example
   * testdepartpid001
   */
  thirdDepartPid?: string;
  static names(): { [key: string]: string } {
    return {
      departId: 'depart_id',
      departName: 'depart_name',
      departPid: 'depart_pid',
      managerIds: 'manager_ids',
      status: 'status',
      thirdDepartId: 'third_depart_id',
      thirdDepartPid: 'third_depart_pid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departId: 'number',
      departName: 'string',
      departPid: 'number',
      managerIds: 'string',
      status: 'number',
      thirdDepartId: 'string',
      thirdDepartPid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

