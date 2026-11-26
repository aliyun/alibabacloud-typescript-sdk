// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentStatisticsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of agent IDs.
   */
  agentIdsShrink?: string;
  /**
   * @remarks
   * The page number. The value must be greater than **0**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of department IDs.
   */
  depIdsShrink?: string;
  /**
   * @remarks
   * The end timestamp. Unit: milliseconds.
   * 
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @remarks
   * Specifies whether to group query results by agent. Valid values:
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
   * Specifies whether to group query results by department. Valid values:
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
   * The AICCS instance ID.
   * You can obtain the ID from the **Instances** page in the left-side navigation pane of the [Artificial Intelligence Cloud Call Service console](https://aiccs.console.aliyun.com/overview).
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @remarks
   * The number of entries per page. The value must be greater than **0**. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The start timestamp. Unit: milliseconds.
   * 
   * @example
   * 1615083365000
   */
  startDate?: number;
  /**
   * @remarks
   * The time dimension type. Valid values:
   * 
   * - **minute**: minutes
   * - **hour**: hours
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

