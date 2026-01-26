// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvDropMetricsRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of discarded metrics. Separate multiple metrics with line feeds.
   * 
   * @example
   * kube_pod_created
   */
  dropMetrics?: string;
  /**
   * @remarks
   * The name of the discarded metric rule.
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
   * The status code. The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: DescribeEnvDropMetricsRuleResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * ID of the request
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

