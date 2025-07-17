// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * Label description
   * 
   * @example
   * no risk
   */
  description?: string;
  /**
   * @remarks
   * Risk label
   * 
   * @example
   * violent_explosion
   */
  label?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      label: 'Label',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      label: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class ManualModerationResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Returned data.
   */
  data?: ManualModerationResultResponseBodyData;
  /**
   * @remarks
   * Error message
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: ManualModerationResultResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

