// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DescribePushMeteringDataResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 2024-09-18T03:15:00Z
   */
  endTime?: number;
  /**
   * @example
   * 5000002763123
   */
  instanceId?: string;
  isPushBilling?: boolean;
  /**
   * @example
   * sgcmgj0003XXXX-Period-1
   */
  meteringAssist?: string;
  /**
   * @example
   * {"Frequency":1}
   */
  meteringEntity?: string;
  /**
   * @example
   * pushData123456
   */
  pushOrderBizId?: string;
  /**
   * @example
   * 2025-01-09T02:04:58Z
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceId: 'InstanceId',
      isPushBilling: 'IsPushBilling',
      meteringAssist: 'MeteringAssist',
      meteringEntity: 'MeteringEntity',
      pushOrderBizId: 'PushOrderBizId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      instanceId: 'string',
      isPushBilling: 'boolean',
      meteringAssist: 'string',
      meteringEntity: 'string',
      pushOrderBizId: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePushMeteringDataResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * parameter \\"service\\" can not be blank.
   */
  dynamicMessage?: string;
  /**
   * @example
   * false
   */
  forceFatal?: boolean;
  /**
   * @example
   * Instance 5723f7ee-952d-411f-94f4-b942a550d9b8 does not exist.
   */
  message?: string;
  /**
   * @example
   * A6A33748-D573-593C-A3BC-593E33D68311
   */
  requestId?: string;
  result?: DescribePushMeteringDataResponseBodyResult;
  /**
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      dynamicMessage: 'DynamicMessage',
      forceFatal: 'ForceFatal',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      dynamicMessage: 'string',
      forceFatal: 'boolean',
      message: 'string',
      requestId: 'string',
      result: DescribePushMeteringDataResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

