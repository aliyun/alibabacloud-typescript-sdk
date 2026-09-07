// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvDropMetricsRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metrics to be dropped. Metrics are separated by line breaks.
   * 
   * @example
   * kube_pod_created
   */
  dropMetrics?: string;
  /**
   * @remarks
   * The name of the metric drop rule.
   * 
   * @example
   * ruleName1
   */
  ruleName?: string;
  static names(): { [key: string]: string } {
    return {
      dropMetrics: 'DropMetrics',
      ruleName: 'RuleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dropMetrics: 'string',
      ruleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEnvDropMetricsRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeEnvDropMetricsRuleResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7781D4A-2818-41E7-B7BB-79D809E9****
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
      data: DescribeEnvDropMetricsRuleResponseBodyData,
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

