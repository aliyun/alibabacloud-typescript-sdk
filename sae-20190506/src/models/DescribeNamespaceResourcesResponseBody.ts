// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNamespaceResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version of the APM Java agent.
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
   * The region of the namespace.
   * 
   * @example
   * cn-shanghai
   */
  belongRegion?: string;
  /**
   * @remarks
   * The description of the namespace.
   * 
   * @example
   * decs
   */
  description?: string;
  /**
   * @remarks
   * The ID of the jump server application.
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
   * The release order ID.
   * 
   * @example
   * afedb3c4-63f8-4a3d-aaa3-2c30363f****
   */
  lastChangeOrderId?: string;
  /**
   * @remarks
   * Indicates whether a release order is running in the namespace. Valid values:
   * 
   * - **true**: A release order is running.
   * 
   * - **false**: No release order is running.
   * 
   * @example
   * true
   */
  lastChangeOrderRunning?: boolean;
  /**
   * @remarks
   * The status of the last release order. Valid values:
   * 
   * - **READY**: The release order is ready.
   * 
   * - **RUNNING**: The release order is running.
   * 
   * - **SUCCESS**: The release order was successful.
   * 
   * - **FAIL**: The release order failed.
   * 
   * - **ABORT**: The release order was aborted.
   * 
   * - **WAIT_BATCH_CONFIRM**: The release order is waiting for manual batch confirmation.
   * 
   * - **AUTO_BATCH_WAIT**: The release order is in an automatic batch-wait state.
   * 
   * - **SYSTEM_FAIL**: A system error occurred.
   * 
   * - **WAIT_APPROVAL**: The release order is pending approval.
   * 
   * - **APPROVED**: The release order is approved and pending execution.
   * 
   * @example
   * SUCCESS
   */
  lastChangeOrderStatus?: string;
  /**
   * @remarks
   * The short-format namespace ID.
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
   * Indicates whether the notification for the release order has expired. Valid values:
   * 
   * - **true**: The notification has expired.
   * 
   * - **false**: The notification has not expired.
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
   * The configuration for collecting logs to Simple Log Service (SLS).
   * 
   * - To use SLS resources that are automatically created by SAE: `[{"logDir":"","logType":"stdout"},{"logDir":"/tmp/a.log"}]`.
   * 
   * - To use custom SLS resources: `[{"projectName":"test-sls","logType":"stdout","logDir":"","logstoreName":"sae","logtailName":""},{"projectName":"test","logDir":"/tmp/a.log","logstoreName":"sae","logtailName":""}]`.
   * 
   * The configuration includes the following parameters:
   * 
   * - **projectName**: The project name in SLS.
   * 
   * - **logDir**: The log path.
   * 
   * - **logType**: The log type. **stdout** indicates the standard output of the container. Only one stdout entry is allowed. If you omit this parameter, file logs are collected.
   * 
   * - **logstoreName**: The Logstore name in SLS.
   * 
   * - **logtailName**: The Logtail name in SLS. If you omit this parameter, SAE creates a Logtail.
   * 
   * You do not need to set this parameter if the SLS log collection configuration is unchanged for subsequent deployments. To disable log collection, set this parameter to an empty string ("").
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
   * The HTTP status code. Valid values:
   * 
   * - **2xx**: The request was successful.
   * 
   * - **3xx**: The request was redirected.
   * 
   * - **4xx**: The request was invalid.
   * 
   * - **5xx**: A server error occurred.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: DescribeNamespaceResourcesResponseBodyData;
  /**
   * @remarks
   * The error code. This parameter is returned only if the request fails. For more information, see the **Error codes** section of this topic.
   * 
   * - A successful request does not return the **ErrorCode** field.
   * 
   * - A failed request returns the **ErrorCode** field. For more information, see the list of **error codes** in this topic.
   */
  errorCode?: string;
  /**
   * @remarks
   * The returned message. Valid values:
   * 
   * - If the request is successful, **success** is returned.
   * 
   * - If the request fails, an error code is returned.
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
   * Indicates whether the namespace resources were queried successfully.
   * 
   * - **true**: The query was successful.
   * 
   * - **false**: The query failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The trace ID. You can use this ID to query the details of the call.
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

