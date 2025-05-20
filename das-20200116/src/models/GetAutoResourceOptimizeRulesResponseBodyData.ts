// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList } from "./GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList";
import { GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList } from "./GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList";
import { GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList } from "./GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList";


export class GetAutoResourceOptimizeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature is currently enabled.
   * 
   * @example
   * 1
   */
  enableAutoResourceOptimizeCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic fragment recycling feature is currently enabled.
   */
  enableAutoResourceOptimizeList?: GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList[];
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature is enabled and DAS Enterprise Edition is disabled.
   * 
   * @example
   * 1
   */
  hasEnableRuleButNotDasProCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic fragment recycling feature is enabled and DAS Enterprise Edition is disabled.
   * 
   * >  Automatic fragment recycling tasks are run on this type of database instances only if DAS Enterprise Edition is enabled for the database instances again.
   */
  hasEnableRuleButNotDasProList?: GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList[];
  /**
   * @remarks
   * The number of database instances that do not exist or for which the automatic fragment recycling feature has never been enabled.
   * 
   * >  If a database instance does not exist, the instance has been released or the specified instance ID is invalid.
   * 
   * @example
   * 1
   */
  neverEnableAutoResourceOptimizeOrReleasedInstanceCount?: number;
  /**
   * @remarks
   * The database instances that do not exist or for which the automatic fragment recycling feature has never been enabled.
   */
  neverEnableAutoResourceOptimizeOrReleasedInstanceIdList?: string[];
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature has been enabled.
   * 
   * @example
   * 3
   */
  totalAutoResourceOptimizeRulesCount?: number;
  /**
   * @remarks
   * The number of database instances for which the automatic fragment recycling feature was once enabled but is currently disabled.
   * 
   * @example
   * 1
   */
  turnOffAutoResourceOptimizeCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic fragment recycling feature was once enabled but is currently disabled.
   */
  turnOffAutoResourceOptimizeList?: GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList[];
  static names(): { [key: string]: string } {
    return {
      enableAutoResourceOptimizeCount: 'EnableAutoResourceOptimizeCount',
      enableAutoResourceOptimizeList: 'EnableAutoResourceOptimizeList',
      hasEnableRuleButNotDasProCount: 'HasEnableRuleButNotDasProCount',
      hasEnableRuleButNotDasProList: 'HasEnableRuleButNotDasProList',
      neverEnableAutoResourceOptimizeOrReleasedInstanceCount: 'NeverEnableAutoResourceOptimizeOrReleasedInstanceCount',
      neverEnableAutoResourceOptimizeOrReleasedInstanceIdList: 'NeverEnableAutoResourceOptimizeOrReleasedInstanceIdList',
      totalAutoResourceOptimizeRulesCount: 'TotalAutoResourceOptimizeRulesCount',
      turnOffAutoResourceOptimizeCount: 'TurnOffAutoResourceOptimizeCount',
      turnOffAutoResourceOptimizeList: 'TurnOffAutoResourceOptimizeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoResourceOptimizeCount: 'number',
      enableAutoResourceOptimizeList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataEnableAutoResourceOptimizeList },
      hasEnableRuleButNotDasProCount: 'number',
      hasEnableRuleButNotDasProList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataHasEnableRuleButNotDasProList },
      neverEnableAutoResourceOptimizeOrReleasedInstanceCount: 'number',
      neverEnableAutoResourceOptimizeOrReleasedInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      totalAutoResourceOptimizeRulesCount: 'number',
      turnOffAutoResourceOptimizeCount: 'number',
      turnOffAutoResourceOptimizeList: { 'type': 'array', 'itemType': GetAutoResourceOptimizeRulesResponseBodyDataTurnOffAutoResourceOptimizeList },
    };
  }

  validate() {
    if(Array.isArray(this.enableAutoResourceOptimizeList)) {
      $dara.Model.validateArray(this.enableAutoResourceOptimizeList);
    }
    if(Array.isArray(this.hasEnableRuleButNotDasProList)) {
      $dara.Model.validateArray(this.hasEnableRuleButNotDasProList);
    }
    if(Array.isArray(this.neverEnableAutoResourceOptimizeOrReleasedInstanceIdList)) {
      $dara.Model.validateArray(this.neverEnableAutoResourceOptimizeOrReleasedInstanceIdList);
    }
    if(Array.isArray(this.turnOffAutoResourceOptimizeList)) {
      $dara.Model.validateArray(this.turnOffAutoResourceOptimizeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

