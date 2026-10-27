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
   * Specifies whether local synchronization is expected. Do not set this parameter to true during CustomSSO initialization. You can only update this parameter by calling UpdateIdentityProviderSCIM. Determine the result based on operationStatus.
   */
  syncEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      configuration: 'configuration',
      operationStatus: 'operationStatus',
      syncEnabled: 'syncEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configuration: GetIdentityProviderSCIMResponseBodyDataConfiguration,
      operationStatus: 'string',
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

