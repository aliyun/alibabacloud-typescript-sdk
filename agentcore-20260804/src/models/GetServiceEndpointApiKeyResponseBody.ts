// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceEndpointApiKeyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The currently active API key for the service endpoint. The service reads this value from the gateway consumer in real time, and AgentCore does not persist the plaintext. When calling the service endpoint, include this value in the request header specified by apiKeyName. Do not log this value or expose it in public configurations.
   * 
   * @example
   * example-api-key-value
   */
  apiKey?: string;
  /**
   * @remarks
   * The fingerprint of the API key, which consists of the first 12 lowercase hexadecimal characters of the SHA-256 hash of the API key. It can be used to identify the key version but cannot be used in place of the API key for authentication.
   * 
   * @example
   * b2520bf19231
   */
  apiKeyFingerprint?: string;
  /**
   * @remarks
   * The name of the HTTP request header used to pass the API key. The value is fixed to x-api-key.
   * 
   * @example
   * x-api-key
   */
  apiKeyName?: string;
  /**
   * @remarks
   * The location where the API key is passed. The value is fixed to Header, which indicates that the API key is passed through an HTTP request header.
   * 
   * @example
   * Header
   */
  apiKeySource?: string;
  /**
   * @remarks
   * The authentication type of the service endpoint. Valid values:
   * - NONE: Authentication is not enabled.
   * - API_KEY: API key authentication is used.
   * This operation succeeds only when the authentication type is API_KEY. Therefore, a successful response always returns API_KEY.
   * 
   * @example
   * API_KEY
   */
  authenticationType?: string;
  /**
   * @remarks
   * The ID of the service endpoint.
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
   * The response code. The value is SUCCESS if the request is successful.
   * 
   * @example
   * SUCCESS
   */
  code?: string;
  /**
   * @remarks
   * The information about the currently active API key for the service endpoint.
   */
  data?: GetServiceEndpointApiKeyResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value is 200 if the request is successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message. The value is success if the request is successful.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which is used to troubleshoot and trace the request.
   * 
   * @example
   * req-1
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. The value is true if the request is successful.
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

