// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMetricRuleCountResponseBodyMetricRuleCount extends $dara.Model {
  /**
   * @remarks
   * The number of alert rules with active alerts.
   * 
   * @example
   * 5
   */
  alarm?: number;
  /**
   * @remarks
   * The number of disabled alert rules.
   * 
   * @example
   * 0
   */
  disable?: number;
  /**
   * @remarks
   * The number of alert rules without data.
   * 
   * @example
   * 0
   */
  nodata?: number;
  /**
   * @remarks
   * The number of alert rules without active alerts.
   * 
   * @example
   * 40
   */
  ok?: number;
  /**
   * @remarks
   * The total number of alert rules.
   * 
   * @example
   * 45
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alarm: 'Alarm',
      disable: 'Disable',
      nodata: 'Nodata',
      ok: 'Ok',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarm: 'number',
      disable: 'number',
      nodata: 'number',
      ok: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMetricRuleCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The responses code.
   * 
   * >  The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The number of alert rules in each state.
   */
  metricRuleCount?: DescribeMetricRuleCountResponseBodyMetricRuleCount;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FF38D33A-67C1-40EB-AB65-FAEE51EDB644
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
      message: 'Message',
      metricRuleCount: 'MetricRuleCount',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      metricRuleCount: DescribeMetricRuleCountResponseBodyMetricRuleCount,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.metricRuleCount && typeof (this.metricRuleCount as any).validate === 'function') {
      (this.metricRuleCount as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

