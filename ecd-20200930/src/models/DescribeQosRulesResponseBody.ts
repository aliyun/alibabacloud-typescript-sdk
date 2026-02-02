// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosRulesResponseBodyQosRules extends $dara.Model {
  /**
   * @example
   * 0
   */
  desktopCount?: string;
  /**
   * @example
   * 10
   */
  download?: string;
  /**
   * @example
   * np-5cjh3sqs1ty3s02xq
   */
  networkPackageId?: string;
  /**
   * @example
   * qos-chvkz5ekzgcb6bo0f
   */
  qosRuleId?: string;
  /**
   * @example
   * test
   */
  qosRuleName?: string;
  /**
   * @example
   * 10
   */
  upload?: string;
  static names(): { [key: string]: string } {
    return {
      desktopCount: 'DesktopCount',
      download: 'Download',
      networkPackageId: 'NetworkPackageId',
      qosRuleId: 'QosRuleId',
      qosRuleName: 'QosRuleName',
      upload: 'Upload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopCount: 'string',
      download: 'string',
      networkPackageId: 'string',
      qosRuleId: 'string',
      qosRuleName: 'string',
      upload: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosRulesResponseBody extends $dara.Model {
  qosRules?: DescribeQosRulesResponseBodyQosRules[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qosRules: 'QosRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosRules: { 'type': 'array', 'itemType': DescribeQosRulesResponseBodyQosRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.qosRules)) {
      $dara.Model.validateArray(this.qosRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

