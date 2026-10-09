// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStrategyResponseBodyStrategiesConfigTargets extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the policy applies to the asset group. Valid values:
   * 
   * - **add**: the policy applies to the asset group.
   * - **del**: the policy does not apply to the asset group.
   * 
   * @example
   * add
   */
  flag?: string;
  /**
   * @remarks
   * The group ID or UUID of the asset to which the policy applies.
   * 
   * @example
   * 10099713
   */
  target?: string;
  /**
   * @remarks
   * The method used to add the assets to which the policy applies. Valid values:
   * 
   * - **groupId**: assets are added by group.
   * - **uuid**: assets are added individually.
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
   * The collection of information about the assets to which the policy applies.
   */
  configTargets?: DescribeStrategyResponseBodyStrategiesConfigTargets[];
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * - **common**: standard policy
   * - **custom**: custom policy
   * 
   * @example
   * custom
   */
  customType?: string;
  /**
   * @remarks
   * The interval of the baseline check. Valid values:
   * 
   * - **1**: every 1 day
   * - **3**: every 3 days
   * - **7**: every 7 days
   * - **30**: every 30 days
   * 
   * @example
   * 1
   */
  cycleDays?: number;
  /**
   * @remarks
   * The start time of the baseline check. Valid values:
   * 
   * - **0**: the baseline check starts between 00:00 and 06:00.
   * - **6**: the baseline check starts between 06:00 and 12:00.
   * - **12**: the baseline check starts between 12:00 and 18:00.
   * - **18**: the baseline check starts between 18:00 and 24:00.
   * 
   * @example
   * 0
   */
  cycleStartTime?: number;
  /**
   * @remarks
   * The number of assets to which the policy applies.
   * 
   * @example
   * 50
   */
  ecsCount?: number;
  /**
   * @remarks
   * The end time of the baseline check policy execution. The value is in the HH:mm:ss format.
   * 
   * @example
   * 03:00:00
   */
  endTime?: string;
  /**
   * @remarks
   * The execution status of the baseline check policy. Valid values:
   * 
   * - **1**: not executed
   * - **2**: executing
   * 
   * @example
   * 1
   */
  execStatus?: number;
  /**
   * @remarks
   * The trigger method of the baseline scan. Valid values:
   * 
   * - **Schedule**: triggered by a scheduled task.
   * - **Manual**: triggered manually.
   * 
   * @example
   * Manual
   */
  executionType?: string;
  /**
   * @remarks
   * The ID of the policy.
   * 
   * @example
   * 8164248
   */
  id?: number;
  /**
   * @remarks
   * The name of the policy.
   * 
   * @example
   * text2
   */
  name?: string;
  /**
   * @remarks
   * The proportion of baselines with risks detected during the execution of the baseline check policy.
   * 
   * @example
   * 0
   */
  passRate?: number;
  /**
   * @remarks
   * The progress of the baseline check. This parameter is returned only for baselines where ExecStatus is set to 2.
   * 
   * @example
   * 50%
   */
  percent?: string;
  /**
   * @remarks
   * The number of assets on which the baseline check is complete.
   * 
   * @example
   * 20
   */
  processRate?: number;
  /**
   * @remarks
   * The number of baseline check items included in the policy.
   * 
   * @example
   * 23
   */
  riskCount?: number;
  /**
   * @remarks
   * The start time of the baseline check policy execution. The value is in the HH:mm:ss format.
   * 
   * @example
   * 00:00:00
   */
  startTime?: string;
  /**
   * @remarks
   * The source type of the policy. Valid values:
   * 
   * - **1**: a built-in policy, which is the default baseline check policy that Security Center executes.
   * - **2**: a user-added policy, including standard policies and custom policies created by users.
   * 
   * @example
   * 2
   */
  type?: number;
  /**
   * @remarks
   * The last modification time of the baseline check policy. The value is in the YYYY-MM-DD HH:mm:ss format.
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
   * The ID of the request. The ID is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot and locate issues.
   * 
   * @example
   * 75C127E6-76CD-59A7-B6E4-1CBBDC98F2EB
   */
  requestId?: string;
  /**
   * @remarks
   * The collection of detailed information about the policies.
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

