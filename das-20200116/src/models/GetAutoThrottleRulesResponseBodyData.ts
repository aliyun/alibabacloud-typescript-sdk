// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList } from "./GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList";
import { GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList } from "./GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList";


export class GetAutoThrottleRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic SQL throttling feature is currently enabled.
   * 
   * @example
   * 1
   */
  enableAutoThrottleCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic SQL throttling feature is currently enabled.
   */
  enableAutoThrottleList?: GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList[];
  /**
   * @remarks
   * The number of database instances that do not exist or for which the automatic SQL throttling feature has never been enabled.
   * 
   * >  If a database instance does not exist, the instance has been released or the specified instance ID is invalid.
   * 
   * @example
   * 1
   */
  neverEnableAutoThrottleOrReleasedInstanceCount?: number;
  /**
   * @remarks
   * The number of database instances that do not exist or for which the automatic SQL throttling feature has never been enabled.
   * 
   * >  If a database instance does not exist, the instance has been released or the specified instance ID is invalid.
   */
  neverEnableAutoThrottleOrReleasedInstanceIdList?: string[];
  /**
   * @remarks
   * The number of databases for which the automatic SQL throttling feature has been enabled.
   * 
   * @example
   * 3
   */
  totalAutoThrottleRulesCount?: number;
  /**
   * @remarks
   * The number of database instances for which the automatic SQL throttling feature was once enabled but is currently disabled.
   * 
   * @example
   * 1
   */
  turnOffAutoThrottleCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic SQL throttling feature was once enabled but is currently disabled.
   */
  turnOffAutoThrottleList?: GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList[];
  static names(): { [key: string]: string } {
    return {
      enableAutoThrottleCount: 'EnableAutoThrottleCount',
      enableAutoThrottleList: 'EnableAutoThrottleList',
      neverEnableAutoThrottleOrReleasedInstanceCount: 'NeverEnableAutoThrottleOrReleasedInstanceCount',
      neverEnableAutoThrottleOrReleasedInstanceIdList: 'NeverEnableAutoThrottleOrReleasedInstanceIdList',
      totalAutoThrottleRulesCount: 'TotalAutoThrottleRulesCount',
      turnOffAutoThrottleCount: 'TurnOffAutoThrottleCount',
      turnOffAutoThrottleList: 'TurnOffAutoThrottleList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableAutoThrottleCount: 'number',
      enableAutoThrottleList: { 'type': 'array', 'itemType': GetAutoThrottleRulesResponseBodyDataEnableAutoThrottleList },
      neverEnableAutoThrottleOrReleasedInstanceCount: 'number',
      neverEnableAutoThrottleOrReleasedInstanceIdList: { 'type': 'array', 'itemType': 'string' },
      totalAutoThrottleRulesCount: 'number',
      turnOffAutoThrottleCount: 'number',
      turnOffAutoThrottleList: { 'type': 'array', 'itemType': GetAutoThrottleRulesResponseBodyDataTurnOffAutoThrottleList },
    };
  }

  validate() {
    if(Array.isArray(this.enableAutoThrottleList)) {
      $dara.Model.validateArray(this.enableAutoThrottleList);
    }
    if(Array.isArray(this.neverEnableAutoThrottleOrReleasedInstanceIdList)) {
      $dara.Model.validateArray(this.neverEnableAutoThrottleOrReleasedInstanceIdList);
    }
    if(Array.isArray(this.turnOffAutoThrottleList)) {
      $dara.Model.validateArray(this.turnOffAutoThrottleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

