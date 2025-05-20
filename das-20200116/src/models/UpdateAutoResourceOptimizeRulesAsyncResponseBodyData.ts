// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse } from "./UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse";


export class UpdateAutoResourceOptimizeRulesAsyncResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  complete?: boolean;
  /**
   * @remarks
   * The returned data of the configuration.
   * 
   * >  The data is returned only if the value of isFinish is **true**. This value indicates that the asynchronous request is complete.
   */
  configResponse?: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse;
  /**
   * @remarks
   * Indicates whether the asynchronous request failed. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  fail?: boolean;
  /**
   * @remarks
   * Indicates whether the asynchronous request was complete. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  isFinish?: boolean;
  /**
   * @remarks
   * The ID of the asynchronous request.
   * 
   * @example
   * async__20ee808e72257f16a4fe024057ca****
   */
  resultId?: string;
  /**
   * @remarks
   * The state of the asynchronous request. Valid values:
   * 
   * *   **RUNNING**
   * *   **SUCCESS**
   * *   **FAIL**
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The time when the asynchronous request was made. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1645668213000
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      complete: 'Complete',
      configResponse: 'ConfigResponse',
      fail: 'Fail',
      isFinish: 'IsFinish',
      resultId: 'ResultId',
      state: 'State',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complete: 'boolean',
      configResponse: UpdateAutoResourceOptimizeRulesAsyncResponseBodyDataConfigResponse,
      fail: 'boolean',
      isFinish: 'boolean',
      resultId: 'string',
      state: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    if(this.configResponse && typeof (this.configResponse as any).validate === 'function') {
      (this.configResponse as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

