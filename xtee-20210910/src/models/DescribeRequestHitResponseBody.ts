// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRequestHitResponseBodyResultObjectRuleHitRecords extends $dara.Model {
  /**
   * @remarks
   * Duration
   * 
   * @example
   * 1
   */
  cost?: number;
  /**
   * @remarks
   * Whether the rule was hit.
   * 
   * @example
   * true
   */
  hitSuccessful?: boolean;
  /**
   * @remarks
   * Whether to show details
   * 
   * @example
   * true
   */
  isShowDetail?: boolean;
  /**
   * @remarks
   * Order.
   * 
   * @example
   * 1
   */
  order?: number;
  /**
   * @remarks
   * Policy ID
   * 
   * @example
   * 101544
   */
  ruleId?: string;
  /**
   * @remarks
   * Policy name
   * 
   * @example
   * 注册手机号是11位数字
   */
  ruleName?: string;
  /**
   * @remarks
   * Rule snapshot ID
   * 
   * @example
   * 27
   */
  ruleSnapshotId?: string;
  /**
   * @remarks
   * Policy status
   * 
   * @example
   * RUNNING
   */
  ruleStatus?: string;
  static names(): { [key: string]: string } {
    return {
      cost: 'cost',
      hitSuccessful: 'hitSuccessful',
      isShowDetail: 'isShowDetail',
      order: 'order',
      ruleId: 'ruleId',
      ruleName: 'ruleName',
      ruleSnapshotId: 'ruleSnapshotId',
      ruleStatus: 'ruleStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cost: 'number',
      hitSuccessful: 'boolean',
      isShowDetail: 'boolean',
      order: 'number',
      ruleId: 'string',
      ruleName: 'string',
      ruleSnapshotId: 'string',
      ruleStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestHitResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Event code
   * 
   * @example
   * de_aszbjb7236
   */
  eventCode?: string;
  /**
   * @remarks
   * Event name.
   * 
   * @example
   * 注册风险
   */
  eventName?: string;
  /**
   * @remarks
   * Input parameters.
   * 
   * @example
   * {\\"eventCode\\":\\"de_afghcf6411\\",\\"ip\\":\\"196.168.0.1\\",\\"DEtest222\\":9007199254740999,\\"age\\":20}
   */
  inputs?: string;
  /**
   * @remarks
   * Output parameters
   * 
   * @example
   * {\\"tags\\":\\"rm0102,test_tag,age\\",\\"score\\":\\"30.0\\",\\"extend\\":\\"{\\\\\\"OUT_V01\\\\\\":\\\\\\"Maritime\\\\\\",\\\\\\"OUT_V02\\\\\\":\\\\\\"Lome\\\\\\",\\\\\\"OUT_V03\\\\\\":\\\\\\"196.168.0.1_A\\\\\\"}\\",\\"finalDecision\\":\\"REJECT\\"}
   */
  outputs?: string;
  /**
   * @remarks
   * Timestamp of the request.
   * 
   * @example
   * 1752571330000
   */
  requestTime?: number;
  /**
   * @remarks
   * Details of the executed rules.
   */
  ruleHitRecords?: DescribeRequestHitResponseBodyResultObjectRuleHitRecords[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 60C97040-D5D5-4906-9522-B9B413730CAA
   */
  sRequestId?: string;
  /**
   * @remarks
   * Total amount of the request
   * 
   * @example
   * 4
   */
  totalCost?: number;
  static names(): { [key: string]: string } {
    return {
      eventCode: 'eventCode',
      eventName: 'eventName',
      inputs: 'inputs',
      outputs: 'outputs',
      requestTime: 'requestTime',
      ruleHitRecords: 'ruleHitRecords',
      sRequestId: 'sRequestId',
      totalCost: 'totalCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventCode: 'string',
      eventName: 'string',
      inputs: 'string',
      outputs: 'string',
      requestTime: 'number',
      ruleHitRecords: { 'type': 'array', 'itemType': DescribeRequestHitResponseBodyResultObjectRuleHitRecords },
      sRequestId: 'string',
      totalCost: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ruleHitRecords)) {
      $dara.Model.validateArray(this.ruleHitRecords);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRequestHitResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AE7E6105-7DEB-5125-9B24-DCBC139F6CD2
   */
  requestId?: string;
  /**
   * @remarks
   * Return object
   */
  resultObject?: DescribeRequestHitResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: DescribeRequestHitResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

