// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The command that was run to install the agent.
   * 
   * @example
   * http://edas-bj.oss-cn-beijing-internal.aliyuncs.com/test/install.sh
   */
  agentInstall?: string;
  /**
   * @remarks
   * This parameter is no longer valid.
   * 
   * @example
   * false
   */
  current?: boolean;
  /**
   * @remarks
   * Indicates whether custom namespaces are returned. Valid values:
   * 
   * *   **true**: Custom namespaces are returned.
   * *   **false**: Custom namespaces are not returned.
   * 
   * @example
   * true
   */
  custom?: boolean;
  /**
   * @remarks
   * Indicates whether hybrid cloud namespaces are excluded. Valid values:
   * 
   * *   **true**: Hybrid cloud namespaces are excluded.
   * *   **false**: Hybrid cloud namespaces are included.
   * 
   * @example
   * false
   */
  hybridCloudEnable?: boolean;
  /**
   * @remarks
   * The short ID of the namespace.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The ID of the namespace.
   * 
   * @example
   * cn-beijing:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the security group.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the virtual private cloud (VPC).
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      agentInstall: 'AgentInstall',
      current: 'Current',
      custom: 'Custom',
      hybridCloudEnable: 'HybridCloudEnable',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentInstall: 'string',
      current: 'boolean',
      custom: 'boolean',
      hybridCloudEnable: 'boolean',
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * *   **2xx**: The call was successful.
   * *   **3xx**: The call was redirected.
   * *   **4xx**: The call failed.
   * *   **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The list of namespaces.
   */
  data?: DescribeNamespaceListResponseBodyData[];
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * *   If the call is successful, the **ErrorCode** parameter is not returned.
   * *   If the call fails, the **ErrorCode** parameter is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * NULL
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * *   success: If the call is successful, **success** is returned.
   * *   An error code: If the call fails, an error code is returned.
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
   * 30375C38-F4ED-4135-A0AE-5C75DC7F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the list of namespaces was queried. Valid values:
   * 
   * *   **true**: The list was queried.
   * *   **false**: The list failed to be queried.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID that is used to query the details of the request.
   * 
   * @example
   * ac1a0b2215622920113732501e****
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': DescribeNamespaceListResponseBodyData },
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

