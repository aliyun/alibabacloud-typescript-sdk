// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOnlineServiceVolumeShrinkRequest extends $dara.Model {
  agentIdsShrink?: string;
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
  existAgentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
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
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIdsShrink: 'AgentIds',
      currentPage: 'CurrentPage',
      depIdsShrink: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIdsShrink: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIdsShrink: 'string',
      currentPage: 'number',
      depIdsShrink: 'string',
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIdsShrink: 'string',
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

