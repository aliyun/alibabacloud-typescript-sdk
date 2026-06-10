// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosRulesResponseBodyQosRules extends $dara.Model {
  /**
   * @remarks
   * The number of associated cloud desktops.
   * 
   * @example
   * 0
   */
  desktopCount?: string;
  desktopGroupCount?: number;
  /**
   * @remarks
   * The download bandwidth.
   * 
   * @example
   * 10
   */
  download?: string;
  /**
   * @remarks
   * The network package ID.
   * 
   * @example
   * np-5cjh3sqs1ty3s02xq
   */
  networkPackageId?: string;
  /**
   * @remarks
   * The QoS rule ID.
   * 
   * @example
   * qos-chvkz5ekzgcb6bo0f
   */
  qosRuleId?: string;
  /**
   * @remarks
   * The QoS rule name.
   * 
   * @example
   * test
   */
  qosRuleName?: string;
  /**
   * @remarks
   * The upload bandwidth.
   * 
   * @example
   * 10
   */
  upload?: string;
  static names(): { [key: string]: string } {
    return {
      desktopCount: 'DesktopCount',
      desktopGroupCount: 'DesktopGroupCount',
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
      desktopGroupCount: 'number',
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
  /**
   * @remarks
   * A list of QoS rules.
   */
  qosRules?: DescribeQosRulesResponseBodyQosRules[];
  /**
   * @remarks
   * The request ID.
   * 
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

