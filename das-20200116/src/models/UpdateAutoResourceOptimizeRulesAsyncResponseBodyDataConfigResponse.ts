// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList } from "./UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList";
import { UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList } from "./UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList";


export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse extends $dara.Model {
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
  configFailInstanceList?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList[];
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
  configSuccessInstanceList?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList[];
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
      configFailInstanceList: { 'type': 'array', 'itemType': UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigFailInstanceList },
      configSuccessInstanceCount: 'number',
      configSuccessInstanceList: { 'type': 'array', 'itemType': UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponseConfigSuccessInstanceList },
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

