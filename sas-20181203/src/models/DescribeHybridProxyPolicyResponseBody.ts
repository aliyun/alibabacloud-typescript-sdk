// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyPolicyResponseBodyPolicyListInfo extends $dara.Model {
  /**
   * @remarks
   * The specific value of the policy configuration.
   * 
   * @example
   * 10
   */
  config?: string;
  /**
   * @remarks
   * The file to which the data intercepted by the proxy cluster policy is written.
   * 
   * @example
   * test
   */
  fileName?: string;
  /**
   * @remarks
   * The configured policy type. Valid values:
   * 
   * - **file**: file data collection
   * - **net**: network data collection
   * - **process**: process data collection.
   * 
   * @example
   * file
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      fileName: 'FileName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      fileName: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridProxyPolicyResponseBodyPolicyList extends $dara.Model {
  /**
   * @remarks
   * The policy information.
   */
  info?: DescribeHybridProxyPolicyResponseBodyPolicyListInfo[];
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - **limitFrequency**: collection frequency control
   * - **limitBandWidth**: collection bandwidth control.
   * 
   * @example
   * limitBandWidth
   */
  policyType?: string;
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      policyType: 'PolicyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: { 'type': 'array', 'itemType': DescribeHybridProxyPolicyResponseBodyPolicyListInfo },
      policyType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.info)) {
      $dara.Model.validateArray(this.info);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeHybridProxyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page in a paged query.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The list of data collection configurations for the proxy cluster.
   */
  policyList?: DescribeHybridProxyPolicyResponseBodyPolicyList[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F7A1B40A-7EED-55A0-BCBC-2F83A486F0AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      policyList: 'PolicyList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      policyList: { 'type': 'array', 'itemType': DescribeHybridProxyPolicyResponseBodyPolicyList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.policyList)) {
      $dara.Model.validateArray(this.policyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

