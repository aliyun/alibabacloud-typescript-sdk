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
   * The AgentIdentity receiving status. Valid values:
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
   * The actual SAML configuration is read back on demand only in GetIdentityProvider. SCIM queries and preparation return the actual receiving status and URL.
   */
  configuration?: GetIdentityProviderSCIMResponseBodyDataConfiguration;
  /**
   * @remarks
   * The status of the most recent SCIM operation task. This status is independent of the SAML logon binding status. Valid values:
   * - PENDING: Waiting to be executed.
   * - RUNNING: Being executed.
   * - PAUSED: Paused.
   * - SUCCESS: Succeeded.
   * - FAILED: Failed.
   * - CANCELED: Canceled.
   * Returns null or is omitted if no tasks exist. This status only represents the most recent SCIM switch and the initial full import task when enabled. It does not indicate credential issuance, external provisioning connection tests, or the health of continuous incremental synchronization. Clients poll this operation when the status is PENDING or RUNNING.
   * 
   * @example
   * SUCCESS
   */
  operationStatus?: string;
  /**
   * @remarks
   * The independent SCIM configuration status. Valid values:
   * - UNCONFIGURED: Preparation is not complete.
   * - WAITING_CONFIGURATION: The receiving endpoint is enabled, a valid HTTPS URL and at least one valid token are available, and it is waiting for external configuration and enablement confirmation.
   * - UPDATING: An enablement or disablement task is PENDING or RUNNING.
   * - READY: Synchronization is enabled and the current enablement task succeeded. The receiving endpoint, URL, and token remain available.
   * - DISABLED: The disablement task succeeded, and the configuration, credentials, and users are retained.
   * - UPDATE_FAILED: The operation failed, was paused, was canceled, or the configuration and credentials are unavailable when enablement is expected.
   * This status is independent of the SAML or OIDC status. The READY state does not prove that Matrix execution or the continuous incremental link has been verified.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * Specifies whether the local expected synchronization switch is enabled. Do not pass true during CustomSSO initialization. You can only update this value later by using UpdateIdentityProviderSCIM. Determine the effective result by combining this value with operationStatus.
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
   * The business result code. Combine this code with the HTTP status code and message for handling failures.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The result structure. For details, see the response fields of this operation. The response of an asynchronous write operation indicates that the request is accepted, but does not guarantee that the background task is complete.
   */
  data?: GetIdentityProviderSCIMResponseBodyData;
  /**
   * @remarks
   * The processing status of this request. This is not equivalent to the final result of the background task.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The request acceptance or error message. For asynchronous tasks, check the task result by using the corresponding query operation.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID used to associate this call with troubleshooting. Retain this ID when a failure occurs.
   * 
   * @example
   * request-example
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the current request is processed successfully. A value of true indicates success. For asynchronous writes, you must continue to query the task results.
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

