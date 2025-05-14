// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupServiceStatusShrinkRequest extends $dara.Model {
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
  existChannelInstanceGrouping?: boolean;
  /**
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * false
   */
  existRobotInstanceGrouping?: boolean;
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
   * 10
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
      existChannelInstanceGrouping: 'ExistChannelInstanceGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existRobotInstanceGrouping: 'ExistRobotInstanceGrouping',
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
      existChannelInstanceGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existRobotInstanceGrouping: 'boolean',
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

