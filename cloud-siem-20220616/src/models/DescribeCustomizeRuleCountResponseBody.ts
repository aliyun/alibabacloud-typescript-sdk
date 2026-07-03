// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomizeRuleCountResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of rules for intra-class aggregation.
   * 
   * @example
   * 3
   */
  aggregationRuleNum?: number;
  /**
   * @remarks
   * The number of custom rules.
   * 
   * @example
   * 10
   */
  customizeRuleNum?: number;
  /**
   * @remarks
   * The number of expert rules.
   * 
   * @example
   * 7
   */
  expertRuleNum?: number;
  /**
   * @remarks
   * The number of graph computing rules.
   * 
   * @example
   * 2
   */
  graphComputingRuleNum?: number;
  /**
   * @remarks
   * The number of high-risk rules.
   * 
   * @example
   * 12
   */
  highRuleNum?: number;
  /**
   * @remarks
   * The number of rules in use.
   * 
   * @example
   * 20
   */
  inUseRuleNum?: number;
  /**
   * @remarks
   * The number of low-risk rules.
   * 
   * @example
   * 3
   */
  lowRuleNum?: number;
  /**
   * @remarks
   * The number of medium-risk rules.
   * 
   * @example
   * 5
   */
  mediumRuleNum?: number;
  /**
   * @remarks
   * The number of predefined rules.
   * 
   * @example
   * 10
   */
  predefinedRuleNum?: number;
  /**
   * @remarks
   * The number of alert pass-through rules.
   * 
   * @example
   * 3
   */
  singleAlertRuleNum?: number;
  /**
   * @remarks
   * The total number of rules.
   * 
   * @example
   * 10
   */
  totalRuleNum?: number;
  /**
   * @remarks
   * The number of rules that do not generate events.
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
   * The status code of the request.
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
   * The message returned.
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
   * - true: The request was successful.
   * 
   * - false: The request failed.
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

