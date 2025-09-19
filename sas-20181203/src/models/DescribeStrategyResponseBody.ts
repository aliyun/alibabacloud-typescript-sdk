// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyResponseBodyStrategiesConfigTargets extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the baseline check policy is applied to the asset group. Valid values:
   * 
   * *   **add**: The baseline check policy is applied to the asset group.
   * *   **del**: the baseline check policy is not applied to the asset group.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The asset group ID or UUID of the asset to which the baseline check policy is applied.
   * 
   * @example
   * 10099713
   */
  target?: string;
  /**
   * @remarks
   * The condition by which the baseline check policy is applied to the asset. Valid values:
   * 
   * *   **groupId**: the ID of the asset group
   * *   **uuid**: the UUID of the asset
   * 
   * @example
   * groupId
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      flag: 'Flag',
      target: 'Target',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flag: 'string',
      target: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyResponseBodyStrategies extends $dara.Model {
  /**
   * @remarks
   * The details of the assets to which the baseline check policy is applied.
   */
  configTargets?: DescribeStrategyResponseBodyStrategiesConfigTargets[];
  /**
   * @remarks
   * The type of the baseline check policy. Valid values:
   * 
   * *   **common**
   * *   **custom**
   * 
   * @example
   * custom
   */
  customType?: string;
  /**
   * @remarks
   * The cycle of the baseline check. Valid values:
   * 
   * *   **1**: every 2 days
   * *   **3**: every 4 days
   * *   **7**: every 8 days
   * *   30: every 31 days
   * 
   * @example
   * 1
   */
  cycleDays?: number;
  /**
   * @remarks
   * The time when the baseline check starts. Valid values:
   * 
   * *   **0**: The baseline check starts within the time range from 00:00 to 06:00.
   * *   **6**: The baseline check starts within the time range from 06:00 to 12:00.
   * *   **12**: The baseline check starts within the time range from 12:00 to 18:00.
   * *   **18**: The baseline check starts within the time range from 18:00 to 24:00.
   * 
   * @example
   * 0
   */
  cycleStartTime?: number;
  /**
   * @remarks
   * The number of the assets to which the baseline check policy is applied.
   * 
   * @example
   * 50
   */
  ecsCount?: number;
  /**
   * @remarks
   * The end time of the baseline check policy.
   * 
   * @example
   * 03:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The status of the baseline check policy. Valid values:
   * 
   * *   **1**: not executed
   * *   **2**: executing
   * 
   * @example
   * 1
   */
  execStatus?: number;
  executionType?: string;
  /**
   * @remarks
   * The ID of the baseline check policy.
   * 
   * @example
   * 8164248
   */
  id?: number;
  /**
   * @remarks
   * The name of the baseline check policy.
   * 
   * @example
   * text2
   */
  name?: string;
  /**
   * @remarks
   * The proportion of risky baselines in the baseline check result.
   * 
   * @example
   * 0
   */
  passRate?: number;
  /**
   * @remarks
   * The progress of the baseline check by using the baseline. This parameter is returned only if the value of the ExecStatus parameter is 2.
   * 
   * @example
   * 50%
   */
  percent?: string;
  /**
   * @remarks
   * The number of the assets on which the baseline check is complete.
   * 
   * @example
   * 20
   */
  processRate?: number;
  /**
   * @remarks
   * The number of baseline check items in the baseline check policy.
   * 
   * @example
   * 23
   */
  riskCount?: number;
  /**
   * @remarks
   * The start time of the baseline check policy.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The source type of the baseline check policy. Valid values:
   * 
   * *   **1**: indicates a built-in policy provided and performed by Security Center by default.
   * *   **2**: indicates a user-defined policy. It can be a standard or custom baseline check policy.
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * The time when the baseline check policy was last modified.
   * 
   * @example
   * 2025-01-07 10:46:43
   */
  userModifyTime?: number;
  static names(): { [key: string]: string } {
    return {
      configTargets: 'ConfigTargets',
      customType: 'CustomType',
      cycleDays: 'CycleDays',
      cycleStartTime: 'CycleStartTime',
      ecsCount: 'EcsCount',
      endTime: 'EndTime',
      execStatus: 'ExecStatus',
      executionType: 'ExecutionType',
      id: 'Id',
      name: 'Name',
      passRate: 'PassRate',
      percent: 'Percent',
      processRate: 'ProcessRate',
      riskCount: 'RiskCount',
      startTime: 'StartTime',
      type: 'Type',
      userModifyTime: 'UserModifyTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configTargets: { 'type': 'array', 'itemType': DescribeStrategyResponseBodyStrategiesConfigTargets },
      customType: 'string',
      cycleDays: 'number',
      cycleStartTime: 'number',
      ecsCount: 'number',
      endTime: 'string',
      execStatus: 'number',
      executionType: 'string',
      id: 'number',
      name: 'string',
      passRate: 'number',
      percent: 'string',
      processRate: 'number',
      riskCount: 'number',
      startTime: 'string',
      type: 'number',
      userModifyTime: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configTargets)) {
      $dara.Model.validateArray(this.configTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 75C127E6-76CD-59A7-B6E4-1CBBDC98F2EB
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the baseline check policies.
   */
  strategies?: DescribeStrategyResponseBodyStrategies[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      strategies: 'Strategies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      strategies: { 'type': 'array', 'itemType': DescribeStrategyResponseBodyStrategies },
    };
  }

  validate() {
    if(Array.isArray(this.strategies)) {
      $dara.Model.validateArray(this.strategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

