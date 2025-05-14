// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQueueInformationShrinkRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIdsShrink?: string;
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * fasle
   */
  existSkillGroupGrouping?: boolean;
  groupIdsShrink?: string;
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
   * 20
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
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

