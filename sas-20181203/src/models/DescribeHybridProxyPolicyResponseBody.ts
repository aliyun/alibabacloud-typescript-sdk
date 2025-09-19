// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHybridProxyPolicyResponseBodyPolicyListInfo extends $dara.Model {
  /**
   * @remarks
   * The value of the policy configurations.
   * 
   * @example
   * 10
   */
  config?: string;
  /**
   * @remarks
   * The name of the file. After you configure a blocking policy, the blocked data is written to the file.
   * 
   * @example
   * test
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the policy that you configured. Valid values:
   * 
   * *   **file**
   * *   **net**
   * *   **process**
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
   * The information about the policy.
   */
  info?: DescribeHybridProxyPolicyResponseBodyPolicyListInfo[];
  /**
   * @remarks
   * The type of the policy. Valid values:
   * 
   * *   **limitFrequency**
   * *   **limitBandWidth**
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
   * The number of entries on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The data collection configurations of the proxy cluster.
   */
  policyList?: DescribeHybridProxyPolicyResponseBodyPolicyList[];
  /**
   * @remarks
   * The request ID.
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

