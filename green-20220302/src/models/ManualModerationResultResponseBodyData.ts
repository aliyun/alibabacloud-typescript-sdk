// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ManualModerationResultResponseBodyDataResult } from "./ManualModerationResultResponseBodyDataResult";


export class ManualModerationResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value of dataId passed during the API request. This field will not be present if it was not provided during the request.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * Detailed label results.
   */
  result?: ManualModerationResultResponseBodyDataResult[];
  /**
   * @remarks
   * Risk level, returned based on the set high and low risk scores. Possible values include:
   * 
   * - high: High risk
   *  
   * - low: Low risk
   * 
   *  - none: No risk detected
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * Task ID
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      result: 'Result',
      riskLevel: 'RiskLevel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      result: { 'type': 'array', 'itemType': ManualModerationResultResponseBodyDataResult },
      riskLevel: 'string',
      taskId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

