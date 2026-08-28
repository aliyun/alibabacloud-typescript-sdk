// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEndpointApiKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currently active API Key for the service endpoint. The service reads this value from the gateway consumer in real time. AgentCore does not persist the plaintext. When calling the service endpoint, include this value in the request header specified by apiKeyName. Do not log this value or expose it in public configurations.
   * 
   * @example
   * example-api-key-value
   */
  apiKey?: string;
  /**
   * @remarks
   * The API Key fingerprint, which consists of the first 12 lowercase hexadecimal characters of the SHA-256 digest of the API Key. It can be used to identify the key version but cannot replace the API Key for authentication.
   * 
   * @example
   * b2520bf19231
   */
  apiKeyFingerprint?: string;
  /**
   * @remarks
   * The name of the HTTP request header used to pass the API Key. The value is currently fixed to x-api-key.
   * 
   * @example
   * x-api-key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The location where the API Key is passed. The value is currently fixed to Header, indicating that the API Key is passed through an HTTP request header.
   * 
   * @example
   * Header
   */
  apiKeySource?: string;
  /**
   * @remarks
   * The authentication type of the service endpoint. Valid values:
   * - NONE: Authentication is not enabled.
   * - API_KEY: API Key authentication is used.
   * 
   * This operation succeeds only when the authentication type is API_KEY. Therefore, the value API_KEY is always returned in a successful response.
   * 
   * @example
   * API_KEY
   */
  authenticationType?: string;
  /**
   * @remarks
   * The service endpoint ID.
   * 
   * @example
   * se-1
   */
  serviceEndpointId?: string;
  /**
   * @remarks
   * The ID of the workspace to which the service endpoint belongs.
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      apiKeyFingerprint: 'apiKeyFingerprint',
      apiKeyName: 'apiKeyName',
      apiKeySource: 'apiKeySource',
      authenticationType: 'authenticationType',
      serviceEndpointId: 'serviceEndpointId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      apiKeyFingerprint: 'string',
      apiKeyName: 'string',
      apiKeySource: 'string',
      authenticationType: 'string',
      serviceEndpointId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceEndpointApiKeyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The value is SUCCESS when the request succeeds.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The currently active API Key information for the service endpoint.
   */
  data?: GetServiceEndpointApiKeyResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value is 200 when the request succeeds.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message. The value is success when the request succeeds.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used for troubleshooting and tracing.
   * 
   * @example
   * req-1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. The value is true when the request succeeds.
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
      data: GetServiceEndpointApiKeyResponseBodyData,
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

