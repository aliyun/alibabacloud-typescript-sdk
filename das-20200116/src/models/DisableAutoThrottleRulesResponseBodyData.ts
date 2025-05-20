// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList } from "./DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList";
import { DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList } from "./DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList";


export class DisableAutoThrottleRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic SQL throttling feature failed to be disabled.
   * 
   * @example
   * 1
   */
  configFailInstanceCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic SQL throttling feature failed to be disabled.
   */
  configFailInstanceList?: DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList[];
  /**
   * @remarks
   * The number of database instances for which the automatic SQL throttling feature is disabled.
   * 
   * @example
   * 1
   */
  configSuccessInstanceCount?: number;
  /**
   * @remarks
   * The database instances for which the automatic SQL throttling feature is disabled.
   */
  configSuccessInstanceList?: DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList[];
  /**
   * @remarks
   * The total number of database instances.
   * 
   * @example
   * 2
   */
  totalInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      configFailInstanceCount: 'ConfigFailInstanceCount',
      configFailInstanceList: 'ConfigFailInstanceList',
      configSuccessInstanceCount: 'ConfigSuccessInstanceCount',
      configSuccessInstanceList: 'ConfigSuccessInstanceList',
      totalInstanceCount: 'TotalInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configFailInstanceCount: 'number',
      configFailInstanceList: { 'type': 'array', 'itemType': DisableAutoThrottleRulesResponseBodyDataConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': DisableAutoThrottleRulesResponseBodyDataConfigSuccessInstanceList },
      totalInstanceCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configFailInstanceList)) {
      $dara.Model.validateArray(this.configFailInstanceList);
    }
    if(Array.isArray(this.configSuccessInstanceList)) {
      $dara.Model.validateArray(this.configSuccessInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

