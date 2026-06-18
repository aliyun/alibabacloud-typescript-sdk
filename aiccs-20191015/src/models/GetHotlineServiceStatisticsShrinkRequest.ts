// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineServiceStatisticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * List of agent IDs.
   */
  agentIdsShrink?: string;
  /**
   * @remarks
   * Current page. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * List of department IDs.
   */
  depIdsShrink?: string;
  /**
   * @remarks
   * End Datetime Variable as a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * Specifies whether to query by agent group. Valid values:  
   * - **true**: Yes  
   * - **false**: No
   * 
   * @example
   * true
   */
  existAgentGrouping?: boolean;
  /**
   * @remarks
   * Specifies whether to query by department group. Valid values:  
   * - **true**: Yes  
   * - **false**: No
   * 
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @remarks
   * Indicates whether to query by skill group grouping. Valid values:
   * - **true**: Yes.
   * - **false**: No.
   * 
   * @example
   * true
   */
  existSkillGroupGrouping?: boolean;
  /**
   * @remarks
   * List of skill group IDs.
   */
  groupIdsShrink?: string;
  /**
   * @remarks
   * AICCS instance ID.  
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start date UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @remarks
   * Time latitude type for grouped queries. Valid values:  
   * - **minute**: minute  
   * - **hour**: hour
   * 
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

