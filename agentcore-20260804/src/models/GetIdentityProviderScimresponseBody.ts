// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIdentityProviderSCIMResponseBodyDataConfiguration extends $dara.Model {
  /**
   * @remarks
   * The URL configured for the external provisioning system. The presence of a URL does not indicate that external configuration is complete or that AC synchronization is enabled.
   * 
   * @example
   * https://example.com/scim/v2
   */
  baseUrl?: string;
  /**
   * @remarks
   * The AgentIdentity receiving status. Enabled indicates that SCIM receiving is enabled. Disabled indicates that it is disabled. This is not equivalent to the expected value of syncEnabled for AC.
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
   * The actual receiving status and URL. The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparations return the actual receiving status and URL.
   */
  configuration?: GetIdentityProviderSCIMResponseBodyDataConfiguration;
  /**
   * @remarks
   * The status of the most recent SCIM operation task. This status is independent of the SAML logon binding status. Valid values:
   * - PENDING: Waiting for execution.
   * - RUNNING: Executing.
   * - PAUSED: Paused.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   * - CANCELED: Canceled.
   * If there are no tasks, it returns null or is not returned. This status only represents the most recent SCIM switch and the initial full import task when enabled. It does not indicate credential issuance, external provisioning connection tests, or continuous incremental synchronization health. Clients poll this operation when the status is PENDING or RUNNING.
   * 
   * @example
   * SUCCESS
   */
  operationStatus?: string;
  /**
   * @remarks
   * The independent SCIM configuration status. Valid values:
   * - UNCONFIGURED: Preparation is not complete.
   * - WAITING_CONFIGURATION: Receiving is enabled, a valid HTTPS URL and at least one valid token are available, waiting for external configuration and enablement confirmation.
   * - UPDATING: The enablement or disablement task is PENDING or RUNNING.
   * - READY: Synchronization is enabled and the current enablement task succeeded, and the receiving end, URL, and token are still available.
   * - DISABLED: The disablement task succeeded, and the configuration, credentials, and users are retained.
   * - UPDATE_FAILED: The operation failed, was paused, was canceled, or the configuration and credentials are unavailable when enablement is expected.
   * This status is independent of the SAML or OIDC status. READY does not prove that Matrix execution or the continuous incremental link has been accepted.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether local synchronization is expected. You must determine whether it takes effect based on the actual configuration and task records. Do not set this parameter to true during CustomSSO initialization. You can only update it later by calling UpdateIdentityProviderSCIM, and determine the result based on operationStatus.
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
   * The business result code. Use this code along with the HTTP status code and message for error handling.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The SCIM actual configuration, expected synchronization switch, and independent operation status. For the result structure, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is complete.
   */
  data?: GetIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The HTTP status code of the current request. This code indicates the processing status of the request and is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Task result message. It indicates that the request is accepted or provides an error message. For asynchronous tasks, you must check task results by calling the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID. It is used to associate the current call with troubleshooting. Retain this ID when a failure occurs.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is successful. A value of true indicates that the request is processed successfully. For asynchronous write operations, you must continue to query the task results.
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

