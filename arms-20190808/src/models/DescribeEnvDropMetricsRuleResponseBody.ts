// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvDropMetricsRuleResponseBodyData extends $dara.Model {
  /**
   * @example
   * kube_pod_created
   */
  dropMetrics?: string;
  /**
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
   * @example
   * 200
   */
  code?: number;
  data?: DescribeEnvDropMetricsRuleResponseBodyData;
  /**
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
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

