// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeRuleCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * 同类聚合规则数。
   * 
   * @example
   * 3
   */
  aggregationRuleNum?: number;
  /**
   * @remarks
   * 自定义规则数。
   * 
   * @example
   * 10
   */
  customizeRuleNum?: number;
  /**
   * @remarks
   * 专家规则数。
   * 
   * @example
   * 7
   */
  expertRuleNum?: number;
  /**
   * @remarks
   * 图计算规则数。
   * 
   * @example
   * 2
   */
  graphComputingRuleNum?: number;
  /**
   * @remarks
   * The number of rules that are used to identify high-risk threats.
   * 
   * @example
   * 12
   */
  highRuleNum?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 20
   */
  inUseRuleNum?: number;
  /**
   * @remarks
   * The number of rules that are used to identify low-risk threats.
   * 
   * @example
   * 3
   */
  lowRuleNum?: number;
  /**
   * @remarks
   * The number of rules that are used to identify medium-risk threats.
   * 
   * @example
   * 5
   */
  mediumRuleNum?: number;
  /**
   * @remarks
   * 预定义规则数。
   * 
   * @example
   * 10
   */
  predefinedRuleNum?: number;
  /**
   * @remarks
   * 告警透传规则数。
   * 
   * @example
   * 3
   */
  singleAlertRuleNum?: number;
  /**
   * @remarks
   * 总规则数。
   * 
   * @example
   * 10
   */
  totalRuleNum?: number;
  /**
   * @remarks
   * 不产生事件规则数。
   * 
   * @example
   * 3
   */
  unEventRuleNum?: number;
  static names(): { [key: string]: string } {
    return {
      aggregationRuleNum: 'AggregationRuleNum',
      customizeRuleNum: 'CustomizeRuleNum',
      expertRuleNum: 'ExpertRuleNum',
      graphComputingRuleNum: 'GraphComputingRuleNum',
      highRuleNum: 'HighRuleNum',
      inUseRuleNum: 'InUseRuleNum',
      lowRuleNum: 'LowRuleNum',
      mediumRuleNum: 'MediumRuleNum',
      predefinedRuleNum: 'PredefinedRuleNum',
      singleAlertRuleNum: 'SingleAlertRuleNum',
      totalRuleNum: 'TotalRuleNum',
      unEventRuleNum: 'UnEventRuleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregationRuleNum: 'number',
      customizeRuleNum: 'number',
      expertRuleNum: 'number',
      graphComputingRuleNum: 'number',
      highRuleNum: 'number',
      inUseRuleNum: 'number',
      lowRuleNum: 'number',
      mediumRuleNum: 'number',
      predefinedRuleNum: 'number',
      singleAlertRuleNum: 'number',
      totalRuleNum: 'number',
      unEventRuleNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomizeRuleCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCustomizeRuleCountResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCustomizeRuleCountResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

