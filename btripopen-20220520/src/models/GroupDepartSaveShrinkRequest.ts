// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GroupDepartSaveShrinkRequest extends $dara.Model {
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
  subCorpIdListShrink?: string;
  syncGroup?: boolean;
  static names(): { [key: string]: string } {
    return {
      deptName: 'dept_name',
      managerIds: 'manager_ids',
      outerDeptId: 'outer_dept_id',
      outerDeptPid: 'outer_dept_pid',
      status: 'status',
      subCorpIdListShrink: 'sub_corp_id_list',
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
      subCorpIdListShrink: 'string',
      syncGroup: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

