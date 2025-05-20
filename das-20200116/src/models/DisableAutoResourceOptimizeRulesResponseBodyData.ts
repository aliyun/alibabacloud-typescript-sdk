// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList } from "./DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList";
import { DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList } from "./DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList";


export class DisableAutoResourceOptimizeRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the automatic tablespace fragment recycling feature failed to be disabled.
   * 
   * @example
   * 1
   */
  configFailInstanceCount?: number;
  /**
   * @remarks
   * The list of database instances for which the automatic tablespace fragment recycling feature failed to be disabled.
   */
  configFailInstanceList?: DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList[];
  /**
   * @remarks
   * The number of database instances for which the automatic tablespace fragment recycling feature is disabled.
   * 
   * @example
   * 1
   */
  configSuccessInstanceCount?: number;
  /**
   * @remarks
   * The list of database instances for which the automatic tablespace fragment recycling feature is disabled.
   */
  configSuccessInstanceList?: DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList[];
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
      configFailInstanceList: { 'type': 'array', 'itemType': DisableAutoResourceOptimizeRulesResponseBodyDataConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': DisableAutoResourceOptimizeRulesResponseBodyDataConfigSuccessInstanceList },
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

