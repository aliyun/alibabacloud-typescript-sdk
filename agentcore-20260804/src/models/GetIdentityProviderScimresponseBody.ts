// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The URL configured for the external provisioning system. The presence of a URL does not mean that the external configuration is complete or that AC synchronization is enabled.
   * 
   * @example
   * https://example.com/scim/v2
   */
  baseUrl?: string;
  /**
   * @remarks
   * The receiving status of AgentIdentity. Valid values:
   * - Enabled: SCIM receiving is enabled.
   * - Disabled: SCIM receiving is disabled.
   * This is not equivalent to the expected value of syncEnabled for AC.
   * 
   * @example
   * Enabled
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      baseUrl: 'baseUrl',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseUrl: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderSCIMResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual receiving status and URL.
   */
  configuration?: GetIdentityProviderSCIMResponseBodyDataConfiguration;
  /**
   * @remarks
   * Independent of the SAML logon binding status. Valid values:
   * - PENDING: Waiting to be executed.
   * - RUNNING: Being executed.
   * - PAUSED: Paused.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   * - CANCELED: Canceled.
   * If there are no tasks, null is returned or this parameter is not returned. This parameter only indicates the most recent SCIM switch and the first full import task when it is enabled. It does not indicate credential issuance, external provisioning connection tests, or the health of continuous incremental synchronization. The client polls this operation when the status is PENDING or RUNNING.
   * 
   * @example
   * SUCCESS
   */
  operationStatus?: string;
  /**
   * @remarks
   * UNCONFIGURED：尚未准备完成；WAITING_CONFIGURATION：接收 Enabled、有效 HTTPS URL 和至少一个有效 Token 均已具备，等待外部配置并确认启用；UPDATING：启用或停用任务 PENDING/RUNNING；READY：同步已启用且本次启用任务成功，接收、URL 和 Token 仍可用；DISABLED：停用任务成功，保留配置、凭据和用户；UPDATE_FAILED：操作失败、暂停、取消，或期望启用时配置／凭据不可用。与 SAML/OIDC 状态独立，READY 不证明 Matrix 执行或持续增量链路已验收。
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether local synchronization is expected. Do not set this parameter to true during CustomSSO initialization. You can only update this parameter by calling UpdateIdentityProviderSCIM. Determine the result based on operationStatus.
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      operationStatus: 'operationStatus',
      status: 'status',
      syncEnabled: 'syncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetIdentityProviderSCIMResponseBodyDataConfiguration,
      operationStatus: 'string',
      status: 'string',
      syncEnabled: 'boolean',
    };
  }

  validate() {
    if(this.configuration && typeof (this.configuration as any).validate === 'function') {
      (this.configuration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetIdentityProviderSCIMResponseBody extends $dara.Model {
  /**
   * @remarks
   * If the request fails, handle the error based on the HTTP status code and the message.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The result structure. For details, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is completed.
   */
  data?: GetIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The processing status of the current request. This is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request acceptance or error message. For the results of an asynchronous task, check the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Used to associate the current call with troubleshooting. Retain this parameter when a failure occurs.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is successful. A value of true indicates that the current request is processed successfully. For asynchronous writes, you still need to continue querying the task results.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      httpStatusCode: 'httpStatusCode',
      message: 'message',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetIdentityProviderSCIMResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

