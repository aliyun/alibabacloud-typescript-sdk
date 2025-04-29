// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupDepartSaveRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deptName?: string;
  managerIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 001
   */
  outerDeptId?: string;
  /**
   * @example
   * 002
   */
  outerDeptPid?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 0
   */
  status?: number;
  subCorpIdList?: string[];
  syncGroup?: boolean;
  static names(): { [key: string]: string } {
    return {
      deptName: 'dept_name',
      managerIds: 'manager_ids',
      outerDeptId: 'outer_dept_id',
      outerDeptPid: 'outer_dept_pid',
      status: 'status',
      subCorpIdList: 'sub_corp_id_list',
      syncGroup: 'sync_group',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      managerIds: 'string',
      outerDeptId: 'string',
      outerDeptPid: 'string',
      status: 'number',
      subCorpIdList: { 'type': 'array', 'itemType': 'string' },
      syncGroup: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.subCorpIdList)) {
      $dara.Model.validateArray(this.subCorpIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

