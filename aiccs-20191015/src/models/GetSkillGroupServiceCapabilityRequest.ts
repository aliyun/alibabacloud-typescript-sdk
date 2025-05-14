// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupServiceCapabilityRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

