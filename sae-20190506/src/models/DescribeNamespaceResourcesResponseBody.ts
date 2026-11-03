// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the APM Java agent.
   * 
   * @example
   * 2.5.0
   */
  apmJavaAgentVersion?: string;
  /**
   * @remarks
   * The number of applications.
   * 
   * @example
   * 1
   */
  appCount?: number;
  /**
   * @remarks
   * The region to which the namespace belongs.
   * 
   * @example
   * cn-shanghai
   */
  belongRegion?: string;
  /**
   * @remarks
   * The namespace description.
   * 
   * @example
   * decs
   */
  description?: string;
  /**
   * @remarks
   * The jump server application ID.
   * 
   * @example
   * 5ec46468-6b26-4a3c-9f7c-bf88761a****
   */
  jumpServerAppId?: string;
  /**
   * @remarks
   * The IP address of the jump server.
   * 
   * @example
   * 120.78.XXX.XX
   */
  jumpServerIp?: string;
  /**
   * @remarks
   * The change order ID.
   * 
   * @example
   * afedb3c4-63f8-4a3d-aaa3-2c30363f****
   */
  lastChangeOrderId?: string;
  /**
   * @remarks
   * Indicates whether a change order is running in the namespace. Valid values:
   * 
   * - **true**: A change order is running.
   * - **false**: No change order is running.
   * 
   * @example
   * true
   */
  lastChangeOrderRunning?: boolean;
  /**
   * @remarks
   * The status of the latest change order. Valid values:
   *   - **READY**: The latest change order is ready.
   *   - **RUNNING**: The latest change order is running.
   *   - **SUCCESS**: The latest change order is successful.
   *   - **FAIL**: The latest change order failed.
   *   - **ABORT**: The latest change order is aborted.
   *   - **WAIT_BATCH_CONFIRM**: The latest change order is waiting for manual batch confirmation.
   *   - **AUTO_BATCH_WAIT**: The latest change order is in the automatic batch waiting state.
   *   - **SYSTEM_FAIL**: A system fault occurred.
   *   - **WAIT_APPROVAL**: The latest change order is waiting for approval.
   *   - **APPROVED**: The latest change order is approved and waiting to be executed.
   * 
   * @example
   * SUCCESS
   */
  lastChangeOrderStatus?: string;
  /**
   * @remarks
   * The short namespace ID.
   * 
   * @example
   * test
   */
  nameSpaceShortId?: string;
  /**
   * @remarks
   * The namespace ID.
   * 
   * @example
   * cn-shangha:test
   */
  namespaceId?: string;
  /**
   * @remarks
   * The namespace name.
   * 
   * @example
   * test
   */
  namespaceName?: string;
  /**
   * @remarks
   * Indicates whether the change order notification has expired. Valid values:
   * 
   * - **true**: The change order notification has expired.
   * - **false**: The change order notification has not expired.
   * 
   * @example
   * true
   */
  notificationExpired?: boolean;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-wz969ngg2e49q5i4****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The configurations for collecting logs to Simple Log Service (SLS).
   * 
   * - To use SLS resources through automatic creation by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * - To use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * Metric description:
   * 
   * - **projectName**: The name of the SLS project.  
   * - **logDir**: The log path.
   * - **logType**: The log type. **stdout** indicates container standard output logs. You can configure only one such log in the Settings. If you do not configure it, file logs are collected.
   * - **logstoreName**: The name of the SLS Logstore.
   * - **logtailName**: The name of the SLS Logtail. If this parameter is not specified, a new Logtail is created.
   * 
   * If the SLS collection configurations remain unchanged during multiple deployments, you do not need to modify the Settings for this parameter (that is, the **SlsConfigs** field is not required in the request). If you no longer need to use the SLS collection feature, you must change the Settings of this field to an empty character string in the request (that is, the value of the **SlsConfigs** field is "").
   * 
   * @example
   * [{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]
   */
  slsConfigs?: string;
  /**
   * @remarks
   * The tenant ID of the SAE namespace.
   * 
   * @example
   * 838cad95-973f-48fe-830b-2a8546d7****
   */
  tenantId?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * test@aliyun.com
   */
  userId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2ze559r1z1bpwqxwp****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The vSwitch name.
   * 
   * @example
   * test
   */
  vSwitchName?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-2ze0i263cnn311nvj****
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPC name.
   * 
   * @example
   * test
   */
  vpcName?: string;
  static names(): { [key: string]: string } {
    return {
      apmJavaAgentVersion: 'ApmJavaAgentVersion',
      appCount: 'AppCount',
      belongRegion: 'BelongRegion',
      description: 'Description',
      jumpServerAppId: 'JumpServerAppId',
      jumpServerIp: 'JumpServerIp',
      lastChangeOrderId: 'LastChangeOrderId',
      lastChangeOrderRunning: 'LastChangeOrderRunning',
      lastChangeOrderStatus: 'LastChangeOrderStatus',
      nameSpaceShortId: 'NameSpaceShortId',
      namespaceId: 'NamespaceId',
      namespaceName: 'NamespaceName',
      notificationExpired: 'NotificationExpired',
      securityGroupId: 'SecurityGroupId',
      slsConfigs: 'SlsConfigs',
      tenantId: 'TenantId',
      userId: 'UserId',
      vSwitchId: 'VSwitchId',
      vSwitchName: 'VSwitchName',
      vpcId: 'VpcId',
      vpcName: 'VpcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apmJavaAgentVersion: 'string',
      appCount: 'number',
      belongRegion: 'string',
      description: 'string',
      jumpServerAppId: 'string',
      jumpServerIp: 'string',
      lastChangeOrderId: 'string',
      lastChangeOrderRunning: 'boolean',
      lastChangeOrderStatus: 'string',
      nameSpaceShortId: 'string',
      namespaceId: 'string',
      namespaceName: 'string',
      notificationExpired: 'boolean',
      securityGroupId: 'string',
      slsConfigs: 'string',
      tenantId: 'string',
      userId: 'string',
      vSwitchId: 'string',
      vSwitchName: 'string',
      vpcId: 'string',
      vpcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeNamespaceResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The API status code or POP error code. Valid values:
   * 
   * - **2xx**: Success.
   * - **3xx**: Redirect.
   * - **4xx**: Request error.
   * - **5xx**: Server error.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response result.
   */
  data?: DescribeNamespaceResourcesResponseBodyData;
  /**
   * @remarks
   * The error code. Valid values:
   * 
   * - Successful request: The **ErrorCode** field is not returned.
   * - Failed request: The **ErrorCode** field is returned. For more information, see the **Error codes** section in this topic.
   * 
   * @example
   * InvalidParameter.Obviously
   */
  errorCode?: string;
  /**
   * @remarks
   * The additional information. Valid values:
   * 
   * - **success**: The request is normal.
   * - Specific error code: The request is abnormal.
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
   * 91F93257-7A4A-4BD3-9A7E-2F6EAE6D****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the namespace resource information was queried successfully. Valid values:
   * 
   * - **true**: The query was successful.
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID, which is used to accurately query call information.
   * 
   * @example
   * 0a98a02315955564772843261e****
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
      data: DescribeNamespaceResourcesResponseBodyData,
      errorCode: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
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

