// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManualModerationResultResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The label description.
   * 
   * @example
   * No risk detected.
   */
  description?: string;
  /**
   * @remarks
   * The risk label.
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
   * The value of dataId passed in the API request. This field is not returned if dataId was not specified in the request.
   * 
   * @example
   * data1234
   */
  dataId?: string;
  /**
   * @remarks
   * The detailed label results.
   */
  result?: ManualModerationResultResponseBodyDataResult[];
  /**
   * @remarks
   * The number of reviews.
   * 
   * @example
   * 1
   */
  reviewCount?: string;
  /**
   * @remarks
   * The risk level, returned based on the configured high and low risk thresholds. Valid values:
   * 
   * - high: High risk.
   *  
   * - low: Low risk.
   * 
   *  - none: No risk detected.
   * 
   * @example
   * high
   */
  riskLevel?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * xxxxx-xxxxx
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      dataId: 'DataId',
      result: 'Result',
      reviewCount: 'ReviewCount',
      riskLevel: 'RiskLevel',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataId: 'string',
      result: { 'type': 'array', 'itemType': ManualModerationResultResponseBodyDataResult },
      reviewCount: 'string',
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
   * The error code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ManualModerationResultResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
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

