// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineServiceStatisticsRequest extends $dara.Model {
  agentIds?: number[];
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
  existAgentGrouping?: boolean;
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
  /**
   * @example
   * minute
   */
  timeLatitudeType?: string;
  static names(): { [key: string]: string } {
    return {
      agentIds: 'AgentIds',
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      existAgentGrouping: 'ExistAgentGrouping',
      existDepartmentGrouping: 'ExistDepartmentGrouping',
      existSkillGroupGrouping: 'ExistSkillGroupGrouping',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
      timeLatitudeType: 'TimeLatitudeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentIds: { 'type': 'array', 'itemType': 'number' },
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existAgentGrouping: 'boolean',
      existDepartmentGrouping: 'boolean',
      existSkillGroupGrouping: 'boolean',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
      timeLatitudeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.agentIds)) {
      $dara.Model.validateArray(this.agentIds);
    }
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

