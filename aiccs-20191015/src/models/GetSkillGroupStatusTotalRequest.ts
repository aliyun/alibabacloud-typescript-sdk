// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillGroupStatusTotalRequest extends $dara.Model {
  /**
   * @remarks
   * List of agent IDs.
   */
  agentIds?: number[];
  /**
   * @remarks
   * Current page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of department IDs.
   */
  depIds?: number[];
  /**
   * @remarks
   * End UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * Whether to query by agent group. Default value: **false**. Valid values:  
   * 
   * - **true**: Yes.  
   * - **false**: No.
   * 
   * @example
   * false
   */
  existAgentGrouping?: boolean;
  /**
   * @remarks
   * Whether to query by department group. Default value: **false**. Valid values:  
   * 
   * - **true**: Yes.  
   * - **false**: No.
   * 
   * @example
   * false
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * Specifies whether to query by skill group grouping. Default value: **false**. Valid values:
   * 
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * false
   */
  existSkillGroupGrouping?: boolean;
  /**
   * @remarks
   * List of skill group IDs.
   */
  groupIds?: number[];
  /**
   * @remarks
   * AICCS instance ID.
   * 
   * You can obtain it from **Instance Management** in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * Page size. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Datetime Variable UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @remarks
   * Time latitude type. Valid values:
   * 
   * - **minute**: Minute.
   * - **hour**: Hour.
   * - **day**: Day.
   * 
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

