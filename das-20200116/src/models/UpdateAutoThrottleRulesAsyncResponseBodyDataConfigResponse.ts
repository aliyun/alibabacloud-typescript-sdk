// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList } from "./UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList";
import { UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList } from "./UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList";


export class UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponse extends $dara.Model {
  /**
   * @remarks
   * The number of database instances for which the parameters failed to be configured.
   * 
   * @example
   * 1
   */
  configFailInstanceCount?: number;
  /**
   * @remarks
   * The database instances for which the parameters failed to be configured.
   */
  configFailInstanceList?: UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList[];
  /**
   * @remarks
   * The number of database instances for which the parameters are configured.
   * 
   * @example
   * 1
   */
  configSuccessInstanceCount?: number;
  /**
   * @remarks
   * The database instances for which the parameters are configured.
   */
  configSuccessInstanceList?: UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList[];
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
      configFailInstanceList: { 'type': 'array', 'itemType': UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': UpdateAutoThrottleRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList },
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

