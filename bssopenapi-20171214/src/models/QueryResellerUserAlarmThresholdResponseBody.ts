// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryResellerUserAlarmThresholdResponseBodyData extends $dara.Model {
  /**
   * @example
   * 100
   */
  denominator?: number;
  /**
   * @example
   * 10
   */
  numerator?: number;
  /**
   * @example
   * 100
   */
  thresholdAmount?: string;
  /**
   * @example
   * 0
   */
  thresholdType?: number;
  static names(): { [key: string]: string } {
    return {
      denominator: 'Denominator',
      numerator: 'Numerator',
      thresholdAmount: 'ThresholdAmount',
      thresholdType: 'ThresholdType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      denominator: 'number',
      numerator: 'number',
      thresholdAmount: 'string',
      thresholdType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryResellerUserAlarmThresholdResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 1
   */
  count?: number;
  data?: QueryResellerUserAlarmThresholdResponseBodyData[];
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * EAE08A27-386C-579E-966D-8853EC3C5D0E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      count: 'Count',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      count: 'number',
      data: { 'type': 'array', 'itemType': QueryResellerUserAlarmThresholdResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

